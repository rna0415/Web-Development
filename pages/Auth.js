import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../redux/modules/base';
import { AuthWrapper } from '../components/Auth';
import { Route } from 'react-router-dom';
import { Login, Register, RegisterInf, Find, FindID, FindPassword, MainService} from '../containers/Auth';
import MainService2 from '../containers/Auth/MainService2';

class Auth extends Component {
    // 페이지에 진입 할 때 헤더를 비활성화
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지에서 벗어 날 때 다시 활성화
    //componentWillUnmount() {
    //    this.props.BaseActions.setHeaderVisibility(true);
    //}

    render() {
        return (
            <div>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/register" component={Register}/>
                <Route exact path="/auth/registerinf" component={RegisterInf}/>
                <Route exact path="/auth/find" component={Find}/>
                <Route exact path="/auth/find/id" component={FindID}/>
                <Route exact path="/auth/find/password" component={FindPassword}/>
                <Route exact path="/auth/mainservice" component={MainService}/>
                <Route exact path="/auth/mainservice2" component={MainService2}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);