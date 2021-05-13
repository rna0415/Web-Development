import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { Link } from 'react-router-dom';

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
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 40px;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    height: auto;
`;

const Wrapper1 = ({title, children}) => (
    <Positioner className="Positioner">
            <LogoWrapper className="LogoWrapper">
                <Logo to="/">{title}</Logo>
            </LogoWrapper>
            <Contents className="Contents">
                {children}
            </Contents>
    </Positioner>
);

export default Wrapper1;