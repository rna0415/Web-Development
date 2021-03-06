import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LoginModal } from '../../Home';

// 상단 고정, 그림자
const Positioner = styled.div`
    width: 100%;
    background: #7f05e6;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
`;

const Table = styled.table`
    width: 950px;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
    background: #7f05e6;
    
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
    color: #7f05e6;
    font-size: 0.3rem;
    letter-spacing: 0.2px;
    font-family: 'Rajdhani';
    width: 100%;
    height: 70%;
    cursor: 'pointer';
    background: white;
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
    background: #7f05e6;
    border-radius: 10px;
    border: solid 1px white;
    text-align: center;
    justify-content: center;

`;

const Header = ({children}) => {
    const history = useHistory();
    const [Login_modal, setLogin_modal] = useState([])
    const [pathname, setPathName] = useState("")
    const [trigger, setTrigger] = useState(0)
    
    const componentClicked = (event) => {
        let temp_pathname
        if (event === "campaign_status") {
            temp_pathname =  "/influencer/main/campaign_status"
        }else if (event === "my_campaign") {
            temp_pathname = "/influencer/main/my_campaign"
        }else if (event === "client") {
            temp_pathname = "/influencer/main/client"
        }
        setPathName(temp_pathname)
        setTrigger(trigger+1)
    }

    const setCloseModal = () => {
        console.log("close clicked")
        //setCampaignApplyModalState(false)
        setLogin_modal([])
        setPathName("")
    }

    const CreateLoginModal = () => {
        console.log("status clicked")
        console.log(pathname)
        //setCampaignApplyModalState(true)
        let temp_campaign_status_modal = <LoginModal setCloseModal={setCloseModal} pathname = {pathname}/>
        setLogin_modal(temp_campaign_status_modal)
    }

    useEffect(() => {
        if (pathname === "") {
            setCloseModal()
        }else {
            CreateLoginModal()
        }

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [trigger]);

    return (
        <Positioner className="positioner">
            <Table className="table">
                <Tbody className="tbody">
                    <Tr style={{ height: "1rem"}}>
                    </Tr>
                    <Tr className="tabs">
                        <Td style={{ width: '200px', textAlign: "center" }}>SampleLIFE</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_status")} >캠페인 현황</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("my_campaign")} >My 캠페인</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', cursor: 'pointer' }} onClick={(e) => componentClicked("client")} >클라이언트</Td>
                        <Td style={{ width: '25px'}}></Td>
                        <Td style={{ width: '150px', fontSize: '0.5rem'}}> </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer' }}>
                            <LoginButton onClick={(e) => componentClicked("campaign_status")}>로그인</LoginButton>
                        </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer', textAlign: "center" }}>
                            <MemberInfoButton onClick={(e) => componentClicked("campaign_status")}>회원가입</MemberInfoButton>
                            </Td>
                    </Tr>
                    <Tr  style={{ height: "1rem"}}>
                    </Tr>
                </Tbody>
            </Table>
            {Login_modal}
        </Positioner>
    );
};

export default Header;