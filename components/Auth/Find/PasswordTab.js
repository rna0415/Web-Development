import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";
import { Label, Input, Info, TimeInfo, VerificationNumButton, VerificationCheckButton } from '.';
import {isEmail, isLength, isAlphanumeric} from 'validator';

// 화면의 중앙에 위치시킨다
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
    width: 80px;
`;
// 셀
const TdButton = styled.td`
    width: 100px;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const IDTab = () => {
    const history = useHistory();
    const [ email, setEmailState ] = useState("");
    const [ email_info_msg, setEmailInfoMSG ] = useState("");
    const [ name, setNameState ] = useState("");
    const [ name_info_msg, setNameInfoMSG ] = useState("");
    const [ phone_num, setPhoneNumState ] = useState("");
    const [ phone_info_msg, setPhoneInfoMSG ] = useState("회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다.");
    const [ phone_info_msg_clor, setPhoneInfoMSGColor ] = useState("gray");
    const [ phone_verification_info_msg_1, setPhoneVerificationInfoMSG1 ] = useState("");
    const [ phone_verification_info_msg_2, setPhoneVerificationInfoMSG2 ] = useState("");
    const [ random_num, setRandomNumState ] = useState(0);
    const [ phone_auth_num, setPhoneAuthNumState ] = useState("");
    const [ phone_verification_num_button_disabled, setPhoneVerificationNumButtonDisabledState ] = useState(false);
    const [ phone_verification_check_button_disabled, setPhoneVerificationCheckButtonDisabledState ] = useState(true);
    
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [time_state, setTimeState] = useState(false);

    useEffect(() => {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown);
              var msg = "인증번호 입력 시간이 초과하였습니다.\n"
                + "인증번호를 재발급 받아 다시 시도해주십시오."
              alert(msg)
              setEmailInfoMSG("")
              setNameState("")
              setPhoneNumState("")
              setPhoneAuthNumState("")
              setPhoneVerificationInfoMSG1("")
              setPhoneVerificationInfoMSG2("")
              setPhoneVerificationNumButtonDisabledState(false)
              setPhoneVerificationCheckButtonDisabledState(true)
              setTimeState(false)


            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        // console.log(minutes)
        // console.log(seconds)
        return () => clearInterval(countdown);
      }, [minutes, seconds]);
      
    const handleChange = (e) => {
        var reg = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
        var reg_wrong_text_1 = /(?=.*?[0-9])/;
        var reg_wrong_text_2 = /(?=.*?[/)/(`~#?!@$%^&*-_=+"'])/;
        var reg_correct_phone_num = /(?=.*?[0-9])/;
        if (e.target.name === "email_input"){
            //var wrong_text_3 = /(?=.*?[0-9])(?=.*?[/)/(`~#?!@$%^&*-_=+"'])/;
            //console.log(wrong_text_3.test(e.target.value))
            if (e.target.value === "") {
                setEmailState(e.target.value)
                setEmailInfoMSG("이메일을 입력해주세요")
            } else {
                setEmailState(e.target.value)
                setEmailInfoMSG("")
            }
        } else if (e.target.name === "name_input"){
            //var wrong_text_3 = /(?=.*?[0-9])(?=.*?[/)/(`~#?!@$%^&*-_=+"'])/;
            //console.log(wrong_text_3.test(e.target.value))
            if (reg_wrong_text_1.test(e.target.value) === true | reg_wrong_text_2.test(e.target.value) === true){
                //console.log("잘못된 값 입력")
                setNameInfoMSG("텍스트만 입력 가능합니다.")    
            }else {
                if (e.target.value === "") {
                    setNameState(e.target.value)
                    setNameInfoMSG("이름을 입력해주세요")
                } else {
                    setNameState(e.target.value)
                    setNameInfoMSG("")
                }
            }
        } else if (e.target.name === "phone_input"){
            if(reg_correct_phone_num.test(e.target.value[e.target.value.length-1]) === true) {
                setPhoneInfoMSG("회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다.")
                setPhoneInfoMSGColor("gray")
                setPhoneNumState(e.target.value)
            }else {
                if (e.target.value === "") {
                    setPhoneInfoMSG("회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다.")
                    setPhoneInfoMSGColor("gray")
                    setPhoneNumState(e.target.value)
                } else {
                    setPhoneInfoMSG("숫자만 입력 가능합니다.")
                    setPhoneInfoMSGColor("red")
                }
            } 
        } else if (e.target.name === "verification_input"){
            if(reg_correct_phone_num.test(e.target.value[e.target.value.length-1]) === true) {
                setPhoneVerificationInfoMSG1("고객님의 휴대폰으로 인증번호가 발송되었습니다.")
                setPhoneAuthNumState(e.target.value)
            }else {
                if (e.target.value === "") {
                    setPhoneVerificationInfoMSG1("고객님의 휴대폰으로 인증번호가 발송되었습니다.")
                    setPhoneAuthNumState(e.target.value)
                } else {
                    //console.log("잘못된 값 입력")
                    setPhoneVerificationInfoMSG1("숫자만 입력 가능합니다.")
                }
            } 
        }
    }

    const CursorFocusOut = (e) => {
        console.log(e.target.name)
        if (e.target.name === "email_input"){
            if (e.target.value === "") {
                setEmailState(e.target.value)
                setEmailInfoMSG("이메일을 입력해주세요")
            }else {
                if (isEmail(e.target.value) == true) {
                    setEmailState(e.target.value)
                    setEmailInfoMSG("")
                } else {
                    setEmailState(e.target.value)
                    setEmailInfoMSG("올바른 이메일을 입력해주세요.")
                }
            }
        }else {
            if (e.target.value === "") {
                setNameState(e.target.value)
                setNameInfoMSG("이름을 입력해주세요")
            }
        }
    }
    

    const setPhoneRandomNum = (ranVal) => {
        console.log("인증번호: " + ranVal)
        if (ranVal === 0) {
            setPhoneInfoMSG("입력하신 정보와 일치하는 회원이 없습니다.")
            setPhoneInfoMSGColor("red")
        }else {
            setRandomNumState(ranVal);
            setPhoneInfoMSG("")
            setPhoneVerificationInfoMSG1("고객님의 휴대폰으로 인증번호가 발송되었습니다.")
            setPhoneVerificationInfoMSG2("수신한 인증번호를 입력해 주십시오.")
            
            setMinutes(0)
            setSeconds(10)
            setTimeState(true)
            setPhoneVerificationNumButtonDisabledState(true)
            setPhoneVerificationCheckButtonDisabledState(false)
        }
    }

    return(
        <Positioner>
            <Table className="table">
                <Tbody className="tbody">
                    <Tr>
                    <TdBlank>
                    </TdBlank>
                    </Tr>
                    <Tr>
                        <TdLable>
                            <Label label="이메일" />
                        </TdLable>
                        <TD colSpan="2">
                            <Input 
                                name="email_input"
                                placeholder="이메일"
                                value={email}
                                onChange={handleChange}
                                onBlur={CursorFocusOut}
                                component_disabled={phone_verification_num_button_disabled}
                                autoFocus
                            />
                        </TD>
                    </Tr>
                    <Tr>
                        <TD>
                        </TD>
                        <TD colSpan="2">
                            <Info label={email_info_msg} color ="red"/>
                        </TD>
                    </Tr>
                    <Tr className="tabs">
                        <TdLable>
                            <Label label="이름" />
                        </TdLable>
                        <TD colSpan="2">
                            <Input 
                                name="name_input"
                                placeholder="이름"
                                value={name}
                                onChange={handleChange}
                                onBlur={CursorFocusOut}
                                component_disabled={phone_verification_num_button_disabled}
                            />
                        </TD>
                    </Tr>
                    <Tr>
                        <TD>
                        </TD>
                        <TD colSpan="2">
                            <Info label={name_info_msg} color ="red"/>
                        </TD>
                    </Tr>
                    <Tr>
                        <TdLable>
                            <Label label="휴대폰 번호" />
                        </TdLable>
                        <TD>
                            <Input
                                name="phone_input"
                                placeholder="''-''을 제외하고 숫자만 입력해주세요"
                                value={phone_num}
                                onChange={handleChange}
                                component_disabled={phone_verification_num_button_disabled}
                            />
                        </TD>
                        <TdButton>
                            <VerificationNumButton
                                button_name="인증번호 발송"
                                name="phone_num"
                                value={phone_num}
                                setPhoneRandomNum = {setPhoneRandomNum}
                                component_disabled={phone_verification_num_button_disabled}
                            />
                        </TdButton>
                    </Tr>
                    <Tr>
                        <TD>
                        </TD>
                        <TD colSpan="2">
                            <Info label={phone_info_msg} color ={phone_info_msg_clor}/>
                        </TD>
                    </Tr>
                    <Tr>
                        <TdLable>
                            <Label label="인증 번호" />
                        </TdLable>
                        <TD colSpan="2">
                            <Input 
                                name="verification_input"
                                placeholder="수신한 인증번호 6자리 숫자를 입력해주세요"
                                value={phone_auth_num}
                                onChange={handleChange}
                                component_disabled={phone_verification_check_button_disabled}
                            />
                        </TD>
                    </Tr>
                    <Tr>
                        <TD>
                        </TD>
                        <TD colSpan="2">
                            <Info label={phone_verification_info_msg_1} color ="red"/>
                            <Info label={phone_verification_info_msg_2} color ="red"/>
                            <TimeInfo minutes={minutes} seconds={seconds} time_state={time_state} />
                        </TD>
                    </Tr>
                    <Tr>
                        <TD colSpan="3">
                            <VerificationCheckButton
                                label="인증확인" 
                                type="password"
                                phoneNum={phone_num} 
                                phoneRandomNum = {random_num}
                                phoneAuthNum = {phone_auth_num}
                                disabled={phone_verification_check_button_disabled}
                            />
                        </TD>
                    </Tr>
                </Tbody>
            </Table>
        </Positioner>
    )
};

export default IDTab;