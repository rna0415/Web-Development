import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { Wrapper, Content, Tab, IDTab, PasswordTab } from '../../components/Auth/Find';

const tabs = {
    "id": <IDTab />,
    "password": <PasswordTab />
}

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_tab: "id"
        }

        this.setActiveTab = (id) => {
            if (id == "id"){
                //console.log("id");
                this.setState({active_tab: "id"});
            } else if (id == "password"){
                //console.log("password");
                this.setState({active_tab: "password"});
            }
        }
        //let active_tab = this.props.location.state.active_tab;
        if (this.props.location.state == null) {
            this.state = {
                active_tab: "id"
            }
        } else {
            this.state = {active_tab: this.props.location.state.active_tab}
        }
        // if (active_tab === "id") {
        //     this.state = {active_tab: active_tab}
        // }else if (active_tab === "password") {
        //     this.state = {active_tab: active_tab}
        // }
    }
    render() {
        // let active_tab = this.props.location.state.active_tab;
        // this.state.active_tab = active_tab
        // console.log(active_tab);
        // console.log(this.state.active_tab);

        return (
            <Wrapper title="아이디/비밀번호 찾기">
                <Tab active_tab={this.state.active_tab} setActiveTab={this.setActiveTab}></Tab>
                <Content>
                    {tabs[this.state.active_tab]}
                </Content>
            </Wrapper>
        );
    }
}

export default withRouter(Find);