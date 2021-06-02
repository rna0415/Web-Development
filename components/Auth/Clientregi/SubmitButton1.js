import {React} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
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

const Submitbtn2 = styled.button`
    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #efffff;
    border-radius: 3px;
    background: #E8E8E8;
    width: 100%;
    font-size: 15px;
    color: black;
    display: block;

`;



const SubmitButton1 = ({disabled, setActiveTab, setTab1Information, tab1Info}) => {
    const history = useHistory();
    // const history = useHistory
    const handleSubmitted = (e) => {
        // e.preventDefault();
        // console.log('clicked');
        // console.log('success:', success);
        // console.log('selectedFile:', selectedFile);
        // console.log('email:', email);
        // console.log('password:', password);
        // console.log('passwordConfirm:', passwordConfirm);
        // console.log('companyName:', companyName);
        // console.log('managerName:', managerName);
        // console.log('managerContact:', managerContact);
        // console.log('agreement:', agreement);
        // setSuccess(true)
        
        // //console.log(this.email)
        // if (email.length === 0) {
        //     console.log("이메일을 입력해주세요.")
        //     setSuccess(false)
        // }
    
        
        // //console.log(this.state.password)
        // //console.log(this.state.passwordConfirm)
        // if (password.length === 0 || passwordConfirm.length === 0){
        //     console.log("비밀번호를 입력해주세요.")
        //     setSuccess(false)
        // }
        // else if (password !== passwordConfirm){
        //     console.log("비밀번호가 다릅니다.")
        //     setSuccess(false)
        // }
        console.log("버튼눌렀을때 tab1info 넘겨주기전:",tab1Info)
        setTab1Information(tab1Info)
    
        
        setActiveTab("info2")

        // if(success === true){
        //     history.push({pathname: "/auth/MainService"});
        // }
        
        //history.push({pathname: "/auth/MainService"});
        

    }
    if (disabled == false) {
        return(
            <div>
            <Submitbtn2 onClick={(e) => handleSubmitted(e)} disabled>계정정보 저장</Submitbtn2>
            </div>
        )
    }else {
        return(
            <div>
            <Submitbtn1 onClick={(e) => handleSubmitted(e)}>계정정보 저장</Submitbtn1>
            </div>
        )
    }
}

export default SubmitButton1;