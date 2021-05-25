import React, { useState } from "react";
import styled from "styled-components";
import oc from "open-color";
import { ExecuteSMSAPI } from "../../../lib/api/restapi";
import { shadow } from "../../../lib/styleUtils";
import { GetBackendIP } from "../../../settings";
import { ExecuteBackendAPI } from "../../../lib/api/restapi";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const PhoneAuthButton = styled.button`
  width: 100%;
  height: 40px;
  background: white;
  border: 2px solid ${oc.violet[9]};

  font-family: "Rajdhani";
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
  font-family: "Rajdhani";
  font-size: 0.7rem;
  font-weight: 900;
  color: ${oc.violet[1]};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
// 안에 있는 것을 다 들고온다
const VerificationNumButton = ({
  button_name,
  name,
  value,
  setPhoneRandomNum,
  onChange,
  component_disabled,
  ...rest
}) => {
  const [buttonState, setbuttonState] = useState(false);
  const [infoExistState, setinfoExistState] = useState(false);


  // 클릭했을 때 

  
  const componentClicked = (phone_num, setPhoneRandomNum, e) => {
    console.log("Phone Button clicked");
    console.log(phone_num);
    var alert_message = "";
    let user_data = [];
    // 클릭하면 그냥 번호를 보냄
    sendSMS(phone_num,setPhoneRandomNum)
  };
  
 
  const sendSMS = async (phone_num, setPhoneRandomNum) => {
    var timestamp = String(new Date().getTime());
    //console.log(timestamp);
    var accessKey = "0JbWhl0cCBvfeYqGD4Z3";
    //var temp_url = "https://sens.apigw.ntruss.com"
    var temp_uri =
      "/sms/v2/services/" + "ncp:sms:kr:265082096020:sms_test" + "/messages";
    //var url = temp_url + temp_uri
    const options = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "x-ncp-apigw-timestamp": timestamp,
        "x-ncp-iam-access-key": accessKey,
        "x-ncp-apigw-signature-v2": makeSignature(
          timestamp,
          accessKey,
          temp_uri
        ),
      },
    };
    //console.log(headers);
    var ranVal = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setPhoneRandomNum(ranVal);
    var message = "[IPC Partners] 인증번호 [" + ranVal + "]를 입력해주세요.";

    var body = {
      type: "SMS",
      contentType: "COMM",
      countryCode: "82",
      from: "01082730930",
      subject: "subject",
      content: message,
      messages: [{ to: phone_num }],
    };
    //console.log(body);

    var sms_api_response = await ExecuteSMSAPI(temp_uri, body, options);
  };

  const makeSignature = (timestamp, accessKey, uri) => {
    var CryptoJS = require("crypto-js");
    var SHA256 = require("crypto-js/sha256");
    var Base64 = require("crypto-js/enc-base64");
    var space = " "; // one space
    var newLine = "\n"; // new line
    var method = "POST"; // method

    var secretKey = "DOO9i78YaC4RIjwG5PpWru86gpAraqWMWF4aWOl9"; // secret key (from portal or Sub Account)

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
  };

  if (component_disabled === false) {
    return (
      <Wrapper>
        <PhoneAuthButton
          onClick={(e) => componentClicked(value, setPhoneRandomNum, e)}
        >
          {button_name}
        </PhoneAuthButton>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <PhoneAuthDisableButton
          onClick={(e) => componentClicked(value, setPhoneRandomNum, e)}
          disabled
        >
          {button_name}
        </PhoneAuthDisableButton>
      </Wrapper>
    );
  }
};

export default VerificationNumButton;
