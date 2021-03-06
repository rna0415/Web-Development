import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const BaseBox = styled.div`
    width: 99%; 
    height: 100%;
    max-width: max-content;
    max-width: 200px;
    background-color: white;
    border: solid 1px;
    border-color: ${oc.gray[3]};
    
`;

const ImageBox = styled.div` 
    position: relative;
    width: 100%; 
    height: 100%;
    text-align: center;
    background-color: black;
    border-bottom: solid 1px;
    border-bottom-color: ${oc.gray[3]};
`;

const CampaignImage = styled.img` 
    position: absolute;      
    width: 100%; 
    height: 100%;  
    top: 0px;
    left: 0px;
`;

// const MatchingBox = styled.div`
//     position: absolute;    
//     top: 0px;
//     right: 0px;
//     width: 30%; 
//     height: 30%;
//     background-color: #7f05e6;
// `;

// const MatchingTitle1 = styled.div`
//     width: 100%;
//     text-align: center;
//     font-size: 0.5rem;
//     font-family: 'Rajdhani';
//     margin-top: 9px;
//     text-overflow: ellipsis;
//     overflow: hidden; 
//     color: white;
// `;
// const MatchingTitle2 = styled.div`
//     width: 100%;
//     text-align: center;
//     font-size: 1.5rem;
//     font-family: 'Rajdhani';
//     text-overflow: ellipsis;
//     overflow: hidden;
//     color: white;
//     font-weight: 600;
// `;

// const ContentBox = styled.div`
//     width: 95%; 
//     height: 30%;
//     text-align: center;
//     background-color: white;
//     padding: 5px;
// `;

// const CampaignDueDayLabel = styled.div`
//     width: 100%; 
//     height: 10%;
//     background-color: white;
//     margin-top: 10px;
//     text-align: left;
//     font-size: 0.5rem;
//     font-family: 'Rajdhani';
//     color: red;
//     font-weight: 600;
// `;

// const CampaignTitle = styled.div`
//     width: 100%; 
//     height: 15%;
//     background-color: white;
//     text-align: left;
//     font-size: 0.7rem;
//     font-weight: 600;
//     font-family: 'Rajdhani';
//     margin-top: 9px;
//     text-overflow: ellipsis;
//     overflow: hidden; 
//     word-spacing: -2px;
// `;

// const ApplyNum = styled.div`
//     width: 10%; 
//     height: 20%;
//     overflow:hidden;
//     width:auto;
//     background-color: white;
//     text-align: left;
//     font-size: 0.6rem;
//     font-family: 'Rajdhani';
//     float: left;
//     word-spacing: -2px;
//     margin-top: 5px;
// `;

// const CampaignInfo = styled.div`
//     width: 100%; 
//     height: 20%;
//     background-color: white;
//     float: left;
// `;

// const CampaignType = styled.div`
//     width: 30%; 
//     overflow:hidden;
//     width:auto;
//     background-color: #7f05e6;
//     float: left;
//     margin-top: 5px;
//     font-size: 0.6rem;
//     font-family: 'Rajdhani';
//     border-radius: 10px;
//     color: white;
//     padding-left: 5px;
//     padding-right: 5px;
// `;

// const CampaignReward = styled.div`
//     width: 30%; 
//     overflow:hidden;
//     width:auto;
//     background-color: orange;
//     float: left;
//     margin-top: 5px;
//     margin-left: 8px;
//     font-size: 0.6rem;
//     font-family: 'Rajdhani';
//     border-radius: 10px;
//     color: black;
//     padding-left: 5px;
//     padding-right: 5px;
// `;

// rest ????????? onChange, type, name, value, placeholder ?????? input ?????? ?????? ?????? ????????? ???????????? ??????.
const BrandBox = ({client_data}) => {
    // const history = useHistory();

    // const componentClicked = (e) => {
    //     console.log('Find Button clicked');
    //     console.log(client_data.campaign_no)
    //     history.push({
    //         pathname: "/" + client_data.campaign_no,
    //         state: {campaign_no: client_data.campaign_no}
    //     })
    // }

    // let due_date_label = ""
    // if (client_data.due_date == 0) {
    //     due_date_label = "????????????!"
    // }else if (client_data.due_date < 2) {
    //     due_date_label = "?????? ??????!"
    // }else {
    //     due_date_label = "D-" + client_data.due_date + "???"
    // }

    return(
        <BaseBox>
            <ImageBox>
                <CampaignImage src={client_data.src} />
                {/* <MatchingBox>
                    <MatchingTitle1>?????? ?????????</MatchingTitle1>
                    <MatchingTitle2>{client_data.percentage}%</MatchingTitle2>
                </MatchingBox> */}
            </ImageBox>
            {/* <ContentBox>
                <CampaignDueDayLabel>{due_date_label}</CampaignDueDayLabel>
                <CampaignTitle>{client_data.title}</CampaignTitle>
                <ApplyNum  style={{ color: 'gray' }}>?????? {client_data.total_num}??? /</ApplyNum>
                <ApplyNum  style={{ width: '60%',color: 'black', fontWeight: '600'}}>&nbsp; ?????? {client_data.apply_num}???</ApplyNum>
                <CampaignInfo>
                    <CampaignType>{client_data.campaign_type}</CampaignType>
                    <CampaignReward>{client_data.campaign_reward}</CampaignReward>
                </CampaignInfo>
            </ContentBox> */}
        </BaseBox>

    )
};

export default BrandBox;