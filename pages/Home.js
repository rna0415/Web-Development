import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home_Main } from '../containers/Home';
import styled from 'styled-components';

const Positioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    top: 47px;
    justify-content: center;
    left: 0px;
`;

class Home extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home_Main}/>  
            </div>
        );
    }
}

export default Home;