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
    width: 25%; 
    height: 25%;
`;

const ImageDiv = styled.div`
    width: 25%; 
    height: 25%;
`;

const Clipping_Table_2 = ({campaign_data, index, background_color, image_src, deleteClippingCampaignDataFromDB}) => {
    const history = useHistory();
    let image_component

    if (image_src !== "") {
        image_component = <Image src= {image_src}/>
    } else {
        image_component = <ImageDiv />
    }

    const deleteClicked = (campaign_no) => {
        deleteClippingCampaignDataFromDB(campaign_no)
    }

    return (
        <Tr style={{cursor: "pointer"}} className="tabs">
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_no}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_type}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.campaign_name}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>{campaign_data.due_date}</Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                <pre>{campaign_data.posting_period}</pre>
            </Td>
            <Td style={{borderRight: "1px solid white", background: background_color, color: "black"}}>
                <pre>{campaign_data.benefits}</pre>
            </Td>
            <Td style={{background: background_color, color: "black"}} onClick={() => deleteClicked(campaign_data.campaign_no)} >
                {image_component}
            </Td>
        </Tr>
    )
};
export default Clipping_Table_2;
