import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const InputEnabled = styled.input`
    width: 97%;
    height: 30px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[9]};
`;

const InputDisabled = styled.input`
    width: 97%;
    height: 30px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[1]};
    background: ${oc.gray[1]};
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Input = ({component_disabled, ...rest}) => {
    if (component_disabled === false) {
        return(
            <Wrapper>
                <InputEnabled {...rest} />
            </Wrapper>
        )  
    } else {
        return(
            <Wrapper>
                <InputDisabled {...rest} disabled/>
            </Wrapper>
        )  
    }
};

export default Input;