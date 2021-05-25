import {React, useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const Positioner = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    background: #2e2e2e;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
`;

const CenterBox = styled.div`
    width: 850px;
    height: 100%;
    float: left;
`;

const LeftBox = styled.div`
    width: 65%;
    height: 100%;
    float: left;
`;

const BlackDiv = styled.div`
    width: 100%;
    height: 15%;
`;

const SampleLifeLabel = styled.div`
    width: 100%;
    height: 30%;
    float: left;
    font-size: 1.4rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: white;
`;
const InfoLabel = styled.div`
    width: 100%;
    height: 10%;
    float: left;
    font-size: 0.5rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: gray;
`;

const RightBox = styled.div`
    width: 35%;
    height: 100%;
    float: right;
`;

const IndividualInfoLabel = styled.div`
    width: 100%;
    height: 30%;
    float: left;
    font-size: 0.7rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: white;
`;

const MiddleBox = styled.div`
    width: 100%;
    height: 15%;
    float: right;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Footer = () => {

    return(
        <Positioner>
            <CenterBox>
                <LeftBox>
                    <BlackDiv></BlackDiv>
                    <SampleLifeLabel>
                        SampleLIFE
                    </SampleLifeLabel>
                    <InfoLabel>(주) 아이씨파트너스 | 사업자등록번호 000-00-00000</InfoLabel>
                    <InfoLabel>서울특별시 강남구 언주로 732, 세종빌딩 9층 (06054)</InfoLabel>
                    <InfoLabel>©IPC Partners Corp. All rights reserved.</InfoLabel>
                </LeftBox>
                <RightBox>
                    <BlackDiv style={{ height: '20%' }}></BlackDiv>
                    <IndividualInfoLabel style={{ height: '20%' }}>
                        이용약관 | 개인정보취급방침
                    </IndividualInfoLabel>
                    <MiddleBox>
                        <IndividualInfoLabel style={{ fontSize: '1.0rem', width: '43%', height: '100%' }}>
                        ☎&nbsp;&nbsp;02.557.2001
                        </IndividualInfoLabel>
                        <InfoLabel style={{width: '40%', height: '100%', paddingTop: '7px' }}>
                        평일 10:00 ~ 18:00
                        </InfoLabel>
                    </MiddleBox>
                    <IndividualInfoLabel style={{ fontSize: '1.0rem' }}>
                    📧 support@samplelife.co.kr
                    </IndividualInfoLabel>
                </RightBox>
            </CenterBox>
        </Positioner>
    )
};

export default Footer;