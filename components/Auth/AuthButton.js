import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[7]};
    }

`;

const StyledLink = styled.button`
width: 104%;
margin-top: 1rem;
padding-top: 0.6rem;
padding-bottom: 0.5rem;

background: ${oc.teal[6]};
color: white;

text-align: center;
font-size: 1.25rem;
font-weight: 500;

cursor: pointer;
user-select: none;
transition: .2s all;

&:hover {
    background: ${oc.teal[5]};
    ${shadow(0)}
}

&:active {
    background: ${oc.teal[7]};
}

`;

const AuthButton = ({onClick, children}) => (
    <StyledLink onClick={onClick}>{children}</StyledLink>
);


export default AuthButton;