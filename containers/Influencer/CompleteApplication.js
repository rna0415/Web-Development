import React, { useState, useEffect} from 'react';
import { UserContent} from '../../components/User';
import { RightAlignedLink } from '../../components/Auth';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Footer, RecommendationCampaign } from '../../components/Influencer/campaign_status';
import HeaderContainerLogined from '../../containers/Base/HeaderContainerLogined';

const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    position: fixed;
    left: 0;
    overflow: auto;
`;

// 빈칸
const BlankDiv = styled.div`
    height: 50px;
    width: 100%;
    background: white;
    justify-content: center;
`;


// 화면의 중앙에 위치시킨다
const Positioner1 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    height: 580px;
    justify-content: center;
`;


const Container1 = styled.div`
    width: 950px;
    height: 100%;
    margin-bottom: 30px;
    background: white;
    justify-content: space-around;
    border-bottom: solid 3px gray;
`;

// 빈칸
const ContentsBox= styled.div`
    width: 100%;
    height: 480px;
    justify-content: center;
    border: solid 1px gray;
`;

// 빈칸
const RowDiv = styled.div`
    display: flex;
    width: 100%;
    float: left;
    justify-content: center;
`;


const Label = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
`;

const Button = styled.button`
    width: 30%;
    height: 40px;
    background: #7f05e6;
    color: white;
    float: left;
    font-size: 1.8rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    text-align: center;
    justify-content: center;
    border: solid 0px;
    cursor: pointer;
`;
const CompleteApplication = () => {
    const history = useHistory();
    // console.log(this.props.location.state)
    // let influencer_info = this.props.location.state
    // console.log(influencer_info["name"])
    // console.log(this.props.match.params)

    const componentClicked = (e) => {
        console.log("확인 클릭")
        history.push({
            pathname: "/influencer/main/my_campaign"
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('컴포넌트가 화면에서 나타남');


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    return (
        <div>
            <HeaderContainerLogined />
            <CampaignStatusBox>
                <Positioner1>
                    <Container1>
                        <BlankDiv>
                        </BlankDiv>
                        <ContentsBox>
                            <RowDiv style={{marginTop: "45px", height: "45px"}}>                    
                                <Label style={{ fontSize: "2.0rem", fontWeight: "1000"}}>캠페인 신청완료</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "40px"}}>                    
                                <Label style={{ fontSize: "0.8rem", color: "gray"}}>다음 캠페인의 참여신청이 완료되었습니다.</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "5px"}}>                    
                                <Label style={{ fontSize: "0.8rem", color: "gray"}}>모집기간 마감 후 선정 여부를</Label>
                                <Label style={{ fontSize: "0.8rem", color: "black", fontWeight: "1000"}}>&nbsp;개별 안내</Label>
                                <Label style={{ fontSize: "0.8rem", color: "gray"}}>해 드립니다.</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "5px"}}>                    
                                <Label style={{ fontSize: "0.8rem", color: "gray"}}>캠페인 신청현황은 </Label>
                                <Label style={{ fontSize: "0.8rem", color: "black", fontWeight: "1000"}}> &nbsp;My 캠페인</Label>
                                <Label style={{ fontSize: "0.8rem", color: "gray"}}>에서 확인하실 수 있습니다.</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "40px", justifyContent: "left"}}>               
                                <Label style={{ fontSize: "0.8rem", width: "290px", color: "gray"}}></Label>     
                                <Label style={{ fontSize: "1.3rem", width: "100px", borderRight: "solid 1px black", fontWeight: "1000"}}>삼성전자</Label>
                                <Label style={{ fontSize: "1.3rem", marginLeft: "20px", fontWeight: "1000"}}>갤럭시 신제품 체험단 모집</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "30px", justifyContent: "left"}}>                    
                                <Label style={{ fontSize: "0.8rem", width: "290px", color: "gray"}}></Label>
                                <Label style={{ fontSize: "0.8rem", width: "100px", color: "gray"}}>모집현황</Label>
                                <Label style={{ fontSize: "0.8rem", marginLeft: "20px", color: "gray"}}>모집 100명 / 현재 150명 / 경재률 1:1.5</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "5px", justifyContent: "left"}}>                    
                                <Label style={{ fontSize: "0.8rem", width: "290px", color: "gray"}}></Label>
                                <Label style={{ fontSize: "0.8rem", width: "100px", color: "gray"}}>모집기간</Label>
                                <Label style={{ fontSize: "0.8rem", marginLeft: "20px", color: "gray"}}>21.04.29 ~ 21.05.05</Label>
                            </RowDiv>
                            <RowDiv style={{marginTop: "40px"}}>
                                <Button onClick={(e) => componentClicked()}>확인</Button>
                            </RowDiv>
                        </ContentsBox>
                    </Container1>
                </Positioner1>
                <BlankDiv>
                </BlankDiv>
                <RecommendationCampaign></RecommendationCampaign>
                <Footer>
                </Footer>
            </CampaignStatusBox>
        </div>

    );
}

export default CompleteApplication;