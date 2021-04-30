import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

const BlackLabel = styled.div`
    font-size: 0.7rem;
    padding: 5px;
    color: black;
`;

const RedLabel = styled.div`
    font-size: 0.7rem;
    padding: 5px;
    padding-left: 0px;
    color: red;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const TimeInfo = ({minutes, seconds, time_state}) => {
    if (time_state === true) {
        return(
            <Wrapper>
                <BlackLabel>인증 유효시간:</BlackLabel>
                <RedLabel>{minutes}분{seconds}초</RedLabel>
            </Wrapper>
        )
    }
    else {
        return(
            <Wrapper>
                <RedLabel></RedLabel>
            </Wrapper>
        )
    }
};

export default TimeInfo;