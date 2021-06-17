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

const Inquery_Message_Table = ({inquery_data, index, background_color}) => {
    const history = useHistory();
    const [ campaign_message_component, setCampaingMessageComponent ] = useState({
        "0": "",
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": ""
    })
    const [ campaign_message_component2, setCampaingMessageComponent2 ] = useState({
        "0": "",
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": ""
    })

    const [ campaign_up_down_arrow, setCampaingUpDownArrow ] = useState({
        "0": "/images/my_campaign/down_arrow.png",
        "1": "/images/my_campaign/down_arrow.png",
        "2": "/images/my_campaign/down_arrow.png",
        "3": "/images/my_campaign/down_arrow.png",
        "4": "/images/my_campaign/down_arrow.png",
        "5": "/images/my_campaign/down_arrow.png",
        "6": "/images/my_campaign/down_arrow.png",
        "7": "/images/my_campaign/down_arrow.png",
        "8": "/images/my_campaign/down_arrow.png",
        "9": "/images/my_campaign/down_arrow.png"
    })
    const [ trigger, setTrigger ] = useState(0)


    const messageClicked = (id) => {
        setTrigger(trigger+1)
        let temp_campaign_message_component = campaign_message_component
        let temp_campaign_message_component2 = campaign_message_component2

        let temp_campaign_up_down_arrow = campaign_up_down_arrow

        if (temp_campaign_message_component[id] === ""){
            temp_campaign_message_component[id] = 
                
                    <Tr>
                        <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}}>
                            <pre style={{color: "black", float: "left", marginLeft: "80px"}}>
                                {inquery_data.messagetype}
                            </pre>
                        </Td>
                        <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} colSpan="4">
                            <pre style={{color: "black", float: "left", marginLeft: "40px"}}>
                                {inquery_data.message}
                            </pre>
                        </Td>
                    </Tr>               
            
            temp_campaign_up_down_arrow[id] = "/images/my_campaign/up_arrow.png"
        } else {
            temp_campaign_message_component[id] = ""
            temp_campaign_up_down_arrow[id] = "/images/my_campaign/down_arrow.png"
        }


        if(temp_campaign_message_component2[id]===""){
            temp_campaign_message_component2[id]=
            <Tr>
                <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}}>
                    <pre style={{color: "black", float: "left", marginLeft: "80px"}}>
                        {inquery_data.answertype}
                    </pre>
                </Td>
                <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left", marginLeft: "40px"}}>
                        {inquery_data.answer}
                    </pre>
                </Td>
                <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left", marginLeft: "40px"}}>
                        {inquery_data.date}
                    </pre>
                </Td>
                <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left", marginLeft: "40px"}}>
                        {inquery_data.answerwriter}
                    </pre>
                </Td>
                <Td style={{paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid black", borderBottom: "1px solid black", background: "white"}} >
                    <pre style={{color: "black", float: "left", marginLeft: "40px"}}>
                        {inquery_data.status}
                    </pre>
                </Td>
            </Tr>
            temp_campaign_up_down_arrow[id] = "/images/my_campaign/up_arrow.png"
        }else{
            temp_campaign_message_component2[id] = ""
            temp_campaign_up_down_arrow[id] = "/images/my_campaign/down_arrow.png"
        }

        setCampaingMessageComponent(temp_campaign_message_component)
        setCampaingMessageComponent2(temp_campaign_message_component2)
        setCampaingUpDownArrow(temp_campaign_up_down_arrow)
    }



    useEffect(() => {
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [trigger]);

    return (
        <Tr className="tabs">
            <Td  style={{padding: "0px"}} colSpan="5">
                <Table style={{border: "none"}}>
                    <Tbody >
                        <Tr id={index}>
                            <Td style={{borderRight: "1px solid white",  width: "210px", background: background_color, color: "black"}}>{inquery_data.message_no}</Td>
                            <Td style={{display: "flex", borderRight: "1px solid white", width: "790px", background: background_color, color: "black",cursor: 'pointer'}} onClick={() => messageClicked(index)} >
                                <div style= {{marginTop: "16px", marginLeft: "45px"}}>{inquery_data.title}</div>
                                <ArrowDiv style= {{marginTop: "16px", marginLeft: "10px", width: "15px", height: "15px"}}>
                                    <Image src= {campaign_up_down_arrow[index]} />
                                </ArrowDiv>
                            </Td>
                            <Td style={{borderRight: "1px solid white", width: "140px", background: background_color, color: "black"}}>{inquery_data.date}</Td>
                            <Td style={{borderRight: "1px solid white", width: "140px", background: background_color, color: "black"}}>{inquery_data.writer}</Td>
                            <Td style={{width: "140px", background: background_color, color: "black"}}>{inquery_data.status}</Td>
                        </Tr>
                            {campaign_message_component[index]}
                            {campaign_message_component2[index]}
                    </Tbody>
                </Table>
            </Td>
        </Tr>
    )
};
export default Inquery_Message_Table;
