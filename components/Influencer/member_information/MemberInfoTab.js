import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import { FixModal, PasswordFixModal,PhoneFixModal,EssentialFixModal,AdditionalFixModal } from '.';

const Positioner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    justify-content: center;
`;

const RowDiv = styled.div`
    margin-top:5%;
    margin-bottom:5%;
    width: 100%;
    height: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

// 행
const Tr = styled.tr`
    border-bottom: 1px solid #e0e0e0;

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
const FixButton= styled.button`
    background-color: white;   
    border: 1px solid #adadad;
    padding: 8px 16px;
    color: #adadad;
    font-weight:600;
    cursor: pointer;

`;

// 셀
const TdLable = styled.td`
    width: 130px;
    background-color:#ededed;
    line-height: 2.5rem;
    
    text-indent: 10px;
`;

const TdLable1 = styled.td`
    width: 130px;
    background-color:#ededed;
    line-height: 2.5rem;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    text-indent: 10px;
`;

const MemberInfoTab = () =>{

    const [fixModal, setFixModal] = useState([])

    const setCloseModal = () => {
        console.log("close clicked")
        
        setFixModal([])
    }
    
    const ModalClicked = (e) => {
        console.log("modal clicked")
        if(e === "password"){
            let temp_campaign_status_modal = <PasswordFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
        }else if(e === "phone"){
            let temp_campaign_status_modal = <PhoneFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)

        }else if(e === "essential"){
            let temp_campaign_status_modal = <EssentialFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
            
        }else if(e === "additional"){
            let temp_campaign_status_modal = <AdditionalFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
        }
        // let temp_campaign_status_modal = <FixModal setCloseModal={setCloseModal} />
        //     setFixModal(temp_campaign_status_modal)

        }

    
    

    return(
        <Positioner>
            <RowDiv>
                <label style={{marginLeft: "-25px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>회원가입일자에 등록된 회원명님의 회원구분 등록정보입니다.</label>
            </RowDiv>
            {fixModal}
            <Table>
                <Tbody>
                    <Tr>
                        <StrongTd>
                            계정정보
                        </StrongTd>
                        <Td colSpan="5"></Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            이메일(아이디)  
                        </TdLable>
                        <Td colSpan ="5">
                            회원이메일  
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            비밀번호    
                        </TdLable>
                        <Td colSpan ="4">
                            회원이메일  
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('password')}>수정하기</FixButton> 
                            {/* password 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            이름    
                        </TdLable>
                        <Td colSpan ="5">
                            회원이름    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            휴대폰 번호 
                        </TdLable>
                        <Td colSpan ="4">
                            휴대폰 번호 
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('phone')}>수정하기</FixButton>
                            {/* phone 번호 변경 모달 팝업 */}
                        </Td>
                    </Tr>
                    
                    <TdBlank></TdBlank>

                    <Tr>
                        <StrongTd>
                            필수정보    
                        </StrongTd>
                        <Td colSpan ="4">
                            
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('essential')}>수정하기</FixButton>
                            {/* essential 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            성별    
                        </TdLable>
                        <Td colSpan ="5">
                            성별    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            출생년도    
                        </TdLable>
                        <Td colSpan ="5">
                            출생년도    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            활동지역    
                        </TdLable>
                        <Td colSpan ="5">
                            옵션1,옵션2,옵션3   
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            주요관심사  
                        </TdLable>
                        <Td colSpan ="5">
                            옵션1,옵션2,옵션3   
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            미디어정보  
                        </TdLable>
                        <Td colSpan ="5">
                            www.instagram.com 연결계정  
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <Td colSpan ="5">
                            www.youtube.com 연결계정    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            배송정보
                        </TdLable>
                        <TdLable1>
                            받는사람
                        </TdLable1>
                        <Td>
                            받는사람이름
                        </Td>
                        <TdLable1>
                            휴대폰 번호
                        </TdLable1>
                        <Td>
                            배송휴대폰번호
                        </Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            주소
                        </TdLable1>
                        <Td>
                            $주소
                        </Td>
                        <Td colSpan="3"></Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            계좌정보
                        </TdLable>
                        <TdLable1>
                            예금주
                        </TdLable1>
                        <Td>
                            예금주명
                        </Td>
                        <TdLable1>
                            은행명
                        </TdLable1>
                        <Td>
                            $은행명
                        </Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            계좌번호
                        </TdLable1>
                        <Td>
                            $계좌번호
                        </Td>
                        <Td colSpan="3"></Td>
                    </Tr>

                    <TdBlank></TdBlank>

                    <Tr>
                        <StrongTd>
                            추가정보    
                        </StrongTd>
                        <Td colSpan ="4">
                            
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('additional')}>수정하기</FixButton>
                            {/* additional 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            직업정보    
                        </TdLable>
                        <Td colSpan ="5">
                            옵션1,옵션2,옵션3   
                        </Td>
                    </Tr>
                    
                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            라이프정보
                        </TdLable>
                        <TdLable1>
                            결혼여부
                        </TdLable1>
                        <Td>
                            $결혼옵션
                        </Td>
                        <TdLable1>
                            자녀유무
                        </TdLable1>
                        <Td>
                            $자녀옵션
                        </Td>
                        <Td></Td>
                    </Tr>
                    
                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            반려동물
                        </TdLable1>
                        <Td>
                            옵션1, 옵션2 ,옵션3
                        </Td>
                        <Td colSpan ="3"></Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            황동지역
                        </TdLable>
                        <Td colSpan="5">
                            지역1, 지역2, 지역3
                        </Td>
                        
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            선호 캠페인
                        </TdLable>
                        <Td colSpan ="5">
                            옵션1
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}></TdLable>
                        <Td colSpan ="5">
                            옵션2
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <Td colSpan ="5">
                            옵션3
                        </Td>
                    </Tr>

                </Tbody>
            </Table>
        </Positioner>
    )
}
export default MemberInfoTab;