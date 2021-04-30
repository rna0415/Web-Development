import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    height: 30px;
`;

const ButtonEnabled = styled.button`
    width: 50%;
    font-size: 1.0rem;
    text-align: center;

    background: ${oc.gray[3]};
    border: 1px solid ${oc.gray[5]};


`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Button = ({label, type, phoneNum, phoneRandomNum, phoneAuthNum, disabled}) => {
    const history = useHistory();

    const componentClicked = (e) => {
        console.log('Find Button clicked');
    }

    return(
        <Wrapper className="AuthFindButton_Wrapper">
            <ButtonEnabled onClick={(e) => componentClicked(e)}>{label}</ButtonEnabled>
            <ButtonEnabled onClick={(e) => componentClicked(e)}>{label}</ButtonEnabled>
        </Wrapper>
    )
};

export default Button;