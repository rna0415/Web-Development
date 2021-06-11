import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Footer } from '../../components/Influencer/campaign_status';
import { AlertModal } from '../../components/Influencer/my_campaign';
import oc from 'open-color';

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
    height: 500px;
    justify-content: center;
`;


const Container1 = styled.div`
    display: flex;
    width: 950px;
    height: 450px;
    margin-bottom: 30px;
    background: white;
    justify-content: space-around;
    border-bottom: solid 2px gray;
`;

const LeftBox = styled.div`
    width: 350px;
    height: 393px;
    justify-content: center;
    float: left;
    margin-top: 15px;
`;

const LeftTopBox = styled.div`
    width: 345px;
    height: 77%;
    justify-content: center;
    float: left;
`;

const LeftBottomBox = styled.div`
    width: 350px;
    height: 23%;
    justify-content: center;
    float: left;
`;

const LeftBottomPcitureBox = styled.div`
    width: 65px;
    height: 65px;
    justify-content: center;
    float: left;
    margin-top: 10px;
    margin-right: 5px;
`;

const CampaignImage = styled.img`   
    width: 100%; 
    height: 100%;
`;


const RightBox = styled.div`
    width: 450px;
    height: 393px;
    justify-content: center;
`;

// 빈칸
const RowDiv = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    float: left;
    justify-content: left;
`;

const TypeBox = styled.div`
    display: flex;
    width: 15%;
    height: 100%;
    background: white;
    border: solid 1px;
    border-color: #7f05e6;
    color: #7f05e6;
    float: left;
    margin-right: 5px;
    text-align: center;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    justify-content: center;
    line-height: 20px;
`;

const Label = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: white;
    float: left;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    text-align: center;
`;

const CampaignApplyButton = styled.button`
    display: flex;
    width: 300px;
    height: 100%;
    background: ${oc.gray[5]};
    color: white;
    float: left;
    font-size: 1.2rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    text-align: center;
    justify-content: center;
    line-height: 45px;
    border: solid 0px;
`;

const BackButton = styled.button`
    display: flex;
    width: 300px;
    height: 50%;
    background: white;
    color: #7f05e6;
    float: left;
    font-size: 1.2rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    text-align: center;
    justify-content: center;
    line-height: 45px;
    border: 1px solid #7f05e6;
    cursor: pointer;
`;

const CampaignCancelButton = styled.button`
    display: flex;
    width: 200px;
    height: 50%;
    background: #7f05e6;
    color: white;
    float: left;
    font-size: 1.2rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    text-align: center;
    justify-content: center;
    line-height: 45px;
    border: 1px solid #7f05e6;
    cursor: pointer;
    margin-left: 20px;
`;


const ClippingBox = styled.div`
    display: flex;
    width: 140px;
    height: 100%;
    background: white;
    border: solid 1px;
    border-color: #7f05e6;  
    color: #7f05e6;
    float: left;
    margin-left: 10px;
    font-size: 1.2rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
    text-align: center;
    justify-content: center;
    line-height: 45px;
    cursor: pointer;
`;

// 화면의 중앙에 위치시킨다
const Positioner2 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    justify-content: center;
    background: white;
`;


const Container2 = styled.div`
    display: flex;
    width: 950px;
    margin-bottom: 45px;
    background: white;
`;

const LeftBox2 = styled.div`
    width: 220px;
    justify-content: center;
    float: left;
    background: white;
    margin-left: 50px;
`;

const RightBox2 = styled.div`
    width: 650px;
    justify-content: center;
    background: white;
`;

const Label2 = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 1000;
`;

// 화면의 중앙에 위치시킨다
const Positioner3 = styled.div`
    display: flex;
    width: 100%;
    left: 300px;
    justify-content: center;
    background: white;
`;

const Container3 = styled.div`
    display: flex;
    width: 950px;
    background: white;
    height: 90px;
`;

const Container4 = styled.div`
    width: 950px;
    height: 200px;
    background: white;
    justify-content: space-around;
`;

const MyCampaignDetail = () => {
    const history = useHistory();
    console.log(history)
    const [campaign_apply_modal, setCampaignApplyModalState] = useState([])

    const [ images, setImageState ] = useState([{
        src: "/images/campaign/s21.jpg",
        border: "solid 2px #7f05e6",
        width: "65px",
        height: "65px"
    },
    {
        src: "/images/campaign/s21_3.webp",
        border: "",
        width: "65px",
        height: "65px"
    },
    {
        src: "/images/campaign/s21_4.jpg",
        border: "",
        width: "65px",
        height: "65px"
    },
    {
        src: "/images/campaign/s21_5.jpg",
        border: "",
        width: "65px",
        height: "65px"
    },
    {
        src: "/images/campaign/s21_6.jpg",
        border: "",
        width: "65px",
        height: "65px"
    }])
    const [ current_image, setCurrentImageState ] = useState( "/images/campaign/s21.jpg")

    const componentOvered = (image_no) => {
        for (var i = 0; i < 5; i++) {
            images[i].border = ""
            if (image_no === String(i)){
                console.log(image_no)
                //console.log(images[2])
                //current_image = images[2]
                //console.log(current_image)
                images[i].border = "solid 2px #7f05e6"
                images[i].width = "63px"
                images[i].height = "63px"
                setImageState(images)
                setCurrentImageState(images[i].src)
            }
        }
    }

    const setCloseModal = () => {
        console.log("close clicked")
        //setCampaignApplyModalState(false)
        setCampaignApplyModalState([])
    }
    
    const CampaignCancelClicked = () => {
        console.log("apply clicked")
        //setCampaignApplyModalState(true)
        let temp_campaign_apply_modal = <AlertModal setCloseModal={setCloseModal} />
        setCampaignApplyModalState(temp_campaign_apply_modal)
    }

    const BackButtonClicked = () => {
        history.push({
            pathname: "/influencer/main/my_campaign/"
        })  
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('컴포넌트가 화면에서 나타남');


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');


        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [current_image]);
    
    return (
        <CampaignStatusBox>
            <BlankDiv>
            </BlankDiv>
            <Positioner1>
                <Container1>
                    <LeftBox>
                        <LeftTopBox>
                            <CampaignImage src={current_image} />
                        </LeftTopBox>
                        <LeftBottomBox>
                            <LeftBottomPcitureBox>
                                <CampaignImage style={{border: images[0].border, width: images[0].width, height: images[0].height}} src={images[0].src} onMouseOver={() => componentOvered("0")}/>
                            </LeftBottomPcitureBox>
                            <LeftBottomPcitureBox>
                                <CampaignImage style={{border: images[1].border, width: images[0].width, height: images[0].height}} src={images[1].src} onMouseOver={() => componentOvered("1")}/>
                            </LeftBottomPcitureBox>
                            <LeftBottomPcitureBox>
                                <CampaignImage style={{border: images[2].border, width: images[0].width, height: images[0].height}} src={images[2].src} onMouseOver={() => componentOvered("2")}/>
                            </LeftBottomPcitureBox>
                            <LeftBottomPcitureBox>
                                <CampaignImage style={{border: images[3].border, width: images[0].width, height: images[0].height}} src={images[3].src} onMouseOver={() => componentOvered("3")}/>
                            </LeftBottomPcitureBox>
                            <LeftBottomPcitureBox style={{ marginRight: "0px"  }}>
                                <CampaignImage style={{border: images[4].border, width: images[0].width, height: images[0].height}} src={images[4].src} onMouseOver={() => componentOvered("4")}/>
                            </LeftBottomPcitureBox>
                        </LeftBottomBox>
                    </LeftBox>
                    <RightBox>
                        <RowDiv style={{ height: "20px"}}>
                            <TypeBox>인스타그램</TypeBox>
                            <TypeBox>제품 리뷰</TypeBox>
                            <TypeBox>오늘 마감</TypeBox>
                        </RowDiv>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <RowDiv style={{ height: "25px"}}>
                            <Label style={{ fontSize: "1.2rem", width: "20%", borderRight: "solid 1px gray"}}>삼성전자</Label>
                            <Label style={{ fontSize: "1.2rem", width: "200px", marginLeft: "10px"}}>Galaxy 21 Ultra 5</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "5px"}}></RowDiv>
                        <RowDiv style={{ height: "60px"}}>
                            <Label style={{ fontSize: "2.0rem"}}>갤럭시 신제품 체험단 모집</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.8rem", color: "gray"}}>갤럭시 신제품 s21을 받아보고 언박싱 체험후기를 올려주세요.</Label>
                            </RowDiv>
                        <RowDiv style={{ height: "10px", borderBottom: "solid 1px gray"}}></RowDiv>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.9rem", color: "#7f05e6"}}>할인혜택(60만원 상당) + 콘텐츠 원고료</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{color: "orange"}}>*콘텐츠 원고료는 인플루언서의 등급에 따라 차등 지급되어 선정 후에 확인할 수 있습니다.</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "10px", borderBottom: "solid 1px gray"}}></RowDiv>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.7rem",  width: "30%", color: "gray"}}>캠페인 NO.</Label>
                            <Label style={{ fontSize: "0.7rem", color: "gray"}}>A2021PR0005</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.7rem", width: "30%", color: "gray"}}>모집현황</Label>
                            <Label style={{ fontSize: "0.7rem", color: "gray"}}>모집 100명 / 현재 150명 / 경쟁률 1:1.5</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.7rem", width: "30%", color: "gray"}}>모집기간</Label>
                            <Label style={{ fontSize: "0.7rem", color: "gray"}}>21.04.29 ~ 21.05.05</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.7rem", width: "30%", color: "gray"}}>포스팅기간</Label>
                            <Label style={{ fontSize: "0.7rem", color: "gray"}}>21.05.07 ~ 21.05.21</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "20px"}}>
                            <Label style={{ fontSize: "0.7rem", width: "30%", color: "gray"}}>컨텐츠 유형</Label>
                            <Label style={{ fontSize: "0.7rem", color: "gray"}}>이미지 5컷 또는 동영상 1분 이상</Label>
                        </RowDiv>
                        <RowDiv style={{ height: "25px"}}></RowDiv>
                        <RowDiv style={{ height: "45px"}}>
                            <CampaignApplyButton  disabled>캠페인 신청 완료</CampaignApplyButton>
                            <ClippingBox>스크랩</ClippingBox>
                        </RowDiv>
                    </RightBox>
                </Container1>
            </Positioner1>
            <BlankDiv style={{ height: "15px"}}>
            </BlankDiv>
            <Positioner2>
                <Container2>
                    <LeftBox2>
                        <Label2 style={{ fontSize: "1.2rem", color: "black", borderBottom: "solid 2px gray"}}>인플루언서 선정 기준</Label2>
                    </LeftBox2>
                    <RightBox2>
                        <Label2 style={{ fontSize: "0.7rem", color: "#7f05e6"}}>팔로워 10,000명 이상 참여 가능</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "#7f05e6"}}>현재 사용하고 있는 휴대폰의 기종의 정보</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>연령 20, 30대</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>성별 무관</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>지역 상관없음</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                    </RightBox2>
                </Container2>
            </Positioner2>
            <Positioner2>
                <Container2>
                    <LeftBox2>
                        <Label2 style={{ fontSize: "1.2rem", color: "black", borderBottom: "solid 2px gray"}}>캠페인 가이드라인</Label2>
                    </LeftBox2>
                    <RightBox2>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>포스팅 가이드</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>- 갤럭시S21의 언박싱 과정을 촬영하고 후기를 올려주세요</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>- 제품 포장과 제품 및 부속품이 모두 촬영해주세요</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>콘텐츠 가이드 - 셀카(얼굴노출)/제품사용장면/제품위주/기타(클라이언트가 직접 입력한 내용)중 1</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>텍스트 가이드 - &nbsp;</Label2>
                        <Label2 style={{ fontSize: "0.7rem", color: "#7f05e6"}}>본문 작성 시 "Galaxy 21 Ultra 5G"를 필수 기재</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>해시태그 가이드 - &nbsp;</Label2>
                        <Label2 style={{ fontSize: "0.7rem", color: "#7f05e6"}}>#갤럭시 #스마트폰 #언박싱 #S21 #삼성스마트폰</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>링크 가이드 - https://www.samsung.com/sec/galaxy-s21</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>캠페인 제품 배송방법 - 택배/직접 수령/해당없음 중 1</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                    </RightBox2>
                </Container2>
            </Positioner2>
            <Positioner2>
                <Container2>
                    <LeftBox2>
                        <Label2 style={{ fontSize: "1.2rem", color: "black", borderBottom: "solid 2px gray"}}>신청 전 확인사항</Label2>
                    </LeftBox2>
                    <RightBox2>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>본 캠페인의 포스팅 마감일은 [포스팅 마감일자] yyyy-mm-dd입니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>기간 내에 포스팅을 하지 않은 경우에는 제공된 혜택에 대하여 비용 청구됩니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>반드시 포스팅 마감일 이전에 콘텐츠 등록을 완료해야 합니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>제공받은 제품을 타인에게 양도 및 판매, 교환 불가하며, 적발시에는 제품의 가격환불 및 캠페인 참여 제한됩니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>캠페인 선정 후 배송지 변경은 불가합니다. 신청 시 정확한 배송주소를 확인해주세요.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>반드시 제공된 제품만으로 콘텐츠를 작성하여 포스팅 해야 합니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>작성하신 콘텐츠는 최소 6개월 유지해야 하며, 이전에 삭제할 경우에는 페널티가 부과됩니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>광고 콘텐츠 업로드 시에는 광고표시 기준에 의거하여 #광고, #협찬, #AD 등의 해시태그를 첫 화면에 보이도록 본문에 '광고'임을 알 수 있도록 표시합니다.</Label2>
                        <RowDiv style={{ height: "10px"}}></RowDiv>
                    </RightBox2>
                </Container2>
            </Positioner2>
            <Positioner2>
                <Container2>
                    <LeftBox2>
                        <Label2 style={{ fontSize: "1.2rem", color: "black", borderBottom: "solid 2px gray"}}>캠페인 Reward</Label2>
                    </LeftBox2>
                    <RightBox2>
                        <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>캠페인 가이드를 준수하여 성공적으로 콘텐츠 등록을 완료하면 다음의 혜택이 제공됩니다.</Label2>
                        <RightBox2 style={{ marginTop: "30px", height: "170px", width: "100%", border: "1px solid gray"}}>
                            <RowDiv style={{ height: "15px"}}></RowDiv>
                            <Label2 style={{ marginLeft: "10px", fontSize: "0.7rem", color: "gray"}}>캠페인에 사용된&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "blue"}}>Galaxy 21 Ultra 5</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>은(는)&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "blue"}}>제품협찬방법&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>하며&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "blue"}}>Galaxy 21 Ultra 5</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>의 혜택은&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "blue"}}>60만</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>원에 상당합니다.</Label2>
                            <RowDiv style={{ height: "10px"}}></RowDiv>
                            <Label2 style={{ marginLeft: "10px", fontSize: "0.7rem", color: "gray"}}>또한&nbsp;</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "blue"}}>홍길동</Label2>
                            <Label2 style={{ fontSize: "0.7rem", color: "gray"}}>님께서 진행한 캠페인 미션의 대가로 지급되는 예상 원고료는 10만원입니다.</Label2>
                            <RowDiv style={{ height: "10px"}}></RowDiv>
                            <Label2 style={{ marginLeft: "10px", fontSize: "0.7rem", color: "gray"}}>캠페인 Reward는 캠페인 가이드 내용을 완수한 건에 한하여 캠페인 기간 완료 이후에 최종 확정되어 정산됩니다.</Label2>
                            <RowDiv style={{ height: "10px"}}></RowDiv>
                            <Label2 style={{ marginLeft: "10px", fontSize: "0.7rem", color: "gray"}}>캠페인을 미이행 하거나, 기간을 준수하지 않으면 제품 가격의 환불 및 콘텐츠 원고료가 지급되지 않을 수 있습니다.</Label2>
                        </RightBox2>
                    </RightBox2>
                </Container2>
            </Positioner2>
            <Positioner3 >
                <Container3>
                    <LeftBox2></LeftBox2>
                    <RightBox2>
                        <BackButton onClick={() => BackButtonClicked()}> My 캠페인 돌아가기</BackButton>
                        <CampaignCancelButton onClick={() => CampaignCancelClicked()}> 참여 신청 취소</CampaignCancelButton>
                        {campaign_apply_modal}
                    </RightBox2>
                </Container3>
            </Positioner3>
            <Footer>
            </Footer>
        </CampaignStatusBox>
    );
}

export default MyCampaignDetail;