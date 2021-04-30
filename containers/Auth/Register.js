import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthPhoneComponent, AuthPhoneVerificationComponent, SelectWithLabel, RightAlignedLink } from '../../components/Auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';
import { withRouter } from "react-router-dom"
import { ExecuteBackendAPI } from '../../lib/api/restapi';
import {GetBackendIP} from '../../settings';
import { AuthWrapper, AuthWrapper2 } from '../../components/Auth';

const JoinButton = styled.button`
    width: 104%;
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[7]};
    }

`;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            password: '',
            passwordConfirm: '',
            phoneNum: '',
            phoneRandomNum: '',
            phoneAuthNum: '',
            category: '선택안함',
            success: false
        }
        this.checkClient = async () => {
            // 백엔드 서버 API 통신
            this.setState({success: false})
            let client_id
            if (this.state.email.split("@").length === 2){
                client_id = this.state.email.split("@")[0] + this.state.email.split("@")[1].split(".")[0]

                let request = 'GET'
                let backend_ip_address = GetBackendIP()
                let backend_api_url = "http://" + backend_ip_address + "/api/user/client/" + client_id + "/"
                //console.log(client_id)
                let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
                //console.log('GET')
                //console.log(backend_api_response)
                if (backend_api_response) {
                    console.log("ID가 중복됩니다.")
                } else {
                    console.log("회원가입 성공")
                    this.joinClient();
                    this.props.history.push({pathname: "/auth/login"})
                }
            } else {
                console.log("이메일을 제대로 입력해주세요.")
            }
        }
        this.joinClient = async () => {
            // 백엔드 서버 API 통신
            let params = {
                'client_id': this.state.email.split("@")[0] + this.state.email.split("@")[1].split(".")[0],
                'phone_num': this.state.phoneNum,
                'email': this.state.email,
                'name': this.state.username,
                'password': this.state.password,
                'category': this.state.category
              }
  
              let request = 'POST'
              let backend_ip_address = GetBackendIP()
              let backend_api_url = "http://" + backend_ip_address + "/api/user/client/"
              //console.log(params)
              let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
              //console.log('POST')
              //console.log(backend_api_response)
        }
        this.handleChange = (e) => {
            if (e.target.name === "email"){
                this.setState({email: e.target.value});
            } else if (e.target.name === "username"){
                this.setState({username: e.target.value});
            } else if (e.target.name === "password"){
                this.setState({password: e.target.value});
            } else if (e.target.name === "passwordConfirm"){
                this.setState({passwordConfirm: e.target.value});
            } else if (e.target.name === "phoneNum"){
                this.setState({phoneNum: e.target.value});
            }  else if (e.target.name === "phoneAuthNum"){
                this.setState({phoneAuthNum: e.target.value});
            } else if (e.target.name === "category"){
                this.setState({category: e.target.value});
            }
        }
        this.componentJoinButtonClicked = () => {
            console.log('clicked');
            console.log(this.state.phoneRandomNum);
            console.log(this.state.phoneNum);
            this.setState({success: true})

            //console.log(this.state.email)
            if (this.state.email.length === 0) {
                console.log("이메일을 입력해주세요.")
                this.setState({success: false})
            }
            //console.log(this.state.username)
            if (this.state.username.length === 0) {
                console.log("이름을 입력해주세요.")
                this.setState({success: false})
            }

            //console.log(this.state.password)
            //console.log(this.state.passwordConfirm)
            if (this.state.password.length === 0 || this.state.passwordConfirm.length === 0){
                console.log("비밀번호를 입력해주세요.")
                this.setState({success: false})
            }
            else if (this.state.password !== this.state.passwordConfirm){
                console.log("비밀번호가 다릅니다.")
                this.setState({success: false})
            }
            
            //console.log(this.state.category)
            if (this.state.category === "선택안함") {
                console.log("카테고리를 선택해주세요")
                this.setState({success: false})
            }
        }
        this.setPhoneRandomNum = (ranVal) => {
            console.log(ranVal)
            this.setState({phoneRandomNum: ranVal});
        }
    }
    componentDidUpdate() {
        if (this.state.success === true){
            this.checkClient()
        }
    }
    render() {
        //const { email, username, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange } = this;
        return (
            <AuthWrapper2 title="클라이언트 회원가입">
                <AuthContent title="회원가입">
                    <InputWithLabel 
                        label="이메일"
                        name="email"
                        placeholder="이메일" 
                        value={this.state.email} 
                        onChange={handleChange}
                    />
                    <InputWithLabel 
                        label="이름" 
                        name="username" 
                        placeholder="이름" 
                        value={this.state.username} 
                        onChange={handleChange}
                    />

                    <InputWithLabel 
                        label="비밀번호" 
                        name="password" 
                        placeholder="비밀번호"
                        type="password" 
                        value={this.state.password} 
                        onChange={handleChange}
                    />
                    
                    <InputWithLabel 
                        label="비밀번호 확인" 
                        name="passwordConfirm" 
                        placeholder="비밀번호 확인" 
                        type="password" 
                        value={this.state.passwordConfirm}
                        onChange={handleChange}
                    />

                    <AuthPhoneComponent 
                        label="휴대폰번호" 
                        button_name="휴대폰 인증"
                        name="phoneNum"
                        placeholder="'-'을 제외하고 숫자만 입력해주세요."
                        value={this.state.phoneNum}
                        setPhoneRandomNum = {this.setPhoneRandomNum}
                        onChange={handleChange}
                    />

                    <AuthPhoneVerificationComponent 
                        button_name="확인"
                        name="phoneAuthNum"
                        placeholder="인증번호를 입력해주세요."
                        value={this.state.phoneAuthNum}
                        phoneRandomNum = {this.state.phoneRandomNum}
                        onChange={handleChange}
                    />

                    <SelectWithLabel
                        label="카테고리"
                        name="category" 
                        placeholder="카테고리 선택" 
                        value={this.state.category}
                        onChange={handleChange}
                    />

                    <JoinButton onClick={this.componentJoinButtonClicked}>클라이언트 회원가입</JoinButton>
                    <RightAlignedLink to="/auth/login">클라이언트 로그인</RightAlignedLink>
                </AuthContent>
            </AuthWrapper2>
        );
    }
}

export default withRouter(Register);