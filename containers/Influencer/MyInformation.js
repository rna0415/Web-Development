import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { RecommendationCampaignBox, CampaignBox, TableContentLabel, SortLabel, Footer } from '../../components/Influencer/campaign_status';
import { MemberTab, MemberInfoTab, MyProfileTab, InqueryTab } from '../../components/Influencer/member_information'


const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    overflow: auto;
`;
// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    height: 200px;
    justify-content: center;
    background:url(/images/influencer_info/people_phones1.jpg);
    border-bottom: 2px solid #7f05e6;

   
`;

const Container1 = styled.div`
    width: 800px;
    height: 100%;
    background: white;
    justify-content: center;
    background-color: rgba( 255, 255, 255, 0 );
`;

const Container2 = styled.div`
    width: 1000px
    height: 100%;
    background: white;
    justify-content: center;
    background-color: rgba( 255, 255, 255, 0 );
`;

//이 수치가 배경사진이랑 탭 보라색 선이 딱 들어맞음
const RowDiv = styled.div`
    display: flex;
    width: 100%;
    float: left;
    margin-top: 46.5px;  
    height: 45px;
    justify-content: center;
    
`;

// width를 사진크기에 맞춰 조절가능, 좌우조절
const Positioner2 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    justify-content: center;
`;

//위치 상하조정
const Positioner1_2 = styled.div` 
    margin-top:150px;
    font-weight:900;
    color:gray;
`;



const MyInformation = () => {

    const [activeTab, setActiveTab] = useState("memberInfo")

    const tabs = {
        memberInfo: <MemberInfoTab />,
        myProfile: <MyProfileTab />,
        inquery: <InqueryTab />,
    };

    const setTabActive = (e) => {
        console.log("1")
        console.log(e)
        if (e == "memberInfo"){
            setActiveTab("memberInfo")
        }else if(e == "myProfile"){
            setActiveTab("myProfile")
        }else if(e == "inquery"){
            setActiveTab("inquery")
        }

    };


    return(
        <CampaignStatusBox>
            <Positioner1>
                <Container1>
                    <RowDiv>
                        
                    </RowDiv>
                    <MemberTab 
                        activeTab={activeTab} 
                        setTabActive={setTabActive}
                    /> 
                </Container1>
            </Positioner1>
            <Positioner2>
                <Container2>
                    {tabs[activeTab]}
                </Container2>
            </Positioner2>   
            <Footer>
            </Footer> 
        </CampaignStatusBox>
    )
};

export default MyInformation
