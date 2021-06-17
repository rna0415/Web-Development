import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

const Image = styled.img`
    width: 100%; 
    height: 100%;
`;

const ImageDiv = styled.div`
    width: 100%; 
    height: 100%;
`;

const Campaign_Settlement_Details_Table_2 = ({campaign_data, index, background_color}) => {
    const history = useHistory();

    let image_component
    
    if (Object.keys(campaign_data).length !== 0) {
        image_component = <Image src= {campaign_data.posting}/>
    } else {
        image_component = <ImageDiv />
    }

    return (
        <Tr style={{cursor: "pointer"}} className="tabs">
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_no}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_type}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_name}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.posting_date}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                {image_component}
            </Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                <pre>{campaign_data.benefits}</pre>
            </Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.manuscript_fee}</Td>
            <Td style={{background: background_color, color: "black"}}>{campaign_data.settlement_details}</Td>
        </Tr>
    )
};
export default Campaign_Settlement_Details_Table_2;
