import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Modal} from '.';
import { useHistory } from "react-router-dom";
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





const SubmitButton2 = ({button_click_num,success1,success2,success3,tab1_info}) => {
    const history = useHistory();
    const [ modalOpen, setModalOpen ] = useState(false);



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