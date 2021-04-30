import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import {GetBackendIP} from '../../../settings';
import { ExecuteBackendAPI } from '../../../lib/api/restapi';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    height: 40px;
`;

const ButtonEnabled = styled.button`
    width: 100%;
    height: 100%;

    font-size: 1.0rem;
    color: white;
    cursor: pointer;
    text-align: center;

    background: ${oc.violet[7]};
    border: 1px solid ${oc.violet[9]};

    &:hover {
        background: ${oc.violet[8]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.violet[9]};
    }
`;

const ButtonDisabled = styled.button`
    width: 100%;
    height: 100%;

    font-size: 1.0rem;
    color: white;
    text-align: center;

    background: ${oc.violet[1]};
    border: 1px solid ${oc.violet[1]};
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const VerificationCheckButton = ({label, type, phoneNum, phoneRandomNum, phoneAuthNum, disabled}) => {
    const history = useHistory();

    const componentClicked = (e) => {
        //console.log('Phone Button clicked');
        //console.log(phoneAuthNum);
        //console.log(phoneRandomNum);

        var alert_message = "";
        let user_data = [];


        const checkClient = async () => {
            // 백엔드 서버 API 통신
            let params = phoneNum
            let request = 'GET'
            let backend_ip_address = GetBackendIP()
            if(type == "id"){
                //console.log(user_data)
                if (phoneAuthNum == phoneRandomNum){
                    let backend_api_url = "http://" + backend_ip_address + "/api/user/client/"
                    //console.log(client_id)
                    let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
                    //console.log('GET')
                    //console.log(backend_api_response.data)
                    let temp_user_data = backend_api_response.data
                    //console.log(user_data.length)
    
                        for(let i=0; i<temp_user_data.length; i++){
                            //console.log(temp_user_data)
                            if(temp_user_data[i].phone_num == phoneNum){
                                user_data.push(
                                    {
                                        type : "클라이언트",
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
                        if(temp_user_data[i].phone_num == phoneNum){
                            user_data.push(
                                {
                                    type : "인플루언서",
                                    name : temp_user_data[i].name,
                                    id : temp_user_data[i].instagram_id,
                                    join_date: temp_user_data[i].join_date,
                                    phone_num : temp_user_data[i].phone_num,
                                    instagram_address : "https://www.instagram.com/" + temp_user_data[i].instagram_id
                                }
                            )
                        }
                    }

                    console.log("보낼 데이터")
                    console.log(user_data)
                    //console.log(user_data[0])
                    history.push({
                        pathname: "/auth/find/id",
                        state: {user_data: user_data}
                    })
                } else {
                    alert_message = "입력하신 인증번호가 일치하지 않습니다.\n"
                    + "인증번호를 다시 입력해주세요."
        
                    alert(alert_message)
                }
            }else if (type == "password"){
                let backend_api_url = "http://" + backend_ip_address + "/api/user/client/"
                //console.log(client_id)
                let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
                //console.log('GET')
                //console.log(backend_api_response.data)
                let temp_user_data = backend_api_response.data
                //console.log(user_data.length)


                for(let i=0; i<temp_user_data.length; i++){
                    //console.log(temp_user_data)
                    if(temp_user_data[i].phone_num == phoneNum){
                        user_data.push(
                            {
                                type : "클라이언트",
                                name : temp_user_data[i].name,
                                client_id: temp_user_data[i].client_id,
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
                    if(temp_user_data[i].phone_num == phoneNum){
                        user_data.push(
                            {
                                type : "인플루언서",
                                name : temp_user_data[i].name,
                                id : temp_user_data[i].instagram_id,
                                join_date: temp_user_data[i].join_date,
                                phone_num : temp_user_data[i].phone_num,
                                instagram_address : "https://www.instagram.com/" + temp_user_data[i].instagram_id
                            }
                        )
                    }
                }
                //console.log(user_data)
                if (phoneAuthNum == phoneRandomNum){
                    console.log("보낼 데이터")
                    console.log(user_data)
                    //console.log(user_data[0])
                    history.push({
                        pathname: "/auth/find/password",
                        state: {user_data: user_data}
                    })
                } else {
                    alert_message = "입력하신 인증번호가 일치하지 않습니다.\n"
                    + "수신한 인증번호를 확인하여 재입력 하거나\n" 
                    + "인증번호를 재발급 받아 다시 시도해주시오."
        
                    alert(alert_message)
                }
            }
        }
        checkClient()
    }
    if (disabled == false) {
        return(
            <Wrapper>
                <ButtonEnabled onClick={(e) => componentClicked(e)}>{label}</ButtonEnabled>
            </Wrapper>
        )
    }else {
        return(
            <Wrapper>
                <ButtonDisabled onClick={(e) => componentClicked(e)} disabled>{label}</ButtonDisabled>
            </Wrapper>
        )
    }
};

export default VerificationCheckButton;