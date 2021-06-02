import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ExecuteBackendAPI } from '../../lib/api/restapi';
import {GetBackendIP} from '../../settings';
// import styled from 'styled-components';
// import oc from 'open-color';
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { Tab1, Wrapper1, Content1, Infotab1, Infotab2} from '../../components/Auth/Clientregi';

// const tabs = {
//     "info1": <Infotab1 />,
//     "info2": <Infotab2 />
// }

class MainService2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_tab: "info1",
            tab1_info: ""
        }
        this.checkClient = async () => {
            // 백엔드 서버 API 통신
            this.setState({success: false})
            let client_id
            if (this.state.email.split("@").length === 2){
                client_id = Object.values(tab1_info)[0]

                let request = 'GET'
                let backend_ip_address = GetBackendIP()
                let backend_api_url = "http://" + backend_ip_address + "/api/user/client/" + client_id + "/"
                let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
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
                'email': Object.values(tab1_info)[0],
                'name': Object.values(tab1_info)[5],
                'password': Object.values(tab1_info)[1],
                'category': this.state.category
              }
  
              let request = 'POST'
              let backend_ip_address = GetBackendIP()
              let backend_api_url = "http://" + backend_ip_address + "/api/user/client/"

              let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);

        }
        
        this.setActiveTab = (e) => {
            if (e == "info1"){
                this.setState({active_tab: "info1"});
            } else if (e == "info2"){
                console.log("info2 test")
                this.setState({active_tab: "info2"});
            }
        }

        this.setTab1Information = (tab1Info) => {
            console.log("test")
            console.log(tab1Info)
            this.setState({tab1_info: tab1Info})
        }

        if (this.props.location.state == null) {
            this.state = {
                active_tab: "info1"
            }
        } else {
            this.state = {active_tab: this.props.location.state.active_tab}
        }

    }
    render() {
        const tabs = {
            "info1": <Infotab1 setActiveTab={this.setActiveTab} setTab1Information={this.setTab1Information} tab1_info={this.state.tab1_info}/>,
            "info2": <Infotab2 setActiveTab={this.setActiveTab} tab1_info= {this.state.tab1_info}/>
        }

        return (
            <Wrapper1 title="SAMPLE LIFE">
                <Tab1 active_tab={this.state.active_tab} setActiveTab={this.setActiveTab}></Tab1>
                <Content1>
                    {tabs[this.state.active_tab]}
                </Content1>
            </Wrapper1>
        );
    }
}

export default withRouter(MainService2);