import { React, useState, useEffect } from "react";
import styled from "styled-components"; //스타일 컴포넌트 가장선호함
import oc from "open-color";
import { shadow, sizes } from "../../../lib/styleUtils";
import { useHistory } from "react-router-dom";
import {
  Label,
  Input,
  Info,
  TimeInfo,
  VerificationNumButton,
  VerificationCheckButton,
} from ".";
import {
  isEmail,
  isLength,
  isAlphanumeric,
  isStrongPassword,
  matches,
  equals,
} from "validator";

//폰트를 사용하기 위해 임포트
//아이콘 사용을 위해 임포트 해야한다
import { faChalkboardTeacher, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    height: 40px;
`;

const ButtonEnabled = styled.input`
    width: 100%;
    height: 50px;

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

const ButtonDisabled = styled.input`
    width: 100%;
    height: 50px;

    font-size: 1.0rem;
    color: white;
    text-align: center;

    background: ${oc.violet[1]};
    border: 1px solid ${oc.violet[1]};
`;


// 화면의 중앙에 위치시킨다
const Positioner = styled.div``;

const Toptable = styled.div`
  font-family: "Rajdhani";
  font-size: 15px;
  font-weight: 600;
  margin-top: 35px;
  margin-left: 60px;
`;

const Table = styled.table`
  border-collapse: seperate;
  border-color: ${oc.gray[5]};
  padding: 20px;
`;

const Tbody = styled.tbody``;

// 행
const Tr = styled.tr``;
// 행
const TdBlank = styled.td`
  padding-top: 20px;
`;
const TD = styled.td``;

// 셀
const TdLable = styled.td`
  width: 110px;
  font-weight: 900;
  padding: 0px;
`;
// 셀
const TdButton = styled.td`
  width: 80px;
`;
const Info_msg = styled.h3`
  font-size: 10px;
  font-weight: 200;
`;

const Select_div = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const SelctTD = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 100px;
`;

const SelectBox = styled.div`
  margin: 10px;
`;

const Select_element = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const Select_all= styled.div`
  width: 100px;
`;

const Border_top = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const CheckBtn = {
  color:"#7f05e6",
  position: "relative",
  left:"580px",
  bottom:"15px",
}

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
// 여러개의 state 사용하기
const IDTab = () => {
  const history = useHistory();
  const [name, setNameState] = useState(""); // 첫번째 원소는 상태 값, 두번째는 다루는 함수
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [repassword, setRepasswordState] = useState("");
  const [password_info_msg_color, set_password_info_color] = useState("red");
  const [passwordre_info_msg_color, set_passwordre_info_color] = useState("red");
  const [email_info_msg_color, set_email_info_color] = useState("red");
  const [select_info_msg_color,set_select_info_msg_color] = useState("white"); 

  // 체크아이콘 색상 변경
  const [email_check_icon_color,set_email_check_icon_color] =useState("white")
  const [pass_check_icon_color,set_pass_check_icon_color] =useState("white")
  const [repass_check_icon_color,set_repass_check_icon_color] =useState("white")
  const [name_check_icon_color,set_name_check_icon_color] =useState("white")
  
 
  // 전체 체크 버튼 상태
  const [allSelect,setAllSelect] = useState("");

  const [select1,setSelect1] = useState("");
  const [essentialSelect1,setEssentialSelect1] = useState("");
  const [essentialSelect2,setEssentialSelect2] = useState("");

  const [name_info_msg, setNameInfoMSG] = useState("");
  const [email_info_msg, setEmailInfoMSG] = useState("");
  const [password_info_msg, setPasswordInfoMSG] = useState("");
  const [passwordre_info_msg, setRepasswordInfoMSG] = useState("");

  const [slect_info_msg, setslectInfoMSG] = useState("");
  
  const [phone_num, setPhoneNumState] = useState("");
  const [phone_info_msg, setPhoneInfoMSG] = useState(
    "회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다."
  );

  const [phone_info_msg_clor, setPhoneInfoMSGColor] = useState("gray");
  const [
    phone_verification_info_msg_1,
    setPhoneVerificationInfoMSG1,
  ] = useState("");
  const [
    phone_verification_info_msg_2,
    setPhoneVerificationInfoMSG2,
  ] = useState("");
  const [random_num, setRandomNumState] = useState(0);
  const [phone_auth_num, setPhoneAuthNumState] = useState("");

  const [
    phone_verification_num_button_disabled,
    setPhoneVerificationNumButtonDisabledState,
  ] = useState(false);
  const [
    phone_verification_check_button_disabled,
    setPhoneVerificationCheckButtonDisabledState,
  ] = useState(true);

  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [time_state, setTimeState] = useState(false);

  // 휴대폰 번호 인증 일치 여부
  
  const[passEmailCheck,setPassEmailCheck] = useState("")
  const[passPasswordCheck,setPassPasswordCheck] = useState("")
  const[passRepasswordCheck,setpassRepasswordCheck] = useState("")
  const[passNameCheck,setPassNameCheck] = useState("")
  const[passPhoneCheck,setPassPhoneCheck] = useState("")

  // 전체 조건을 만족으 검사하는 로직을 구현 해야함 
  // 이메일 , 비밀번호 , 비밀번호 재확인, 이름 , 인증번호, 체크박스 모두 만족해야 버튼 활성화 후 넘어감감
  // 이후 왔다 갔다 할때 모든 값들이 기억되어야 한다.

// 이름 확인 정규식
  const regex = /^[ㄱ-ㅎ|가-힣|]+$/;

  // 리액트 컴포넌트가 렌터링 될 때마다 특정 작업을 수행하도록한다.
  // 지금 렌더링 될때마다 유즈 이팩트가 실행되고 있음 
  // 어떠한 값이 변하면



  useEffect(() => {
    console.log("count!@!!!!!!")
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          var msg =
            "인증번호 입력 시간이 초과하였습니다.\n" +
            "인증번호를 재발급 받아 다시 시도해주십시오.";
          alert(msg);
          setNameState("");
          setPhoneNumState("");
          setPhoneAuthNumState("");
          setPhoneVerificationInfoMSG1("");
          setPhoneVerificationInfoMSG2("");
          setPhoneVerificationNumButtonDisabledState(false);
          setPhoneVerificationCheckButtonDisabledState(true);
          setTimeState(false);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);


  useEffect(()=>{


    if(essentialSelect1 || essentialSelect2 || select1){
    if((essentialSelect1 && essentialSelect2)){
      set_select_info_msg_color("white");
    }else if((essentialSelect1 !=="") && (essentialSelect2 !== "")){
      set_select_info_msg_color("red");
    }

    if(essentialSelect1&& essentialSelect2 && select1 ){
      console.log("전체동의")
      setAllSelect(true)
      set_select_info_msg_color("white");

    }else if(essentialSelect1&&essentialSelect2){
      setAllSelect(false)
      set_select_info_msg_color("white");
    }else{
      set_select_info_msg_color("red");
      setAllSelect(false)
    }
  }
  },[essentialSelect1 ,essentialSelect2, select1])


  
  useEffect(()=>{
    // 인증번호가 입력 될 때 마다 . 매치 여부 검사 
    if((matches(phone_auth_num, random_num)) && (phone_auth_num!=="")){
      console.log("일치합니다.");
      setPassPhoneCheck(true);
      console.log(passPhoneCheck);
      // 일치 했을 때 
    }
    // 매치하지 않거나 처음 입력이 아무것도 입력이 되지 않을 경우 
    else{
      console.log("일치합니다.");
      setPassPhoneCheck("");
    }
    console.log("이메일 :"+passEmailCheck)
    console.log("비밀번호 :"+passPasswordCheck)
    console.log("비밀번호확인 :"+passRepasswordCheck)
    console.log("이름 :"+passNameCheck)
    console.log("휴대전화 :"+passPhoneCheck)
    
  },[phone_auth_num, passPhoneCheck, passEmailCheck,passPasswordCheck,passNameCheck,passRepasswordCheck]);
  
 
  
  //change를 다뤄주는 함수
  const handleChange = (e) => {
    var reg_correct_phone_num = /(?=.*?[0-9])/;

    if (e.target.name === "email_input") {
      
      // 입력 하려고 했는데 비었을 때 
      if (e.target.value === "") {
        setEmailState(e.target.value);
        setEmailInfoMSG("이메일을 입력해주세요.");
      } else {
        // 뭔가 입력되면 경고를 지움 일단 
        setEmailState(e.target.value);
        setEmailInfoMSG("");
        
      }
    } else if (e.target.name === "password_input") {
      // 패스워드
      // 안전하지 않은 비밀번호 검증 예외처리
      console.log(e.target.value);
      if (!isStrongPassword(e.target.value)) {
        setPasswordState(e.target.value);
        set_password_info_color("red");
        setPasswordInfoMSG(
          "안전하지 않은 비밀번호 입니다. 영문, 숫자, 특수기호를 조합하여 재설정해 주세요."
        );
        set_pass_check_icon_color("white");
        setPassPasswordCheck("");
      } else {
        // 안전할 때
        setPasswordState(e.target.value);
        set_password_info_color("#7f05e6");
        set_pass_check_icon_color("#7f05e6");
        setPasswordInfoMSG("비밀번호가 안전합니다.");
        setPassPasswordCheck(true);
      }
    }

    // 비밀번호 재확인
    else if (e.target.name === "password_reinput") {
      //여기서 입력된 비밀번호가 바로 업데이트 안되는 문제가 있음?
      // 해결방법 e.target.value 사용해줘야 함

      setRepasswordState(e.target.value);
      console.log(password);
      console.log(e.target.value);
      if (
        matches(e.target.value, password) &&
        e.target.value.length != 0 &&
        password !=="") {
        // 일치할 때
        setRepasswordState(e.target.value);
        // 글자색을 보라색으로 바꿈
        set_passwordre_info_color("#7f05e6");
        // 메시지 변경
        setRepasswordInfoMSG("비밀번호가 일치합니다.");
        //아이콘 색 변경
        set_repass_check_icon_color("#7f05e6");
        setpassRepasswordCheck(true);

      } else {
        // 불일치 할때
        set_passwordre_info_color("red");
        setRepasswordInfoMSG("비밀번호가 일치하지 않습니다. 재입력해주세요.");
        set_repass_check_icon_color("white");
        setpassRepasswordCheck("");
      }

      // 이름 입력
    } else if (e.target.name === "name_input") {
      setNameState(e.target.value);
      // 이름 텍스트 로 입력받기 
      // 이름 입력형식 참이면 이고 빈 것이 아닐때
      if(regex.test(e.target.value) && e.target.value.length !== 0 ){
        // 이름 칸에 체크 마크 표시
        set_name_check_icon_color("#7f05e6")
        setNameInfoMSG("")
        setPassNameCheck(true);
      }else if(e.target.value.length !== 0) { // 뭔가 입력했는데 이름 형식이 아니면? 이름 형식이 아
        // 체크 마크 지우고
        set_name_check_icon_color("white")
        setNameInfoMSG("이름을 정확히 입력하세요.")
        setPassNameCheck("")
      
      }else{ 
        set_name_check_icon_color("white")
        setNameInfoMSG("")
        setPassNameCheck("")
      }
      
      // 휴대폰 입력 
    } else if (e.target.name === "phone_input") {
      if (
        // 휴대폰 형식 검사
        reg_correct_phone_num.test(
          e.target.value[e.target.value.length - 1]
        ) === true
      ) 
      { // 휴대전화 형식에 맞을 때 
        setPhoneInfoMSG(
          "회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다."
        );
        setPhoneInfoMSGColor("gray");
        setPhoneNumState(e.target.value);
      } else {
        if (e.target.value === "") {
          setPhoneInfoMSG(
            "회원정보에 등록된 휴대폰 번호와 동일한 번호를 입력해야 합니다."
          );
          setPhoneInfoMSGColor("gray");
          setPhoneNumState(e.target.value);
        } else {
          setPhoneInfoMSG("숫자만 입력 가능합니다.");
          setPhoneInfoMSGColor("red");
        }
      }
    } else if (e.target.name === "verification_input") {
      // 받은 인증번호가 숫자 형식일 경우
      if (
        reg_correct_phone_num.test(
          e.target.value[e.target.value.length - 1]
        ) === true
      ) {
        setPhoneVerificationInfoMSG1(
          "고객님의 휴대폰으로 인증번호가 발송되었습니다."
        );
        setPhoneAuthNumState(e.target.value);
        console.log(e.target.value)
        console.log("랜덤 넘버 : " + random_num);

/*
        // 인증 시간이 매우 길어서 상관 없음 그냥 확인 시키면 됨.
        if(matches(e.target.value, random_num)){
          console.log("일치합니다.");
          // 이때 값을 변경해줘야함 유즈 이팩트 사용하기 
          setPassPhoneCheck(true);
          console.log(passPhoneCheck);
        }


*/
      } else {
        if (e.target.value === "") {
          setPhoneVerificationInfoMSG1(
            "고객님의 휴대폰으로 인증번호가 발송되었습니다."
          );
          setPhoneAuthNumState(e.target.value);
        } else {
          //console.log("잘못된 값 입력")
          setPhoneVerificationInfoMSG1("숫자만 입력 가능합니다.");
        }
      }
    }
  };

  // 포커스를 잃을 때 작동 
  const CursorFocusOut = (e) => {
    if (e.target.name === "email_input") {
      if (e.target.value === "") {// 포커스를 비운채 넘어가면 계속 경고를 띄워야함
        setEmailState(e.target.value);
        set_email_check_icon_color("white")
      } else {
        //이메일 유효성 검증
        if (isEmail(e.target.value) === true) {
          setEmailState(e.target.value);
          set_email_check_icon_color("#7f05e6");
          set_email_info_color("#7f05e6")
          setEmailInfoMSG("사용가능한 이메일입니다.")
          setPassEmailCheck(true);

          //Todo: 여기에 이미 사용중인 이메일 여부 체크 넣기 !!
        } else {
          setEmailState(e.target.value);
          setEmailInfoMSG(
            "이메일 주소 형식이 아닙니다. 올바른 이메일 형식으로 입력해 주세요."
          );
          set_email_info_color("red")
          set_email_check_icon_color("white")
          setPassEmailCheck("");
        }
      }
      // 비밀번호를 입력하고 다음 칸으로 이동할 때 작동
      // 값을 입력하고 전부 지웠을때  경고메세지를 없애기 위함
    } else if (e.target.name === "password_input") {
      if (e.target.value === "") {// 비밀번호가 비었으면
        setPasswordState(e.target.value);
        setPasswordInfoMSG("");
      }
    } else if (e.target.name === "password_reinput") {
      if (e.target.value === "") {
        setRepasswordState(e.target.value);
        setRepasswordInfoMSG("");
      }
    } 
  };

  // 랜덤넘버 가져오는 부분
  const setPhoneRandomNum = (ranVal) => {
    console.log("인증번호: " + ranVal);

    if (ranVal === 0) {
      setPhoneInfoMSG("입력하신 정보와 일치하는 회원이 없습니다.");
      setPhoneInfoMSGColor("red");
    } else {
      setRandomNumState(ranVal);
      setPhoneInfoMSG("");
      setPhoneVerificationInfoMSG1(
        "고객님의 휴대폰으로 인증번호가 발송되었습니다."
      );
      setPhoneVerificationInfoMSG2("수신한 인증번호를 입력해 주십시오.");

      setMinutes(2);
      setSeconds(59);
      setTimeState(true);
      setPhoneVerificationNumButtonDisabledState(true);
      setPhoneVerificationCheckButtonDisabledState(false);
    }
  };


  // 셀렉트 박스 어디라도 선택되면
  const SelectCheck= (e) => {
  
    // 값이 바로 업데이트가 안되고 있음 
    // 한번 더 눌러야 업데이트 됨 
    // useeffect 적용해야함 
    // 전체 동의가 지금 한번만 작동함
    // 초기에 ""로 해주는 이유는 맨처음 한번 실행될때 아무것도 나오지 않게 하려고
    if(e.target.name === "check_all"){
      
      //처음 체크 되었을 때, 체크가 되어 있지 않을 때 
      if(allSelect ===""){
        // 체크로 바꾸고
        setAllSelect(true)
        setSelect1(true)
        setEssentialSelect1(true)
        setEssentialSelect2(true)     
        //모든 버튼을 체크로 바꾼다.
        // 메세지를 지운다.
        //set_select_info_msg_color("white");
      } 
      
      else{
        setAllSelect("")
        setSelect1("")
        setEssentialSelect1("")
        setEssentialSelect2("")
        //set_select_info_msg_color("red");
      }
    }

    // 필수 선택 버튼을 누를 때 
    else if(e.target.name === "essential1"){
      
      if(essentialSelect1 === ""){
        setEssentialSelect1(true)
      }
      else{
        setEssentialSelect1("")
      }
    }
    else if(e.target.name ==="essential2"){
    
      if(essentialSelect2 === ""){
        // 값을 변경할 때
        setEssentialSelect2(true)
      }
      else{
        // 값을 변경할 때 
        setEssentialSelect2("")
      }
    }
    else if(e.target.name ==="select1"){
      if(select1 === ""){
        setSelect1(true)
        
      }
      else{
        setSelect1("")
      }
    }
  }


  return (
    <Positioner>
      <Toptable className="toptable">
        인플로언서 계정을 생성하여 sampleLife 마케팅 플랫폼 서비스를 이용할 수
        있습니다.
      </Toptable>

      <Table className="table" width="100%">
        <Tbody className="tbody">
          <Tr>
            <TdBlank></TdBlank>
          </Tr>

          <Tr className="tabs">
            <TdLable>
              <Label label="이메일" />
              <FontAwesomeIcon style={{color:email_check_icon_color, left: "50px",
                 position: "relative",left:"580px",bottom:"15px"}}  icon={faCheck} />
            </TdLable>
            <TD colSpan="2">
              <Input
                name="email_input"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={handleChange} //sate를 다룰 함수
                onBlur={CursorFocusOut} // 커서 스테이트 다룰함수
                component_disabled={phone_verification_num_button_disabled}
                autoFocus
              />
            </TD>
          </Tr>

          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info_msg
                style={{ color: email_info_msg_color }}
              >
                {email_info_msg}
              </Info_msg>
            </TD>
          </Tr>

          <Tr className="tabs">
            <TdLable>
              <Label label="비밀번호" />
              <FontAwesomeIcon style={{color:pass_check_icon_color, left: "50px",
                 position: "relative",left:"580px",bottom:"15px"}} 
                 icon={faCheck} />
            </TdLable>

            <TD colSpan="4">
              <Input
                name="password_input"
                placeholder="영문, 숫자 특수기호 조합 8자리 이상 15자리 이내"
                type="password"
                value={password}
                onChange={handleChange}
                onBlur={CursorFocusOut}
                component_disabled={phone_verification_num_button_disabled}
                autoFocus
              />
            </TD>
          </Tr>

          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info_msg
                className="info_msg"
                style={{ color: password_info_msg_color }}
              >
                {password_info_msg}
              </Info_msg>
            </TD>
          </Tr>

          <Tr className="tabs">
            <TdLable>
              <Label label="비밀번호 재확인" />
              <FontAwesomeIcon style={{color:repass_check_icon_color, left: "50px",
                 position: "relative",left:"580px",bottom:"15px"}}  icon={faCheck} />
            </TdLable>
            <TD colSpan="2">
              <Input
                name="password_reinput"
                type="password"
                placeholder="비밀번호 재입력"
                value={repassword}
                onChange={handleChange}
                onBlur={CursorFocusOut}
                component_disabled={phone_verification_num_button_disabled}
                autoFocus
              />
            </TD>
          </Tr>

          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info_msg
                className="info_msg"
                style={{ color: passwordre_info_msg_color }}
              >
                {passwordre_info_msg}
              </Info_msg>
            </TD>
          </Tr>

          <Tr className="tabs">
            <TdLable>
              <Label label="이름" />
              <FontAwesomeIcon style={{color:name_check_icon_color, left: "50px",
                 position: "relative",left:"580px",bottom:"15px"}}  icon={faCheck} />
            </TdLable>
            <TD colSpan="2">
              <Input
                name="name_input"
                placeholder="본인성함을 입력해 주세요"
                value={name}
                onChange={handleChange}
                onBlur={CursorFocusOut}
                component_disabled={phone_verification_num_button_disabled}
                autoFocus
              />
            </TD>
          </Tr>

          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info label={name_info_msg} color="red" />
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
                setPhoneRandomNum={setPhoneRandomNum}
                component_disabled={phone_verification_num_button_disabled}
              />
            </TdButton>
          </Tr>
          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info label={phone_info_msg} color={phone_info_msg_clor} />
            </TD>
          </Tr>
          <Tr>
            <TdLable>
              <Label label="" />
            </TdLable>
            <TD colSpan="2">
              <Input
                name="verification_input"
                placeholder="수신한 인증를 입력해주세요"
                value={phone_auth_num}
                onChange={handleChange}
                component_disabled={phone_verification_check_button_disabled}
              />
            </TD>
          </Tr>
          <Tr>
            <TD></TD>
            <TD colSpan="2">
              <Info label={phone_verification_info_msg_1} color="red" />
              <Info label={phone_verification_info_msg_2} color="red" />
              <TimeInfo
                minutes={minutes}
                seconds={seconds}
                time_state={time_state}
              />
            </TD>
          </Tr>

          <Tr className="tabs">
            <TdLable>
            <Select_all>
              <input type="checkbox" name="check_all" onChange={SelectCheck} checked={allSelect}></input>
              <label for="check_all">전체 동의</label>
            </Select_all>


            </TdLable>

            <TD colSpan="4">
            <Info_msg className="info_msg" style={{ color: select_info_msg_color }}>
                {"SampleLife서비스 약관에 동의해주세요"}
              </Info_msg>
            </TD>
          </Tr>

          <SelctTD colSpan="5">
            <SelectBox class="checkbox_group" >
              <Select_element onBlur={CursorFocusOut} name="selectBox">
              <input type="checkbox" name="select1" class="normal" onChange={SelectCheck} checked={select1} ></input>
              <label for="check_1">[선택] SampleLife에서 추천하는 캠페인 및 이벤트 정보수신 동의</label>
              </Select_element>

              <Select_element>
              <input type="checkbox" name="essential1" class="normal"  onChange={SelectCheck} checked = {essentialSelect1}></input>
              <label for="check_2">[필수] SampleLife의 서비스 이용약관 동의</label>
              </Select_element>

              <Select_element>
              <input type="checkbox" name="essential2" class="normal"  onChange={SelectCheck} checked = {essentialSelect2}></input>
              <label for="check_3">[필수] SampleLife의 개인정보처리방침 동의</label>
              </Select_element>
            </SelectBox>
          </SelctTD>

          <Tr>
            <TD colSpan="2">
              <Info label={""} color={phone_info_msg_clor} />
              <Info label={""} color={phone_info_msg_clor} />
            </TD>
          </Tr>
          <Tr>
            <TD colSpan="5">
            { (passPhoneCheck&&passEmailCheck&&passPasswordCheck&&passNameCheck&&passRepasswordCheck&&essentialSelect1&&essentialSelect2) ? <ButtonEnabled 
                type="id"
                value ="계정정보 저장"
                
              />: 
              <ButtonDisabled
                type="id"
                value ="계정정보 저장"
              
              />} 
      
            </TD>
          </Tr>
        </Tbody>
      </Table>
    </Positioner>
  );
};

export default IDTab;
