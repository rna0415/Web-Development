import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
  width: 650px;
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

  width: 33%;
  height: 3rem;
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

  width: 33%;
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
  if (active_tab === "id") {
    return (
      <Positioner>
        <Table className="table">
          <Tbody className="tbody">
            <Tr className="tabs">
              <ActiveTd onClick={() => componentClicked("id")}>
                계정정보 입력
              </ActiveTd>
              <InactiveTd onClick={() => componentClicked("password")}>
                필수정보입력
              </InactiveTd>
              <InactiveTd onClick={() => componentClicked("addtional")}>
                추가정보입력
              </InactiveTd>
            </Tr>
          </Tbody>
        </Table>
      </Positioner>
    );
  } else if (active_tab === "password") {
    return (
      <Positioner>
        <Table className="table">
          <Tbody className="tbody">
            <Tr className="tabs">
              <InactiveTd onClick={() => componentClicked("id")}>
                계정정보 입력
              </InactiveTd>
              <ActiveTd onClick={() => componentClicked("password")}>
                필수정보 입력
              </ActiveTd>
              <InactiveTd onClick={() => componentClicked("addtional")}>
                추가정보 입력
              </InactiveTd>
            </Tr>
          </Tbody>
        </Table>
      </Positioner>
    );
  } else if (active_tab === "addtional") {
    return (
      <Positioner>
        <Table className="table">
          <Tbody className="tbody">
            <Tr className="tabs">
              <InactiveTd onClick={() => componentClicked("id")}>
                계정정보 입력
              </InactiveTd>
              <InactiveTd onClick={() => componentClicked("password")}>
                필수정보 입력
              </InactiveTd>
              <ActiveTd onClick={() => componentClicked("addtional")}>
                추가정보 입력
              </ActiveTd>
            </Tr>
          </Tbody>
        </Table>
      </Positioner>
    );
  }
};
export default Tab;
