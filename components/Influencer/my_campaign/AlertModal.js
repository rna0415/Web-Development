import {React, useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { DeliveryInfoChangeModal } from "."

const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
`;

const CampaignApplyModal = styled.div`
    width: 410px;
    height: 160px;
    position: relative;
    box-sizing: border-box;
    margin: 250px auto;
    border: 2px solid #7f05e6;
    background: white;
`;

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
`;


const Label = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: black;
    text-align: center;
`;

const CloseButton = styled.div`
    top: 10px;
    right: 10px;
    width: 110px;
    height: 100%;
    background: #7f05e6;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: 'Rajdhani';
    font-weight: 500;
    color: white;
    text-align: center;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const AlertModal = ({setCloseModal}) => {
    const history = useHistory();

    const componentClicked = (e) => {
        if (e === "확인"){
            console.log("신청완료 클릭")
            history.push({
                pathname: "/influencer/main/my_campaign/campagin_cancel_completed"
            })
        } else {
            setCloseModal()
        }
    }

    return(
        <BackgroundModal>
            <CampaignApplyModal>
                <Positioner style= {{height: "20px"}}></Positioner>
                <Positioner>
                    <Label>
                        참여신청 취소 확인
                    </Label>
                </Positioner>
                <Positioner>
                    <div style= {{width: "20%"}}></div>
                    <Label style= {{fontSize: "0.8rem", fontWeight: "500", textAlign: "left"}}>
                        '확인' 버튼을 누르시면 [Galaxy 21 Ultra 5] 갤럭시 신제품 체험단 모집에 참여신청을 취소합니다.
                    </Label>
                    <div style= {{width: "20%"}}></div>
                </Positioner>
                <Positioner style= {{marginTop: "10px", height: "25px"}}>
                    <CloseButton onClick={(e) => componentClicked("확인")}> 확인</CloseButton>
                    <CloseButton style= {{marginLeft: "8px"}} onClick={(e) => componentClicked("취소")}> 취소</CloseButton>
                </Positioner>
            </CampaignApplyModal>
        </BackgroundModal>
    )
};

export default AlertModal;