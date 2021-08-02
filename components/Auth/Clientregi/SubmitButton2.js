import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Modal} from '.';
import { useHistory } from "react-router-dom";
import { ExecuteBackendAPI } from '../../../lib/api/restapi';
import {GetBackendIP} from '../../../settings';
const Submitbtn1 = styled.button`
    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #efffff;
    border-radius: 3px;
    background: #7f05e6;
    width: 100%;
    font-size: 15px;
    color: white;
    display: block;

`;





const SubmitButton2 = ({button_click_num,success1,success2,success3,tab1_info,url,category1,selected_button,category2,setTab1Information,tab2info}) => {
    const history = useHistory();
    const [ modalOpen, setModalOpen ] = useState(false);

    const joinClient = async () => {
        console.log("탭2에서 받은 데이터:",tab2info)
        console.log("tab1_info:",tab1_info)

        
        // setTab1Information(tab2info)
        // let params = {
        //     'client_id': tab1_info.email.split("@")[0] + tab1_info.email.split("@")[1].split(".")[0],
        //     'email': tab1_info.email,
        //     'password': tab1_info.password,
        //     'company_name': tab1_info.companyName,
        //     'company_number': tab1_info.companyNumber,
        //     'manager_name': tab1_info.managerName,
        //     'manager_contact': tab1_info.managerContact,
        //     'company_url': url,
        //     'company_category': category1,
        //     'company_criteria': selected_button[0],
        //     'subscription_path': category2,
        // }


        let request = 'POST'
        let backend_ip_address = '127.0.0.1:8000'
        let backend_api_url = "http://" + backend_ip_address + "/api/client/"
        // console.log(params)
        let backend_api_response = await ExecuteBackendAPI(backend_api_url, tab2info, request);
        console.log(backend_api_response)

    }



    const closeModal = () => {
        setModalOpen(false);
    }

    const handleSubmit = () => {       
        if(success1 === false){
            setModalOpen(true);
        }
        if(success2 === false){
            setModalOpen(true);
        }
        if(success3 === false){
            setModalOpen(true);
        }if(button_click_num <= 0){
            setModalOpen(true);
        }
            
        if(success1 === true && success2 === true && success3 === true && button_click_num >= 1){
            console.log("회원가입 성공")
            joinClient();
            history.push({pathname: "/auth/MainService",
                state: {companyName:tab1_info.companyName}});
            
            

        }
    }
    //{disabled, setActiveTab, setTab1Information, tab1Info}
    // const history = useHistory();
    // // const history = useHistory
    // const handleSubmitted = (e) => {

    //     console.log("버튼눌렀을때 tab1info 넘겨주기전:",tab1Info)
    //     setTab1Information(tab1Info)
    
        //
    //     setActiveTab("info2")

    // }

    return(
        <div>
        <Modal open={ modalOpen } close={ closeModal }></Modal> 
        <Submitbtn1 onClick={() => handleSubmit()}>필수정보 저장</Submitbtn1>
        </div>
    )

}


export default SubmitButton2;