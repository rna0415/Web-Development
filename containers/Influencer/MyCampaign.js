import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Footer, Modal, RecommendationCampaign } from '../../components/Influencer/campaign_status';
import oc from 'open-color';
import {Content, IDTab, PasswordTab, AddtionalInfoTab} from "../../components/Auth/JoinInflu";
import {Tab, Participation_Campaign_Table, Campaign_Settlement_Details_Table, Clipping_Table, Campaign_Message_Table} from "../../components/Influencer/my_campaign";
import HeaderContainerLogined from '../../containers/Base/HeaderContainerLogined';

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
    height: 200px;
    justify-content: center;
`;

const Container = styled.div`
    width: 1000px;
    height: 100%;
    background: white;
    justify-content: center;
    background-color: rgba( 255, 255, 255, 0 );
`;

// 빈칸
const RowDiv = styled.div`
    display: flex;
    width: 100%;
    float: left;
`;


const Label = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 2rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    color: white;
    background-color: rgba( 255, 255, 255, 0 );
`;

// 화면의 중앙에 위치시킨다
const Positioner2 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    justify-content: center;
`;

const MyCampaign = () => {
    const history = useHistory();
    const [ active_tab, setActiveTabState ] = useState("participation_campaign");
    const [ facebook_info, setFacebookInfoState ] = useState(history.location.state)

    const tabs = {
        participation_campaign: <Participation_Campaign_Table />,
        campaign_settlement_details: <Campaign_Settlement_Details_Table />,
        clipping: <Clipping_Table />,
        campaign_message: <Campaign_Message_Table />
    };

    // 설정된 아이디 값을 사용함 값을 변경하고 싶을 때는 setState를 이용한다
    const setActiveTab = (id) => {
        console.log("test")
        if (id === "participation_campaign") {
            setActiveTabState("participation_campaign")
        } else if (id === "campaign_settlement_details") {
            setActiveTabState("campaign_settlement_details")
        } else if (id === "clipping") {
            setActiveTabState("clipping")
        } else if (id === "campaign_message") {
            setActiveTabState("campaign_message")
        }
    }

    return (
        <div>
            <HeaderContainerLogined facebook_info = {facebook_info} />
            <CampaignStatusBox>
                <Positioner1 style={{backgroundImage: "url( '/images/my_campaign/background.jpg' )"}}>
                    <Container>
                        <RowDiv style={{marginTop: "45px", height: "45px", justifyContent: "center"}}>
                            <Label>My 캠페인</Label>
                        </RowDiv>
                        <Tab 
                            active_tab = {active_tab} 
                            setActiveTab = {setActiveTab}
                        />
                    </Container>
                </Positioner1>
                <Positioner2>
                    <Container style={{width: "1250px"}}>
                        {tabs[active_tab]}
                    </Container>
                </Positioner2>
                <Footer>
                </Footer>
            </CampaignStatusBox>
        </div>
    );
}

export default MyCampaign;