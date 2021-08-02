import React, {useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const LogoutButton = styled(Link)`
    display: flex;
    font-size: 0.3rem;
    letter-spacing: 0.2px;
    font-family: 'Rajdhani';
    width: 100%;
    height: 70%;
    cursor: 'pointer';
    background-color: red;
    color : white;
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
    background-color: #000000;
    color : red;
    border-radius: 10px;
    border: solid 1px red;
    text-align: center;
    justify-content: center;

`;

const ClientHeaderLogined = () => {
    const history = useHistory();

    const componentClicked = (event) => {
        console.log(event)
        if (event === "campaign_register") {
            history.push({
                pathname: "/client/main/campaign_registration",
            })
        }else if (event === "campaign_manage") {
            history.push({
                pathname: "/client/main/campaign_manage",
            })
        }else if (event ==="campaign_report"){
            history.push({
                pathname: "/client/main/campaign_report",
            })
        }else if (event ==="influencer"){
            history.push({
                pathname: "/influencer/main/",
            })
        }
    }
    return (
        <Positioner className="positioner">
            <Table className="table">
                <Tbody className="tbody">
                    <Tr style={{ height: "4rem"}}>
                    </Tr>
                    <Tr className="tabs">
                        <Td style={{ width: '200px', textAlign: "center" }}>SampleLIFE</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_register")} >캠페인 등록</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_manage")} >캠페인 관리</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white",cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_report")} >캠페인 리포트</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', cursor: 'pointer' }} onClick={(e) => componentClicked("influencer")} >인플루언서</Td>
                        <Td style={{ width: '25px'}}></Td>
                        <Td style={{ width: '150px', fontSize: '0.5rem', color: "red"}}> '{}'님 반갑습니다</Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer' }}>
                            <LogoutButton to="/">로그아웃</LogoutButton>
                        </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer', textAlign: "center" }}>
                            <MemberInfoButton onClick={(e) => componentClicked("my_info")}>회원정보</MemberInfoButton>
                            </Td>
                    </Tr>
                    <Tr  style={{ height: "4rem"}}>
                    </Tr>
                </Tbody>
            </Table>
        </Positioner>
    );
};

export default ClientHeaderLogined;