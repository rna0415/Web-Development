import {React, useState, useEffect} from 'react';
import { AuthContent, InputWithLabel, AuthButton, AuthFacebookButton, RightAlignedLink, LeftAlignedLink, FindPW} from '../../components/Auth';
import styled from 'styled-components';
import oc from 'open-color';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { AuthWrapper } from '../../components/Auth';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import { shadow } from '../../lib/styleUtils';
import { ExecuteBackendAPI } from '../../lib/api/restapi';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';


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
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
    const history = useHistory();

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
            // client_id = email.split("@")[0] + email.split("@")[1].split(".")[0]
            client_id = email
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

    return(
            <AuthWrapper>
                {/* <AuthContent title="로그인"> */}
                                        
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
                                    {/* <LeftAlignedLink to="/auth/registerinf">인플루언서 회원가입</LeftAlignedLink> */}
                                    <LeftAlignedButton onClick={buttonClicked1}>인플루언서 회원가입</LeftAlignedButton>
                                </td>
                                <td></td>
                                <td>
                                    {/* <RightAlignedLink to="/auth/mainservice2">클라이언트 회원가입</RightAlignedLink> */}
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

                    
                {/* </AuthContent> */}
            </AuthWrapper>
        );
}   
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email:'',
//             password: '',
//             success: false,            
//         }
//         this.checkClient = async () => {
//             // 백엔드 서버 API 통신
//             this.setState({success: false})
//             let client_id
//             if (this.state.email.split("@").length === 2){
//                 client_id = this.state.email.split("@")[0] + this.state.email.split("@")[1].split(".")[0]

//                 let request = 'GET'
//                 let backend_api_url = "http://127.0.0.1:8000/api/user/client/" + client_id + "/"
//                 //console.log(client_id)
//                 let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
//                 //console.log('GET')
//                 //console.log(backend_api_response)
//                 if (backend_api_response) {
//                     //console.log(backend_api_response.data["password"])
//                     if (this.state.password === backend_api_response.data["password"]){
//                         console.log("로그인 성공")  
//                         this.props.history.push({pathname: "/user/client/home", state: this.state}) 
//                         // 이거확인버튼식
//                     }else {
//                         console.log("암호가 같지 않습니다.")  
//                     }
//                 } else {
//                     console.log("ID가 없습니다. 회원가입 해주세요.")
//                 }
//             } else {
//                 console.log("이메일을 제대로 입력해주세요.")
//             }
//         }
//         this.handleChange = (e) => {
//             if (e.target.name === "email"){
//                 this.setState({email: e.target.value});
//             } else if (e.target.name === "password"){
//                 this.setState({password: e.target.value});
//             }
//         }
//         this.componentClicked = () => {
//             //console.log('clicked');
//             this.setState({success: true})

//             if (this.state.email.length === 0) {
//                 console.log("이메일을 입력해주세요.")
//                 this.setState({success: false})
//             }

//             //console.log(this.state.password)
//             //console.log(this.state.passwordConfirm)
//             if (this.state.password.length === 0){
//                 console.log("비밀번호를 입력해주세요.")
//                 this.setState({success: false})
//             }
//         }
//     }
//     componentDidUpdate() {
//         if (this.state.success === true){
//             this.checkClient()
//         }
//     }
//     render() {
//         return (
//             <AuthWrapper>
//                 {/* <AuthContent title="로그인"> */}
//                     <InputWithLabel 
                        
//                         name="email" 
//                         placeholder="이메일" 
//                         value={this.state.email} 
//                         onChange={this.handleChange}
//                     />
//                     <InputWithLabel 
                        
//                         name="password" 
//                         placeholder="비밀번호" 
//                         type="password" 
//                         value={this.state.password} 
//                         onChange={this.handleChange}
//                     />
//                     <label>
//                         <br></br>
//                         <input 
//                             name = 'SaveEmail'
//                             type = 'checkbox'>
//                         </input>
//                         이메일(아이디) 저장
//                         <FindPW to ="/auth/find">이메일/비밀번호찾기</FindPW>     
                        
//                     </label>
                
//                     <LoginButton onClick={this.componentClicked}>SAMPLE LIFE 로그인</LoginButton>
//                     <AlignerCenter>
                        
//                     </AlignerCenter>
//                     <AuthFacebookButton></AuthFacebookButton>
//                     <tabel>
//                         <tr></tr>
//                         <tr></tr>
//                     </tabel>
//                     <label>회원가입</label>
//                     <LeftAlignedLink to="/auth/registerinf">인플루언서 회원가입</LeftAlignedLink>
//                     <RightAlignedLink to="/auth/mainservice2">클라이언트 회원가입</RightAlignedLink>
                    
//                 {/* </AuthContent> */}
//             </AuthWrapper>
//         );
//     }
// }
//<Link to="/user/home">
//    <AuthFacebookButton></AuthFacebookButton>
//</Link>
export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Login);