import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Input1, Check, CompanyNo, Info1, Label1, SubmitButton, Infotab2} from '.';
import oc from 'open-color';
import {isEmail, isLength, isAlphanumeric} from 'validator';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

// import axios from 'axios';
// import { ExecuteBackendAPI } from '../../lib/api/restapi';
// import { GetBackendIP } from '../../settings';


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



const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #ffffff',
    borderRadius: '5px',
    width: '660px',
    display: 'block'
};

const formStyle2 = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '0px',
    background: '#ffffff',
    width: '570px',
    display: 'block'
};


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
    const [password, setPassword] = useState("");
    const [password_info_msg, setPasswordInfoMSG] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");
    const [passwordConfirm_info_msg, setPasswordConfirmInfoMSG] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyName_info_msg, setCompanyNameInfoMSG ] = useState("");
    const [companyNumber, setCompanyNumber] = useState("");
    const [companyNumber1, setCompanyNumber1] = useState("");
    const [companyNumber2, setCompanyNumber2] = useState("");
    const [companyNumber3, setCompanyNumber3] = useState("");
    const [companyNumber_info_msg, setCompanyNumberInfoMSG ] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName_info_msg, setFileNameInfoMSG ] = useState("");
    const [managerName, setMangerName] = useState("");
    const [managerName_info_msg, setManagerNameInfoMSG ] = useState("");
    const [managerContact, setManagerContact] = useState("");
    const [managerContact_info_msg, setManagerContactInfoMSG ] = useState("");
    const [agreement, setAgreement] = useState("");
    const [agreement1, setAgreement1] = useState("");
    const [agreement2, setAgreement2] = useState("");
    const [agreement3, setAgreement3] = useState("");
    const [agreement_info_msg, setAgreementInfoMSG ] = useState("");
    const [success1, setSuccess1] = useState(false);
    const [success2, setSuccess2] = useState(false);
    const [success3, setSuccess3] = useState(false);
    const [success4, setSuccess4] = useState(false);
    const [success5, setSuccess5] = useState(false);
    const [success6, setSuccess6] = useState(false);
    const [success7, setSuccess7] = useState(false);
    const [success8, setSuccess8] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [tab1Info, setTab1Info] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        companyName: "",
        companyNumber: "",
        managerName: "",
        managerContact: "",
        agreement: "",
        agreement1: "",
        agreement2: "",
        agreement3: ""

    });

    const history = useHistory();


    useEffect(() => {
        console.log('setState변화 감지');
        console.log("유즈이펙트 석세스 상태: ",success1)
        console.log("tab1_info: ", tab1_info) 
 
        if (tab1_info != null){
            
            console.log("객체형:", Object.values(tab1_info))
            setEmail(Object.values(tab1_info)[0])
            setPassword(Object.values(tab1_info)[1])
            setpasswordConfirm(Object.values(tab1_info)[2])
            setCompanyName(Object.values(tab1_info)[3])
            setCompanyNumber(Object.values(tab1_info)[4])
            setMangerName(Object.values(tab1_info)[5])
            setManagerContact(Object.values(tab1_info)[6])
            setAgreement(Object.values(tab1_info)[7])
            setAgreement1(Object.values(tab1_info)[8])
            setAgreement2(Object.values(tab1_info)[9])
            setAgreement3(Object.values(tab1_info)[10])
            setButtonDisabled(true)
            console.log("버튼상태1",buttonDisabled)
            tab1_info = null
            console.log("tab_info상태는1:",tab1_info)
        }else{
            setButtonDisabled(false)

            console.log("버튼상태2",buttonDisabled)
            console.log("tab_info상태는2:",tab1_info)


        }





        // --------------------------------------------------------
        // let newTempTab1Info = {
        //     email: email,
        //     password: password,
        //     passwordConfirm: passwordConfirm,
        //     companyName: companyName,
        //     companyNumber: companyNumber,
        //     managerName: managerName,
        //     managerContact: managerContact,
        //     agreement: agreement,
        //     agreement1: agreement1,
        //     agreement2: agreement2,
        //     agreement3: agreement3
        // }
        // setTab1Info(newTempTab1Info)
        // console.log("tempTab1Info1 바뀐거: ",newTempTab1Info)
        // console.log("tempTab1Info1 바뀐거: ",tab1Info)
        // --------------------------------------------------------
        
        

        // if(success === false){        
        //     setButtonDisabled(false)
        // }
        // else{
            
        //     setButtonDisabled(true)            
        // }

        // if(success === false){        
        //     setButtonDisabled(false)
        // }
        // else{
            
        //     setSuccessful(successful+1) 
            
        // }

        // for (let key in successlist) {
        //     console.log(successlist[key])
        // }
        
        if (success1 === true && success2 === true && success3 === true && success4 === true && success5 === true && success7 === true && success8 === true && agreement2 === "checked" && agreement3 === "checked"){
            setButtonDisabled(true)
            console.log("버튼상태3",buttonDisabled)
            // let tempTab1Info = {
            //     email: email,
            //     password: password,
            //     passwordConfirm: passwordConfirm,
            //     companyName: companyName,
            //     companyNumber: companyNumber,
            //     managerName: managerName,
            //     managerContact: managerContact,
            //     agreement: agreement,
            //     agreement1: agreement1,
            //     agreement2: agreement2,
            //     agreement3: agreement3
            // }
            // setTab1Info(tempTab1Info)
            // console.log("tempTab1Info 바뀌기전: ",tempTab1Info)
        }

    }, [success1,success2,success3,success4,success5,success7,success8, agreement2, agreement3]);

    const handleChange = (e) => {
        if (e.target.name === "email"){
            setEmail(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.email = e.target.value
            setTab1Info(temp_tab1Info);
            console.log('1:',tab1Info)

        }else if (e.target.name === "password"){
            setPassword(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.password = e.target.value
            setTab1Info(temp_tab1Info);  
            console.log('2:',tab1Info)

        }else if (e.target.name === "passwordConfirm"){
            setpasswordConfirm(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.passwordConfirm = e.target.value
            setTab1Info(temp_tab1Info);
            console.log('3:',tab1Info)

        }else if (e.target.name === "companyName"){
            setCompanyName(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.companyName = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('4:',tab1Info)

        }else if (e.target.name === "companyNumber"){
            setCompanyNumber(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.companyNumber = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('5:',tab1Info)

        // }else if (e.target.name === "companyNumber2"){
        //     setCompanyNumber2(e.target.value);

        // }else if (e.target.name === "companyNumber3"){
        //     setCompanyNumber3(e.target.value);

        }else if (e.target.name === "managerName"){
            setMangerName(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.managerName = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('6:',tab1Info)

        }else if (e.target.name === "managerContact"){
            setManagerContact(e.target.value);
            let temp_tab1Info = tab1Info
            temp_tab1Info.managerContact = e.target.value
            setTab1Info(temp_tab1Info);            
            console.log('7:',tab1Info)

        }

    }

    const CursorFocusOut = (e) => {
        if (e.target.name === "email"){
            if (e.target.value === "") {
                setEmail(e.target.value)
                setEmailInfoMSG("이메일을 입력해주세요")
                setSuccess1(false)
                console.log("첫번째 석세스의 상태: ",success1)
            }else {
                if (isEmail(e.target.value) == true) {
                    setEmail(e.target.value)
                    setSuccess1(true)
                    setEmailInfoMSG("")
                    
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
                    console.log("이프문 석세스의 상태: ",success1)
                } else {
                    setEmail(e.target.value)
                    setEmailInfoMSG("이메일을 올바르게 입력해주세요")
                    setSuccess1(false)
                    console.log("엘스문 석세스 상태: ",success1)
                    
                }
            }
        }
        else if (e.target.name === "password"){
            if (e.target.value === "") {
                setPassword(e.target.value)
                setPasswordInfoMSG("비밀번호를 입력해주세요")
                console.log(success2)
                setSuccess2(false)                
            } else {
                setPassword(e.target.value)
                setPasswordInfoMSG("")
                setSuccess2(true)
                console.log(success2)                
            }
        }else if (e.target.name === "passwordConfirm"){
            if (password !== passwordConfirm){
                setpasswordConfirm(e.target.value)
                setPasswordConfirmInfoMSG("비밀번호 똑같이 입력해주세요")
                setSuccess3(false)
                console.log(success3)
                
            } else {
                setpasswordConfirm(e.target.value)
                setPasswordConfirmInfoMSG("")
                setSuccess3(true)
                console.log(success3)
                
            }
        }else if(e.target.name === "companyName"){
            if (e.target.value === "") {
                setCompanyName(e.target.value)
                setCompanyNameInfoMSG("회사명을 입력해주세요")
                setSuccess4(false)
                // console.log(success)
                
            } else {
                setCompanyName(e.target.value)
                setCompanyNameInfoMSG("")
                setSuccess4(true)
                // console.log(success)
                
            }
        }else if (e.target.name === "companyNumber"){
            if (e.target.value === "") {
                setCompanyNumber1(e.target.value)
                setCompanyNumberInfoMSG("사업자 등록번호를 올바르게 입력해주세요")
                setSuccess5(false)
                // console.log(success)
                
            } else {
                setCompanyNumber1(e.target.value)
                setCompanyNumberInfoMSG("")
                setSuccess5(true)
                // console.log(success)
                
            }
        // }else if (e.target.name === "companyNumber2"){
        //     if (e.target.value === "") {
        //         setCompanyNumber2(e.target.value)
        //         setCompanyNumberInfoMSG("사업자 등록번호를 올바르게 입력해주세요")
        //         // console.log(success)
                
        //     } else {
        //         setCompanyNumber2(e.target.value)
        //         setCompanyNumberInfoMSG("")
        //         // setSuccess5(true)
        //         // console.log(success)
                
        //     }

        // }else if (e.target.name === "companyNumber3"){
        //     if (e.target.value === "") {
        //         setCompanyNumber3(e.target.value)
        //         setCompanyNumberInfoMSG("사업자 등록번호를 올바르게 입력해주세요")
        //         // console.log(success)
                

        //     } else {
        //         setCompanyNumber3(e.target.value)
        //         setCompanyNumberInfoMSG("")
        //         // setSuccess6(true)
        //         // console.log(success)
                
        //     }
        }else if (e.target.name === "managerName"){
            if (e.target.value === "") {
                setMangerName(e.target.value)
                setManagerNameInfoMSG("담당자명을 입력해주세요")
                setSuccess7(false)
                // console.log(success)
                

            }else {
                setMangerName(e.target.value)
                setManagerNameInfoMSG("")
                setSuccess7(true)
                // console.log(success)
                
            }
        }else if (e.target.name === "managerContact"){
            if (e.target.value === "") {
                setManagerContact(e.target.value)
                setManagerContactInfoMSG("담당자 연락처를 입력해주세요")
                setSuccess8(false)
                console.log(success8)
                

            }else {
                setManagerContact(e.target.value)
                setManagerContactInfoMSG("")
                setSuccess8(true)
                console.log(success8)
                
            }

        }
    }
    
    const allChecked = () =>{
        if (agreement === "checked"){
            setAgreement("")
            setAgreement1("");
            setAgreement2("");
            setAgreement3("");  
            setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요")            
        }else{                
            setAgreement("checked")
            setAgreement1("checked");
            setAgreement2("checked");
            setAgreement3("checked"); 
            setAgreementInfoMSG("")                
        }   
         
    }
    const inidivualChecked1 = () =>{
        setAgreement("");
        if (agreement1 === "checked"){
            setAgreement1("")  
        }else{
            if (agreement2 === "checked" && agreement3 === "checked"){
                setAgreement("checked")
            }
            setAgreement1("checked")
        }
     
    }
    const inidivualChecked2 = () =>{
        setAgreement("");
        
        if (agreement2 === "checked"){
            setAgreement2("")
            console.log('2-1:',agreement2)
            setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요") 

        }else{

            setAgreement2("checked")
            console.log('2-z',agreement2)
            setAgreementInfoMSG("") 
            
            if (agreement1 === "checked" && agreement3 === "checked"){
                setAgreement("checked")
                console.log('2-2:',agreement2) 
                setAgreementInfoMSG("") 
                
            }else if(agreement3 === ""){
                setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요")
                console.log('2-2-2:',agreement3)
            }
        }
    }
    const inidivualChecked3 = () =>{
        setAgreement("");

        if (agreement3 === "checked"){
            setAgreement3("")  
            console.log('3-1:',agreement3)
            setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요") 
            
        }else{

            setAgreement3("checked")  
            console.log('3-z',agreement3)
            setAgreementInfoMSG("") 

            if (agreement1 === "checked" && agreement2 === "checked"){
                setAgreement("checked")
                console.log('3-2:',agreement3)
                setAgreementInfoMSG("") 
                
            }else if(agreement2 === ""){
                setAgreementInfoMSG("필수 동의 항목에 모두 체크해 주세요")
                console.log('3-2-2:',agreement3)
            }     
        }      
    }
    // const handleSubmit = (e) => {
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
    
    
    
    
        // if(success === true){
        //     history.push({pathname: "/auth/MainService"});
        // }
//파일업로드
    // const hiddenFileInput = React.useRef(null);

    const fileHandle = (e) => {
        hiddenFileInput.current.click();
    }
//
    const handleFileput=(e)=> {
        setSelectedFile(e.target.files[0],            
        )
    }


    
//
    return (
        
        <div style = {appStyle}>
            <div style = {formStyle}>
                <Positioner>
                    <Table className="table">
                        <Tbody className="tbody">
                            <Tr>
                            <TdBlank>                                
                            </TdBlank>
                            </Tr>
                            <Tr>
                                <TD colSpan="3" style={{paddingBottom:'15px'}}>
                                    <Label1 label="클라이언트 계정을 생성하여 SampleLife의 마케팅 플랫폼 서비스를 이용할 수 있습니다."/>
                                </TD>
                                
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="이메일"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="text" 
                                        name="email"
                                        placeholder="이메일"
                                        value={email}
                                        onBlur={CursorFocusOut}
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={email_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="비밀번호"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="password" 
                                        name="password"
                                        placeholder="비밀번호"
                                        value={password}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={password_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="비밀번호 재확인"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1                                        
                                        type="password" 
                                        name="passwordConfirm"
                                        placeholder="비밀번호 재확인"
                                        value={passwordConfirm}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={passwordConfirm_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="회사명"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="text" 
                                        name="companyName"
                                        placeholder="회사명"
                                        value={companyName}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={companyName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="사업자등록번호"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="text"
                                        name="companyNumber"
                                        value={companyNumber}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={companyNumber_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="사업자등록증 첨부"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <TD>
                                    <Input1 disabled
                                        type="text" 
                                        name="fileHrefRead" 
                                        value={selectedFile}
                                        placeholder="사업자 등록증 이미지를 첨부해 주세요"
                                        size="64"
                                    /></TD>
                                    <TD></TD>
                                    <TD>
                                        <Input1
                                        type="file" 
                                        name="fileHref" 
                                        onChange={handleFileput} //이거는 경로지정필요
                                        value={selectedFile}
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
                                <TD colSpan ="2">
                                    <Info1 label={fileName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="담당자명"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="text" 
                                        name="managerName"
                                        placeholder="담당자명"
                                        value={managerName}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
                                    <Info1 label={managerName_info_msg} color ="red"/>
                                </TD>
                            </Tr>
                            <Tr>
                                <TdLable>
                                    <Label1 label="담당자연락처"/>
                                </TdLable>
                                <TD colSpan ="2">
                                    <Input1
                                        type="text" 
                                        name="managerContact"
                                        placeholder="담당자 연락처"
                                        value={managerContact}
                                        onBlur={CursorFocusOut} 
                                        onChange={handleChange}
                                    />
                                </TD>
                            </Tr>
                            <Tr>
                                <TD>                                    
                                </TD>
                                <TD colSpan ="2">
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
                    checked_bool={agreement}
                    value = {agreement}                                  
                    onChange={allChecked}                    
                    ></Check><Info1 label={agreement_info_msg} color ="red"/></div>
                    <div style={formStyle2}>
                    <Check
                    label = "[선택] SampleLife에서 추천하는 캠페인 및 이벤트 정보 수신 동의"
                    type = "checkbox"
                    name = "agreement2"
                    checked_bool={agreement1}
                    onChange={inidivualChecked1}                    
                    ></Check>
                    <Check
                    label = "[필수] SampleLife의 서비스 이용약관 동의"
                    type = "checkbox"
                    name = "agreement3"
                    checked_bool={agreement2}
                    onChange={inidivualChecked2}                    
                    ></Check>

                    <Check
                    label = "[필수] SampleLife의 개인정보처리방침 동의"
                    type = "checkbox"
                    name = "agreement4"
                    checked_bool={agreement3}
                    onChange={inidivualChecked3}                    
                    ></Check>
                </div>
                {/* <button style = {submitStyle} type="submit" onClick={handleSubmit}>저장</button> */}
            
            <SubmitButton
            disabled = {buttonDisabled}
            setActiveTab = {setActiveTab}
            setTab1Information = {setTab1Information}
            tab1Info = {tab1Info}
            ></SubmitButton>
            </div>
        </div>
    );
}

export default Infotab1;