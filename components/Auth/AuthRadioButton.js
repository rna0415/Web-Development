import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    height: auto;
`;

const RadioButton = styled.input`
    color: black;
    font-family: 'Rajdhani';
    font-size: 1.2rem;
    padding: 1rem;
    margin: 20 20 20 20;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 1rem;
    height: auto;
    width: 800px;
`;

const Label = styled.label`
    font-size: 1rem;
    margin-bottom: 0.25rem;
`;


const AuthRadioButton = ({name, value, title, handleRadio, children}) => (
    <Positioner>
        <RadioButton type="radio" name={name} value={value} onChange={handleRadio}/>
            <Label>{title}</Label>
        <Contents>
            {children}
        </Contents>
    </Positioner>
    
);

export default AuthRadioButton;