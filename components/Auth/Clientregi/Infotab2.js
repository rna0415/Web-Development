import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Input1, Input2, Info1, Label1, SelectWithLabel1, SelectWithLabel2} from '.';
import oc from 'open-color';
import { Label } from '../Find';
// import axios from 'axios';
// import { ExecuteBackendAPI } from '../../lib/api/restapi';
// import { GetBackendIP } from '../../settings';
// import { InputWithLabel } from '../../components/Auth';
// import { AuthWrapper3 } from '../../components/Auth';

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#7f05e6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const appStyle = {
    height: '250px',
    display: 'flex'
};

const Button = styled.button`
    width: 77px;
    height: 60px;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    padding-top: 4rem;
    padding-bottom: 3rem;

    background: #ffffff;
    color: black;

    text-align: bottom;
    font-size: 0.1rem;
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


const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #ffffff',
    borderRadius: '5px',
    width: '660px',
    display: 'block'
};



const Div = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
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
const TdButton = styled.td`
    width: 100px;
`;

const Infotab2 = () => {
    const [ email_info_msg, setEmailInfoMSG ] = useState("");
    const [url, setUrl] = useState("");
    const [category1, setCategory1] = useState("선택안함");
    const [category2, setCategory2] = useState("선택안함");
    const [success, setSuccess] = useState(false);
    const [buttonColor1, setButtonColor1] = useState("clicked");
    const [button_click_num, setButtonClickNum] = useState(0);
    const [theComponent1, setTheComponent1] = useState(false);
    const [theComponent2, setTheComponent2] = useState(false);


    const handleChange = (e) =>{
        if(e.target.name === "url"){
            setUrl(e.target.value);

        } else if (e.target.name === "category1"){
            setCategory1(e.target.value);
            if (e.target.value === "기타"){
                setTheComponent1(true)
    
            } else if (e.target.value === "선택안함"){
                setTheComponent1(false)
    
            } else if (e.target.value === "1"){
                setTheComponent1(false)
    
            } else if (e.target.value === "2"){
                setTheComponent1(false)
    
            } else if (e.target.value === "3"){
                setTheComponent1(false)
    
            } else if (e.target.value === "4"){
                setTheComponent1(false)
            }
        
        } else if (e.target.name === "category2"){
            setCategory2(e.target.value);
            if (e.target.value === "기타"){
                setTheComponent2(true)
    
            } else if (e.target.value === "선택안함"){
                setTheComponent2(false)
    
            } else if (e.target.value === "1"){
                setTheComponent2(false)
    
            } else if (e.target.value === "2"){
                setTheComponent2(false)
    
            } else if (e.target.value === "3"){
                setTheComponent2(false)
    
            } else if (e.target.value === "4"){
                setTheComponent2(false)
    
            } else if (e.target.value === "5"){
                setTheComponent2(false)
            }
        }

    }    

    const buttonClicked =(e) =>{
        // e.preventDefault();
        console.log(e)
        console.log(buttonColor1)
        console.log(e.target.value)
        console.log(button_click_num)
        if (e.target.value === ""){
            if (button_click_num < 3) {
                e.target.style.background = "#7f05e6"       //보라색
                e.target.style.color = 'white'
                e.target.value = "clicked"
                setButtonClickNum(button_click_num+1)
                //setButtonColor1("")
            }
        }
        else if (e.target.value === "clicked"){
            e.target.style.background = "#ffffff" // 흰색
            e.target.style.color = "black"
            e.target.value = ""
            if (button_click_num != 0) { 
                setButtonClickNum(button_click_num-1)
            //setButtonColor1("clicked")
            }
        }
        console.log(button_click_num)
        
    }

    const handleSubmit = () => {
       
        setSuccess(true)

        if(success === true){
            console.log('success true so form tag say hi');
        }
    }

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
                                    onChange={handleChange}/>

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
                                    <Input2 style={{width: '95%'}} type='text' placeholder="기타업종 직접 입력" component={theComponent1}></Input2>
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
                                <Button onClick={buttonClicked}>화장품</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>패션</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>핫플레이스</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>요리/음식</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>여행</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>뷰티</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>육아</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>반려동물</Button>  
                                </TD>                                
                                </Tr>
                                <Tr> 
                                <TD>  
                                <Button onClick={buttonClicked}>인테리어</Button>
                                </TD>                     
                                <TD>
                                <Button onClick={buttonClicked}>엔터</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>스포츠</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>사진</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>IT</Button>
                                </TD>
                                <TD>
                                <Button onClick={buttonClicked}>자동차</Button>
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
                                    <Input2 style={{width: '95%'}} type='text' placeholder="기타 경로 직접 입력" component={theComponent2}></Input2>
                                </TD>
                            </Tr>
                        </Tbody>
                    </Table>
                </Positioner>

                <button style = {submitStyle} type="submit" onClick = {handleSubmit}>저장</button>
             </div>
         </div>
                        

    ); 
}



export default Infotab2;