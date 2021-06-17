import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Campaign_Message_Table_2} from "./";

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

const Campaign_Message_Table = ({}) => {
    const history = useHistory();
    const [ message_campaign_data, setParticipationCampaignDataState ] = useState([])
    const [ message_campaign_data_component, setParticipationCampaignDataComponent ] = useState([])

    ////////////// 디비로부터 모든 캠페인 데이터(상위 16개씩) 가지고 옴 /////////////
    const getParticipationCampaignDataFromDB = () => {
        let message_campaign_data_from_db = [
            {
                "message_no": "1",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "추천 캠페인이 도착하였습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n인플루언서 여러분의 많은 참여 부탁드립니다1.\n  1",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "2",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "캠페인 참여신청이 완료되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "3",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "캠페인 참여신청이 취소되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "4",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "참여 신청한 캠페인에 선정 되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "5",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "참여 신청한 캠페인에 미선정 되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "6",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "참여하신 캠페인의 포스팅 마감 일정 안내입니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "7",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "참여하신 캠페인의 포스팅이 확인되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "8",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "참여하신 캠페인이 종료되었습니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "9",
                "date": "2021-05-05",
                "writer": "정산 관리자",
                "campaign_message_title": "참여하신 캠페인에 대한 정산 결과를 알려드립니다.",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            },
            {
                "message_no": "10",
                "date": "2021-05-05",
                "writer": "이벤트 운영자",
                "campaign_message_title": "샘플라이프 이벤트 안내",
                "campaign_message": "샘플라이프 런칭기념 캠페인 진행중입니다. \n  인플루언서 여러분의 많은 참여 부탁드립니다.",
                "url_text": "[샘플라이프] 런칭기념 이벤트 바로가기",
                "url": "www.iotlab.skku.edu"
            }

        ]

        return message_campaign_data_from_db
    }

    useEffect(() => {
        setParticipationCampaignDataState(getParticipationCampaignDataFromDB())
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        //console.log(selected_client_data)
        let temp_message_campaign_data = message_campaign_data.sort(function (a,b) {
            return b.message_no - a.message_no
            console.log('a',a)
        console.log('b',b)
        })
        if (temp_message_campaign_data.length < 10) {
            for (let i = temp_message_campaign_data.length; i< 10; i++) {
                temp_message_campaign_data.push({})
            }
        }
        
        //console.log(selected_client_data)
        let temp_message_campaign_data_component = temp_message_campaign_data.map((campaign_data, index) => {
            let background_color
            if (index % 2 === 0) {
                background_color = "#EEEEEE"
            }else {
                background_color = "#F6F6F6"
            }

            return (
                <Campaign_Message_Table_2 
                    campaign_data={campaign_data}
                    index = {index}
                    background_color ={background_color}
                />
            )
        });
        setParticipationCampaignDataComponent(temp_message_campaign_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [message_campaign_data]);



    return (
        <Positioner>
            <RowDiv style={{marginTop: "20px", marginBottom: "20px"}}>
                <Label  style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>캠페인 진행과 관련하여 timkim0923님께 알려드리는 메시지입니다.</Label>
            </RowDiv>
            <Table className="table">
                <Tbody className="tbody">
                    <Tr className="tabs">
                        <Td style={{borderRight: "1px solid white", width: "79px"}}>No.</Td>
                        <Td style={{borderRight: "1px solid white", width: "962px"}}>캠페인 메시지</Td>
                        <Td style={{borderRight: "1px solid white", width: "99px"}}>일자</Td>
                        <Td style={{width: "98px"}}>작성자</Td>
                    </Tr>
                    {message_campaign_data_component}
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
export default Campaign_Message_Table;
