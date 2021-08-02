import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {Inquery_Message_Table} from "./";



const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 5;
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 600px;
 
`;

// 로고
const LogoWrapper = styled.div`
    background: #7f05e6;
    height: 3rem;
    display: flex;
    justify-content: end;
`;



// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;



// 로그인 CSS
const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
`;



const RowDiv = styled.div`
    width: 100%;
    height: 40px;
`;

const Label = styled.div`
    float: left;
    font-size: 1rem;
    font-family: 'Rajdhani';
    font-weight: 500;
    height: 20px;
    color:white
`;




const Button1 = styled.button`
    width: 160px;
    height: 50px;
    color: white;
    font-size:1rem;
    background-color: #7f05e6;
    border: 1px solid black;
    border-radius:5px;
    cursor:pointer;
    font-weight:600;
`;

const checkStyle = {
    borderRadius: '5px',
    position: 'relative',
    height: '16px',
    width: '16px',
    border: '1px solid blue',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#41B883',
    cursor: 'pointer',
    color: '#41B883'
}


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

// 행
const Tr = styled.tr`

`;
// 행
const TdBlank = styled.td`
    padding-top: 20px;
`;
const StrongTd= styled.td`
    line-height: 2.5rem;
    font-weight:900;
    font-size:1.2rem;
    

`;
const Td = styled.td`
    line-height: 2.5rem;
    text-indent: 10px;
    

    
    
`;

const TdLable = styled.td`
    width: 130px;
    line-height: 2.5rem;
    
    text-indent: 10px;
`;

const Flexdiv = styled.div`
    display:flex;
    justify-content:center;
`;


const SuccessModal = ({setCloseModal2,setCloseModal,inqueryCategory,facebook_info, influencerID_From_DB}) => {

    const history = useHistory();
    

    const closeClicked = (e) => {
        if (e === 'close'){
            setCloseModal2()
            setCloseModal()

        }
    }


      


    return (
        <BackgroundModal>      
            <Positioner>
                <ShadowedBox>
                    <LogoWrapper>
                        <Label  style={{marginTop:'10px',marginLeft:'10px', fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>1:1상담 신청 완료</Label>
                    </LogoWrapper>
                    <Contents style={{textAlign:'center'}}>

                        {influencerID_From_DB}님의 {inqueryCategory}를 제출하였습니다.
                        <br></br>
                        영업일 기준 2일 이내에 SampleLife 운영자가 회신해 드리겠습니다.
                        <br></br>
                        <br></br>
                        감사합니다.                                            
                        
                        <AlignerCenter>  
                            <Button1 style={{backgroundColor:'#E6E6FA', color:'black'}} onClick={(e) => closeClicked('close')}>확인</Button1>
                        </AlignerCenter>
                    </Contents>
                </ShadowedBox>
            </Positioner>     
        </BackgroundModal>

    );
};
export default SuccessModal;


