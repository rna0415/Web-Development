import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ExecuteSMSAPI } from '../../../lib/api/restapi';
import { shadow } from '../../../lib/styleUtils';
import {GetBackendIP} from '../../../settings';
import { ExecuteBackendAPI } from '../../../lib/api/restapi';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;
const PhoneAuthButton = styled.button`
    width: 100%;
    height: 32px;
    background: white;
    border: 2px solid ${oc.violet[9]};

    font-family: 'Rajdhani';
    font-size: 0.7rem;
    font-weight: 900;
    color: ${oc.violet[9]};

    padding: 0px;
    cursor: pointer;

    &:hover {
        background: white;
        ${shadow(0)}
    }

`;

const PhoneAuthDisableButton = styled.button`
    width: 100%;
    height: 32px;
    background: white;
    border: 2px solid ${oc.violet[1]};
    font-family: 'Rajdhani';
    font-size: 0.7rem;
    font-weight: 900;
    color: ${oc.violet[1]};
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const VerificationNumButton = ({button_name, name, value, setPhoneRandomNum, onChange, component_disabled, ...rest}) => {
    const [ buttonState, setbuttonState ] = useState(false);
    const [ infoExistState, setinfoExistState ] = useState(false);

    const componentClicked = (phone_num, setPhoneRandomNum, e) => {
        console.log('Phone Button clicked');
        console.log(phone_num);
        var alert_message = "";
        let user_data = []

        const checkClient = async () => {
            // 백엔드 서버 API 통신
            let params = phone_num
            let request = 'GET'
            let backend_ip_address = GetBackendIP()
            let backend_api_url = "http://" + backend_ip_address + "/api/user/client/"
            //console.log(client_id)
            let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
            //console.log('GET')
            //console.log(backend_api_response.data)
            let temp_user_data = backend_api_response.data
            //console.log(user_data.length)

            for(let i=0; i<temp_user_data.length; i++){
                //console.log(temp_user_data[i])
                if(temp_user_data[i].phone_num == phone_num){
                    user_data.push(
                        {
                            type : "client",
                            name : temp_user_data[i].name,
                            id : temp_user_data[i].email,
                            join_date: temp_user_data[i].join_date,
                            phone_num : temp_user_data[i].phone_num
                        }
                    )
                }
            }

            backend_api_url = "http://" + backend_ip_address + "/api/user/influencer/"
            //console.log(client_id)
            backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
            //console.log('GET')
            //console.log(backend_api_response.data)
            temp_user_data = backend_api_response.data
            //console.log(user_data.length)

            for(let i=0; i<temp_user_data.length; i++){
                //console.log(temp_user_data[i])
                if(temp_user_data[i].phone_num == phone_num){
                    user_data.push(
                        {
                            type : "influencer",
                            name : temp_user_data[i].name,
                            id : temp_user_data[i].instagram_id,
                            join_date: temp_user_data[i].join_date,
                            phone_num : temp_user_data[i].phone_num
                        }
                    )
                }
            }
            console.log(user_data)

            if (user_data.length > 0) {
                // if(phone_num.length == 10) {
                //     alert_message = "고객님의 휴대폰(" + phone_num.substring(0,3) + "-" + phone_num.substring(3,6) + "-" + phone_num.substring(6,10)
                // } else if(phone_num.length == 11) {
                //     alert_message = "고객님의 휴대폰(" + phone_num.substring(0,3) + "-" + phone_num.substring(3,7) + "-" + phone_num.substring(7,11)
                //     + ")으로 인증번호가 발송되었습니다.\n"
                //     + "수신한 인증번호를 입력해 주십시오."
                // }
                //alert(alert_message)
                sendSMS(phone_num, setPhoneRandomNum);
                //console.log(onClickEnter);
                console.log("Send message");
                setbuttonState(true)
            } else {
                // alert_message = "등록한 회원정보와 일치하지 않습니다.\n"
                // + "이 방법으로 이메일(아이디)를 찾을 수 없으면 고객센터(help@samplelife.co.kr)로 문의해주십시오."
                // alert(alert_message)
                console.log("Fail");
                setPhoneRandomNum(0)
            }

        }
        checkClient()
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
        var ranVal = Math.floor(Math.random()*(999999-100000+1)) + 100000;
        setPhoneRandomNum(ranVal)
        var message = "[IPC Partners] 인증번호 [" + ranVal + "]를 입력해주세요."
    
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

    if (component_disabled === false) {
        return (
            <Wrapper>
                <PhoneAuthButton onClick={(e) => componentClicked(value, setPhoneRandomNum, e)}>{button_name}</PhoneAuthButton>
            </Wrapper>
        );    
    }else {
        return (
            <Wrapper>
                <PhoneAuthDisableButton onClick={(e) => componentClicked(value, setPhoneRandomNum, e)} disabled>{button_name}</PhoneAuthDisableButton>
            </Wrapper>
        );
    }
};

export default VerificationNumButton;