import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Input1, Check, CompanyNo, Info1, Label1, SubmitButton1, Infotab2} from '.';
import oc from 'open-color';
import {isEmail, isStrongPassword, isAlphanumeric} from 'validator';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

// import axios from 'axios';
// import { ExecuteBackendAPI } from '../../lib/api/restapi';
// import { GetBackendIP } from '../../settings';

import { faChalkboardTeacher, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Positioner = styled.div`
`;


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

// 행
const Tr = styled.tr`
`;
// 행
const TdBlank = styled.td`
    padding-top: 20px;
`;
const TD = styled.td`
`;

// 셀
const TdLable = styled.td`
    width: 150px;
`;
// 셀
const TdButton = styled.td`
    width: 100px;
`;

const InputCompanyNumber = styled.input`
    width: 90%;
    height: 30px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[9]};
`;


// const Font = styled.div`
//     font-family: Rajdhani;
//     font-size: 0.8rem;
// `;
// const Label = styled.div`
//     position: absolute;
//     top: 41%;
//     left: 5%;
// `;

const Button = styled.button`
    width: 80px;
    height: 31px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.8rem;
    background: ${oc.gray[1]};
    border-color: ${oc.gray[9]};
    color: black;

    text-align: left;
    font-weight: 500;
`;


const App = styled.div`
    height:250px;
    display:flex;    
`;

const Form = styled.div`
    margin: auto;
    padding:10px;
    border: 1px solid #ffffff;
    border-radius:5px;
    width:660px;
    display:block;

`;




const Checkdiv = styled.div`
    margin:auto;
    padding:10px;
    border: 1px solid #c9c9c9;
    background: #ffffff;
    width: 570px;
    display: block;
`;

const CheckBtn = {
    color:"#7f05e6",
    position: "relative",
    left:"580px",
    bottom:"15px",
  }

const Info_msg = styled.h3`
    font-size: 0.7rem;
    font-weight: 200;

`;


// const Form = ({children}) => {
//     <div style = {appStyle}>
//         <form style = {formStyle} onSubmit = {this.handleSubmit}>
//         {children}
//         </form>
//     </div>
// }
const Infotab1 = ({setActiveTab, setTab1Information,tab1_info}) => {
    const [email, setEmail] = useState("");
    const [email_info_msg, setEmailInfoMSG] = useState("");
    const [email_info_msg_color, set_email_info_color] = useState("red");
    const [email_check_visibility,set_email_check_visibility] =useState("hidden")

    const [password, setPassword] = useState("");
    const [password_info_msg, setPasswordInfoMSG] = useState("");
    const [password_info_msg_color, set_password_info_color] = useState("red");
    const [password_check_visibility,set_password_check_visibility] =useState("hidden")

    const [password_confirm, setpasswordConfirm] = useState("");
    const [passwordConfirm_info_msg, setPasswordConfirmInfoMSG] = useState("");
    const [passwordConfirm_info_msg_color, set_passwordConfirm_info_color] = useState("red");
    const [passwordConfirm_check_visibility,set_passwordConfirm_check_visibility] =useState("hidden")

    const [company_name, setCompanyName] = useState("");
    const [companyName_info_msg, setCompanyNameInfoMSG ] = useState("");
    const [companyName_check_visibility,set_companyName_check_visibility] =useState("hidden")

    const [registration_number, setRegistrationNumber] = useState("");
    const [companyNumber1, setCompanyNumber1] = useState("");
    const [companyNumber2, setCompanyNumber2] = useState("");
    const [companyNumber3, setCompanyNumber3] = useState("");
    const [companyNumber_info_msg, setCompanyNumberInfoMSG ] = useState("");
    const [companyNumber_check_visibility,set_companyNumber_check_visibility] =useState("hidden")

    const [company_category, setCompanyRegistration] = useState(null);
    const [fileName_info_msg, setFileNameInfoMSG ] = useState("");
    const [selectedFile_check_icon_color,set_selectedFile_check_icon_color] =useState("white")

    const [manager_name, setMangerName] = useState("");
    const [managerName_info_msg, setManagerNameInfoMSG ] = useState("");
    const [managerName_check_visibility,set_managerName_check_visibility] =useState("hidden")

    const [manager_contact, setManagerContact] = useState("");
    const [managerContact_info_msg, setManagerContactInfoMSG ] = useState("");
    const [managerContact_check_visibility,set_managerContact_check_visibility] =useState("hidden")

    const [agreement, setAgreement] = useState(false);
    const [event_info, setAgreement1] = useState(false);
    const [service_usage, setAgreement2] = useState(false);
    const [privacy_info, setAgreement3] = useState(false);
    const [agreement_info_msg, setAgreementInfoMSG ] = useState("");
    const [agreement_check_icon_color,set_agreement_check_icon_color] =useState("white")
    const [agreement_check_visibility,set_agreement_check_visibility] =useState("hidden")

    const [success, setSuccess] = useState({
        emailSuccess: false,
        passwordSuccess: false,
        passwordConfirmSuccess: false,
        companyNameSuccess: false,
        registrationNumberSuccess: false,
        companyRegistrationSuccess: false,
        managerNameSuccess: false,
        managerContactSuccess: false,
    });
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [passwordConfirmSuccess, setPasswordConfirmSuccess] = useState(false);
    const [companyNameSuccess, setCompanyNameSuccess] = useState(false);
    const [registrationNumberSuccess, setRegistrationNumberSuccess] = useState(false);
    const [companyRegistrationSuccess, setCompanyRegistrationSuccess] = useState(false);
    const [managerNameSuccess, setManagerNameSuccess] = useState(false);
    const [managerContactSuccess, setManagerContactSuccess] = useState(false);
    // const [trigger, setTrigger] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    
    const [tab1Info, setTab1Info] = useState({
        company_name: "",
        company_registration: "",
        company_category: "",
        company_url: "",
        email: "",
        manager_contact:"",
        manager_name: "",
        password: "",
        registration_number: "",
        terms:{
            event_info: false,
            service_usage: false,
            privacy_info: false
        },
        criteria_info: []

        
    });

    const history = useHistory();

    //tab1Info data를 상위 컴포넌트인 MainService2에 전달, MainService는 받은 데이터를 tab1_info 리스트에 넣어서 다시 tab1Info에게 전달 -> 전달받은 데이터를 이용해 state값 초기화를 변경.
    useEffect(() => {
        console.log('setState변화 감지');
        console.log("유즈이펙트 석세스 상태: ",emailSuccess)
        console.log("tab1_info: ", tab1_info) 
        
        //만약 넘겨받은 데이터가 있다면 아래 코드를 실행
        if (tab1_info != null){
            
            // console.log("객체형:", Object.values(tab1_info))
            // setEmail(Object.values(tab1_info)[0])
            // setPassword(Object.values(tab1_info)[1])
            // setpasswordConfirm(Object.values(tab1_info)[2])
            // setCompanyName(Object.values(tab1_info)[3])
            // setRegistrationNumber(Object.values(tab1_info)[4])
            // setMangerName(Object.values(tab1_info)[5])
            // setManagerContact(Object.values(tab1_info)[6])
            // setAgreement(Object.values(tab1_info)[7])
            // setAgreement1(Object.values(tab1_info)[8])
            // setAgreement2(Object.values(tab1_info)[9])
            // setAgreement3(Object.values(tab1_info)[10])
            setEmailSuccess(true)
            setPasswordSuccess(true)
            setPasswordConfirmSuccess(true)
            setCompanyNameSuccess(true)
            setRegistrationNumberSuccess(true)
            setCompanyRegistrationSuccess(true)
            setManagerNameSuccess(true)
            setManagerContactSuccess(true)
            setAgreement(tab1_info.terms.agreement) //이것들은 상위 컴포넌트, MainService2로 넘겨줬던 데이터가 MainService2의 새로운 리스트에 저장된후 넘겨받은 데이터
            setAgreement1(tab1_info.terms.event_info)
            setAgreement2(tab1_info.terms.service_usage)
            setAgreement3(tab1_info.terms.privacy_info)
            
            console.log("버튼상태3",buttonDisabled)

            setTab1Info(tab1_info)
            
            console.log("버튼상태1",buttonDisabled)
            tab1_info = null
            console.log("tab_info상태는1:",tab1_info)

        }else{           

            console.log("버튼상태2",buttonDisabled)
            console.log("tab_info상태는2:",tab1_info)


        }
    }, []);


        // --------------------------------------------------------
        // let newTempTab1Info = {
        //     email: email,
        //     password: password,
        //     password_confirm: password_confirm,
        //     company_name: company_name,
        //     registration_number: registration_number,
        //     manager_name: manager_name,
        //     manager_contact: manager_contact,
        //     agreement: agreement,
        //     event_info: event_info,
        //     service_usage: service_usage,
        //     privacy_info: privacy_info
        // }
        // setTab1Info(newTempTab1Info)
        // console.log("tempTab1Info1 바뀐거: ",newTempTab1Info)
        // console.log("tempTab1Info1 바뀐거: ",tab1Info)
        // --------------------------------------------------------
        


    //입력한 데이터를 tab1Info 리스트에 담은 뒤, 담아진 데이터와 success의 조건에따라 버튼 활성화 / 비활성화
    useEffect(() => {
        console.log("데이터 상시확인: ",tab1Info)

        if (emailSuccess && passwordSuccess && passwordConfirmSuccess && companyNameSuccess && registrationNumberSuccess && managerNameSuccess && managerContactSuccess && service_usage && privacy_info){
            setButtonDisabled(true)
            console.log("버튼상태3",buttonDisabled)

        }else{
            setButtonDisabled(false)
   
        }

    }, [emailSuccess, passwordSuccess, passwordConfirmSuccess, companyNameSuccess, registrationNumberSuccess, managerNameSuccess, managerContactSuccess, service_usage, privacy_info, tab1Info]);

    //input값 입력시 setState와 동시에 tab1Info 리스트에 데이터를 담음
    const handleChange = (e) => {
        if (e.target.name === "email"){
            setEmail(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.email = e.target.value
            setTab1Info(temp_tab1Info);
            console.log('1:',tab1Info)

        }else if (e.target.name === "password"){
            setPassword(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.password = e.target.value
            setTab1Info(temp_tab1Info);  
            console.log('2:',tab1Info)

        }else if (e.target.name === "password_confirm"){
            setpasswordConfirm(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.password_confirm = e.target.value
            setTab1Info(temp_tab1Info);
            console.log('3:',tab1Info)

        }else if (e.target.name === "company_name"){
            setCompanyName(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.company_name = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('4:',tab1Info)


        }else if (e.target.name === "companyNumber1"){
            setCompanyNumber1(e.target.value);
        }else if (e.target.name === "companyNumber2"){
            setCompanyNumber2(e.target.value);
        }else if (e.target.name === "companyNumber3"){
            setCompanyNumber3(e.target.value);

        // }else if (e.target.name === "registration_number"){
        //     setRegistrationNumber(e.target.value);
        //     // setTrigger(trigger+1)
        //     let temp_tab1Info = tab1Info
        //     temp_tab1Info.registration_number = e.target.value
        }else if (e.target.name === "manager_name"){
            setMangerName(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.manager_name = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('6:',tab1Info)

        }else if (e.target.name === "manager_contact"){
            setManagerContact(e.target.value);
            // setTrigger(trigger+1)
            let temp_tab1Info = tab1Info
            temp_tab1Info.manager_contact = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('7:',tab1Info)

        }

    }

    //인풋박스 클릭후 그외 바깥을 클릭할시 활성화_ 조건에 따라 에러메세지 송출, 체크박스 활성화
    const CursorFocusOut = (e) => {
        if (e.target.name === "email"){
            if (e.target.value === "") {
                setEmail(e.target.value)
                setEmailInfoMSG("이메일을 입력해주세요")
                setEmailSuccess(false)
                console.log("첫번째 석세스의 상태: ",emailSuccess)
                set_email_check_visibility("hidden")
                set_email_info_color("red")
            }else {
                if (isEmail(e.target.value) == true) {
                    setEmail(e.target.value)
                    setEmailSuccess(true)
                    setEmailInfoMSG("사용가능한 이메일입니다.")
                    set_email_check_visibility("visible");
                    set_email_info_color("#7f05e6")
                    
                    // if (success === true) {
                    //     setEmailInfoMSG("true")
                    // }else {
                    //     setEmailInfoMSG("false")
                    // }
                    
                    // if(success === false){
                    //     setButtonDisabled(false)
                    // }
                    // else{
                    //     setButtonDisabled(true)
                    // }
                    console.log("이프문 석세스의 상태: ",emailSuccess)
                } else {
                    setEmail(e.target.value)
                    setEmailInfoMSG("이메일 주소 형식이 아닙니다. 올바른 이메일 형식으로 입력해 주세요.")
                    setEmailSuccess(false)
                    console.log("엘스문 석세스 상태: ",emailSuccess)
                    set_email_check_visibility("hidden")
                    set_email_info_color("red")
                    
                }
            }
        }
        else if (e.target.name === "password"){
            if (e.target.value === "") {
                setPassword(e.target.value)
                setPasswordInfoMSG("비밀번호를 입력해주세요")
                console.log(passwordSuccess)
                setPasswordSuccess(false)
                set_password_check_visibility("hidden")  
                set_password_info_color('red')              
            } else {
                if (isStrongPassword(e.target.value)==true){
                    setPassword(e.target.value)
                    setPasswordInfoMSG("안전한 비밀번호입니다.")
                    setPasswordSuccess(true)
                    console.log(passwordSuccess) 
                    set_password_check_visibility("visible")   
                    set_password_info_color("#7f05e6") 
                    
                } else{
                    setPassword(e.target.value)                    
                    setPasswordInfoMSG("안전하지 않은 비밀번호입니다. 영문, 숫자, 특수기호를 조합하여 재설정해 주세요.")
                    setPasswordSuccess(false)
                    console.log(passwordSuccess)
                    set_password_check_visibility("hidden")  
                    set_password_info_color('red')  
                    
                }
            
            }
        }else if (e.target.name === "password_confirm"){
            if (password !== password_confirm){
                setpasswordConfirm(e.target.value)
                setPasswordConfirmInfoMSG("비밀번호가 일치하지 않습니다. 재입력해 주세요.")
                setPasswordConfirmSuccess(false)
                console.log(passwordConfirmSuccess)
                set_passwordConfirm_check_visibility("hidden")
                set_passwordConfirm_info_color("red")
                
            } else {
                setpasswordConfirm(e.target.value)
                setPasswordConfirmInfoMSG("비밀번호가 일치합니다.")
                setPasswordConfirmSuccess(true)
                console.log(passwordConfirmSuccess)
                set_passwordConfirm_check_visibility('visible')
                set_passwordConfirm_info_color('#7f05e6')
                
            }
        }else if(e.target.name === "company_name"){
            if (e.target.value === "") {
                setCompanyName(e.target.value)
                setCompanyNameInfoMSG("회사명을 정확히 입력하세요.")
                setCompanyNameSuccess(false)
                set_companyName_check_visibility('hidden')
                // console.log(success)
                
            } else {
                setCompanyName(e.target.value)
                setCompanyNameInfoMSG("")
                setCompanyNameSuccess(true)
                set_companyName_check_visibility('visible')
                // console.log(success)
                
            }

        }else if (e.target.name==="companyNumber1" || e.target.name === "companyNumber2" || e.target.name === "companyNumber3"){
            if (e.target.name==="companyNumber1"){
                if(e.target.value.length === 3){
                    setCompanyNumber1(e.target.value);
                    if(companyNumber2.length === 2 && companyNumber3.length === 5){
                        setCompanyNumberInfoMSG("");
                        setRegistrationNumberSuccess(true);
                        set_companyNumber_check_visibility('visible');
                        let totalCompanyNumber = e.target.value + companyNumber2 + companyNumber3;
                        setRegistrationNumber(totalCompanyNumber);
                        let temp_tab1Info = tab1Info;
                        temp_tab1Info.registration_number = totalCompanyNumber;
                        setTab1Info(temp_tab1Info);
                    } else{
                        if(companyNumber2.length !== 2){
                            setCompanyNumberInfoMSG("사업자 등록번호 중간 2자리를 정확히 입력하세요.");
                        }
                        else{
                            setCompanyNumberInfoMSG("사업자 등록번호 뒤 5자리를 정확히 입력하세요.");
                        }
                        setRegistrationNumberSuccess(false);
                        set_companyNumber_check_visibility('hidden');
                    }
                }
                else{
                    setCompanyNumber1(e.target.value);
                    setCompanyNumberInfoMSG("사업자 등록번호 앞 3자리를 정확히 입력하세요.");
                    setRegistrationNumberSuccess(false);
                    set_companyNumber_check_visibility('hidden');
                }
            }
            else if (e.target.name==="companyNumber2"){
                if(e.target.value.length === 2){
                    setCompanyNumber2(e.target.value);
                    if(companyNumber1.length === 3 && companyNumber3.length === 5){
                        setCompanyNumberInfoMSG("");
                        setRegistrationNumberSuccess(true);
                        set_companyNumber_check_visibility('visible');
                        let totalCompanyNumber = companyNumber1 + e.target.value + companyNumber3;
                        setRegistrationNumber(totalCompanyNumber);
                        let temp_tab1Info = tab1Info;
                        temp_tab1Info.registration_number = totalCompanyNumber;
                        setTab1Info(temp_tab1Info);
                    } else{
                        if(companyNumber1.length !== 3){
                            setCompanyNumberInfoMSG("사업자 등록번호 앞 3자리를 정확히 입력하세요.");
                        }
                        else{
                            setCompanyNumberInfoMSG("사업자 등록번호 뒤 5자리를 정확히 입력하세요.");
                        }
                        setRegistrationNumberSuccess(false);
                        set_companyNumber_check_visibility('hidden');
                    }
                }
                else{
                    setCompanyNumber2(e.target.value);
                    setCompanyNumberInfoMSG("사업자 등록번호 중간 2자리를 정확히 입력하세요.");
                    setRegistrationNumberSuccess(false);
                    set_companyNumber_check_visibility('hidden');
                }
            }
            else{
                if(e.target.value.length === 5){
                    setCompanyNumber3(e.target.value);
                    if(companyNumber1.length === 3 && companyNumber2.length === 2){
                        setCompanyNumberInfoMSG("");
                        setRegistrationNumberSuccess(true);
                        set_companyNumber_check_visibility('visible');
                        let totalCompanyNumber = companyNumber1 + companyNumber2 + e.target.value;
                        setRegistrationNumber(totalCompanyNumber);
                        let temp_tab1Info = tab1Info;
                        temp_tab1Info.registration_number = totalCompanyNumber;
                        setTab1Info(temp_tab1Info);
                    } else{
                        if(companyNumber1.length !== 3){
                            setCompanyNumberInfoMSG("사업자 등록번호 앞 3자리를 정확히 입력하세요.");
                        }
                        else{
                            setCompanyNumberInfoMSG("사업자 등록번호 중간 2자리를 정확히 입력하세요.");
                        }
                        setRegistrationNumberSuccess(false);
                        set_companyNumber_check_visibility('hidden');
                    }
                }
                else{
                    setCompanyNumber3(e.target.value);
                    setCompanyNumberInfoMSG("사업자 등록번호 뒤 5자리를 정확히 입력하세요.");
                    setRegistrationNumberSuccess(false);
                    set_companyNumber_check_visibility('hidden');
                }
            }
        // }else if (e.target.name === "registration_number"){
        //     if (e.target.value === "") {
        //         setCompanyNumber1(e.target.value)
        //         setCompanyNumberInfoMSG("사업자 등록번호를 정확히 입력하세요.")
        //         set_companyNumber_check_icon_color('white')
        //         setRegistrationNumberSuccess(false)
        //         // console.log(success)
                
        //     } else {
        //         setCompanyNumber1(e.target.value)
        //         setCompanyNumberInfoMSG("")
        //         setRegistrationNumberSuccess(true)
        //         set_companyNumber_check_icon_color('#7f05e6')
        //         // console.log(success)
                
        //     }



        }else if (e.target.name === "manager_name"){
            if (e.target.value === "") {
                setMangerName(e.target.value)
                setManagerNameInfoMSG("담당자 성함을 정확히 입력해 주세요.")
                setManagerNameSuccess(false)
                set_managerName_check_visibility('hidden')
                // console.log(success)
                

            }else {
                setMangerName(e.target.value)
                setManagerNameInfoMSG("")
                setManagerNameSuccess(true)
                set_managerName_check_visibility('visible')
                // console.log(success)
                
            }
        }else if (e.target.name === "manager_contact"){
            if (e.target.value === "") {
                setManagerContact(e.target.value)
                setManagerContactInfoMSG("담당자 연락처를 정확히 입력해 주세요.")
                setManagerContactSuccess(false)
                console.log(managerContactSuccess)
                set_managerContact_check_visibility('hidden')
                

            }else {
                setManagerContact(e.target.value)
                setManagerContactInfoMSG("")
                setManagerContactSuccess(true)
                console.log(managerContactSuccess)
                set_managerContact_check_visibility('visible')
                
            }

        }
    }
    
    //체크박스 클릭시, 클릭한 체크박스 외의 함수를 실행, tab1Info리스트에 boolean 값 추가
    const checkboxCheck = (e) =>{
        
        //0번 체크박스인 전체동의 체크박스
        if(e.target.name === "agreement"){
            let temp_tab1Info = tab1Info
            temp_tab1Info.terms.agreement = false
            setTab1Info(temp_tab1Info); 

            //전체동의가 체크되어있을경우에 클리했을때, 모든 체크 비활성화
            if(agreement === true){ 
                setAgreement(false)
                setAgreement1(false)
                setAgreement2(false)
                setAgreement3(false)
                setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")   
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.agreement = false
                temp_tab1Info.terms.event_info = false
                temp_tab1Info.terms.service_usage = false
                temp_tab1Info.terms.privacy_info = false
                setTab1Info(temp_tab1Info); 

            //전체동의가 비어있을때 클릭했을때, 모든 체크 활성화
            }else{ 
                setAgreement(true) 
                setAgreement1(true)
                setAgreement2(true)
                setAgreement3(true)
                setAgreementInfoMSG("")   
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.agreement = true
                temp_tab1Info.terms.event_info = true
                temp_tab1Info.terms.service_usage = true
                temp_tab1Info.terms.privacy_info = true
                setTab1Info(temp_tab1Info); 

            }
        }
        //1번 체크박스인 선택 체크박스
        else if(e.target.name === "event_info"){            

            //누를때마다 전체체크 비활성화            
            let temp_tab1Info = tab1Info
            temp_tab1Info.terms.agreement = false
            setTab1Info(temp_tab1Info); 

            setAgreement(false)

            //선택한 1번 체크가 활성화되어있을때 눌렀을때 그 체크 비활성화
            if(event_info === true){
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.event_info = false
                setTab1Info(temp_tab1Info); 
                 
                setAgreement1(false)

            //선택한 1번 체크가 비호라성화되어있었을때 눌렀을때, 그 체크 활성화
            }else{ 
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.event_info = true
                setTab1Info(temp_tab1Info); 

                setAgreement1(true)
                
                // 선택한 1번 체크가 비활성화 되어있을때, 2,3번 체크가 활성화되어있을때 클릭하면 전체 체크 활성화
                if(service_usage === true && privacy_info === true){
                   
                    let temp_tab1Info = tab1Info
                    temp_tab1Info.terms.agreement = true
                    setTab1Info(temp_tab1Info); 

                    setAgreement(true)
                }
            }
        }
        //2번 체크박스인 첫번째 필수 체크박스
        else if(e.target.name === "service_usage"){

            //누를때마다 전체체크 비활성화 
            let temp_tab1Info = tab1Info
            temp_tab1Info.terms.agreement = false
            setTab1Info(temp_tab1Info); 

            setAgreement(false)

            //선택한 2번체크가 활성화되어있을때 클릭할때 체크 비활성화
            if(service_usage === true){

                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.service_usage = false
                setTab1Info(temp_tab1Info); 

                setAgreement2(false)

                setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
            
            // 선택한 2번체크가 비활성화 되어있을시에 클릭할때, 2번체크 활성화
            }else{
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.service_usage = true
                setTab1Info(temp_tab1Info); 
                
                setAgreement2(true)

                setAgreementInfoMSG("")

                // 선택한 2번체크가 비활성화 되어있을시에 클릭할때, 만약 1,3번 체크가 활성화 되어있다면 전체동의 활성화
                if(event_info === true && privacy_info === true){
                    
                    let temp_tab1Info = tab1Info
                    temp_tab1Info.terms.agreement = true
                    setTab1Info(temp_tab1Info); 

                    setAgreement(true)

                    setAgreementInfoMSG("")
                }
                //선택한 2번체크가 비활성화 되어있고 거기에 만약 3번 체크박스가 비어있다면 알림메세지
                else if(privacy_info === false){
                    setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
                }
            }
        }
        //3번 체크박스인 두번째 필수 체크박스
        else if(e.target.name === "privacy_info"){
            
            //누를때마다 전체체크 비활성화            
            let temp_tab1Info = tab1Info
            temp_tab1Info.terms.agreement = false
            setTab1Info(temp_tab1Info); 

            setAgreement(false)

            //만약 3번 체크박스가 활성화되어있을시에 클릭하면 체크해제, 알림메세지 송출
            if(privacy_info === true){

                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.privacy_info = false
                setTab1Info(temp_tab1Info); 

                setAgreement3(false)

                setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
            
            //만약 3번 체크박스가 비활성화 되어있을시에 클릭하면 체크
            }else{
                let temp_tab1Info = tab1Info
                temp_tab1Info.terms.privacy_info = true
                setTab1Info(temp_tab1Info); 

                setAgreement3(true)

                setAgreementInfoMSG("")
                
                //3번 체크박스가 비활성화 되어있고 1,2번 체크가 활성화 되어있을시에 3번 체크박스 클릭하면 전체동의 체크, 알림메세지 비활성화
                if(event_info === true && service_usage === true){
                    let temp_tab1Info = tab1Info
                    temp_tab1Info.terms.agreement = true
                    setTab1Info(temp_tab1Info); 

                    setAgreement(true)
                    
                    setAgreementInfoMSG("")

                }// 3번 체크박스가 비활성화 되어있고 2번체크가 비활성화 되어있을시에 3번 체크박스 클릭하면 알림메세지 송출                               
                else if(service_usage === false){
                    setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
                }
            }
        }

    }

    // const allChecked = (e) =>{

                
    //     setAgreement("")
    //     if (e.target.checked === false){
    //         setAgreement("")
    //         setAgreement1("");
    //         setAgreement2("");
    //         setAgreement3("");  
    //         setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")   
                 
    //     }else{                
    //         setAgreement("checked")
    //         setAgreement1("checked");
    //         setAgreement2("checked");
    //         setAgreement3("checked"); 
    //         setAgreementInfoMSG("")       

    //     }   
         
    // }
    // const inidivualChecked1 = (e) =>{
        
    //     setAgreement("");

    //     if (event_info === "checked"){
    //         setAgreement1("")  

    //     }else{
    //         if (service_usage === "checked" && privacy_info === "checked"){
    //             setAgreement("checked")
    //         }
    //         setAgreement1("checked")

    //     }
     
    // }
    // const inidivualChecked2 = (e) =>{

    //     setAgreement("");
        
    //     if (service_usage === "checked"){
    //         setAgreement2("")
    //         console.log('2-1:',service_usage)
    //         setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.") 
    //         // set_agreement_check_icon_color('white') 


    //     }else{

    //         setAgreement2("checked")
    //         console.log('2-z',service_usage)
    //         setAgreementInfoMSG("") 
    //         // set_agreement_check_icon_color('#7f05e6') 

            
    //         if (event_info === "checked" && privacy_info === "checked"){
    //             setAgreement("checked")
    //             console.log('2-2:',service_usage) 
    //             setAgreementInfoMSG("") 
    //             // set_agreement_check_icon_color('#7f05e6')
                
    //         }else if(privacy_info === ""){
    //             setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
    //             console.log('2-2-2:',privacy_info)
    //             // set_agreement_check_icon_color('white') 
    //         }
    //     }
    // }
    // const inidivualChecked3 = (e) =>{

    //     setAgreement("");

    //     if (privacy_info === "checked"){
    //         setAgreement3("")  
    //         console.log('3-1:',privacy_info)
    //         setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
    //         // set_agreement_check_icon_color('white')  
    //         // let temp_tab1Info = tab1Info
    //         // temp_tab1Info.privacy_info = e.target.checked_bool
    //         // setTab1Info(temp_tab1Info); 
            
    //     }else{

    //         setAgreement3("checked")  
    //         console.log('3-z',privacy_info)
    //         setAgreementInfoMSG("") 
    //         // set_agreement_check_icon_color('#7f05e6') 


    //         if (event_info === "checked" && service_usage === "checked"){
    //             setAgreement("checked")
    //             console.log('3-2:',privacy_info)
    //             setAgreementInfoMSG("")
    //             // set_agreement_check_icon_color('#7f05e6') 
                
    //         }else if(service_usage === ""){
    //             setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요.")
    //             console.log('3-2-2:',privacy_info)
    //             // set_agreement_check_icon_color('white') 
    //         }     
    //     }      
    // }
    // const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log('clicked');
        // console.log('success:', success);
        // console.log('company_category:', company_category);
        // console.log('email:', email);
        // console.log('password:', password);
        // console.log('password_confirm:', password_confirm);
        // console.log('company_name:', company_name);
        // console.log('manager_name:', manager_name);
        // console.log('manager_contact:', manager_contact);
        // console.log('agreement:', agreement);
        // setSuccess(true)
    
        // //console.log(this.email)
        // if (email.length === 0) {
        //     console.log("이메일을 입력해주세요.")
        //     setSuccess(false)
        // }
    
        
        // //console.log(this.state.password)
        // //console.log(this.state.password_confirm)
        // if (password.length === 0 || password_confirm.length === 0){
        //     console.log("비밀번호를 입력해주세요.")
        //     setSuccess(false)
        // }
        // else if (password !== password_confirm){
        //     console.log("비밀번호가 다릅니다.")
        //     setSuccess(false)
        // }
    
    
    
    
        // if(success === true){
        //     history.push({pathname: "/auth/MainService"});
        // }
//파일업로드
    // const hiddenFileInput = React.useRef(null);

    const fileHandle = (e) => {
        //hiddenFileInput.current.click();
        // console.log("test")
    }
//
    // const handleFileput=(e)=> {
    //     setCompanyRegistration(e.target.files[0],            
    //     )
    // }


    
//
    return (
        
        <App>
            <Form>
                <Positioner>
                    <Table className="table">
                        <Tbody className="tbody">
                            <Tr>
                            <TdBlank>                                
                            </TdBlank>
                            </Tr>
                            <Tr>
                                <TD colSpan="4" style={{paddingBottom:'15px'}}>
                                    <Label1 label="클라이언트 계정을 생성하여 SampleLife의 마케팅 플랫폼 서비스를 이용할 수 있습니다."/>
                                </TD>
                                
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="이메일"/>
                                    <FontAwesomeIcon style={{color: '#7f05e6', visibility:email_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1
                                        type="text" 
                                        name="email"
                                        placeholder="이메일"
                                        value={tab1Info.email}
                                        onBlur={CursorFocusOut}
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={email_info_msg} color ={email_info_msg_color}/>                                      
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="비밀번호"/>
                                    <FontAwesomeIcon style={{color:'#7f05e6',visibility:password_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1
                                        type="password" 
                                        name="password"
                                        placeholder="비밀번호"
                                        value={tab1Info.password}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">          
                                    <Info1 label={password_info_msg} color ={password_info_msg_color}/>                       
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="비밀번호 재확인"/>
                                    <FontAwesomeIcon style={{color:'7f05e6', visibility:passwordConfirm_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1                                      
                                        type="password" 
                                        name="password_confirm"
                                        placeholder="비밀번호 재확인"
                                        value={tab1Info.password_confirm}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={passwordConfirm_info_msg} color ={passwordConfirm_info_msg_color}/>

                                    {/* <Info_msg
                                        className="info_msg"
                                        style={{ color: passwordConfirm_info_msg_color }}
                                    >
                                        {passwordConfirm_info_msg}
                                    </Info_msg> */}
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="회사명"/>
                                    <FontAwesomeIcon style={{color:'#7f05e6', visibility:companyName_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1
                                        type="text" 
                                        name="company_name"
                                        placeholder="회사명"
                                        value={tab1Info.company_name}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={companyName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="사업자등록번호"/>
                                    <FontAwesomeIcon style={{color:'#7f05e6', visibility:companyNumber_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD style={{ }}>
                                    <InputCompanyNumber
                                        type="text"
                                        name="companyNumber1"
                                        value={tab1Info.companyNumber1}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                                <TD>
                                    <InputCompanyNumber
                                        type="text"
                                        name="companyNumber2"
                                        value={tab1Info.companyNumber2}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                                <TD>
                                    <InputCompanyNumber
                                        type="text"
                                        name="companyNumber3"
                                        value={tab1Info.companyNumber3}
                                        // name="registration_number"
                                        // value={tab1Info.registration_number}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={companyNumber_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="사업자등록증 첨부"/>
                                    {/* <FontAwesomeIcon style={{color:selectedFile_check_icon_color, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} /> */}
                                </TdLable>
                                <TD colSpan ="3">
                                    <TD>
                                    <Input1 disabled
                                        type="text" 
                                        name="fileHrefRead" 
                                        value={tab1Info.company_category}
                                        placeholder="사업자 등록증 이미지를 첨부해 주세요"
                                        size="64"
                                    /></TD>
                                    <TD></TD>
                                    <TD>
                                        <Input1
                                        type="file" 
                                        name="fileHref" 
                                        // onChange={handleFileput} //이거는 경로지정필요
                                        value={tab1Info.company_category}
                                        style = {{display:'none'}}
                                        // ref={hiddenFileInput}
                                    /></TD>
                                    <TD>
                                        <Button onClick={fileHandle}>파일 첨부</Button>
                                    </TD>
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={fileName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="담당자명"/>
                                    <FontAwesomeIcon style={{color:'#7f05e6', visibility:managerName_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1
                                        type="text" 
                                        name="manager_name"
                                        placeholder="담당자명"
                                        value={tab1Info.manager_name}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={managerName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="담당자연락처"/>
                                    <FontAwesomeIcon style={{color:'#7f05e6', visibility:managerContact_check_visibility, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} />
                                </TdLable>
                                <TD colSpan ="3">
                                    <Input1
                                        type="text" 
                                        name="manager_contact"
                                        placeholder="담당자 연락처"
                                        value={tab1Info.manager_contact}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="3">
                                    <Info1 label={managerContact_info_msg} color ="red"/>
                                </TD>
                            </Tr>

                        </Tbody>
                    </Table>
                </Positioner>
                    <div style={{display:'flex'}}><Check
                    label = "전체동의"
                    type="checkbox"
                    name="agreement"
                    width="10%"
                    required={true}
                    checked_bool={tab1Info.terms.agreement}                        
                    onChange={checkboxCheck}                    
                    ></Check><Info1 label={agreement_info_msg} color ="red"/>
                    </div>
                    {/* <FontAwesomeIcon style={{color:agreement_check_icon_color, left: "50px",
                                        position: "relative",left:"620px",bottom:"12px"}}  icon={faCheck} /> */}
                <Checkdiv>
                    <Check
                    label = "[선택] SampleLife에서 추천하는 캠페인 및 이벤트 정보 수신 동의"
                    type = "checkbox"
                    name = "event_info"
                    checked_bool={tab1Info.terms.event_info}
                    onChange={checkboxCheck}                    
                    ></Check>
                    <Check
                    label = "[필수] SampleLife의 서비스 이용약관 동의"
                    type = "checkbox"
                    name = "service_usage"
                    checked_bool={tab1Info.terms.service_usage}
                    onChange={checkboxCheck}                    
                    ></Check>

                    <Check
                    label = "[필수] SampleLife의 개인정보처리방침 동의"
                    type = "checkbox"
                    name = "privacy_info"
                    checked_bool={tab1Info.terms.privacy_info}
                    onChange={checkboxCheck}                    
                    ></Check>
                </Checkdiv>
                {/* <button style = {submitStyle} type="submit" onClick={handleSubmit}>저장</button> */}
            
            <SubmitButton1
            disabled = {buttonDisabled}
            setActiveTab = {setActiveTab}
            setTab1Information = {setTab1Information}
            tab1Info = {tab1Info}
            ></SubmitButton1>
            </Form>
        </App>
    );
}

export default Infotab1;