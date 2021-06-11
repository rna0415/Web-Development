import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
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

    background-color: rgba( 255, 255, 255, 0.3 );

    width: 25%;
    height: 3rem;
    cursor: pointer;

    &:hover {
        background: ${oc.gray[1]};

    }
`;


const MemberTab = ({activeTab, setTabActive}) => {

    const componentClicked = (e) =>{ 
        console.log('activetab:',activeTab)       
        setTabActive(e)
        console.log('activetab:',activeTab)
    };
    
    if(activeTab === "memberInfo"){
        return(
            <Positioner>
                <Table>
                    <Tbody>
                        <Tr>
                            <ActiveTd onClick={() =>componentClicked("memberInfo")}>회원정보</ActiveTd>
                            <InactiveTd onClick={() =>componentClicked("myProfile")}>My프로필</InactiveTd>
                            <InactiveTd onClick={() =>componentClicked("inquery")}>1:1상담</InactiveTd>
                        </Tr>
                    </Tbody>
                </Table>
            </Positioner>
        );
    }
    else if(activeTab === "myProfile"){
        return(
            <Positioner>
                <Table>
                    <Tbody>
                        <Tr>
                            <InactiveTd onClick={() =>componentClicked("memberInfo")}>회원정보</InactiveTd>
                            <ActiveTd onClick={() =>componentClicked("myProfile")}>My프로필</ActiveTd>
                            <InactiveTd onClick={() =>componentClicked("inquery")}>1:1상담</InactiveTd>
                        </Tr>
                    </Tbody>
                </Table>
            </Positioner>
        );
    }
    else if(activeTab === "inquery"){
        return(
            <Positioner>
                <Table>
                    <Tbody>
                        <Tr>
                            <InactiveTd onClick={() =>componentClicked("memberInfo")}>회원정보</InactiveTd>
                            <InactiveTd onClick={() =>componentClicked("myProfile")}>My프로필</InactiveTd>
                            <ActiveTd onClick={() =>componentClicked("inquery")}>1:1상담</ActiveTd>
                        </Tr>
                    </Tbody>
                </Table>
            </Positioner>
        );
    }
};

export default MemberTab;