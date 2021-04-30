import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Tab1, Wrapper1, Content1, Infotab1, Infotab2} from '../../components/Auth/Clientregi';

const tabs = {
    "info1": <Infotab1 />,
    "info2": <Infotab2 />
}
class MainService2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_tab: "info1"
            
        }

        this.setActiveTab = (e) => {
            if (e == "info1"){
                this.setState({active_tab: "info1"});
            } else if (e == "info2"){
                this.setState({active_tab: "info2"});
            }
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