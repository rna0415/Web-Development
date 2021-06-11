import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {Inquery_Message_Table} from "./";

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

const InqueryTab = ({}) => {
    const history = useHistory();
    const [ inquery_message_campaign_data, setInquery_message_campaign_data ] = useState([])
    const [ inquery_message_campaign_data_component, setInquery_message_campaign_data_component ] = useState([])

    ////////////// 디비로부터 모든 캠페인 데이터(상위 16개씩) 가지고 옴 /////////////
    const get_inquery_message_data_from_db = () => {
        let inquery_message_data_from_db = [
            {
                "message_no": "10",
                "title": "[회원가입문의] 회원가입 정보가 잘못되어 문의 드립니다.",
                "date": "2021-05-05",
                "writer": "${회원명}",
                "status": "답변완료",
                "message": "회원가입 정보가 잘못되었는데 어떻게 수정하나요?. \n첨부파일 없음",
                "messagetype": "상담내용",
                "answerwriter": "서비스 운영자",
                "answer":"메인페이지>인플루언서>회원정보에서 수정 가능합니다. \n여기를 누르면 해당 페이지로 바로 이동가능합니다. \n회원정보 수정 방법은 첨부한 파일을 확인해 주세요. \n첨부파일, 화면 캠쳐.jpg *담변하지 않은 상태인 경우.. \n'접수된 상담내용 확인중입니다'로 표시",
                "answertype": "답변내용"
            },
            {
                "message_no": "9",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "확인중",
            },
            {
                "message_no": "8",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "7",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "6",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "5",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "4",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "3",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "상담완료",
            },
            {
                "message_no": "2",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "확인중",

            },
            {
                "message_no": "1",
                "title": "[${상담유형}]$상담제목",
                "date": "2021-05-05",
                "writer": "서비스 운영자",
                "status": "확인중",
            }

        ]

        return inquery_message_data_from_db
    }

    useEffect(() => {
        setInquery_message_campaign_data(get_inquery_message_data_from_db())
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        //console.log(selected_client_data)
        let temp_inquery_message_campaign_data = inquery_message_campaign_data.sort(function (a,b) {
            return b.message_no - a.message_no

        })
        if (temp_inquery_message_campaign_data.length < 10) {
            for (let i = temp_inquery_message_campaign_data.length; i< 10; i++) {
                temp_inquery_message_campaign_data.push({})
            }
        }
        
        //console.log(selected_client_data)
        let temp_inquery_message_campaign_data_component = temp_inquery_message_campaign_data.map((inquery_data, index) => {
            let background_color
            if (index % 2 === 0) {
                background_color = "#EEEEEE"
            }else {
                background_color = "#F6F6F6"
            }

            return (
                <Inquery_Message_Table 
                    inquery_data={inquery_data}
                    index = {index}
                    background_color ={background_color}
                />
            )
        });
        setInquery_message_campaign_data_component(temp_inquery_message_campaign_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [inquery_message_campaign_data]);



    return (
        <Positioner>
            <RowDiv style={{marginTop: "20px", marginBottom: "20px"}}>
                <Label  style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>$회원명님의 상담 이력입니다.</Label>
            </RowDiv>
            <Table className="table">
                <Tbody className="tbody">
                    <Tr className="tabs">
                        <Td style={{borderRight: "1px solid white", width: "15%"}}>No.</Td>
                        <Td style={{borderRight: "1px solid white", width: "55%"}}>상담제목</Td>
                        <Td style={{borderRight: "1px solid white", width: "10%"}}>일자</Td>
                        <Td style={{borderRight: "1px solid white",width: "10%"}}>작성자</Td>
                        <Td style={{width: "10%"}}>상담현황</Td>
                    </Tr>
                    {inquery_message_campaign_data_component}
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
export default InqueryTab;