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


const Participation_Campaign_Table_2 = ({campaign_data, index, background_color}) => {
    const history = useHistory();

    const componentClicked = (index) => {
        history.push({
            pathname: "/influencer/main/my_campaign/participation_campaign/" + index,
            state: {campaign_no: index}
        })
    }
    return (
        <Tr style={{cursor: "pointer"}}  onClick={() => componentClicked(index)} className="tabs">
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_no}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_type}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_name}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.due_date}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                <pre>{campaign_data.posting_period}</pre>
            </Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.current_status}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                <pre>{campaign_data.description}</pre>
            </Td>
            <Td style={{background: background_color, color: "black"}}>{campaign_data.posting_address}</Td>
        </Tr>
    )
};
export default Participation_Campaign_Table_2;
