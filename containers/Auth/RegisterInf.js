import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import { ExecuteBackendAPI } from '../../lib/api/restapi';
import { GetBackendIP } from '../../settings';
import { InputWithLabel } from '../../components/Auth';
// import { AuthWrapper3 } from '../../components/Auth';

const Label = styled.div`
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
`;

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '660px',
    display: 'block'
};
const formStyle2 = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '550px',
    display: 'block'
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: 'auto'
};


class CompanyNo extends Component{
    render(){
        const{label} = this.props;
        return(
            <Label>
                {label} <input type="text" id="pin" name="pin" maxlength="4" size="4" style = {inputStyle}></input> <input type="text" id="pin" name="pin" maxlength="4" size="4"style = {inputStyle}></input> <input type="text"style = {inputStyle}></input>
                <br></br>
            </Label>
        )
    }
}

// class CompanyHref extends Component{
//     render(){
//         const{label} = this.props;
//         return(
//             <Label>
//                 {label} <input type="file" name="file" onChange={e => this.handleFileput(e)}/>  
//                 {/* <input type="button" onClick={this.handlePost()}/> */}
//                 <br></br>
//             </Label>
//         )
//     }
// }
class Check extends Component{
    render(){
        const{...rest} = this.props;
        const checkedb = this.props.checked_bool;
        console.log("Test Checked")
        console.log(checkedb)

        return(
            <div>
            <input style={inputStyle} {...rest} checked= {checkedb} ></input> {this.props.label}
            <br></br>
            </div>
        )
    }
}

class Input extends Component{
    render(){
        const{...rest} = this.props;
        return(
            <div>
            {this.props.label} <input style={inputStyle} {...rest}></input>
            <br></br>
            </div>
        )
    }
}
class RegisterInf extends Component {    
    constructor(props) {
        super(props);
        this.state = {            
            selectedFile: null,
            email:'',
            password: '',
            passwordConfirm: '',
            companyName: '',
            companyNumber: '',
            managerName: '',
            managerContact: '',            
            agreement: "",
            agreement1: "",
            agreement2: "",
            agreement3: "",
            success: false
        }
        this.handleChange = (e) => {
            if (e.target.name === "email"){
                this.setState({email: e.target.value});

            } else if (e.target.name === "password"){
                this.setState({password: e.target.value});

            } else if (e.target.name === "passwordConfirm"){
                this.setState({passwordConfirm: e.target.value});

            } else if (e.target.name === "companyName"){
                this.setState({companyName: e.target.value});

            }  else if (e.target.name === "companyNumber"){
                this.setState({companyNumber: e.target.value});

            } else if (e.target.name === "managerName"){
                this.setState({managerName: e.target.value});

            } else if (e.target.name === "managerContact"){
                this.setState({managerContact: e.target.value});

            }
        }
        this.allChecked = (e) =>{
            if (this.state.agreement === "checked"){
                this.setState({agreement:""})
                this.setState({agreement1: ""});
                this.setState({agreement2: ""});
                this.setState({agreement3: ""});             
            }
            else{                
                this.setState({agreement:"checked"})
                this.setState({agreement1: "checked"});
                this.setState({agreement2: "checked"});
                this.setState({agreement3: "checked"});                
                console.log("2")     
            }
         
        }
        this.inidivualChecked1 = () =>{
            this.setState({agreement:""});
            if (this.state.agreement1 === "checked"){
                this.setState({agreement1: ""})
                console.log(this.state.agreement1,"uh")
            }
            else{
                if(this.state.agreement2 ==="checked" && this.state.agreement3 ==="checked"){
                    this.setState({agreement:"checked"})                
                }else{
                    this.setState({agreement:""})
                }
                this.setState({agreement1:"checked"})

            }
         
        }
        this.inidivualChecked2 = () =>{
            this.setState({agreement:""});
            if (this.state.agreement2 === "checked"){
                this.setState({agreement2: ""})                
            }
            else{                
                console.log("2")    
                if(this.state.agreement1 ==="checked" && this.state.agreement3==="checked"){
                    this.setState({agreement:"checked"})
                }
                this.setState({agreement2: "checked"})
            }
         
        }
        this.inidivualChecked3 = () =>{
            this.setState({agreement:""});
            if (this.state.agreement3 === "checked"){
                this.setState({agreement3: ""})
            }
            else{
                if(this.state.agreement1 === "checked" && this.state.agreement2 ==="checked"){
                    this.setState({agreement:"checked"})
                }
                this.setState({agreement3: "checked"})
                console.log("2")     
            }
         
        }
        

        this.handleSubmit = (e) => {
            e.preventDefault();
            console.log('clicked');
            console.log('success:', this.state.success);
            console.log('selectedFile:', this.state.selectedFile);
            console.log('email:', this.state.email);
            console.log('password:', this.state.password);
            console.log('passwordConfirm:', this.state.passwordConfirm);
            console.log('companyName:', this.state.companyName);
            console.log('companyNumber:', this.state.companyNumber);
            console.log('managerName:', this.state.managerName);
            console.log('managerContact:', this.state.managerContact);
            console.log('agreement:', this.state.agreement);
            this.setState({success: true})

            //console.log(this.state.email)
            if (this.state.email.length === 0) {
                console.log("이메일을 입력해주세요.")
                this.setState({success: false})
            }
            //console.log(this.state.password)
            //console.log(this.state.passwordConfirm)
            if (this.state.password.length === 0 || this.state.passwordConfirm.length === 0){
                console.log("비밀번호를 입력해주세요.")
                this.setState({success: false})
            }
            else if (this.state.password !== this.state.passwordConfirm){
                console.log("비밀번호가 다릅니다.")
                this.setState({success: false})
            }
            if(this.state.success === true){
                console.log('success true so form tag say hi');
                
            }

            }
        
        this.handleFileput=(e)=> {
            this.setState({
                selectedFile : e.target.files[0],
            })
        }



        
    //
    // handlePost(){
    //     const formData = new FormData();
    //     formData.append("file", this.state.selectedFile);
    
    //     return axios.post("/api/upload", formData).then(res => {
    //         alert('성공')
    //     }).catch(err => {
    //         alert('실패')
    //     })
    // }
    }
    render() {
        return (
            <div style = {appStyle}>
                <form style = {formStyle} onSubmit = {this.handleSubmit}>
                    인플루언서 회원가입
                    <br></br><br></br>
                    <Input
                    label = "이메일"
                    type="text" 
                    name="email"
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleChange}
                    ></Input>
                    <Input
                    label = "비밀번호"
                    type="password" 
                    name="password"
                    placeholder="비밀번호"
                    value={this.state.password} 
                    onChange={this.handleChange}></Input>
                    <Input
                    label = "비밀번호 재확인"
                    type="password" 
                    name="passwordConfirm"
                    placeholder="비밀번호 재확인"
                    value={this.state.passwordConfirm} 
                    onChange={this.handleChange}></Input>
                    <Input
                    label = "회사명"
                    type="text" 
                    name="companyName"
                    placeholder="회사명"
                    value={this.state.companyName} 
                    onChange={this.handleChange}></Input>       
                    <CompanyNo
                    label = "사업자등록번호"
                    type="text" 
                    name="companyNumber"
                    placeholder="사업자등록번호"
                    value={this.state.companyNumber} 
                    onChange={this.handleChange}></CompanyNo>  
                    <Input
                    label = "사업자등록증 첨부"
                    type="file" 
                    name="fileHref" 
                    onChange={this.handleFileput} //이거는 경로지정필요
                    value={this.state.CompanyHref}></Input>  
                    <Input
                    label = "담당자명"
                    type="text" 
                    name="managerName"
                    placeholder="담당자명"
                    value={this.state.managerName} 
                    onChange={this.handleChange}></Input> 
                    <Input
                    label = "담당자 연락처"
                    type="text" 
                    name="managerContact"
                    placeholder="담당자 연락처"
                    value={this.state.managerContact} 
                    onChange={this.handleChange}></Input>
                    <Check
                    label = "전체동의"
                    type="checkbox"
                    name="agreement"
                    required={true}
                    checked_bool={this.state.agreement}
                    value = {this.state.agreement}                                  
                    onChange={this.allChecked}
                    ></Check>
                    <div style={formStyle2}>
                    <Check
                    label = "[선택] SampleLife에서 추천하는 캠페인 및 이벤트 정보 수신 동의"
                    type = "checkbox"
                    name = "agreement2"
                    checked_bool={this.state.agreement1}
                    onChange={this.inidivualChecked1}
                    ></Check>
                    <Check
                    label = "[필수] SampleLife의 서비스 이용약관 동의"
                    type = "checkbox"
                    name = "agreement3"
                    required={true}
                    checked_bool={this.state.agreement2}
                    onChange={this.inidivualChecked2}></Check>
                    <Check
                    label = "[필수] SampleLife의 개인정보처리방침 동의"
                    type = "checkbox"
                    name = "agreement4"
                    required={true}
                    checked_bool={this.state.agreement3}
                    onChange={this.inidivualChecked3}>
                    </Check>

                    </div>
                    <button style = {submitStyle} type="submit">저장</button>
                </form>
            </div>
        );
    }
}



export default withRouter(RegisterInf);