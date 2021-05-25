import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { CampaignBox } from './';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    justify-content: center;
    background: white;
`;

const Container = styled.div`
    width: 950px;
    background: white;
    float: left;
`;

const Label = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
`;

const ContentBox = styled.div`
    background: white;
    float: left;
    width: 50px;
    height: 316px;
`;

const NextCampaignButton = styled.div`
    width: 50px; 
    height: 20%;
    cursor: pointer;
    margin-top: 100px;
`;

const NextCampaignImage = styled.img`
    width: 100%; 
    height: 100%;
`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const RecommendationCampaign = () => {
    const history = useHistory();
    let recommendation_client_data = []
    const [ recommend_items, setRecommendItemsState ] = useState([]);
    const [ recomendation_client_data_component, setRecomendationClientDataComponent] = useState([])

    ////////////// 디비로부터 모든 캠페인 데이터(상위 16개씩) 가지고 옴 /////////////
    const getRecommendationClientDataFromDB = () => {

        let all_recommendation_client_data_from_db = [
            {
                "src": "/images/campaign/s21.jpg",
                "percentage": "95",
                "due_date": "0",
                "title": "[삼성전자] 갤럭시 신제품 체험단 모집",
                "total_num": "100",
                "apply_num": "150",
                "campaign_no": "0",
                "campaign_type": "제품리뷰",
                "campaign_reward": "무상제공+원고료",
                "registration_date": "2020420"
            },
            {
                "src": "/images/campaign/lotte_hamburger.jpg",
                "percentage": "90",
                "due_date": "1",
                "title": "[롯데리아] 강남점 오픈! 먹방리뷰",
                "total_num": "10",
                "apply_num": "5",
                "campaign_no": "1",
                "campaign_type": "현장방문",
                "campaign_reward": "무상제공",
                "registration_date": "2020425"
            },
            {
                "src": "/images/campaign/movie.jpg",
                "percentage": "80",
                "due_date": "5",
                "title": "[강남CGV] 개봉영화 리그램",
                "total_num": "200",
                "apply_num": "100",
                "campaign_no": "2",
                "campaign_type": "리포스팅",
                "campaign_reward": "원고료",
                "registration_date": "2020421"
            },
            {
                "src": "/images/campaign/pork.png",
                "percentage": "75",
                "due_date": "10",
                "title": "마포 생갈비 구로점",
                "total_num": "5",
                "apply_num": "8",
                "campaign_no": "3",
                "campaign_type": "현장방문",
                "campaign_reward": "무상제공",
                "registration_date": "2020422"
            },
            {
                "src": "/images/campaign/iphone.jpg",
                "percentage": "50",
                "due_date": "7",
                "title": "[아이폰] 아이폰 신제품 체험단 모집",
                "total_num": "100",
                "apply_num": "130",
                "campaign_no": "4",
                "campaign_type": "제품리뷰",
                "campaign_reward": "무상제공+원고료",
                "registration_date": "2020423"
            }
        ]

        return all_recommendation_client_data_from_db
    }

    // 추천 캠페인에서 next or before를 클릭했을 때
    // e === next
    // e === before
    const componentClicked = (e) => {
        if (e === "next") {
            let temp_client_data = recommend_items[0]
            console.log(temp_client_data)
            for (let i in recommend_items) {
                if (Number(i) === (recommend_items.length-1)){
                    recommend_items[(recommend_items.length-1)] = temp_client_data
                }else {
                    recommend_items[i] = recommend_items[(Number(i)+1)]
                }
                
            }
            let temp_recommendation_items = []
            for (let i = 0; i< recommend_items.length; i++){
                temp_recommendation_items.push(recommend_items[i])
            }
            setRecommendItemsState(temp_recommendation_items)
        }
        else if (e === "before") {
            let temp_client_data = recommend_items[recommend_items.length-1]
            console.log(temp_client_data)
            for (let i in recommend_items) {
                if (Number(i) === (recommend_items.length-1)){
                    recommend_items[(recommend_items.length-1) -i] = temp_client_data
                }
                else {
                    recommend_items[(recommend_items.length-1) -i] = recommend_items[(recommend_items.length-1) - (Number(i)+1)]
                }
            }
            let temp_recommendation_items = []
            for (let i = 0; i< recommend_items.length; i++){
                temp_recommendation_items.push(recommend_items[i])
            }
            setRecommendItemsState(temp_recommendation_items)
        }
    }
    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        setRecommendItemsState(getRecommendationClientDataFromDB())
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        //recommendation_client_data = recommend_items
        //console.log(selected_client_data)
        // selected_client_data = selected_client_data.sort(function (a,b) {
        //     return a.due_date - b.due_date
        // })
        //console.log(selected_client_data)
        // console.log("222")
        if (recommend_items.length < 5) {
            for (var i = 0 ; i<recommend_items.length; i++) {
                recommendation_client_data.push(recommend_items[i])
            }
        }else {
            for (var i = 0; i<4; i++) {
                recommendation_client_data.push(recommend_items[i])
            }
        }

        let temp_recommendation_client_data_component = recommendation_client_data.map((client_data, k) => 
            <CampaignBox
                client_data = {client_data}
                type = "recommendation"
            />
        );
        
        //setRecomendationClientDataState(recommendation_client_data)
        setRecomendationClientDataComponent(temp_recommendation_client_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [recommend_items]);

    return(
        <Positioner >
            <Container>
                <Label style={{ fontSize: "1.3rem", color: "black", width: "100%"}}>맞춤 캠페인</Label>
                <ContentBox>
                    <NextCampaignButton onClick={() => componentClicked("before")}>
                        <NextCampaignImage src="/images/campaign/left_arrow.png" />
                    </NextCampaignButton>
                </ContentBox>
                <ContentBox style={{ width: "850px"}} >
                    {recomendation_client_data_component}
                </ContentBox>
                <ContentBox>
                    <NextCampaignButton onClick={() => componentClicked("next")}>
                        <NextCampaignImage src="/images/campaign/right_arrow.png" />
                    </NextCampaignButton>
                </ContentBox>
            </Container>
        </Positioner>

    )
};

export default RecommendationCampaign;