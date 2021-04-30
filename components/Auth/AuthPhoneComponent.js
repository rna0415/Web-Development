import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ExecuteSMSAPI } from '../../lib/api/restapi';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    margin-top: 1rem;
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Text = styled.div`
    font-size: 1rem;
    color: ${oc.green[6]};
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
const AuthPhoneComponent = ({label,button_name,setPhoneRandomNum, value, ...rest}) => {
    const [ labelState, setlabelState ] = useState("'-'을 제외하고 숫자만 입력해주세요.");
    const [ buttonState, setbuttonState ] = useState(false);
    const onClickButton_1 = () => setlabelState('인증번호가 전송되었습니다.');
    const onClickButton_2 = () => setbuttonState(true);

    const componentClicked = (phone_num, setPhoneRandomNum, e) => {
        console.log('Phone Button clicked');
        console.log(phone_num);
        sendSMS(phone_num, setPhoneRandomNum);
        //console.log(onClickEnter);
        onClickButton_1()
        onClickButton_2()
    }
    
    const sendSMS = async (phone_num, setPhoneRandomNum) => {
        var timestamp = String(new Date().getTime());
        //console.log(timestamp);
        var accessKey = "0JbWhl0cCBvfeYqGD4Z3"
        //var temp_url = "https://sens.apigw.ntruss.com"
        var temp_uri = "/sms/v2/services/" + "ncp:sms:kr:265082096020:sms_test" + "/messages"
        //var url = temp_url + temp_uri
        const options = {
            headers : {
                'Content-Type': "application/json; charset=UTF-8",
                'x-ncp-apigw-timestamp': timestamp,
                'x-ncp-iam-access-key': accessKey,
                'x-ncp-apigw-signature-v2': makeSignature(timestamp, accessKey, temp_uri)
            }
        }
        //console.log(headers);
        var auth_num = "123456"
        var ranVal = Math.floor(Math.random()*(999999-100000+1)) + 100000;
        setPhoneRandomNum(ranVal)
        var message = "[IPC Partners] 인증번호 [" + ranVal + "]를 입력해주세요."
        var phone = "01082730930"
    
        var body = {
            type: "SMS",
            contentType: "COMM",
            countryCode: '82',
            from: "01082730930",
            subject: "subject",
            content: message,
            messages: [{to: phone_num}]
        }
        //console.log(body);
    
        var sms_api_response = await ExecuteSMSAPI(temp_uri, body, options);
        
    }
    
    
    const makeSignature = (timestamp, accessKey, uri) => {
        var CryptoJS = require("crypto-js");
        var SHA256 = require('crypto-js/sha256');
        var Base64 = require('crypto-js/enc-base64');
        var space = " ";				// one space
        var newLine = "\n";				// new line
        var method = "POST";				// method
    
        var secretKey = "DOO9i78YaC4RIjwG5PpWru86gpAraqWMWF4aWOl9";			// secret key (from portal or Sub Account)
    
        var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
        hmac.update(method);
        hmac.update(space);
        hmac.update(uri);
        hmac.update(newLine);
        hmac.update(timestamp);
        hmac.update(newLine);
        hmac.update(accessKey);
    
        var hash = hmac.finalize();
    
        return hash.toString(CryptoJS.enc.Base64);
    }

    if (buttonState == false){
        return (
            <Wrapper>
                <Label>{label}</Label>
                <Input {...rest}/>
                <PhoneAuthButton onClick={(e) => componentClicked(value, setPhoneRandomNum, e)} >{button_name}</PhoneAuthButton>
                <Text>{labelState}</Text>
            </Wrapper>
        );    
    } else {
        return (
            <Wrapper>
                <Label>{label}</Label>
                <Input {...rest}/>
                <PhoneAuthButton onClick={(e) => componentClicked(value, setPhoneRandomNum, e)} disabled>{button_name}</PhoneAuthButton>
                <Text>{labelState}</Text>
            </Wrapper>
        );
    }
};

export default AuthPhoneComponent;