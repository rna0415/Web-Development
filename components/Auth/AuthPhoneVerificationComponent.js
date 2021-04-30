import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    margin-top: 1rem;
`;

const Text = styled.div`
    font-size: 1rem;
    color: ${oc.green[6]};
    margin-top: 0.5rem;
`;

const GreenText = styled.div`
    font-size: 1rem;
    color: ${oc.green[6]};
    margin-top: 0.5rem;
`;

const RedText = styled.div`
    font-size: 1rem;
    color: ${oc.red[6]};
    margin-top: 0.5rem;
`;

const Input = styled.input`
    width: 74%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

const PhoneAuthButton = styled.button`
    float: right;
    margin-right: -1rem;
    width: 25%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.0rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const AuthPhoneVerificationComponent = ({button_name,value,phoneRandomNum, ...rest}) => {
    const [ labelState, setLabelState ] = useState("인증번호를 입력해주세요.");
    const SetVerificationMessage = () => setLabelState('인증되었습니다.');
    const SetDenialMessage = () => setLabelState("인증번호를 다시 확인해 주세요.");

    const [ clickState, setClickState ] = useState(false);
    const setclickTrueState = () => setClickState(true);

    const [ verificationState, setVerificationState ] = useState(false);
    const setVerificationTrueState = () => setVerificationState(true);
    const setVerificationFalseState = () => setVerificationState(false);

    const componentClicked = (verification_num, e) => {
        console.log('Phone Button clicked11');
        console.log(verification_num);
        console.log(phoneRandomNum);
        setclickTrueState()
        if (verification_num == phoneRandomNum){
            SetVerificationMessage()
            setVerificationTrueState()
        } else {
            SetDenialMessage()
            setVerificationFalseState()
        }

    }

    if (clickState == false){
        return (
            <Wrapper>
                <Input {...rest}/>
                <PhoneAuthButton onClick={(e) => componentClicked(value, e)}>{button_name}</PhoneAuthButton>
                <Text>{labelState}</Text>
            </Wrapper>
        )
    }else {
        if (verificationState == true){
            return (
                <Wrapper>
                    <Input {...rest}/>
                    <PhoneAuthButton onClick={(e) => componentClicked(value, e)}>{button_name}</PhoneAuthButton>
                    <GreenText>{labelState}</GreenText>
                </Wrapper>
            )
        }else {
            return (
                <Wrapper>
                    <Input {...rest}/>
                    <PhoneAuthButton onClick={(e) => componentClicked(value, e)}>{button_name}</PhoneAuthButton>
                    <RedText>{labelState}</RedText>
                </Wrapper>
            )
        }
    }
};

export default AuthPhoneVerificationComponent;