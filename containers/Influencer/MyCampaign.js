import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Footer, Modal, RecommendationCampaign } from '../../components/Influencer/campaign_status';
import oc from 'open-color';

const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    position: fixed;
    left: 0;
    overflow: auto;
`;

// 빈칸
const BlankDiv = styled.div`
    height: 50px;
    width: 100%;
    background: white;
    justify-content: center;
`;


// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    height: 500px;
    justify-content: center;
`;


const Container1 = styled.div`
    display: flex;
    width: 950px;
    height: 50px;
    margin-bottom: 30px;
    background: white;
    border-bottom: solid 2px gray;
    font-size: 1.5rem;
    font-family: 'Rajdhani';
    font-weight: 600;
`;

const MyCampaign = () => {
    const history = useHistory();
    
    return (
        <CampaignStatusBox>
            <BlankDiv>
            </BlankDiv>
            <Positioner1>
                <Container1>My 캠페인
                </Container1>
            </Positioner1>
            <Footer>
            </Footer>
        </CampaignStatusBox>
    );
}

export default MyCampaign;