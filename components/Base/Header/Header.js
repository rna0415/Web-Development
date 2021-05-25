import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const LogoutButton = styled(Link)`
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

const InactiveTd = styled.td`
    text-align: center;
    border-top: 1px solid ${oc.gray[1]};
    border-right: 1px solid ${oc.gray[1]};
    border-bottom: 2px solid ${oc.violet[9]};

    font-family: 'Rajdhani';
    font-size: 0.8rem;
    background: ${oc.gray[0]}; 
    ${shadow(0)}

    width: 20%;
    height: 3rem;
    cursor: pointer;

    &:hover {
        background: ${oc.gray[1]};
        ${shadow(0)}
    }


`;


// 해더의 내용
const HeaderContents = styled.td`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}
`;

// 로고
const Logo = styled.div`
    font-size: 1.0rem;
    letter-spacing: 1px;
    justify-content: center;
    color: white;
    font-family: 'Rajdhani';
    font-weight: 600;
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = ({children}) => {
    const history = useHistory();
    
    const componentClicked = (event) => {
        if (event === "campaign_status") {
            history.push({
                pathname: "/influencer/main/campaign_status"
            })
        }else if (event === "my_campaign") {
            history.push({
                pathname: "/influencer/main/my_campaign"
            })
        }
    }
    return (
        <Positioner className="positioner">
            <Table className="table">
                <Tbody className="tbody">
                    <Tr style={{ height: "1rem"}}>
                    </Tr>
                    <Tr className="tabs">
                        <Td style={{ width: '200px', textAlign: "center" }}>SampleLIFE</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer' }} onClick={(e) => componentClicked("campaign_status")}>캠페인 현황</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', borderRight: "1px solid white", cursor: 'pointer'   }} onClick={(e) => componentClicked("my_campaign")}>My 캠페인</Td>
                        <Td style={{ width: '125px', textAlign: "center", fontSize: '0.8rem', cursor: 'pointer'  }} onClick={(e) => componentClicked("client")}>클라이언트</Td>
                        <Td style={{ width: '25px'}}></Td>
                        <Td style={{ width: '150px', fontSize: '0.5rem'}}> timkim0923님 환영합니다!</Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer' }}>
                            <LogoutButton to="/auth/login">로그아웃</LogoutButton>
                        </Td>
                        <Td style={{ width: '60px', fontSize: '0.5rem', cursor: 'pointer', textAlign: "center" }}>
                            <MemberInfoButton onClick={(e) => componentClicked("my_info")}>회원정보</MemberInfoButton>
                            </Td>
                    </Tr>
                    <Tr  style={{ height: "1rem"}}>
                    </Tr>
                </Tbody>
            </Table>
        </Positioner>
    );
};

export default Header;