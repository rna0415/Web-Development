import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { withRouter } from "react-router-dom"
import { Wrapper1, Content1 } from '../../components/Auth/Clientregi';
import { useHistory } from "react-router-dom";

const Positioner = styled.div`
`;

const Font= styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;


`;

const Font2 = styled.div`
    margin-bottom: 5px;   
    font-size:1rem;
    text-align: center;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

`;
const Tr = styled.tr`
`;



const Tbody = styled.tbody`
`;

const TrBlank = styled.td`
    padding-top: 25px;
`;

const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    width: '660px',
    display: 'block'
};

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AlignedButton = styled.button`
    width: 180px;
    margin-top: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;    
    border: 1px solid ${oc.gray[6]};

    background: white;
    color: black;

    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    text-decoration:none;
    &:hover {
        color: ${oc.gray[6]};
        border: 1px solid ${oc.gray[7]};
    }
`;




const MainService = ({}) =>{
    const history = useHistory();
    console.log(history);
    let companyName = history.location.state.companyName


    const Tr2 = ({cName}) => {
        return(
            <div>
                {cName}
            </div>
            
        )
    }
    return(
        <Wrapper1 title="SAMPLE LIFE" >
            <Content1>
                <div style={appStyle}>
                    <div style = {formStyle}>    
                        <Positioner>                   
                            <Table align="center">        
                                <Tbody>       
                                    <Tr style={{borderTop: '2px solid gray'}}>
                                        <td colspan="3">
                                            <Font>
                                                회원가입 완료 
                                            </Font>
                                        </td>         
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                                감사합니다.
                                            </Font2>    
                                        </td>
                                    </Tr>
                                    <Tr>
                                        <FlexDiv>
                                            <td>
                                                <Tr2 cName={companyName}/> 
                                            </td>
                                            <td td colspan="2">                                             
                                                <Font2>                                  
                                                    님의 SampleLife 클라이언트 등록이 완료되었습니다.  
                                                </Font2>                                            
                                            </td>  
                                        </FlexDiv>
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                                인플루언서 마케팅 플랫폼 SampleLife는 빅데이터와 인공지능기술을 적용한
                                            </Font2>
                                        </td>
                                    </Tr>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                            매칭 서비스를 제공하여 클라이언트(광고주)의 다양한 캠페인을 지원합니다.
                                            </Font2>
                                        </td>
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                            원하시는 광고나 캠페인을 등록하여 목적에 맞는 인플루언서를 추천받으세요!
                                            </Font2>
                                        </td>
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                            감사합니다.
                                            </Font2>
                                        </td>
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr>
                                        <td colspan="3">
                                            <Font2>
                                                SampleLife
                                            </Font2>
                                        </td>
                                    </Tr>
                                    <TrBlank></TrBlank>
                                    <Tr></Tr>
                                    <TrBlank></TrBlank>
                                    <Tr style={{borderTop: '2px solid gray'}}>
                                        <FlexDiv>
                                        <td><AlignedButton>캠페인 사례</AlignedButton></td>
                                        <td><AlignedButton>클라이언트 서비스 이용안내</AlignedButton></td>
                                        <td><AlignedButton>인플루언서 현황 보기</AlignedButton></td>
                                        </FlexDiv>
                                    </Tr>
                                </Tbody> 
                            </Table>
                        </Positioner> 
                    </div>
                </div>
            </Content1>
        </Wrapper1>

    )

}


export default withRouter(MainService);