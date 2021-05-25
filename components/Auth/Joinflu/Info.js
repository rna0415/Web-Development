import React from "react";
import styled from "styled-components";
import oc from "open-color";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const RedLabel = styled.div`
  font-size: 0.7rem;
  padding: 5px;
  color: red;
`;

const greenLabel = styled.div`
  font-size: 0.7rem;
  padding: 5px;
  color: green;
`;

const GrayLabel = styled.div`
  font-size: 0.7rem;
  padding: 5px;
  color: gray;
`;

const EffectiveTimeLabel = styled.div`
  font-size: 0.7rem;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Info = ({ label, color }) => {
  if (color === "green") {
    return (
      <Wrapper>
        <greenLabel>{label}</greenLabel>
      </Wrapper>
    );
  } else if (color === "red") {
    return (
      <Wrapper>
        <RedLabel>{label}</RedLabel>
      </Wrapper>
    );
  } else if (color === "gray") {
    return (
      <Wrapper>
        <GrayLabel>{label}</GrayLabel>
      </Wrapper>
    );
  }
};

export default Info;
