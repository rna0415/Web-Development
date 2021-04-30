import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, AuthFacebookButton, RightAlignedLink, LeftAlignedLink, FindPW} from '../../components/Auth';
import styled from 'styled-components';
import oc from 'open-color';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { AuthWrapper } from '../../components/Auth';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import { shadow } from '../../lib/styleUtils';
import { ExecuteBackendAPI } from '../../lib/api/restapi';

const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const LoginButton = styled.button`
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

const Labels = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            success: false
        }
        this.checkClient = async () => {
            // 백엔드 서버 API 통신
            this.setState({success: false})
            let client_id
            if (this.state.email.split("@").length === 2){
                client_id = this.state.email.split("@")[0] + this.state.email.split("@")[1].split(".")[0]

                let request = 'GET'
                let backend_api_url = "http://127.0.0.1:8000/api/user/client/" + client_id + "/"
                //console.log(client_id)
                let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
                //console.log('GET')
                //console.log(backend_api_response)
                if (backend_api_response) {
                    //console.log(backend_api_response.data["password"])
                    if (this.state.password === backend_api_response.data["password"]){
                        console.log("로그인 성공")  
                        this.props.history.push({pathname: "/user/client/home", state: this.state}) 
                        // 이거확인버튼식
                    }else {
                        console.log("암호가 같지 않습니다.")  
                    }
                } else {
                    console.log("ID가 없습니다. 회원가입 해주세요.")
                }
            } else {
                console.log("이메일을 제대로 입력해주세요.")
            }
        }
        this.handleChange = (e) => {
            if (e.target.name === "email"){
                this.setState({email: e.target.value});
            } else if (e.target.name === "password"){
                this.setState({password: e.target.value});
            }
        }
        this.componentClicked = () => {
            //console.log('clicked');
            this.setState({success: true})

            if (this.state.email.length === 0) {
                console.log("이메일을 입력해주세요.")
                this.setState({success: false})
            }

            //console.log(this.state.password)
            //console.log(this.state.passwordConfirm)
            if (this.state.password.length === 0){
                console.log("비밀번호를 입력해주세요.")
                this.setState({success: false})
            }
        }
    }
    componentDidUpdate() {
        if (this.state.success === true){
            this.checkClient()
        }
    }
    render() {
        return (
            <AuthWrapper>
                <AuthContent title="로그인">
                    <InputWithLabel 
                        label="이메일" 
                        name="email" 
                        placeholder="이메일" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <InputWithLabel 
                        label="비밀번호" 
                        name="password" 
                        placeholder="비밀번호" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                    <label>
                        <br></br>
                        <input 
                            name = 'SaveEmail'
                            type = 'checkbox'>
                        </input>
                        이메일(아이디) 저장
                        <FindPW to ="/auth/find">이메일/비밀번호찾기</FindPW>     
                        
                    </label>
                
                    <LoginButton onClick={this.componentClicked}>로그인</LoginButton>
                    <AlignerCenter>
                        <Title> OR </Title>
                    </AlignerCenter>
                    <AuthFacebookButton></AuthFacebookButton>
                    <LeftAlignedLink to="/auth/registerinf">인플루언서 회원가입</LeftAlignedLink>
                    <RightAlignedLink to="/auth/mainservice2">클라이언트 회원가입</RightAlignedLink>
                    
                </AuthContent>
            </AuthWrapper>
        );
    }
}
//<Link to="/user/home">
//    <AuthFacebookButton></AuthFacebookButton>
//</Link>
export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Login);