import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Footer, Modal, RecommendationCampaign } from '../../components/Influencer/campaign_status';
import oc from 'open-color';

const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    overflow: auto;
`;

// 빈칸
const BlankDiv = styled.div`
    height: 25px;
    width: 100%;
    background: white;
    justify-content: center;
`;

const Image = styled.img`
`;

const Button = styled.button`
    background-color: #7f05e6; 
    border-radius: 24px;   
    border: 1px solid ${oc.gray[6]};
    padding: 10px 32px;
    color:white;
    cursor: pointer;

`;

const Font1 = styled.div`
    font-size: 0.9rem;
    white-space;
    break-word;
`;

const Font2 = styled.div`
    font-size: 1.5rem;
    
`;

const Font3 = styled.div`
    font-size: 2rem;
`;

const BlueFont = styled.div`
    color: #009DC4;
    font-weight:900;
`;

const PurpleFont = styled.div`
    color: #7f05e6;
`;

const BoldFont= styled.div`
    font-weight:bold;    
`;
const FlexDiv1 = styled.div`
    display:flex;
    justify-content: center;
`;

const FlexDiv = styled.div`
    display:flex;

`;

//화면사이즈를 줄일때 layout변경되지않고 윈도우즈창만 줄어들게하려면??

// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
`;

// width를 사진크기에 맞춰 조절가능, 좌우조절
const Positioner1_1 = styled.div` 
    width:99%; 
    height 500px;
    background:url(/images/homepage/hello.jpg);
    text-align: center;
    justify-content: center;
    position: absolute;
`;

//위치 상하조정
const Positioner1_2 = styled.div` 
    margin-top:150px;
    font-weight:900;
    color:gray;
`;


//배경
const Positioner2 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    background-color: #7f05e6;    
`;

//좌우조절
const Positioner2_1 = styled.div`
    display: flex;
    width:100%;
    height: 500px;
    justify-content: center;
    position: absolute;

`;
//상하조절겸 텍스트div
const Positioner2_2 = styled.div` 
    margin-top:100px;
    color:white;

    
    
`;

//그림 div (용도는 2개 div사이 간격조절)
const Position2_3 = styled.div`
    margin-left:20px;
    width:35%;
`;


const Positioner3 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    
`;

//빨간 보더 밑 좌우조절
const Positioner3_1 = styled.div`
    display: flex;
    width:95%;
    height: 500px;
    border: 5px dotted red;
    border-radius:15%;
    justify-content: center; 
    position: absolute;
    
`;
//가운데 조절
const Positioner3_1_1 = styled.div`    
    display:flex;
    justify-content: center;
    width:90%;

`;

//상하조절
const Positioner3_2 = styled.div` 
    margin-top:10%;
    margin-bottom:10%;
    display:flex;
    justify-content: flex-end;
    width:50%;

`;

const Position3_3 = styled.div`
    margin-left:10px;    
    padding:30px;
    width:50%;
    margin-right:10%;

`;




const Positioner4 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    background-color: #7f05e6;

`;
//좌우조절
const Positioner4_1 = styled.div`
    display: flex;
    width:100%;
    height: 500px;
    text-align: center;
    justify-content: center;
    position: absolute;

`;
//상하조절
const Positioner4_2 = styled.div` 
    margin-top:100px;
    color:white;
`;

const Positioner5 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
`;

//좌우조절
const Positioner5_1 = styled.div`
    display: flex;
    width:100%;
    height: 500px;
    text-align: center;
    justify-content: center;
    position: absolute;

`;
//상하조절
const Positioner5_2 = styled.div` 
    margin-top:80px;
    color:black;
`;

const ContentsBox5 = styled.div`
    padding: 50px;
    color : #7f05e6;
`;



const Home_Main = () => {
    const history = useHistory(); 

    const buttonClick = () =>{
        history.push({pathname: "/influencer/main/campaign_status"})
    }

    return (
        <CampaignStatusBox id="틀">
            <BlankDiv>
            </BlankDiv>
            <Positioner1 id="Positioner1">
                <Positioner1_1 id="Positioner1_1">
                    <Positioner1_2 id="Positioner1_2">                           
                        <FlexDiv1>               
                        <Font1>인플루언서 마케팅 플랫폼</Font1> - <BoldFont>SampleLife</BoldFont>
                        </FlexDiv1>
                        <br></br>
                        <Font2>
                        나의 콘텐츠와 어울리는 맞춤 캠페인
                        <br></br>
                        이제 SampleLIFE에서 만나보세요
                        </Font2>
                        <br></br>                        
                        <Button onClick={buttonClick}>캠페인 현황보기</Button>                        
                    </Positioner1_2>
                </Positioner1_1>
            </Positioner1>

            <Positioner2 id="Positioner2">
                    <Positioner2_1 id="Positioner2_1">
                        <Positioner2_2 id="Positioner2_2">
                            <FlexDiv>
                            <Font1>인플루언서 마케팅 플랫폼</Font1> - <BoldFont>SamepleLife</BoldFont>
                            </FlexDiv>
                            <br></br>
                            <Font3>
                            정성스럽게 가꾸어 온 내 SNS!
                            <BoldFont>
                            이제 즐기면서 수익도 벌자!
                            </BoldFont>
                            </Font3>                           
                            <Font1>
                            <br></br>                            
                            <FlexDiv>SamepleLife는 활발한 SNS 활동으로 구독자들에게 영감을 주는 <BlueFont>인플루언서와</BlueFont></FlexDiv>
                            <FlexDiv><BlueFont>다양한 브랜드의 광고홍보 Needs를 연결하는 마케팅 플랫폼</BlueFont>입니다.</FlexDiv>
                            <br></br>                           
                            <FlexDiv><BlueFont>인공지능 기반의 데이터 분석</BlueFont>과 고유의<BlueFont>매칭 알고리즘</BlueFont>을 적용하여</FlexDiv>                         
                            인플루언서의 개성과 브랜드의 속성을 연계한 캠페인을 지원함으로써
                            <br></br>                      
                            SNS를 통한 광고홍보 활동 분야의 공정한 비즈니스 생태계를 구축하였습니다.
                            </Font1>
                            
                        </Positioner2_2>
                        <Position2_3 id="Position2_3">
                            <Image src="/images/homepage/boltouch.png" />
                        </Position2_3>
                    </Positioner2_1>
            </Positioner2>

            <BlankDiv>
            </BlankDiv>

            <Positioner3 id="Positioner3">                
                <Positioner3_1 id="Positioner3_1">
                    {/* <Positioner3_1_1 id="Positioner3_1_1"> */}
                        <Positioner3_2 id="Positioner3_2">
                            <Image src="/images/homepage/AI.jpg" style={{width:'300px'}} />
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
                    {/* </Positioner3_1_1> */}
                </Positioner3_1>
            </Positioner3>

            <BlankDiv>
            </BlankDiv>

            <Positioner4 id="Positioner4">
                <Positioner4_1 id="Positioner4_1">
                    <Positioner4_2 id="Positioner4_2">                    
                        <Font2>켐페인 참여방법</Font2>                                                
                        <br></br>                    
                        <Font1>나에게 맞는 브랜드의 광고홍보 활동에 참여하여 포스팅을 수행하고 그에 따른 보상을 합니다.</Font1>                          
                        <br></br>
                        01. 인플루언서 등록 02. 추천 캠페인 캠페인 현황 03. 캠페인 상세보기 캠페인 참여신청 04. 포스팅 05.성과측정 보상
                    </Positioner4_2>
                </Positioner4_1>
            </Positioner4>
            
            <Positioner5 id="Positioner5">
                <Positioner5_1 id="Positioner5_1">
                    <Positioner5_2 id="Positioner5_2">                
                        <Font3>다양한 브랜드</Font3>                    
                        <br></br>                
                        <Font2>현재까지 SampleLife에 참여해 주신 브랜드와 인플루언서</Font2>
                        <br></br>
                        <FlexDiv1>
                            <ContentsBox5 id="ContentsBox5">
                                <Font1>
                                    브랜드
                                </Font1>
                                <Font2>
                                    12,345
                                </Font2>
                            </ContentsBox5>
                            <ContentsBox5>
                                <Font1>
                                    인플루언서
                                </Font1>
                                <Font2>
                                    1,120,345
                                </Font2>
                            </ContentsBox5>
                            <ContentsBox5>
                                <Font1>
                                    캠페인
                                </Font1>
                                <Font2>
                                    120,345
                                </Font2>
                            </ContentsBox5>    
                        </FlexDiv1>                                   
                        <div>
                        <br></br>
                        <Button onClick={buttonClick}>캠페인 현황보기</Button>
                        </div>
                    </Positioner5_2>
                </Positioner5_1>                
            </Positioner5>
            <Footer>
            </Footer>
        </CampaignStatusBox>
    );
}

export default Home_Main;

