









class Infotab1 extends Component {    
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

        this.allChecked = () =>{
            if (this.state.agreement === "checked"){
                this.setState({agreement:""})
                this.setState({agreement1: ""});
                this.setState({agreement2: ""});
                this.setState({agreement3: ""});             
                console.log("1")     
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
                console.log("1")     
            }
            else{
                this.setState({agreement1: "checked"})
                console.log("2")     
            }
         
        }
        this.inidivualChecked2 = () =>{
            this.setState({agreement:""});
            if (this.state.agreement2 === "checked"){
                this.setState({agreement2: ""})                
                console.log("1")     
            }
            else{
                this.setState({agreement2: "checked"})
                console.log("2")     
            }
         
        }
        this.inidivualChecked3 = () =>{
            this.setState({agreement:""});
            if (this.state.agreement3 === "checked"){
                this.setState({agreement3: ""})
                console.log("1")     
            }
            else{
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
                    
                        <Label><Font>인플루언서 계정을 생성하여 SampleLife의 마케팅 플랫폼 서비스를 이용할 수 있습니다.</Font></Label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Input1
                        label = "이메일"
                        type="text" 
                        name="email"
                        placeholder="이메일"
                        value={this.state.email}
                        onChange={this.handleChange}
                        ></Input1>
                        <Input1
                        label = "비밀번호"
                        type="password" 
                        name="password"
                        placeholder="비밀번호"
                        value={this.state.password} 
                        onChange={this.handleChange}></Input1>
                        <Input1
                        label = "비밀번호 재확인"
                        type="password" 
                        name="passwordConfirm"
                        placeholder="비밀번호 재확인"
                        value={this.state.passwordConfirm} 
                        onChange={this.handleChange}></Input1>
                        <Input1
                        label = "회사명"
                        type="text" 
                        name="companyName"
                        placeholder="회사명"
                        value={this.state.companyName} 
                        onChange={this.handleChange}></Input1>       
                        <CompanyNo
                        label = "사업자등록번호"
                        type="text" 
                        name="companyNumber"
                        placeholder="사업자등록번호"
                        value={this.state.companyNumber} 
                        onChange={this.handleChange}></CompanyNo>  
                        <Input1
                        label = "사업자등록증 첨부"
                        type="file" 
                        name="fileHref" 
                        onChange={this.handleFileput} //이거는 경로지정필요
                        value={this.state.CompanyHref}></Input1>  
                        <Input1
                        label = "담당자명"
                        type="text" 
                        name="managerName"
                        placeholder="담당자명"
                        value={this.state.managerName} 
                        onChange={this.handleChange}></Input1> 
                        <Input1
                        label = "담당자 연락처"
                        type="text" 
                        name="managerContact"
                        placeholder="담당자 연락처"
                        value={this.state.managerContact} 
                        onChange={this.handleChange}></Input1>
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