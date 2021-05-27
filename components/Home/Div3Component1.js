import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';


const Image = styled.img` 

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
    margin-left:50px;

`;

const Position3_3 = styled.div`
    margin-left:10px;    
    padding:30px;
    width:50%;
    margin-right:50x;

`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const div3component1 = () => {


    return(

    <Position3_1_1>
        <Positioner3_2 id="Positioner3_2">
            <Image src="/images/homepage/AI.jpg" style={{width:'500px'}} />
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
    )
}
export default div3component1