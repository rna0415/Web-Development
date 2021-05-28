import {React, useState, useEffect} from 'react';
import { AuthContent, InputWithLabel, AuthButton, AuthFacebookButton, RightAlignedLink, LeftAlignedLink, FindPW} from '../../components/Auth';
import styled from 'styled-components';
import oc from 'open-color';
import { AuthWrapper } from '../../components/Auth';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import { ExecuteBackendAPI } from '../../lib/api/restapi';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
// import { shadow } from '../../../lib/styleUtils';
// import { DeliveryInfoChangeModal } from "./"

//모달 CSS
const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 5;
`;

const CampaignApplyModal = styled.div`
    width: 600px;
    height: 770px;
    position: relative;
    box-sizing: border-box;
    margin: 56px auto;
    background: white;
`;

// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    justify-content: center;
`;

const Label = styled.div`
    width: 100%;
    height: 100%;
    background: #7f05e6;
    font-size: 1.4rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    color: white;
    text-align: center;
    line-height: 60px;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

// 화면의 중앙에 위치시킨다
const Container = styled.div`
    margin: 50px;
    margin-top: 30px;
    height: 60%;
    justify-content: center;
`;

// 빈칸
const RowDiv = styled.div`
    display: flex;
    height: 35px;
    width: 100%;
    float: left;
    justify-content: left;
`;


const Label2 = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
`;

const Button = styled.button`
    width: 17%;
    height: 80%;
    background: #7f05e6;
    color: white;
    float: left;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    text-align: center;
    justify-content: center;
    border: solid 0px;
    cursor: pointer;
`;

const Select = styled.select`
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    padding-left: 10px;
`;
const Option = styled.option`
    width: 100%;
    height: 100%;
`;


// 로그인 CSS
const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const LoginButton = styled.button`
    width: 104%;
    margin-top: 1rem;
    margin-bottom: -1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-color: white;

    background: #7f05e6;
    color: white;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;


`;

const LeftAlignedButton = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;    
    border: 1px solid ${oc.gray[6]};

    background: white;
    color: black;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    text-decoration:none;
    &:hover {
        color: #7f05e6;
        border: 1px solid #7f05e6;
    }
`;

const RightAlignedButton = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;
    border: 1px solid ${oc.gray[6]};

    background: white;
    color: black;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    text-decoration:none;
    &:hover {
        color: #7f05e6;
        border: 1px solid #7f05e6;
    }
`;

const Font= styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;


`;

const Font2 = styled.div`
    margin-bottom: 0px;   
    font-size:0.8rem;
    text-align: center;
`;

const Font3 = styled.div`
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
    color: ${oc.gray[6]};
`;
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;
const Tr = styled.tr`
`;

const Tbody = styled.tbody`
`;

const TrBlank = styled.td`
    padding-top: 10px;
`;

const Labels = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const LoginModal = ({setCloseModal}) => {
    const history = useHistory();
    
    // const [delivery_info_change, setDeliveryInfoChangeModalState] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

    //로그인 함수

    useEffect(() => {
        if(success === true){
            checkClient()
            setEmail(cookies.rememberEmail);
        }
        console.log(cookies.rememberEmail)
        if(cookies.rememberEmail !== undefined){
            setEmail(cookies.rememberEmail);
            setIsRemember(true) //로그인을 누르면 쿠키에 이메일 저장, 저장되어있는 쿠키값이 있다면 이메일 함수에 호출, 체크박스값 true로 체크표시
            
        }
        
    }, [success]);

    const checkClient = async () =>{
        setSuccess(false)
        let client_id
        if (email.split("@").length === 2){
            client_id = email.split("@")[0] + email.split("@")[1].split(".")[0]
            
            let request = 'GET'
            let backend_api_url = "http://127.0.0.1:8000/api/user/client/" + client_id + "/"
            let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);

            if(backend_api_response){
                if(password === backend_api_response.data["password"]){
                    console.log("로그인 성공")
                    history.push({
                        pathname: "/user/client/home", 
                        state: {password:password,
                                email:email}
                    })

                }else{
                    console.log("암호가 일치하지 않습니다.")
                }
            }else{
                console.log("ID가 없습니다. 회원가입 해주세요")
            }
        
        }else {
            console.log("이메일을 제대로 입력해주세요.")
        }
    }
    const handleChange = (e) => {
        if(e.target.name ==="email"){
            setEmail(e.target.value);
        }else if(e.target.name ==="password"){
            setPassword(e.target.value);
        }

    }
    
    const handleOnChange = () =>{
        // setCookie('rememberEmail', email, {maxAge: 2000});   
        setIsRemember(true);     
        if(isRemember === true){
            // removeCookie('rememberEmail');
            setIsRemember(false);
        } //체크박스를 누르면 트루값 리턴, 해제시 폴스값 리턴
        console.log('이스리멤버:',isRemember)
    }

    const checkStyle = {
        borderRadius: '5px',
        position: 'relative',
        height: '16px',
        width: '16px',
        border: '1px solid blue',
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '#41B883',
        cursor: 'pointer',
        color: '#41B883'
}
    const Check = ({label,checked_bool, ...rest}) => {
        const checkedb = checked_bool;

        
        return(
            <div>
            <input style={checkStyle} {...rest} checked= {checkedb} ></input> {label}
            <br></br>
            </div>
        )
    }

    const componentClicked = () => {
        setSuccess(true);
        if(email.length === 0){
            console.log("이메일을 입력해주세요.")
            setSuccess(false);
        }
        if(isRemember === true){
            setCookie('rememberEmail', email, {maxAge: 2000});   //체크박스 값이 트루일때 저장버튼누르면 쿠키저장_이메일
        }else{
            removeCookie('rememberEmail'); //체크박스 값이 폴스일때
        }
    }

    const buttonClicked1 = () => {
        history.push({pathname: "/auth/registerinf"})
    }

    const buttonClicked2 = () => {
        history.push({pathname: "/auth/mainservice2"})
    }

    //모달함수
    
    // const setCloseDeliveryModal = () => {
    //     console.log("close clicked")
    //     //setCampaignApplyModalState(false)
    //     setDeliveryInfoChangeModalState([])
    // }
    

    // const setDeliveryInfo = (name, phone_num, address1, address2) => {
    //     console.log("close clicked")
    //     setNameState(name)
    //     let temp_phone_num = phone_num.substring(0, 3) + "-" + phone_num.substring(3, 7) + "-" + phone_num.substring(7, 11) 
    //     setPhoneNumState(temp_phone_num)
    //     setAddressState(address1 + ", " + address2)

    // }

    const closeClicked = (e) => {
        if (e === "신청완료"){
            console.log("신청완료 클릭")
            history.push({
                pathname: "/influencer/main/campaign_status/application_completed"
            })
        // }else if (e === "배송정보변경") {
        //     console.log("배송정보변경 클릭")
        //     let temp_delivery_info_change_modal = 
        //         // <DeliveryInfoChangeModal 
        //         //     setCloseDeliveryModal={setCloseDeliveryModal} 
        //         //     setDeliveryInfo = {setDeliveryInfo}
        //         // />
        //     setDeliveryInfoChangeModalState(temp_delivery_info_change_modal)
        }
        else {
            setCloseModal()
        }
    }

    return(
        <BackgroundModal>
            {/* <CampaignApplyModal> */}
                {/* <Positioner1>
                    <Label>
                        SampleLife
                    </Label>
                    <CloseButton onClick={(e) => closeClicked(e)} src="/images/campaign/x.png" />
                </Positioner1> */}
                <AuthWrapper>          
                    {/* <button className="close" onClick={(e) => closeClicked(e)}> close </button> */}
                    <CloseButton onClick={(e) => closeClicked(e)} src="/images/homepage/x.png" />
                    <Table align="center">
                        <Tbody>
                            <Tr>
                                <td colSpan="3">
                                <InputWithLabel                             
                                    name="email" 
                                    placeholder="이메일" 
                                    value={email} 
                                    onChange={handleChange}
                                />
                                </td>
                            </Tr>
                            <Tr>
                                <td colSpan="3">
                            <InputWithLabel                         
                                name="password" 
                                placeholder="비밀번호" 
                                type="password" 
                                value={password} 
                                onChange={handleChange}
                            />
                                </td>
                            </Tr>
                            <TrBlank>                               
                            </TrBlank>
                            <Tr>
                                <td>
                                    <Check
                                        label = '이메일(아이디) 저장'
                                        type = 'checkbox'
                                        onChange = {handleOnChange}
                                        checked_bool={isRemember}
                                        >
                                    </Check>
                                </td>
                                <td></td>
                                <td>
                                    <FindPW to ="/auth/find">이메일 | 비밀번호찾기</FindPW>  
                                </td>
                            </Tr>
                            <Tr>
                                <td colSpan="3">
                                    <LoginButton onClick={componentClicked}>SAMPLE LIFE 로그인</LoginButton>
                                </td>
                            </Tr>
                            <Tr>
                                <td colspan="3" style={{paddingBottom:'15px'}}>
                                <AuthFacebookButton></AuthFacebookButton>
                                </td>

                            </Tr>
                            <Tr>
                                <td colspan = "3">
                                    <Font2>
                                        인스타그램 사용자는 페이스북 아이디로 로그인할 수 있습니다.
                                    </Font2>
                                </td>
                            </Tr>
                            <Tr>
                                <td></td>
                                <td>
                                    <Font>
                                         
                                    </Font>
                                </td>
                                <td></td>
                            </Tr>
                            <Tr style={{borderTop: '2px solid lightgray'}}>
                                
                                <td colspan = "3" style={{paddingBottom:'15px'}}>
                                    <Font>
                                        회원 가입
                                    </Font>
                                </td>
                            </Tr>

                            <Tr>
                                <td>
                                    <LeftAlignedButton onClick={buttonClicked1}>인플루언서 회원가입</LeftAlignedButton>
                                </td>
                                <td></td>
                                <td>
                                    <RightAlignedButton onClick={buttonClicked2}>클라이언트 회원가입</RightAlignedButton>
                                </td>
                            </Tr>
                            <Tr>
                                <td>
                                    <LeftAlignedLink>인플루언서 서비스 보기</LeftAlignedLink>
                                </td>
                                <td>
                                    <Font3>|</Font3>
                                </td>
                                <td>
                                    <RightAlignedLink>클라이언트 서비스 보기</RightAlignedLink>
                                </td>
                            </Tr>
                        </Tbody>
                    </Table>

                
                    
                    <AlignerCenter>
                        
                    </AlignerCenter>

                    
            </AuthWrapper>
            {/* </CampaignApplyModal> */}
                {/* {delivery_info_change} */}
        </BackgroundModal>
    )
};

export default LoginModal;