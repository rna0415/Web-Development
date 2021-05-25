import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

// 빈칸
const BlankDiv = styled.div`
    height: 40px;
    width: 100%;
    background: white;
    justify-content: center;
`;

const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 7;
`;

const CampaignApplyModal = styled.div`
    width: 800px;
    height: 350px;
    position: relative;
    box-sizing: border-box;
    margin: 200px auto;
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
    line-height: 60px;
    float: left;
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

const Input = styled.input`
    width: 240px;
    height: 100%;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[9]};
`;

const Button = styled.button`
    width: 100%;
    height: 20%;
    background: #7f05e6;
    color: white;
    float: left;
    font-size: 1.1rem;
    font-family: 'Rajdhani';
    text-align: center;
    justify-content: center;
    border: solid 0px;
    cursor: pointer;
`;

const postCodeStyle = {
    position: "absolute",
    width: "100%",
    height: "450px",
    top: "60px",
    left: "0px"
};

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const DeliveryInfoChangeModal = ({setCloseDeliveryModal, setDeliveryInfo}) => {
    const history = useHistory();
    const [ title, setTitleState ] = useState("배송 정보 변경");
    const [ name, setNameState ] = useState("");
    const [ phone_num, setPhoneNumState ] = useState("");
    const [ address1, setAddressState1 ] = useState("");
    const [ address2, setAddressState2 ] = useState("");
    const [ isAddress, setIsAddress] = useState("");
    const [ isZoneCode, setIsZoneCode] = useState("");
    const [ daum_post_code, setDaumPostCode ] = useState("");

    const componentClicked = (e) => {
        if (e === "신청완료"){
            console.log("신청완료 클릭")
        } else if (e === "우편번호찾기") {
            let temp_daum_post_code = <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
            setDaumPostCode(temp_daum_post_code)
            setTitleState("우편번호 찾기")
        } else if (e === "배송정보변경") {
            setDeliveryInfo(name, phone_num, address1, address2)
            setCloseDeliveryModal()
        } else {
            if (daum_post_code === "") {
                setCloseDeliveryModal()
            }else {
                setDaumPostCode("")
                setTitleState("배송 정보 변경")
            }
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "name_input"){
            setNameState(e.target.value)
        }else if (e.target.name === "phone_input"){
            setPhoneNumState(e.target.value)
        }else if (e.target.name === "address_input_1"){
            setAddressState1(e.target.value)
        }else if (e.target.name === "address_input_2"){
            setAddressState2(e.target.value)
        }
    }

    const handleComplete = (data) => {
        let fullAddress = data.address
        let extraAddress = ""
    
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
        }
        setIsZoneCode(data.zonecode)
        setIsAddress(fullAddress)
        setTitleState("배송 정보 변경")
        console.log(address1)
        // setDaumPostCode("")
        
    };

    useEffect(() => {
        // console.log('컴포넌트가 화면에서 나타남');
        // console.log(isZoneCode)
        // console.log(isAddress)
        setAddressState1("")


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        // console.log('컴포넌트가 화면에서 나타남');
        console.log(isZoneCode)
        // console.log(isAddress)
        if (isAddress !== "") {
            setAddressState1(isAddress)
        }else {
            setAddressState1("")
        }


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [isAddress]);

    useEffect(() => {
        console.log('[주소] 컴포넌트가 화면에서 나타남');
        console.log(address1)
        setDaumPostCode("")


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [address1]);
    return(
        <BackgroundModal>
            <CampaignApplyModal>
                <Positioner1>
                    <Label style={{ width: "25%", textAlign: "center"}}>
                        SampleLIFE
                    </Label>
                    <Label style={{ width: "75%"}}>
                        <Label style={{ width: "50%", marginLeft: "130px"}}>
                            {title}
                        </Label>
                    </Label>
                    <CloseButton onClick={(e) => componentClicked(e)} src="/images/campaign/x.png" />
                </Positioner1>
                <Container>
                    <RowDiv style={{ height: "30px", borderBottom: "solid 2px gray"}}>                    
                        <Label2 style={{ fontSize: "0.9rem", width: "100px", justifyContent: "center" }}>배송 정보</Label2>
                        <Label2 style={{ fontSize: "0.6rem", width: "460px", color: "gray", lineHeight: "20px"}}>제품 리뷰 캠페인에 참여하실 때 협찬품을 받으실 수 있는 주소를 등록하여 주십시오.</Label2>
                        <Label2 style={{ fontSize: "0.6rem", color: "gray", lineHeight: "20px"}}>기본 배송지로 설정</Label2>
                    </RowDiv>
                    <RowDiv style={{ height: "20px"}} /> 
                    <RowDiv style={{ height: "35px"}}>                    
                        <Label2 style={{ fontSize: "0.9rem", width: "100px", justifyContent: "center", lineHeight: "30px"}}>받는 사람</Label2>
                        <Input
                            name="name_input"
                            placeholder="수령인 이름을 입력하십시오"
                            value={name}
                            onChange={handleChange}
                        />
                        <Label2 style={{ fontSize: "0.9rem", width: "100px", justifyContent: "center", lineHeight: "30px"}}>휴대폰 번호</Label2>
                        <Input
                            name="phone_input"
                            placeholder="''-''을 제외하고 숫자만 입력해주세요"
                            value={phone_num}
                            onChange={handleChange}
                        />
                    </RowDiv>
                    <RowDiv style={{ height: "10px"}} /> 
                    <RowDiv style={{ height: "35px"}}>                    
                        <Label2 style={{ fontSize: "0.9rem", width: "100px", justifyContent: "center", lineHeight: "30px"}}>배송주소</Label2>
                        <Input style={{ width: "400px"}}
                            name="address_input_1"
                            value={address1}
                            onChange={handleChange}
                        />
                        <Button onClick={(e) => componentClicked("우편번호찾기")} style={{ marginLeft: "20px", width: "170px", height: "100%", fontSize: "1.0rem", background: "white", color: "black", border: "solid 1px black" }}> 우편번호 찾기</Button>
                    </RowDiv>
                    <RowDiv style={{ height: "10px"}} /> 
                    <RowDiv style={{ height: "35px"}}>                    
                        <Label2 style={{ fontSize: "0.9rem", width: "100px", justifyContent: "center", lineHeight: "30px"}}></Label2>
                        <Input style={{ width: "600px"}}
                            name="address_input_2"
                            value={address2}
                            onChange={handleChange}
                        />
                    </RowDiv>
                    <RowDiv style={{ height: "15px"}} />
                    <Button onClick={(e) => componentClicked("배송정보변경")} > 확인</Button>
                    {daum_post_code}
                </Container>
            </CampaignApplyModal>
        </BackgroundModal>
    )
};

export default DeliveryInfoChangeModal;