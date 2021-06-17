import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Participation_Campaign_Table_2} from "./";

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: relative;
    width: 100%;
    float: left;
    justify-content: center;
`;

const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
`;
const Td = styled.td`
    height: 50px;
    text-align: center;
    background: black;
    font-family: "Rajdhani";
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
`;

// 빈칸
const RowDiv = styled.div`
    width: 100%;
    height: 20px;
`;

const Label = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 1rem;
    font-family: 'Rajdhani';
    font-weight: 500;
    cursor: pointer;
    height: 22px;
`;

// 빈칸
const ArrowDiv = styled.div`
    display: flex;
    width: 22px;
    height: 22px;
    float: left;
    border: 1px solid #F3F3F3;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
`;

const Select = styled.select`
    width: 150px;
    height: 28px;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    float: right;
    border: 1px solid #7f05e6;
    margin-right: 3px;
    text-align-last: center;
    &:focus {
        outline:none;
    }
`;

const Input = styled.input`
    width: 150px;
    height: 24px;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    float:right;
    border-right: hidden;
    border-top: 1px solid #7f05e6;
    border-left: 1px solid #7f05e6;
    border-bottom: 1px solid #7f05e6;
    padding-left: 15px;
    &:focus {
        outline:none;
    }
`;

const SearchDiv = styled.div`
    width: 26px;
    height: 26px;
    float:right; 
    margin-right: 70px;
    cursor: pointer;
    border-top: 1px solid #7f05e6;
    border-right: 1px solid #7f05e6;
    border-bottom: 1px solid #7f05e6;
`;

const Option = styled.option`
    width: 100%;
    height: 100%;
`;

const Participation_Campaign_Table = ({}) => {
    const history = useHistory();
    const [ participation_campaign_data, setParticipationCampaignDataState ] = useState([])
    const [ participation_campaign_data_component, setParticipationCampaignDataComponent ] = useState([])
    ////////////// 디비로부터 모든 캠페인 데이터(상위 16개씩) 가지고 옴 /////////////
    const getParticipationCampaignDataFromDB = () => {
        let participation_campaign_data_from_db = [
            {
                "campaign_no": "A2021PR00001",
                "campaign_type": "제품체험",
                "campaign_name": "[일미만두] 시식 체험단 모집",
                "due_date": "2021-05-25",
                "posting_period": "2021-04-01\n-2021-05-26",
                "current_status": "포스팅완료",
                "description": "timkim0923에 콘텐츠 등록이 완료되었습니다. \n캠페인 가이드를 준수하였는지 확인해주세요.",
                "posting_address": "",
                "apply_date": "20210510"
            },
            {
                "campaign_no": "A2021PR00002",
                "campaign_type": "리포스팅",
                "campaign_name": "[강남 CGV] 개봉영화 리그램",
                "due_date": "2021-05-25",
                "posting_period": "2021-04-01\n-2021-05-26",
                "current_status": "포스팅진행",
                "description": "본 캠페인은 포스팅 마감일은 2021-05-25입니다. \n반드시 기간 내에 콘텐츠를 등록해 주세요.",
                "posting_address": "",
                "apply_date": "20210511"
            },
            {
                "campaign_no": "A2021PR00003",
                "campaign_type": "현장방문",
                "campaign_name": "[롯데리아] 강남점 오픈! 먹방리뷰",
                "due_date": "2021-05-25",
                "posting_period": "2021-04-01\n-2021-05-26",
                "current_status": "미선정",
                "description": "본 캠페인에는 아쉽게도 선정되지 않았습니다. \n다른 캠페인에 참여신청 해주세요.",
                "posting_address": "",
                "apply_date": "20210512"
            },
            {
                "campaign_no": "A2021PR00004",
                "campaign_type": "제품체험",
                "campaign_name": "[레뷰] 집에서 대파 키우기",
                "due_date": "2021-05-25",
                "posting_period": "2021-04-01\n-2021-05-26",
                "current_status": "참여신청취소",
                "description": "2021-05-22일에 참여신청 취소하였습니다.",
                "posting_address": "",
                "apply_date": "20210513"
            },
            {
                "campaign_no": "A2021PR00005",
                "campaign_type": "제품체험",
                "campaign_name": "[삼성전자] 갤럭시 신제품 체험단 모집",
                "due_date": "2021-05-26",
                "posting_period": "2021-04-01\n-2021-05-26",
                "current_status": "선정대기",
                "description": " 캠페인 선정여부는 모집기간 이후에 개별 안내해 드립니다. ",
                "posting_address": "",
                "apply_date": "20210514"
            }

        ]

        return participation_campaign_data_from_db
    }

    useEffect(() => {
        setParticipationCampaignDataState(getParticipationCampaignDataFromDB())
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        //console.log(selected_client_data)
        let temp_participation_campaign_data = participation_campaign_data.sort(function (a,b) {
            return b.apply_date - a.apply_date
        })
        if (temp_participation_campaign_data.length < 10) {
            for (let i = temp_participation_campaign_data.length; i< 10; i++) {
                temp_participation_campaign_data.push({})
            }
        }
        //console.log(selected_client_data)
        let temp_participation_campaign_data_component = temp_participation_campaign_data.map((campaign_data, index) => {
            let background_color
            if (index % 2 === 0) {
                background_color = "#EEEEEE"
            }else {
                background_color = "#F6F6F6"
            }

            return (
                <Participation_Campaign_Table_2 
                    campaign_data={campaign_data}
                    index = {index}
                    background_color ={background_color}
                />
            )
        });
        setParticipationCampaignDataComponent(temp_participation_campaign_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [participation_campaign_data]);


    return (
        <Positioner>
            <RowDiv style={{marginTop: "20px", marginBottom: "20px"}}>
                <Label  style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>timkim0923님이 참여한 캠페인의 상세내역과 현재 상태를 확인할 수 있습니다.</Label>
                <SearchDiv><Image src="/images/my_campaign/search.png" /></SearchDiv>
                <Input placeholder="검색어 입력"></Input>
                <Select>
                    <Option value="캠페인유형">캠페인 유형</Option>
                    <Option value="캠페인제목">캠페인 제목</Option>
                    <Option value="현재상태">현재 상태</Option>
                    <Option value="전체">전체</Option>
                </Select>
            </RowDiv>
            <Table className="table">
                <Tbody className="tbody">
                    <Tr className="tabs">
                        <Td style={{borderRight: "1px solid white", width: "107px"}}>캠페인 No.</Td>
                        <Td style={{borderRight: "1px solid white", width: "71px"}}>캠페인 유형</Td>
                        <Td style={{borderRight: "1px solid white", width: "230px"}}>캠페인 명</Td>
                        <Td style={{borderRight: "1px solid white", width: "77px"}}>모집 마감일</Td>
                        <Td style={{borderRight: "1px solid white", width: "86px"}}>포스팅 기간</Td>
                        <Td style={{borderRight: "1px solid white", width: "82px"}}>현재 상태</Td>
                        <Td style={{borderRight: "1px solid white", width: "402px"}}>설명</Td>
                        <Td style={{width: "195px"}}>포스팅 주소</Td>
                    </Tr>
                    {participation_campaign_data_component}
                </Tbody>
            </Table>
            <RowDiv style={{marginTop: "20px", justifyContent: "center", display: "flex"}}>
                <ArrowDiv style={{marginRight: "7px"}}>
                    <Image src="/images/my_campaign/left_arrow_2.png" />
                </ArrowDiv>
                <ArrowDiv style={{marginRight: "20px"}}>
                    <Image src="/images/my_campaign/left_arrow_1.png" />
                </ArrowDiv>
                <Label style={{marginLeft: "5px", marginRight: "5px"}}>1</Label>
                <ArrowDiv style={{marginLeft: "20px"}}>
                    <Image src="/images/my_campaign/right_arrow_1.png" />
                </ArrowDiv>
                <ArrowDiv style={{marginLeft: "7px"}}>
                    <Image src="/images/my_campaign/right_arrow_2.png" />
                </ArrowDiv>
            </RowDiv>
        </Positioner>
    );
};
export default Participation_Campaign_Table;
