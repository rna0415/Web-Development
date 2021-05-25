import {React, useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { DeliveryInfoChangeModal } from "./"

const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 5;
`;

const CampaignApplyModal = styled.div`
    width: 600px;
    height: 580px;
    position: relative;
    box-sizing: border-box;
    margin: 56px auto;
    background: white;
`;

// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    justify-content: center;
`;

const Label = styled.div`
    width: 100%;
    height: 100%;
    background: #7f05e6;
    font-size: 1.4rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    color: white;
    text-align: center;
    line-height: 60px;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: #7f05e6;
    cursor: pointer;
`;

// 화면의 중앙에 위치시킨다
const Container = styled.div`
    margin: 50px;
    margin-top: 30px;
    height: 60%;
    justify-content: center;
`;

// 빈칸
const RowDiv = styled.div`
    display: flex;
    height: 35px;
    width: 100%;
    float: left;
    justify-content: left;
`;


const Label2 = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
`;

const Button = styled.button`
    width: 17%;
    height: 80%;
    background: #7f05e6;
    color: white;
    float: left;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    text-align: center;
    justify-content: center;
    border: solid 0px;
    cursor: pointer;
`;

const Select = styled.select`
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    padding-left: 10px;
`;
const Option = styled.option`
    width: 100%;
    height: 100%;
`;
// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Modal = ({setCloseModal}) => {
    const history = useHistory();
    
    const [delivery_info_change, setDeliveryInfoChangeModalState] = useState([])
    const [ name, setNameState ] = useState("김진용");
    const [ phone_num, setPhoneNumState ] = useState("010-8273-0930");
    const [ address, setAddressState ] = useState("경기 시흥시 은계중앙로 140 (은행동, 네이처포레)");
    
    const setCloseDeliveryModal = () => {
        console.log("close clicked")
        //setCampaignApplyModalState(false)
        setDeliveryInfoChangeModalState([])
    }
    

    const setDeliveryInfo = (name, phone_num, address1, address2) => {
        console.log("close clicked")
        setNameState(name)
        let temp_phone_num = phone_num.substring(0, 3) + "-" + phone_num.substring(3, 7) + "-" + phone_num.substring(7, 11) 
        setPhoneNumState(temp_phone_num)
        setAddressState(address1 + ", " + address2)

    }

    const componentClicked = (e) => {
        if (e === "신청완료"){
            console.log("신청완료 클릭")
            history.push({
                pathname: "/influencer/main/campaign_status/application_completed"
            })
        }else if (e === "배송정보변경") {
            console.log("배송정보변경 클릭")
            let temp_delivery_info_change_modal = 
                <DeliveryInfoChangeModal 
                    setCloseDeliveryModal={setCloseDeliveryModal} 
                    setDeliveryInfo = {setDeliveryInfo}
                />
            setDeliveryInfoChangeModalState(temp_delivery_info_change_modal)
        }
        else {
            setCloseModal()
        }
    }

    return(
        <BackgroundModal>
            <CampaignApplyModal>
                <Positioner1>
                    <Label>
                        캠페인 참여신청
                    </Label>
                    <CloseButton onClick={(e) => componentClicked(e)} src="/images/campaign/x.png" />
                </Positioner1>
                <Container>
                    <RowDiv style={{ height: "30px"}}>                    
                        <Label2>김진용 님</Label2>
                    </RowDiv>
                    <RowDiv style={{ height: "30px"}}>                    
                        <Label2  style={{ color: "#7f05e6"}}>[삼성전자] 갤럭시 신제품 체험단 모집</Label2>
                    </RowDiv>
                    <RowDiv  style={{ height: "20px"}}>                    
                        <Label2>본 캠페인에 참여신청해 주셔서 감사합니다.</Label2>
                    </RowDiv>
                    <RowDiv style={{ height: "40px"}}>                    
                        <Label2>본 캠페인에 참여신청을 완료하기 위해 다음의 사항을 확인하여 주십시오.</Label2>
                    </RowDiv>
                    <RowDiv  style={{borderBottom: "solid 2px gray"}}>                    
                        <Label2 style={{ width: "20%"}}>제품 배송정보</Label2>
                        <Label2  style={{ width: "63%", fontSize: "0.6rem", color: "gray"}}>캠페인 제품의 정확한 배송을 위해 배송주소를 확인하여 주십시오.</Label2>
                        <Button onClick={(e) => componentClicked("배송정보변경")}>배송 정보 변경</Button>
                    </RowDiv>
                    <RowDiv style={{marginTop: "15px", height: "25px"}}>                    
                        <Label2 style={{ width: "20%", fontSize: "0.7rem"}}>받는사람</Label2>
                        <Label2  style={{ width: "63%", fontSize: "0.7rem"}}>{name}</Label2>
                    </RowDiv>
                    <RowDiv style={{height: "25px"}}>                    
                        <Label2 style={{ width: "20%", fontSize: "0.7rem"}}>휴대폰번호</Label2>
                        <Label2  style={{ width: "63%", fontSize: "0.7rem"}}>{phone_num}</Label2>
                    </RowDiv>
                    <RowDiv style={{height: "40px"}}>                    
                        <Label2 style={{ width: "20%", fontSize: "0.7rem"}}>배송주소</Label2>
                        <Label2  style={{ width: "63%", fontSize: "0.7rem"}}>{address}</Label2>
                    </RowDiv>
                    <RowDiv>                    
                        <Label2 style={{ width: "27%"}}>인플루언서 정보 제공</Label2>
                        <Label2  style={{ width: "73%", fontSize: "0.6rem",  color: "gray"}}>원활한 캠페인 진행을 위해 클라이언트가 요청한 사항을 입력해 주십시오.</Label2>
                    </RowDiv>
                    <RowDiv>
                        <Select>
                            <Option value="">할인판매 결제방법을 선택해주세요. (신용카드/계좌이체/무통장입금 중 택1)</Option>
                            <Option value="신용카드">신용카드</Option>
                            <Option value="계좌이체">계좌이체</Option>
                            <Option value="무통장입금">무통장입금</Option>
                        </Select>
                    </RowDiv>
                    <RowDiv  style={{marginTop: "60px", height: "50px"}}>                    
                        <Button  onClick={(e) => componentClicked("신청완료")} style={{width: "50%", fontSize: "1.2rem", fontWeight: "600", marginLeft: "20px"}} >신청완료</Button>
                        <Button  onClick={(e) => componentClicked(e)} style={{width: "40%", fontSize: "1.2rem", fontWeight: "600", marginLeft: "10px", background: "white", border: "solid 1px #7f05e6", color: "#7f05e6"}} >취소</Button>
                    </RowDiv>
                </Container>
            </CampaignApplyModal>
                {delivery_info_change}
        </BackgroundModal>
    )
};

export default Modal;