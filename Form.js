import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { Link } from 'react-router-dom';

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '660px',
    display: 'block'
};
const formStyle2 = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '550px',
    display: 'block'
};


// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 로고
const LogoWrapper = styled.div`
    background: white;
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    color: #7f05e6;
    font-family: 'Rajdhani';
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    height: auto;
`;

const AppStyle = styled.div`
    height: '250px',
    display: 'flex'
`;

const FormStyle = styled.div`
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '660px',
    display: 'block'
`;

const Form = ({...children}) => (
    <AppStyle>
        <FormStyle onSubmit = {this.handleSubmit}
            {...children}
        />
    </AppStyle>
);

export default Form;