import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';


const Image = styled.img` 
    width:100%

`;
const Font1 = styled.div`
    font-size: 0.9rem;
    white-space;
    break-word;
`;
const Font3 = styled.div`
    font-size: 2rem;
`;

const Position3_1_1 = styled.div`
    display:flex;

`;

const Positioner3_2 = styled.div` 
    margin-top:100px;
    margin-bottom:100px;
    display:flex;
    justify-content: flex-end;
    width:50%;
    margin-left:40px;
    margin-right:20px;
`;

const Position3_3 = styled.div`       
    margin-top:50px;
    padding:20px;
    width:50%;
    margin-right:10x;

`;

const FlexDiv = styled.div`
    display:flex;

`;

const PurpleFont = styled.div`
    color: #7f05e6;
    font-weight:600;
`;

const ToolbarDiv = styled.div`
    display:flex;
    margin-top: -50px;
    position: absolute;


`;

const Toolbar1 = styled.button`
    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #efffff;
    border-radius: 3px;
    background: #7f05e6;
    width: 300px;
    color: white;
    display: block;
`;
const Toolbar2 = styled.button`
    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #efffff;
    border-radius: 3px;
    background: #cccccc;
    width: 300px;
    color: white;
    display: block;
`;
const Toolbar3 = styled.button`
    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #efffff;
    border-radius: 3px;
    background: #cccccc;
    width: 300px;
    color: white;
    display: block;
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const div3component1 = () => {


    return(

        <div id='diva'>
            <Position3_1_1>
                <Positioner3_2 id="Positioner3_2">
                    <Image src="/images/homepage/AI.jpg" style={{width:'400px', height:'300px'}} />
                </Positioner3_2> 

                <Position3_3 id="Positioner3_3">
                    <Font3 style = {{fontSize:"100px"}}>01</Font3>
                    <Font3 style={{color:"#7f05e6", fontWeight:"900"}}>
                        인공지능 기반의
                        <br></br>
                        빅데이터 분석
                    </Font3>
                    <Font1>
                        SampleLife는 실시간으로 변화하는 인플루언서의 데이터와 콘텐츠를
                        기계학습(Machine Learning)기법을 활용하여 정밀하게 분석하여
                        나에게 맞는 캠페인에 참여할 수 있도록 지원합니다.

                        SampleLife에 인플루언서 등록을 하면
                        획기적인 SNS분석 서비스를 체험할 수 있습니다.
                    </Font1>
                    
                </Position3_3>            
            </Position3_1_1>
            <div style={{display:'flex', justifyContent: 'center'}}>
            <ToolbarDiv>
                <Toolbar1></Toolbar1><Toolbar2></Toolbar2><Toolbar3></Toolbar3>
            </ToolbarDiv>
            </div>
        </div>

    )
}
export default div3component1