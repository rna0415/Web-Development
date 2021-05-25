import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
`;

const LabelText = styled.div`
    font-size: 0.8rem;
`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Label = ({label}) => {
    return(
        <Wrapper>
            <LabelText>{label}</LabelText>
        </Wrapper>
    )  
};

export default Label;