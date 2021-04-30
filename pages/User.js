import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components/User';
import { UserWrapper } from '../components/User';
import { Influencer_Home, Client_Home } from '../containers/User';

class User extends Component {

    render() {
        return (
            <UserWrapper>
                <Route path="/user/influencer/home" component={Influencer_Home}/>
                <Route path="/user/client/home" component={Client_Home}/>
                <Route path="/user/home/facebook" component={Header}/>
            </UserWrapper>
        );
    }
}

export default User;