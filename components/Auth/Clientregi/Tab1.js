import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    width: 680px;
`;


const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

const Tr = styled.tr`
`;

const ActiveTd = styled.td`
    text-align: center;
    border-top: 2px solid;
    border-left: 2px solid;
    border-right: 2px solid;
    border-bottom: hidden;
    border-color: ${oc.violet[9]};

    font-family: 'Rajdhani';
    font-size: 0.8rem;
    font-weight: 900;
    color: ${oc.violet[9]};

    width: 50%;
    height: 3rem;

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

    width: 50%;
    height: 3rem;
    cursor: pointer;

    &:hover {
        background: ${oc.gray[1]};
        ${shadow(0)}
    }


`;


const Tab1 = ({active_tab, setActiveTab, setTab1Information, tab1_info}) => {
    const componentClicked = (event_id) => {
        setActiveTab(event_id)
    }

    const saveinfo2 = (e) =>{
        console.log(tab1_info)
        setTab1Information(tab1_info)
    }

    if (active_tab === "info1") {
        return(
            <Positioner>
                <Table className="table">
                    <Tbody className="tbody">
                        <Tr className="tabs">
                            <ActiveTd onClick={() => componentClicked("info1")}>계정정보 입력</ActiveTd>
                            <InactiveTd onClick={() => componentClicked("info2")}>필수정보 입력</InactiveTd>
                        </Tr>
                    </Tbody>
                </Table>
            </Positioner>
        )
    }else if (active_tab === "info2") {
        return(
            <Positioner>
                <Table className="table">
                    <Tbody className="tbody">
                        <Tr className="tabs">
                            <InactiveTd onClick={() => componentClicked("info1")}>계정정보 입력</InactiveTd>
                            <ActiveTd onClick={() => componentClicked("info2")}>필수정보 입력</ActiveTd>
                        </Tr>
                    </Tbody>
                </Table>
            </Positioner>
        )
    }
};

export default Tab1;