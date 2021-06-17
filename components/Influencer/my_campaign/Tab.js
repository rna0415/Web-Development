import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    float: left;
    justify-content: center;
    top: 58px;
`;

const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

//활성화 되었을때
const ActiveTd = styled.td`
    text-align: center;
    border-top: 2px solid;
    border-left: 2px solid;
    border-right: 2px solid;
    border-bottom: hidden;
    border-color: #7f05e6;

    font-family: "Rajdhani";
    font-size: 1rem;
    font-weight: 900;
    color: #7f05e6;

    width: 25%;
    height: 3rem;

    background: white;
`;

// 비활성돠 되었을 때
const InactiveTd = styled.td`
    text-align: center;
    border-top: 1px solid ${oc.gray[1]};
    border-right: 1px solid ${oc.gray[1]};
    border-bottom: 2px solid #7f05e6;

    font-family: "Rajdhani";
    font-size: 1rem;
    font-weight: 800;
    background: ${oc.gray[0]};
    ${shadow(0)}
    background-color: rgba( 255, 255, 255, 0.3 );

    width: 25%;
    height: 3rem;
    cursor: pointer;

    &:hover {
        background: ${oc.gray[1]};
        ${shadow(0)}
    }
`;

const Tab = ({ active_tab, setActiveTab }) => {
    const history = useHistory();

    const componentClicked = (event_id) => {
        setActiveTab(event_id);
    };

    // 클릭되면 아이디를 바꿈 바꾸고 선택된것을 활성화 시킴
    if (active_tab === "participation_campaign") {
        return (
        <Positioner>
            <Table className="table">
            <Tbody className="tbody">
                <Tr className="tabs">
                <ActiveTd onClick={() => componentClicked("participation_campaign")}>
                참여 캠페인
                </ActiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_settlement_details")}>
                    캠페인 정산 내역
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("clipping")}>
                스크랩
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_message")}>
                캠페인 메시지
                </InactiveTd>
                </Tr>
            </Tbody>
            </Table>
        </Positioner>
        );
    } else if (active_tab === "campaign_settlement_details") {
        return (
        <Positioner>
            <Table className="table">
            <Tbody className="tbody">
                <Tr className="tabs">
                <InactiveTd onClick={() => componentClicked("participation_campaign")}>
                참여 캠페인
                </InactiveTd>
                <ActiveTd onClick={() => componentClicked("campaign_settlement_details")}>
                캠페인 정산 내역
                </ActiveTd>
                <InactiveTd onClick={() => componentClicked("clipping")}>
                스크랩
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_message")}>
                캠페인 메시지
                </InactiveTd>
                </Tr>
            </Tbody>
            </Table>
        </Positioner>
        );
    } else if (active_tab === "clipping") {
        return (
        <Positioner>
            <Table className="table">
            <Tbody className="tbody">
                <Tr className="tabs">
                <InactiveTd onClick={() => componentClicked("participation_campaign")}>
                    참여 캠페인
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_settlement_details")}>
                    캠페인 정산 내역
                </InactiveTd>
                <ActiveTd onClick={() => componentClicked("clipping")}>
                    스크랩
                </ActiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_message")}>
                    캠페인 메시지
                </InactiveTd>
                </Tr>
            </Tbody>
            </Table>
        </Positioner>
        );
    }  else if (active_tab === "campaign_message") {
        return (
        <Positioner>
            <Table className="table">
            <Tbody className="tbody">
                <Tr className="tabs">
                <InactiveTd onClick={() => componentClicked("participation_campaign")}>
                    참여 캠페인
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("campaign_settlement_details")}>
                    캠페인 정산 내역
                </InactiveTd>
                <InactiveTd onClick={() => componentClicked("clipping")}>
                    스크랩
                </InactiveTd>
                <ActiveTd onClick={() => componentClicked("campaign_message")}>
                    캠페인 메시지
                </ActiveTd>
                </Tr>
            </Tbody>
            </Table>
        </Positioner>
        );
    }
};
export default Tab;
