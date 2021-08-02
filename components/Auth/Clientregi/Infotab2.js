import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Input1, Input2, Info1, Label1, SelectWithLabel1, SelectWithLabel2, Infotab1, SubmitButton2} from '.';
import oc from 'open-color';
import { Label } from '../Find';
import { useHistory } from "react-router-dom";

// import axios from 'axios';
// import { ExecuteBackendAPI } from '../../lib/api/restapi';
// import { GetBackendIP } from '../../settings';
// import { InputWithLabel } from '../../components/Auth';
// import { AuthWrapper3 } from '../../components/Auth';

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

const Button = styled.button`
    width: 77px;
    height: 60px;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

    background: #ffffff;
    color: black;

    text-align: bottom;
    font-size: 12px;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: #7f05e6;
        color: white;
    }

    &:active {
        background: #7f05e6;
        color: white;
    }
`;



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
    width: 130px;
`;
// 셀




const Infotab2 = ({tab1_info,setTab1Information}) => {
    const [tab2info,setTab2info] =useState(tab1_info)
    const [url, setUrl] = useState("");
    const [category1, setCategory1] = useState("선택안함");
    const [category2, setCategory2] = useState("선택안함");
    const [success1, setSuccess1] = useState(false);
    const [success2, setSuccess2] = useState(false);
    const [success3, setSuccess3] = useState(false);
    const [button_click_num, setButtonClickNum] = useState(0);
    const [selected_button, setSelectedButton] = useState([]);
    // const [selected_button_list, setSelectedButton] = useState([]);
    const [theComponent1, setTheComponent1] = useState(false);
    // const [components1, setComponents1] = useState("");
    // const [components2, setComponents2] = useState("");
    const [theComponent2, setTheComponent2] = useState(false);


    const history = useHistory();


    // const value = {
    //     "email": <Infotab1 email ={email}/>,
    //     "password": <Infotab1 password ={password}/>,
    //     "passwordConfirm": <Infotab1 passwordConfirm ={passwordConfirm}/>,
    //     "companyName": <Infotab1 companyName ={companyName}/>,
    //     "companyNumber": <Infotab1 companyNumber ={companyNumber}/>,
    //     "managerName": <Infotab1 managerName ={managerName}/>,
    //     "managerContact": <Infotab1 managerContact ={managerContact}/>

    // }

    useEffect(() => {
        if(tab1_info !== null){
            setTab2info(tab2info)
        }
    }, [tab2info]);

    useEffect(() => {
        console.log("tab2페이지에서 tab1: ", tab2info);
        console.log("category1:",category1)
    }, [category1]);
    useEffect(() => {
        console.log("tab2페이지에서 tab1: ", tab1_info);
        console.log('category2:',category2)
    }, [category2]);
    useEffect(() => {
        console.log("tab2페이지에서 tab1: ", tab1_info);
        console.log('selected_button:',selected_button)
    }, [selected_button,tab2info]);



    const handleChange = (e) =>{
        if(e.target.name === "url"){
            if (e.target.value === "") {
                setUrl(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.company_url = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess1(false)          
            } else {
                setUrl(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.company_url = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess1(true)             
            }
        } else if (e.target.name === "category1"){
            setCategory1(e.target.value);
            let temp_tab2Info = tab2info
            temp_tab2Info.company_category = e.target.value
            setTab2info(temp_tab2Info);
            
            if (e.target.value === ""){
                setTheComponent1(true)    
                setSuccess2(false)
            
            } else if (e.target.value === "선택안함"){
                setTheComponent1(false)
                setSuccess2(false) 
    
            } else if (e.target.value === "개인사업/자영업"){
                setTheComponent1(false)
                setSuccess2(true)
    
            } else if (e.target.value === "중소기업"){
                setTheComponent1(false)
                setSuccess2(true)
    
            } else if (e.target.value === "대기업"){
                setTheComponent1(false)
                setSuccess2(true)
    
            } else if (e.target.value === "광고대행사"){
                setTheComponent1(false)
                setSuccess2(true)
            }
        }else if(e.target.name === "components1"){
            if(e.target.value === ""){
                setCategory1(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.company_category = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess2(false)  
            }else{
                setCategory1(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.company_category = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess2(true)  
            }
        
        } else if (e.target.name === "category2"){
            setCategory2(e.target.value);

            let temp_tab2Info = tab2info
            temp_tab2Info.subscription_path = e.target.value
            setTab2info(temp_tab2Info);

            if (e.target.value === ""){
                setTheComponent2(true)  
                setSuccess3(false)              
    
            } else if (e.target.value === "선택안함"){
                setTheComponent2(false)
                setSuccess3(false)
    
            } else if (e.target.value === "온라인광고"){
                setTheComponent2(false)
                setSuccess3(true)
    
            } else if (e.target.value === "포털 검색"){
                setTheComponent2(false)
                setSuccess3(true)
    
            } else if (e.target.value === "문자, 이메일"){
                setTheComponent2(false)
                setSuccess3(true)
    
            } else if (e.target.value === "지인 추천"){
                setTheComponent2(false)
                setSuccess3(true)
    
            } else if (e.target.value === "행사(박람회, 세미나)"){
                setTheComponent2(false)
                setSuccess3(true)
            }
            
        }else if(e.target.name === "components2"){
            if(e.target.value === ""){
                setCategory2(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.subscription_path = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess3(false)  
            }else{
                setCategory2(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.subscription_path = e.target.value
                setTab2info(temp_tab2Info);
                setSuccess3(true)  
            }
        }

    }    

    const buttonClicked =(e) =>{
        // e.preventDefault();
        console.log('id: ',e.target.id)
        console.log('value:',e.target.value)
        console.log(button_click_num)

        
        let temp_selected_button = selected_button  //값을 넘겨줌
        console.log("1list:",temp_selected_button) //빈리스트에서 시작
        
        let temp_list = [] 
        for (var i in temp_selected_button) {    //선택한 리스트 내에서 loop 
            temp_list.push(temp_selected_button[i])     //새로 버튼 클릭하기까지 선택된 버튼 범위 안에서 append함
        }
        if (e.target.id === ""){
            if (button_click_num < 3) {
                e.target.style.background = "#7f05e6" // 보라색
                e.target.style.color = 'white'
                e.target.id = "clicked"
                setButtonClickNum(button_click_num+1)
                //setButtonColor1("")
                //temp_selected_button.push(e.target.value)
                let temp_tab2Info = tab2info
                temp_tab2Info.criteria_info = temp_list
                temp_list.push({"criteria":e.target.value}) //당장 클릭한거 append함
                setTab2info(temp_tab2Info); //선택한 리스트내에서 2개 + 당장선택한거 1개 append함 
                setSelectedButton(temp_list) 
                console.log('selected_button:',selected_button)
            }
        }
        else if (e.target.id === "clicked"){
            e.target.style.background = "#ffffff" // 흰색
            e.target.style.color = "black"
            e.target.id = ""
            if (button_click_num != 0) { 
            //setButtonColor1("clicked")
                let temp_tab2Info = tab2info
                temp_tab2Info.criteria_info = temp_list
                let targetindex;

                for(let i =0; i<temp_list.length;i++){
                    if(e.target.value===temp_list[i]["criteria"]){targetindex=i} 
                }
            
                console.log('targetindex',targetindex)
                temp_list.splice(targetindex, 1)
                setTab2info(temp_tab2Info);
                setSelectedButton(temp_list);
                setButtonClickNum(button_click_num-1);
                // console.log('selected_button:',selected_button)
            }
        }                
    }


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
                                <TD colSpan="3" style={{paddingBottom:'15px'}}>
                                    <Label1 label="클라이언트 필수정보를 입력하면 광고, 홍보, 캠페인을 등록하고 인플루언서를 모집할 수 있습니다."/>
                                </TD>
                                
                            </Tr>
                            <Tr style={{borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray'}}>
                                <TdLable>
                                    <TD style={{padding:'15px'}}>
                                    <Label1 label="회사 홈페이지"/>
                                    </TD>
                                </TdLable>  
                                <TD colSpan ="2">
                                    <Input1
                                    type="text" 
                                    name="url"
                                    placeholder="http:// 홈페이지 주소를 입력해 주세요"    
                                    value={url}
                                    onChange={handleChange}></Input1>

                                </TD>
                            </Tr>
                            <Tr style={{borderBottom: '1px solid lightgray'}}>
                                <TdLable >
                                    <TD style={{padding: '15px'}}>
                                        <Label1 label="사업자 구분"/>
                                    </TD>
                                </TdLable>
                                <TD>
                                    <SelectWithLabel1                            
                                        name="category1" 
                                        value={category1}
                                        onChange={handleChange}
                                    />
                                </TD> 
                                <TD>
                                    <Input2 
                                    style={{width: '95%'}} 
                                    type='text' 
                                    placeholder="기타업종 직접 입력" 
                                    name = "components1"
                                    // value={tab2info.company_category}
                                    onChange={handleChange} 
                                    component={theComponent1}></Input2>
                                </TD>                               
                            </Tr>
                            <Tr>
                                <TD style={{padding: '15px'}}>
                                    <Label1 label="취급업종"/>
                                </TD>
                                <TD colSpan="2" >
                                    <Label1 label="최대 3개까지 선택 가능합니다."></Label1>
                                </TD>
                            </Tr>
                            <Tr> 
                                <TD colSpan ="3">
                                <Tr>
                                <TD>                            
                                <Button 
                                onClick={buttonClicked}
                                value="화장품">화장품</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="패션"
                                >패션</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="핫플레이스"
                                >핫플레이스</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="요리/음식">요리/음식</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="여행">여행</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="뷰티">뷰티</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="육아">육아</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="반려동물">반려동물</Button>  
                                </TD>                                
                                </Tr>
                                <Tr> 
                                <TD>  
                                <Button 
                                onClick={buttonClicked}
                                value="인테리어">인테리어</Button>
                                </TD>                     
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="엔터">엔터</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="스포츠">스포츠</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="사진">사진</Button>
                                </TD>
                                <TD>
                                <Button 
                                onClick={buttonClicked}
                                value="IT">IT</Button>
                                </TD>
                                <TD>
                                <Button
                                onClick={buttonClicked}
                                value="자동차">자동차</Button>
                                </TD>                                
                                </Tr>
                                </TD>
                            </Tr>
                            <TdBlank></TdBlank>
                            <Tr style={{borderTop: '1px solid lightgray'}}>                            
                                <TdLable>
                                    <TD style={{padding: '15px'}}>
                                    <Label1 label="가입 경로"/>
                                    </TD>
                                </TdLable>
                                <TD>                                    
                                    <SelectWithLabel2                            
                                    name="category2"                             
                                    value={category2}
                                    onChange={handleChange}
                                    />                                    
                                </TD>                                    
                                <TD>
                                    <Input2 
                                    style={{width: '95%'}} 
                                    name="components2"                                    
                                    type='text' 
                                    placeholder="기타 경로 직접 입력"
                                    // value={tab2info.subscription_path}
                                    onChange={handleChange}  
                                    component={theComponent2}></Input2>
                                </TD>
                            </Tr>
                            
                        </Tbody>
                    </Table>
                </Positioner>

                <SubmitButton2
                success1 = {success1}
                success2 = {success2}
                success3 = {success3}
                button_click_num = {button_click_num}
                tab1_info = {tab1_info}
                url = {url}
                category1= {category1}
                selected_button={selected_button}
                category2={category2}
                setTab1Information={setTab1Information}
                tab2info={tab2info}>
                </SubmitButton2>
             </Form>
         </App>
                        
         
    ); 
}



export default Infotab2;