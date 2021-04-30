import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';
import { withRouter } from "react-router-dom"
import { Wrapper, Content, Tab, IDTab, PasswordTab } from '../../components/Auth/Find';
import { IDTable, Label } from '../../components/Auth/Find/ID';

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

const LoginButton = styled.button`
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

class FindID extends Component {
    
    constructor(props) {
        super(props);

        this.setActiveTab = (id) => {
            if (id == "id"){
                //console.log("id");
            } else if (id == "password"){
                //console.log("password");
                this.setState({active_tab: "password"});
                this.props.history.push({
                    pathname: "/auth/find",
                    state: {active_tab: "password"}
                })
            }
        }

        this.loginButtonClicked = (e) => {
            this.props.history.push({
                pathname: "/auth/login"
            })
        }

    }
    render() {
        let user_data = this.props.location.state.user_data;
        let find_id_msg_1 = "SampleLife에 등록된"
        let find_id_msg_2 = user_data[0].name
        let find_id_msg_3 = "님의 아이디는"
        let find_id_msg_4 = user_data.length 
        let find_id_msg_5 = "건 입니다."
        console.log("받은 데이터")
        console.log(user_data)

        return (
            <Wrapper title="아이디/비밀번호 찾기">
                <Tab active_tab={"id"} setActiveTab={this.setActiveTab}></Tab>
                <Content>
                    <Positioner>
                        <Table className="table">
                            <Tbody className="tbody">
                                <Tr>
                                <TdBlank>
                                </TdBlank>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable>
                                        <Label find_id_msg_1={find_id_msg_1} find_id_msg_2={find_id_msg_2} find_id_msg_3={find_id_msg_3} find_id_msg_4={find_id_msg_4}  find_id_msg_5={find_id_msg_5}/>
                                        <IDTable
                                            user_data={user_data}
                                        />
                                    </TdLable>
                                </Tr>
                                <Tr>
                                <TdBlank>
                                </TdBlank>
                                </Tr>
                                <Tr className="tabs">
                                    <TdLable colSpan="2">
                                        <LoginButton onClick={(e) => this.loginButtonClicked(e)}>로그인</LoginButton>
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

export default withRouter(FindID);