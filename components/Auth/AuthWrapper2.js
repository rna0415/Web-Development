import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    top: 20px;
    left: 40px;
    right: 40px;
    width: 900px;
`;

// 로고
const TitleWrapper = styled.div`
    height: 3rem;
    width: 900px;
    display: flex;
    align-items: center;
    border-bottom-width : 1px;
    border-bottom-style: solid;
`;

const Title = styled.div`
    color: black;
    font-family: 'Rajdhani';
    font-size: 1.2rem;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 0rem;
    height: auto;
`;

const AuthWrapper2 = ({title, children}) => (
    <Positioner>
            <TitleWrapper>
                <Title>{title}</Title>
            </TitleWrapper>
            <Contents>
                {children}
            </Contents>
    </Positioner>
);

export default AuthWrapper2;