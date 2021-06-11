import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { RecommendationCampaignBox, CampaignBox, TableContentLabel, SortLabel, Footer } from '../../components/Influencer/campaign_status';

const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    position: fixed;
    left: 0;
    overflow: auto;
`;

// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    display: flex;
    width: 100%;
    left: 0px;
    height: 600px;
    background: ${oc.gray[2]};
    justify-content: center;
`;

// 화면의 중앙에 위치시킨다
const Positioner2 = styled.div`
    display: flex;
    width: 100%;
    height: 165px;
    background: white;
    justify-content: center;
`;

// 화면의 중앙에 위치시킨다
const Positioner3 = styled.div`
    display: flex;
    width: 100%;
    height: 160px;
    background: white;
    justify-content: center;
`;

// 화면의 중앙에 위치시킨다
const Positioner4 = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    background: white;
    justify-content: center;
`;

// 화면의 중앙에 위치시킨다
const Positioner5 = styled.div`
    display: flex;
    width: 100%;
    background: white;
    justify-content: center;
`;

// 화면의 중앙에 위치시킨다
const Positioner6 = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    background: #2e2e2e;
    justify-content: center;
    margin-top: 100px;
`;

const Table = styled.table`
    position: absolute;
    width: 950px;
    align-items: center;
`;

const Tbody = styled.tbody`
    width: 950px;
`;

const Tr = styled.tr`
`;

const Td = styled.td`
    width: 100%; 
    justify-content: center;
    align-items: center;
`;

const AllCampaignTr = styled.tr`
    height: 30px;
`;

const AllCampaignTd = styled.td`
    width: 10%; 
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #f1f1f1;
`;

const Label = styled.div`
    width: 100%; 
    text-align: center;
    font-size: 2.6rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
`;

const ExplanationLabel = styled.div`
    width: 100%; 
    text-align: center;
    font-size: 0.7rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    color: ${oc.gray[7]};
`;

const TableLabel = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: black;
    text-align: center;
    line-height: 40px;
    background: #f1f1f1;
    &:hover {
        color: white;
        background: #7f05e6;
    }
`;

const TableContentLabel2 = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: #7f05e6;
    text-align: center;
    line-height: 40px;
    &:hover {
        color: white;
        background: #7f05e6;
    }
`;

const NextCampaignButton = styled.div`
    width: 100%; 
    height: 30%;
    cursor: pointer;
`;

const NextCampaignImage = styled.img`
    width: 100%; 
    height: 100%;
`;

const Campaign_Status = () => {
    let selected_client_data = []
    let recommendation_client_data = []
    const [ test, setTestState ] = useState(true)

    // 전체 캠페인 데이터!
    // 추후에는 데이터 베이스에서 가져오는걸로 수정해야 함!
    // 상위 16개씩 가져오기!
    const [ all_client_data, setAllClientDataState ] = useState( [])

    // 전체 캠페인 데이터중 선택된 데이터
    const [ selected_client_data_state, setSelectedClientDataState ] = useState([])
    const [ selected_client_data_component, setSelectedClientDataComponent ] = useState([])

    // 모든 추천 캠페인 데이터
    // 추후에는 데이터 베이스에서 가져오는걸로 수정해야 함!
    // 상위 10개? 매칭 적합도에 따라 가져오기!
    // 요건 비어있다가 4개씩 보여주기 위한 변수
    const [ recommend_items, setRecommendItemsState ] = useState([]);
    const [ recomendation_client_data_component, setRecomendationClientDataComponent] = useState([])

    // 관심 분야에 따른 정렬을 위한 변수
    const [ interest_type, setInterestTypeState ] = useState(
        {
            "beauty": false,
            "entertainment": false,
            "travel": false,
            "food": false,
            "it_and_interior": false,
            "childcare_and_animals": false,
            "health": false
        }
    )

    // 캠페인 유형에 따른 정렬을 위한 변수
    const [ campaign_type, setCampaignTypeState ] = useState(
        {
            "product_experience": false,
            "on_site_visit": false,
            "reposting": false
        }
    )

    // 지역 선택에 따른 정렬을 위한 변수
    const [ region_type, setRegionTypeState ] = useState(
        {
            "seoul": false,
            "gyeonggi_and_incheon": false,
            "chungcheong": false,
            "gyeongsang": false,
            "jeolla": false,
            "gangwon": false,
            "jeju": false
        }
    )


    // 정렬을 위한 변수
    // 마감일자순 / 최근등록순 / 모집인원순 / 신청자순
    const [ sort_type, setSortTypeState ] = useState(
        {
            "due_date": true,
            "registration_date": false,
            "total_num": false,
            "apply_num": false
        }
    )

    // 추천 캠페인에서 next or before를 클릭했을 때
    // e === next
    // e === before
    const componentClicked = (e) => {
        if (e === "next") {
            let temp_client_data = recommend_items[0]
            console.log(temp_client_data)
            for (let i in recommend_items) {
                console.log(i)
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


    const AllCelarComponentClicked = (type) => {
        if (type === "interest_type") {
            interest_type.beauty = false
            interest_type.entertainment = false
            interest_type.travel = false
            interest_type.food = false
            interest_type.it_and_interior = false
            interest_type.childcare_and_animals = false
            interest_type.health = false
            setTestState(!test)
        }else if (type === "campaign_type") {
            campaign_type.product_experience = false
            campaign_type.on_site_visit = false
            campaign_type.reposting = false
            setTestState(!test)
        }
        else if (type === "region_type") {
            region_type.seoul = false
            region_type.gyeonggi_and_incheon = false
            region_type.chungcheong = false
            region_type.gyeongsang = false
            region_type.jeolla = false
            region_type.gangwon = false
            region_type.jeju = false
            setTestState(!test)
        }
        setAllCampaign(interest_type, campaign_type, region_type)
    }
    const setInterestType = (type, checked) => {
        if (checked === false) {
            if (type === "beauty") {
                interest_type.beauty = false
                setTestState(!test)
            } else if (type === "entertainment") {
                interest_type.entertainment = false
                setTestState(!test)
            } else if (type === "travel") {
                interest_type.travel = false
                setTestState(!test)
            } else if (type === "food") {
                interest_type.food = false
                setTestState(!test)
            } else if (type === "it_and_interior") {
                interest_type.it_and_interior = false
                setTestState(!test)
            } else if (type === "childcare_and_animals") {
                interest_type.childcare_and_animals = false
                setTestState(!test)
            } else if (type === "health") {
                interest_type.health = false
                setTestState(!test)
            }
        } else {
            if (type === "beauty") {
                interest_type.beauty = true
                setTestState(!test)
            } else if (type === "entertainment") {
                interest_type.entertainment = true
                setTestState(!test)
            } else if (type === "travel") {
                interest_type.travel = true
                setTestState(!test)
            } else if (type === "food") {
                interest_type.food = true
                setTestState(!test)
            } else if (type === "it_and_interior") {
                interest_type.it_and_interior = true
                setTestState(!test)
            } else if (type === "childcare_and_animals") {
                interest_type.childcare_and_animals = true
                setTestState(!test)
            } else if (type === "health") {
                interest_type.health = true
                setTestState(!test)
            }
        }
        //console.log(interest_type)
        setAllCampaign(interest_type, campaign_type, region_type)
    }

    const setCampaignType = (type, checked) => {
        if (checked === false) {
            if (type === "product_experience") {
                campaign_type.product_experience = false
                setTestState(!test)
            } else if (type === "on_site_visit") {
                campaign_type.on_site_visit = false
                setTestState(!test)
            } else if (type === "reposting") {
                campaign_type.reposting = false
                setTestState(!test)
            }
        } else {
            if (type === "product_experience") {
                campaign_type.product_experience = true
                setTestState(!test)
            } else if (type === "on_site_visit") {
                campaign_type.on_site_visit = true
                setTestState(!test)
            } else if (type === "reposting") {
                campaign_type.reposting = true
                setTestState(!test)
            }
        }
        //console.log(campaign_type)
        setAllCampaign(interest_type, campaign_type, region_type)
    }
    
    const setRegionType = (type, checked) => {
        if (checked === false) {
            if (type === "seoul") {
                region_type.seoul = false
                setTestState(!test)
            } else if (type === "gyeonggi_and_incheon") {
                region_type.gyeonggi_and_incheon = false
                setTestState(!test)
            } else if (type === "chungcheong") {
                region_type.chungcheong = false
                setTestState(!test)
            } else if (type === "gyeongsang") {
                region_type.gyeongsang = false
                setTestState(!test)
            } else if (type === "jeolla") {
                region_type.jeolla = false
                setTestState(!test)
            } else if (type === "gangwon") {
                region_type.gangwon = false
                setTestState(!test)
            } else if (type === "jeju") {
                region_type.jeju = false
                setTestState(!test)
            }
        } else {
            if (type === "seoul") {
                region_type.seoul = true
                setTestState(!test)
            } else if (type === "gyeonggi_and_incheon") {
                region_type.gyeonggi_and_incheon = true
                setTestState(!test)
            } else if (type === "chungcheong") {
                region_type.chungcheong = true
                setTestState(!test)
            } else if (type === "gyeongsang") {
                region_type.gyeongsang = true
                setTestState(!test)
            } else if (type === "jeolla") {
                region_type.jeolla = true
                setTestState(!test)
            } else if (type === "gangwon") {
                region_type.gangwon = true
                setTestState(!test)
            } else if (type === "jeju") {
                region_type.jeju = true
                setTestState(!test)
            }
        }
        //console.log(region_type)
        setAllCampaign(interest_type, campaign_type, region_type)
    }

    const setSortType = (label, checked) => {
        //// 전체 테이블쪽에서 정렬 순을 클릭했을 때
        let selected_client_data = []
        if (label === "마감일자순") {
            sort_type.due_date = true
            sort_type.registration_date = false
            sort_type.total_num = false
            sort_type.apply_num = false
            console.log(selected_client_data_state)

            selected_client_data = selected_client_data_state.sort(function (a,b ) {
                return a.due_date - b.due_date
            })
            //console.log(selected_client_data)
        } else if (label === "최근등록순") {
            sort_type.due_date = false
            sort_type.registration_date = true
            sort_type.total_num = false
            sort_type.apply_num = false

            selected_client_data = selected_client_data_state.sort(function (a,b ) {
                return  a.registration_date - b.registration_date
            })
        } else if (label === "모집인원순") {
            sort_type.due_date = false
            sort_type.registration_date = false
            sort_type.total_num = true
            sort_type.apply_num = false

            selected_client_data = selected_client_data_state.sort(function (a,b ) {
                return  b.total_num - a.total_num
            })
        } else if (label === "신청자순") {
            sort_type.due_date = false
            sort_type.registration_date = false
            sort_type.total_num = false
            sort_type.apply_num = true

            selected_client_data = selected_client_data_state.sort(function (a,b ) {
                return  b.apply_num - a.apply_num
            })
        }
        let temp_selected_client_data_component = selected_client_data.map((client_data, k) =>
        <CampaignBox
            client_data = {client_data}
        />
        );
        setSelectedClientDataState(selected_client_data)
        setSelectedClientDataComponent(temp_selected_client_data_component)

        // Rerendering위하여
        setTestState(!test)
    }

    const setAllCampaign = (interest_type, campaign_type, region_type) => {
        // for (var key in interest_type) {
        //     console.log("key: " + key + ", value: " + interest_type[key]) 
        // }
        //// 전체 캠페인에서 테이블을 클릭했을 때
        let campaign_type_checked = false
        //console.log(all_client_data)
        for (var key in campaign_type) {
            if (campaign_type[key] === true) {
                campaign_type_checked = true
            }
        }
        if (campaign_type_checked === true) {
            for (var key in campaign_type) {
                //console.log("key: " + key + ", value: " + campaign_type[key])
                if (campaign_type[key] === true) {
                    if (key === "product_experience") {
                        for (let i in all_client_data) {
                            if (all_client_data[i].campaign_type == "제품리뷰") {
                                //console.log(all_client_data[i])
                                selected_client_data.push(all_client_data[i])
                            }
                        }    
                    }else if (key === "on_site_visit") {
                        for (let i in all_client_data) {
                            if (all_client_data[i].campaign_type == "현장방문") {
                                //console.log(all_client_data[i])
                                selected_client_data.push(all_client_data[i])
                            }
                        }    
                    }else if (key === "reposting") {
                        for (let i in all_client_data) {
                            if (all_client_data[i].campaign_type == "리포스팅") {
                                //console.log(all_client_data[i])
                                selected_client_data.push(all_client_data[i])
                            }
                        }    
                    }

                }
            }
        }else {
            selected_client_data = all_client_data
        }
        //console.log(selected_client_data)
        if (sort_type.due_date === true) {
            selected_client_data = selected_client_data.sort(function (a,b ) {
                return a.due_date - b.due_date
            })
        }else if (sort_type.registration_date === true) {
            selected_client_data = selected_client_data.sort(function (a,b ) {
                return  a.registration_date - b.registration_date
            })
        }else if (sort_type.total_num === true) {
            selected_client_data = selected_client_data.sort(function (a,b ) {
                return b.total_num - a.total_num
            })
        }else if (sort_type.apply_num === true) {
            selected_client_data = selected_client_data.sort(function (a,b ) {
                return b.apply_num - a.apply_num
            })
        }
        //console.log(selected_client_data)
        let temp_selected_client_data_component = selected_client_data.map((client_data, k) =>
            <CampaignBox
                client_data = {client_data}
            />
        );
        setSelectedClientDataState(selected_client_data)
        setSelectedClientDataComponent(temp_selected_client_data_component)
    }

    ////////////// 디비로부터 모든 캠페인 데이터(상위 16개씩) 가지고 옴 /////////////
    const getAllClientDataFromDB = () => {
        let all_client_data_from_db = [
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

        return all_client_data_from_db
    }

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

    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        setAllClientDataState(getAllClientDataFromDB())
        setRecommendItemsState(getRecommendationClientDataFromDB())
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        selected_client_data = all_client_data
        //console.log(selected_client_data)
        selected_client_data = selected_client_data.sort(function (a,b) {
            return a.due_date - b.due_date
        })
        //console.log(selected_client_data)
        let temp_selected_client_data_component = selected_client_data.map((client_data, k) =>
            <CampaignBox
                client_data = {client_data}
            />
        );
        setSelectedClientDataState(selected_client_data)
        setSelectedClientDataComponent(temp_selected_client_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [all_client_data]);

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
            <Td style={{ width: '400px' }}>
                <RecommendationCampaignBox 
                    client_data = {client_data}
                />
            </Td>
        );
        
        //setRecomendationClientDataState(recommendation_client_data)
        setRecomendationClientDataComponent(temp_recommendation_client_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [recommend_items]);


    return (
        <CampaignStatusBox>
            <Positioner1>
                <Table style={{ height: "600px"}}>
                    <Tr style={{ height: "30px"}}>
                    </Tr>
                    <Tr style={{ height: "50px"}}>
                        <Td colSpan="7">
                            <Label>추천 캠페인</Label>
                        </Td>
                    </Tr>
                    <Tr style={{ height: "60px"}}>
                        <Td colSpan="7">
                            <ExplanationLabel>SampleLife의 매칭 알고리즘에 따른 timkim0923님의 추천 캠페인 현황입니다</ExplanationLabel>
                            <ExplanationLabel>매칭 적합도가 높을수록 캠페인에 신정될 확률이 높습니다. 원하는 캠페인에 지금 참여하세요!</ExplanationLabel>
                        </Td>
                    </Tr>
                    <Tr style={{ height: "250px"}}>
                        <Td style={{ width: '100px', textAlign: "center" }}>
                            <NextCampaignButton onClick={() => componentClicked("before")}>
                                <NextCampaignImage src="/images/campaign/left_arrow.png" />
                            </NextCampaignButton>
                        </Td>
                            {recomendation_client_data_component}
                        <Td style={{ width: '100px', textAlign: "center" }}>
                            <NextCampaignButton onClick={() => componentClicked("next")}>
                                <NextCampaignImage src="/images/campaign/right_arrow.png" />
                            </NextCampaignButton>
                        </Td>
                    </Tr>
                    <Tr style={{ height: "100px"}}>
                    </Tr>
                </Table>
            </Positioner1>
            <Positioner2>
                <Table>
                    <Tr style={{ height: "30px"}}>
                    </Tr>
                    <Tr style={{ height: "50px"}}>
                        <Td >
                            <Label>전체 캠페인</Label>
                        </Td>
                    </Tr>
                    <Tr style={{ height: "60px"}}>
                        <Td >
                            <ExplanationLabel>현재 참여 가능한 모든 캠페인입니다. 캠페인 카드를 클릭하여 상세내용을 확인해보세요.</ExplanationLabel>
                        </Td>
                    </Tr>
                </Table>
            </Positioner2>
            <Positioner3>
                <Table style={{ width: "850px"}} >
                    <AllCampaignTr>
                        <AllCampaignTd style={{ cursor: "text"  }}>
                            <TableLabel style={{ background: 'black', color: 'white' }}>관심 분야</TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "화장품·패션·뷰티"
                                type = "beauty"
                                setType = {setInterestType}
                                checked = {interest_type.beauty}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "엔터테인먼트·취미"
                                type = "entertainment"
                                setType = {setInterestType}
                                checked = {interest_type.entertainment}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "여행·아웃도어"
                                type = "travel"
                                setType = {setInterestType}
                                checked = {interest_type.travel}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "요리·음식·맛집"
                                type = "food"
                                setType = {setInterestType}
                                checked = {interest_type.food}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "IT·인테리어"
                                type = "it_and_interior"
                                setType = {setInterestType}
                                checked = {interest_type.it_and_interior}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "육아·반려동물"
                                type = "childcare_and_animals"
                                setType = {setInterestType}
                                checked = {interest_type.childcare_and_animals}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "헬스·피트니스"
                                type = "health"
                                setType = {setInterestType}
                                checked = {interest_type.health}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel2 onClick={() => AllCelarComponentClicked("interest_type")}>전체해제</TableContentLabel2>
                        </AllCampaignTd>
                    </AllCampaignTr>
                    <AllCampaignTr>
                        <AllCampaignTd style={{ cursor: "text"  }}>
                            <TableLabel style={{ background: 'black', color: 'white' }}>캠페인 유형</TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "제품 체험"
                                type = "product_experience"
                                setType = {setCampaignType}
                                checked = {campaign_type.product_experience}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "현장방문"
                                type = "on_site_visit"
                                setType = {setCampaignType}
                                checked = {campaign_type.on_site_visit}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "리포스팅"
                                type = "reposting"
                                setType = {setCampaignType}
                                checked = {campaign_type.reposting}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel2 onClick={() => AllCelarComponentClicked("campaign_type")}>전체해제</TableContentLabel2>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableLabel></TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableLabel></TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableLabel></TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableLabel></TableLabel>
                        </AllCampaignTd>
                    </AllCampaignTr>
                    <AllCampaignTr>
                        <AllCampaignTd style={{cursor: "text"  }}>
                            <TableLabel style={{ background: 'black', color: 'white' }}>지역 선택</TableLabel>
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "서울"
                                type = "seoul"
                                setType = {setRegionType}
                                checked = {region_type.seoul}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "경기·인천"
                                type = "gyeonggi_and_incheon"
                                setType = {setRegionType}
                                checked = {region_type.gyeonggi_and_incheon}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "충청 지역"
                                type = "chungcheong"
                                setType = {setRegionType}
                                checked = {region_type.chungcheong}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "경상 지역"
                                type = "gyeongsang"
                                setType = {setRegionType}
                                checked = {region_type.gyeongsang}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "전라 지역"
                                type = "jeolla"
                                setType = {setRegionType}
                                checked = {region_type.jeolla}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "강원 지역"
                                type = "gangwon"
                                setType = {setRegionType}
                                checked = {region_type.gangwon}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >
                            <TableContentLabel 
                                label = "제주 지역"
                                type = "jeju"
                                setType = {setRegionType}
                                checked = {region_type.jeju}
                            />
                        </AllCampaignTd>
                        <AllCampaignTd >    
                            <TableContentLabel2  onClick={() => AllCelarComponentClicked("region_type")}>전체해제</TableContentLabel2>
                        </AllCampaignTd>
                    </AllCampaignTr>
                </Table>
            </Positioner3>
            <Positioner4>
                <div style={{ width: "850px", marginRight: "10px"}} >
                    <SortLabel
                        label = "신청자순"
                        setSortType = {setSortType}
                        checked = {sort_type.apply_num}
                    />
                    <SortLabel
                        label = "모집인원순"
                        setSortType = {setSortType}
                        checked = {sort_type.total_num}
                        border_right_prop = "solid 1px gray"
                    />
                    <SortLabel
                        label = "최근등록순"
                        setSortType = {setSortType}
                        checked = {sort_type.registration_date}
                        border_right_prop = "solid 1px gray"
                    />
                    <SortLabel
                        label = "마감일자순"
                        setSortType = {setSortType}
                        checked = {sort_type.due_date}
                        border_right_prop = "solid 1px gray"
                    />
                </div>
            </Positioner4>
            <Positioner5>
                <div style={{ width: "850px"}} >
                    {selected_client_data_component}
                </div>
            </Positioner5>
            <Footer>
            </Footer>
        </CampaignStatusBox>
    )
};

export default Campaign_Status;