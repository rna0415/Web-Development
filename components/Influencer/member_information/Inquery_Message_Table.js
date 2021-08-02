import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
    table-layout: auto;
    
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

const Inquery_Message_Table = ({inquery_data, index, background_color,loading,temp_index}) => {
    // console.log('데이터',inquery_data)
    const history = useHistory();
    const [ inquery, setInquery ] = useState(inquery_data)
    const [ trigger, setTrigger ] = useState(0)
    const [ status, setStatus] = useState('확인중')
    const [ display, setDisplay] = useState('none')


    const messageClicked = (index) => {
        setTrigger(trigger+1)
        let temp_inquery_data = inquery_data
        // let temp_campaign_message_component = inquery_data['inquery_component']
        // let temp_campaign_message_component2 = inquery_data['inquery_component2']

        // let temp_campaign_up_down_arrow = inquery_data['up_down_arrow']

        if (temp_inquery_data['inquery_component'] === ""){
            temp_inquery_data['inquery_component'] = 
                    <Tr>
                        <Td style={{paddingLeft: "35px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}}>
                            <pre style={{color: "black", float: "left"}}>
                                {inquery_data.inquery_category}
                            </pre>
                        </Td>
                        <Td style={{paddingLeft: "45px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} colSpan="4">
                            <pre style={{color: "black", float: "left"}}>
                                {inquery_data.inquery_contents}
                            </pre>
                        </Td>
                    </Tr>               
            
            temp_inquery_data['up_down_arrow'] = "/images/my_campaign/up_arrow.png"
        } else {
            temp_inquery_data['inquery_component'] = ""
            temp_inquery_data['up_down_arrow'] = "/images/my_campaign/down_arrow.png"
        }

        
        if(temp_inquery_data['inquery_component2'] ===""){
            temp_inquery_data['inquery_component2']=
            <Tr style={{display:display}}>
                <Td style={{paddingLeft: "35px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}}>
                    <pre style={{color: "black", float: "left"}}>
                        {inquery_data.answertype}
                    </pre>
                </Td>
                <Td style={{paddingLeft: "45px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left"}}>
                        {/* {inquery_data.answer} */}기타문의는 답변완료로 해놓았음
                    </pre>
                </Td>
                <Td style={{paddingLeft: "45px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left"}}>
                        {inquery_data.date}
                    </pre>
                </Td>
                <Td style={{paddingLeft: "45px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left"}}>
                        {inquery_data.answerwriter}
                    </pre>
                </Td>
                <Td style={{paddingLeft: "45px", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left"}}>
                        {inquery_data.status}
                    </pre>
                </Td>
            </Tr>
        }else{
            temp_inquery_data['inquery_component2'] = ""
        }
       

        setInquery(temp_inquery_data)
        // setInqueryComponent(temp_campaign_message_component)
        // setInqueryComponent2(temp_campaign_message_component2)
        // setUpDownArrow(temp_campaign_up_down_arrow)
    }


    //# 상담현황 컨트롤
    // useEffect(() => {
    //     if(inquery_data.inquery_category !== '기타 문의'){
    //         setDisplay('none')
    //         setStatus('확인중')
    //     }else{
    //         setDisplay('')
    //         setStatus('답변완료')
    //     }

    // }, []);


    return (
        <>
        { loading &&
            <div> loading... </div>
          }
        <Tr className="tabs">
            <Td  style={{padding: "0px"}} colSpan="5">
                <Table style={{border: "none"}}>
                    <Tbody >
                        <Tr id={index}>
                            <Td style={{borderRight: "1px solid white",  width: "140px", background: background_color, color: "black"}}>{temp_index[index]}</Td>
                            <Td style={{display: "flex", borderRight: "1px solid white", width: "780px", background: background_color, color: "black",cursor: 'pointer'}} onClick={() => messageClicked(index)} >
                                <div style= {{marginTop: "16px", marginLeft: "45px"}}>{inquery_data.inquery_title}</div>
                                <ArrowDiv style= {{marginTop: "16px", marginLeft: "10px", width: "15px", height: "15px"}}>
                                    <Image src= {inquery['up_down_arrow']} />
                                </ArrowDiv>
                            </Td>
                            <Td style={{borderRight: "1px solid white", width: "140px", background: background_color, color: "black"}}>{inquery_data.create_at}</Td>
                            <Td style={{borderRight: "1px solid white", width: "140px", background: background_color, color: "black"}}>{inquery_data.influencer_id}</Td>
                            <Td style={{width: "140px", background: background_color, color: "black"}}>{status}</Td>
                        </Tr>
                            {inquery['inquery_component']}
                            
                            {inquery['inquery_component2']}
                    </Tbody>
                </Table>
            </Td>
        </Tr>
        </>
    )
};
export default Inquery_Message_Table;
