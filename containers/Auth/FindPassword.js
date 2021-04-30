import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';
import { withRouter } from "react-router-dom"
import { Wrapper, Content, Tab, IDTab, PasswordTab, Input, Info } from '../../components/Auth/Find';
import { Label, LabelList } from '../../components/Auth/Find/Password';
import {GetBackendIP} from '../../settings';
import { ExecuteBackendAPI } from '../../lib/api/restapi';
const tabs = {
    "id": <IDTab />,
    "password": <PasswordTab />
}

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
`;


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

// 행
const Tr = styled.tr`
`;
// 행
const TdBlank = styled.td`
    padding-top: 20px;
`;
const TD = styled.td`
`;
// 셀
const TdLable = styled.td`
    width: 80px;
`;
// 셀
const TdButton = styled.td`
    width: 100px;
`;

const CreateEnabledButton = styled.button`
    width: 100%;
    height: 35px;

    font-size: 1.0rem;
    color: white;
    cursor: pointer;
    text-align: center;

    background: ${oc.violet[7]};
    border: 1px solid ${oc.violet[9]};

    &:hover {
        background: ${oc.violet[8]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.violet[9]};
    }
`;

const CreateDisabledButton = styled.button`
    width: 100%;
    height: 35px;

    font-size: 1.0rem;
    color: white;
    text-align: center;

    background: ${oc.violet[1]};
    border: 1px solid ${oc.violet[1]};
`;

class FindPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password_1: "",
            password_2: "",
            password_1_info_msg_1: "",
            password_1_info_msg_2: "",
            password_2_info_msg: "",
            password_input_disabled: false,
            check_button_disabled: "disabled",
            create_button: {
                "enabled": <CreateEnabledButton onClick={(e) => this.createButtonClicked(e)}>확인</CreateEnabledButton>,
                "disabled": <CreateDisabledButton onClick={(e) => this.createButtonClicked(e)} disabled>확인</CreateDisabledButton>
            }
            
        }

        this.setActiveTab = (id) => {
            if (id == "id"){
                //console.log("id");
                this.setState({active_tab: "id"});
                this.props.history.push({
                    pathname: "/auth/find",
                    state: {active_tab: "id"}
                })
            } else if (id == "password"){
                //console.log("password");
            }
        }

        this.handleChange = (e) => {
            var reg_1 = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[/)/(`~#?!@$%^&*-_=+"']).{8,20}$/;
            var reg_2 = /(\w)\1\1\1/;
            var success = false
            if (e.target.name === "password_1_input"){
                if (false === reg_1.test(e.target.value)) {
                    this.setState({password_1_info_msg_1: "8~20자의 영문 대/소문자, 숫자, 특수문자 3개 이상을 사용해주세요."});
                } else {
                    this.setState({password_1_info_msg_1: ""});
                }
                if(false === !reg_2.test(e.target.value)) {
                    this.setState({password_1_info_msg_2: "연속된 숫자 문자(4개 이상)는 제한됩니다."});
                } else {
                    this.setState({password_1_info_msg_2: ""});
                }
                if (e.target.value === "") {
                    this.setState({password_1_info_msg_1: ""});
                    this.setState({password_1_info_msg_2: ""});
                }
                this.setState({password_1: e.target.value});
            } else if (e.target.name === "password_2_input"){
                if (this.state.password_1 !== e.target.value) {
                    this.setState({password_2_info_msg: "입력한 비밀번호가 일치하지 않습니다."});
                } else {
                    this.setState({password_2_info_msg: ""});
                    success = true
                }
                this.setState({password_2: e.target.value});
            } 

            if (success === true) {
                this.setState({check_button_disabled: "enabled"});
            } else {
                this.setState({check_button_disabled: "disabled"});
            }
        }

        this.createButtonClicked = (e) => {
            console.log('Password Button 3');

            const changePassword = async () => {
                // 백엔드 서버 API 통신
                let user_data = this.props.location.state.user_data;
                console.log("받은 데이터")
                console.log(user_data)
                let params = {
                    'client_id': user_data[0].client_id,
                    'password': this.state.password_1

                    }
                let request = 'PUT'
                let backend_ip_address = GetBackendIP()
                let backend_api_url = "http://" + backend_ip_address + "/api/user/client/" + user_data[0].client_id + "/"

                let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
                let msg = "새로운 비밀번호가 생성되었습니다.\n" +
                    "새로운 비밀번호로 로그인하여 서비스를 이용해 주십시오."
                alert(msg)
                this.props.history.push({
                    pathname: "/auth/login"
                })
                //console.log(backend_api_response.data)
            }
            changePassword()
        }

        this.CursorFocusOut = (e) => {
            console.log(e.target.name)
        }
    }
    render() {
        return (
            <Wrapper title="아이디/비밀번호 찾기">
                <Tab active_tab={"password"} setActiveTab={this.setActiveTab}></Tab>
                <Content>
                    <Positioner>
                        <Table className="table">
                            <Tbody className="tbody">
                                <Tr>
                                <TdBlank>
                                </TdBlank>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable colSpan="2">
                                        <Label label="고객님의 소중한 정보보호를 위해 새로운 비밀번호를 생성해 주십시오."/>
                                    </TdLable>
                                </Tr>
                                <Tr>
                                    <TD colSpan="2">
                                        <Input 
                                            name="password_1_input"
                                            placeholder="비밀번호"
                                            type="password"
                                            value={this.state.password_1}
                                            onChange={this.handleChange}
                                            onBlur={this.CursorFocusOut}
                                            component_disabled={this.state.password_input_disabled}
                                        />
                                    </TD>
                                </Tr>
                                <Tr>
                                    <TD>
                                    </TD>
                                    <TD colSpan="2">
                                        <Info label={this.state.password_1_info_msg_1} color ="red"/>
                                    </TD>
                                </Tr>
                                <Tr>
                                    <TD>
                                    </TD>
                                    <TD colSpan="2">
                                        <Info label={this.state.password_1_info_msg_2} color ="red"/>
                                    </TD>
                                </Tr>
                                <Tr>
                                    <TD colSpan="2">
                                        <Input 
                                            name="password_2_input"
                                            placeholder="비밀번호 확인"
                                            type="password"
                                            value={this.state.password_2}
                                            onChange={this.handleChange}
                                            onBlur={this.CursorFocusOut}
                                            component_disabled={this.state.password_input_disabled}
                                        />
                                    </TD>
                                </Tr>
                                <Tr>
                                    <TD>
                                    </TD>
                                    <TD colSpan="2">
                                        <Info label={this.state.password_2_info_msg} color ="red"/>
                                    </TD>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable colSpan="2">
                                        <LabelList label="8~20자의 영문 대/소문자, 숫자, 특수문자 3개 이상을 사용해주세요."/>
                                    </TdLable>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable colSpan="2">
                                        <LabelList label="연속된 숫자 문자(4개 이상)는 제한됩니다."/>
                                    </TdLable>
                                </Tr>
                                <Tr>
                                <TdBlank>
                                </TdBlank>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable colSpan="2">
                                        {this.state.create_button[this.state.check_button_disabled]}
                                    </TdLable>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Positioner>
                </Content>
            </Wrapper>
        );
    }
}

export default withRouter(FindPassword);