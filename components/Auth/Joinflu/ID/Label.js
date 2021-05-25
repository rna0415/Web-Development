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

const BlackLabelText = styled.a`
    font-family: 'Rajdhani';
    font-size: 0.8rem;
    font-weight: 900;
`;
const VioletLabelText = styled.a`
    font-family: 'Rajdhani';
    font-size: 0.8rem;
    font-weight: 900;
    color: ${oc.violet[9]};
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Label = ({find_id_msg_1, find_id_msg_2, find_id_msg_3, find_id_msg_4, find_id_msg_5}) => {
    return(
        <Wrapper>
            <BlackLabelText>{find_id_msg_1}&nbsp;</BlackLabelText>
            <VioletLabelText>{find_id_msg_2}</VioletLabelText>
            <BlackLabelText>{find_id_msg_3}&nbsp;</BlackLabelText>
            <VioletLabelText>{find_id_msg_4}</VioletLabelText>
            <BlackLabelText>{find_id_msg_5}</BlackLabelText>
        </Wrapper>
    )  
};

export default Label;