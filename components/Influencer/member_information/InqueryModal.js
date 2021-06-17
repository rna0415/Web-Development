import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {SuccessModal} from ".";




const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 5;
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 900px;
 
`;

// 로고
const LogoWrapper = styled.div`
    background: #7f05e6;
    height: 3rem;
    display: flex;
    justify-content: end;
`;



// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

// 로그인 CSS
const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
`;



const RowDiv = styled.div`
    width: 100%;
    height: 40px;
`;

const Label = styled.div`
    float: left;
    font-size: 1rem;
    font-family: 'Rajdhani';
    font-weight: 500;
    height: 20px;
    color:white
`;

const Input = styled.input`
    width: 90%;
    border: 1px solid ${oc.gray[9]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

const Input2 = styled.textarea`

    width: 90%;
    border: 1px solid ${oc.gray[9]};
    outline: none;
    border-radius: 0px;
    height: 300px;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

const Select = styled.select`
    width: 40%;
    border: 1px solid ${oc.gray[9]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[9]};
    }
`;


const Option = styled.option`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

const Button1 = styled.button`
    width: 160px;
    height: 50px;
    color: white;
    font-size:1rem;
    background-color: #7f05e6;
    border: 1px solid black;
    border-radius:5px;
    cursor:pointer;
    margin-left:20px;
    font-weight:600;
`;

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
const StrongTd= styled.td`
    line-height: 2.5rem;
    font-weight:900;
    font-size:1.2rem;
    

`;
const Td = styled.td`
    line-height: 2.5rem;
    text-indent: 10px;
    

    
    
`;

const TdLable = styled.td`
    width: 130px;
    line-height: 2.5rem;
    
    text-indent: 10px;
`;

const Flexdiv = styled.div`
    display:flex;
    justify-content:center;
`;


const InqueryModal = ({setCloseModal}) => {

    const history = useHistory();
    const [check,setCheck] = useState(false);
    const [successModal, setSuccessModal] = useState([]);
    const [inqueryCategory, setInqueryCategory] = useState('회원가입 문의');
    const [title, setTitle] = useState('');
    const [inqueryContent, setInqueryContent] = useState('');
    const [buttonEnable, setButtonEnable] = useState(false)

    


    const closeClicked = (e) => {
        if (e === 'close'){
            setCloseModal()

        }
    }
    const setCloseModal2 = () => {
        console.log("close clicked")
        
        setSuccessModal([])
    }

    const componentClick = () =>{ 
        
        let temp_inquery_modal = <SuccessModal setCloseModal ={setCloseModal} setCloseModal2={setCloseModal2} />
        setSuccessModal(temp_inquery_modal)
        
    };

    const Check = ({label,checked_bool, ...rest}) => {
        const checkedb = checked_bool;
    
        
        return(
            <div>
            <input style={checkStyle} {...rest} checked= {checkedb} ></input> {label}
            <br></br>
            </div>
        )
    }

    const ButtonControl = ({buttonEnable,componentClick}) => {
        if(buttonEnable === true){
            return(
                <Button1 onClick={componentClick}>제출하기</Button1>
            )
        }else{
            return(
                <Button1 style={{backgroundColor:'#E6E6FA', color:'black'}} disabled>제출하기</Button1>
            )
        }
    }

    const handleChange = (e) => {
        if(e.target.name ==="title"){
            setTitle(e.target.value);
        }else if(e.target.name ==="inquerycontent"){
            setInqueryContent(e.target.value);
        }else if(e.target.name === "inquerycategory"){
            setInqueryCategory(e.target.value)
        }
    }

    const handleOnChange = () =>{
        if(check === true){
            setCheck(false)
        }else{
            setCheck(true)
        }
    }

    useEffect(() => {
        console.log(buttonEnable)

        if(inqueryCategory !== "" && title !== "" && inqueryCategory !=="" && check ===true){
            setButtonEnable(true)

        }else{
            setButtonEnable(false)
        }

    }, [inqueryCategory,title,inqueryContent,check]);
      


    return (
        <BackgroundModal>      
            <Positioner>
                <ShadowedBox>
                    <LogoWrapper>
                        <Label  style={{marginTop:'10px',marginLeft:'10px', fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>1:1상담하기</Label>
                    </LogoWrapper>
                    <Contents>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdLable>
                                        상담유형
                                    </TdLable>
                                    <Td colSpan="5">
                                        <Select
                                        name="inquerycategory"
                                        value={inqueryCategory}
                                        onChange={handleChange}>
                                            <Option value="회원가입 문의">회원가입 문의</Option>
                                            <Option value="캠페인관련 문의">캠페인관련 문의</Option>
                                            <Option value="정산관련 문의">정산관련 문의</Option>
                                            <Option value="사이트이용 문의">사이트이용 문의</Option>
                                            <Option value="기타 문의">기타 문의</Option>
                                        </Select>
                                    </Td>
                                </Tr>
                                <TdBlank></TdBlank>
                                <Tr>
                                    <TdLable>
                                        연락처
                                    </TdLable>
                                    <Td>
                                        휴대폰
                                    </Td>
                                    <Td>
                                        01076727366
                                    </Td>
                                    <Td>
                                        이메일
                                    </Td>
                                    <Td>
                                        rna0415@nate.com
                                    </Td>
                                    <Td style={{width:'100px'}}></Td>
                                </Tr>
                                <TdBlank></TdBlank>
                                <Tr>
                                    <TdLable>
                                        제목
                                    </TdLable>
                                    <Td colSpan="5">
                                        <Input
                                        name = "title"
                                        onChange={handleChange}
                                        value={title}>                                            
                                        </Input>
                                    </Td>
                                </Tr>
                                <TdBlank></TdBlank>
                                <Tr>
                                    <TdLable>
                                        상담내용
                                    </TdLable>
                                    <Td colSpan="5">
                                        <Input2
                                        name = "inquerycontent"
                                        onChange={handleChange}
                                        value={inqueryContent}>                                              
                                        </Input2>
                                    </Td>
                                </Tr>
                                <TdBlank></TdBlank>

                                <Tr>
                                    <TdLable>
                                        상담내용
                                    </TdLable>
                                    <Td>
                                        <button>파일선택</button>
                                    </Td>
                                    <Td>선택된 파일 없음</Td>
                                    <Td colSpan="3">                                        
                                    </Td>
                                </Tr>
                                <TdBlank></TdBlank>

                                <Tr>
                                    <TdLable>
                                    </TdLable>
                                    <Td colSpan="5">                                     
                                        <Check
                                            label = '개인정보 수집 및 이용 방침에 동의합니다.'
                                            type = 'checkbox'
                                            onChange = {handleOnChange}
                                            checked_bool={check}
                                            />
                                    </Td>
                                </Tr>        

                                <TdBlank></TdBlank>                
                            </Tbody>
                        </Table>
                        <Flexdiv>
                            <ButtonControl
                            buttonEnable = {buttonEnable} 
                            componentClick={componentClick}>제출하기</ButtonControl>
                            {successModal}
                            <Button1 style={{backgroundColor:'#E6E6FA', color:'black'}} onClick={(e) => closeClicked('close')}>취소</Button1>
                        </Flexdiv>
                        
                        
                        <AlignerCenter>
                            
                        </AlignerCenter>
                    </Contents>
                </ShadowedBox>
            </Positioner>     
        </BackgroundModal>

    );
};
export default InqueryModal;


