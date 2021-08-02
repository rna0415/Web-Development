import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LoginModal } from '../../Client'; //로그인모달 새로

// 상단 고정, 그림자
const Positioner = styled.div`
    width: 100%;
    height : 3.5rem;    
    background: #000000;
    display: flex;
    justify-content: center;
    align-Items: center;
    position: fixed;
    top: 0px;
    left: 0px;
`;

const Table = styled.table`
    width: 950px;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
    background: #000000;
    
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${media.wide`
        width: 992px;
    `}

`;

const Tbody = styled.tbody`
    width: 950px;
`;

const Tr = styled.tr`
`;
const Td = styled.td`
    
    color: white;
    font-size: 1.0rem;
    letter-spacing: 1px;
    font-family: 'Rajdhani';
    font-weight: 600;
    width: 10%;
    height: 1rem;

    ${media.wide`
    width: 992px;
    `}
    ${media.tablet`
        width: 100%;
    `}
`;

const LoginButton = styled(Link)`
    display: flex;
    color: #000000;
    font-size: 0.3rem;
    letter-spacing: 0.2px;
    font-family: 'Rajdhani';
    width: 100%;
    height: 70%;
    cursor: 'pointer';
    background-color: red;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
`;

const MemberInfoButton = styled.div`
    display: flex;
    color: white;
    font-size: 0.3rem;
    letter-spacing: 0.2px;
    font-family: 'Rajdhani';
    width: 100%;
    height: 70%;
    cursor: 'pointer';
    background: #000000;
    border-radius: 10px;
    color : red;
    border: solid 1px red;
    text-align: center;
    justify-content: center;

`;

const ClientHeader = ({children}) => {
    const history = useHistory();
    const [Login_modal, setLogin_modal] = useState([])
    const [pathname, setPathName] = useState("")
    const [trigger, setTrigger] = useState(0)
    
    const componentClicked = (event) => {
        let temp_pathname
        if (event === "campaign_register") {
            temp_pathname =  "/client/main/campaign_register"
        }else if (event === "compaign_manage") {
            temp_pathname = "/client/main/compaign_manage"
        }else if (event === "campaign_report") {
            temp_pathname = "/client/main/campaign_report"
        }else if (event === "influencer") {
            temp_pathname = "/"
        }
        setPathName(temp_pathname)
        setTrigger(trigger+1)
    }

    const setCloseModal = () => {
        // console.log("close clicked")
        //setCampaignApplyModalState(false)
        setLogin_modal([])
        setPathName("")
    }

    const CreateLoginModal = () => {
        // console.log("status clicked")
        // console.log(pathname)
        //setCampaignApplyModalState(true)
        let temp_campaign_status_modal = <LoginModal setCloseModal={setCloseModal} pathname = {pathname}/>
        setLogin_modal(temp_campaign_status_modal)
    }

    useEffect(() => {
        if (pathname === "") {
            setCloseModal()
        }else {
            if(pathname=== "/"){
                history.push({pathname:pathname})
            }else {
            CreateLoginModal()
            }
        }

        return () => {
        //   console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [trigger]);

    return (
        <Positioner className="positioner">
            <Table className="table">
                <Tbody className="tbody">
                    <Tr style={{ height: "4rem"}}>
                    </Tr>
                    <Tr className="tabs">
                        <Td style={{ width: '200px', textAlign: "center" }}>SampleLIFE</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_register")} >캠페인 등록</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("compaign_manage")} >캠페인 관리</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white",cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_report")} >캠페인 리포트</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', cursor: 'pointer' }} onClick={(e) => componentClicked("influencer")} >인플루언서</Td>
                        <Td style={{ width: '25px'}}></Td>
                        <Td style={{ width: '150px', fontSize: '0.5rem'}}> </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer' }}>
                            <LoginButton onClick={(e) => componentClicked("campaign_register")}>로그인</LoginButton>
                        </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer', textAlign: "center" }}>
                            <MemberInfoButton onClick={(e) => componentClicked("campaign_register")}>회원가입</MemberInfoButton>
                            </Td>
                    </Tr>
                    <Tr  style={{ height: "4rem"}}>
                    </Tr>
                </Tbody>
            </Table>
            {Login_modal}
        </Positioner>
    );
};

export default ClientHeader;