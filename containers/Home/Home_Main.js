import React, { useState, useEffect, useRef} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Footer, Modal, RecommendationCampaign } from '../../components/Influencer/campaign_status';
import { LoginModal,BrandBox, Div3Component1, Div3Component2, Div3Component3} from '../../components/Home';
import oc from 'open-color';

const CampaignStatusBox = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
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
    border: 1px solid #7f05e6;
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
//로그인화면 갔다가 툴바 사라짐.

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
    height: 100%;
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
    width:30%;
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

//3_2와 3_3 감싼
const Position3_1_1 = styled.div`
    display:flex;

`;

const ArrowPosition = styled.div`    
    margin-top:200px;
    padding: 10px;

`;

//상하조절
const Positioner3_2 = styled.div` 
    margin-top:100px;
    margin-bottom:100px;
    display:flex;
    justify-content: flex-end;
    width:50%;
    margin-left:100px;

`;

const Position3_3 = styled.div`
    margin-left:10px;    
    padding:30px;
    width:50%;
    margin-right:10x;

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

const Positioner4_3 = styled.div`
    margin-left:45px;
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
    margin-top:50px;
    color:black;
`;



const ContentsBox5 = styled.div`
    padding: 50px;
    color : #7f05e6;
`;

const Table = styled.table`
    width: 950px;

`;

const Tbody = styled.tbody`
    width: 950px;
`;

const Tr = styled.tr`
`;

const Td = styled.td`
    width: 100%; 
    justify-content: center;
    align-items: center;
`;

const NextCampaignButton = styled.div`
    width: 100%; 
    height: 30%;
    cursor: pointer;
`;

const NextCampaignImage = styled.img`
    width: 100%; 
    height: 100%;
`;


const Home_Main = () => {
    const history = useHistory(); 
    
    const [Login_modal, setLogin_modal] = useState([])

    let recommendation_client_data = []
    const [ div3Item_index, setDiv3ItemIndex] = useState(0);
    
    const [ div3Item_component, setDiv3Item_component] = useState([])
    const [ recommend_items, setRecommendItemsState ] = useState([]);
    const [ recomendation_client_data_component, setRecomendationClientDataComponent] = useState([])

    //시간
    const [count, setCount] = useState(0);
    const savedCallback = useRef();

    const setCloseModal = () => {
        console.log("close clicked")
        //setCampaignApplyModalState(false)
        setLogin_modal([])
    }
    
    const CampaignStatusClicked = () => {
        console.log("status clicked")
        //setCampaignApplyModalState(true)
        let temp_campaign_status_modal = <LoginModal setCloseModal={setCloseModal} />
        setLogin_modal(temp_campaign_status_modal)
        
    }

    const DivClick = (e) => {
        console.log('3click:',div3Item_index)
        if (e === "next") {            
            
            if(div3Item_index === 2){
                setDiv3ItemIndex(0)
            }else{
                setDiv3ItemIndex(div3Item_index+1)
            }

        }else if (e ==="before"){
            
            if(div3Item_index === 0){
                setDiv3ItemIndex(2)
            }else{
                setDiv3ItemIndex(div3Item_index-1)
            }
        }
    }

    // const DivClick = (e) => {
    //     console.log('3click:',div3Item_index)
    //     if (e === "next") {            
            
    //         let temp_div_index = div3Item_index[0]

    //         for( let i in div3Item_index){
    //             if (Number(i) === div3Item_index.length-1){
    //                 div3Item_index[(div3Item_index.length-1)] = temp_div_index
                
    //             }else{
    //                 div3Item_index[i]= div3Item_index[(Number(i)+1)]
    //             }

    //         }        
    //         let temp_div_list = []
    //         for (let i = 0; i< div3Item_index.length; i++){
    //             temp_div_list.push(div3Item_index[i])
    //         }
    //         console.log('templist',temp_div_list)
    //         setDiv3ItemIndex(temp_div_list)

    //     }else if (e ==="before"){
            
    //         let temp_div_index = div3Item_index[div3Item_index.length-1]

    //         for( let i in div3Item_index){
    //             if (Number(i) === div3Item_index.length-1){
    //                 div3Item_index[(div3Item_index.length-1)] = temp_div_index
                
    //             }else{
    //                 div3Item_index[div3Item_index.length-1]= div3Item_index[(div3Item_index.length-1)-(Number(i)+1)]
    //             }

    //         }
    //         let temp_div_list = []
    //         for (let i = 0; i< div3Item_index.length; i++){
    //             temp_div_list.push(div3Item_index[i])
    //         }
    //         setDiv3ItemIndex(temp_div_list)    
    //     }
    // }

    const brandClick = (e) => {
        if (e === "next") {
            let temp_client_data = recommend_items[0]

            for (let i in recommend_items) {

                if (Number(i) === (recommend_items.length-1)){
                    recommend_items[(recommend_items.length-1)] = temp_client_data

                }else {
                    recommend_items[i] = recommend_items[(Number(i)+1)]

                }
                
            }
            let temp_recommendation_items = []
            for (let i = 0; i< recommend_items.length; i++){
                temp_recommendation_items.push(recommend_items[i])

            }
            setRecommendItemsState(temp_recommendation_items)
        }
        else if (e === "before") {
            let temp_client_data = recommend_items[recommend_items.length-1]
            console.log(temp_client_data)
            for (let i in recommend_items) {
                if (Number(i) === (recommend_items.length-1)){
                    recommend_items[(recommend_items.length-1) -i] = temp_client_data
                    console.log('i',i)
                }
                else {
                    recommend_items[(recommend_items.length-1) -i] = recommend_items[(recommend_items.length-1) - (Number(i)+1)]
                }
            }
            let temp_recommendation_items = []
            for (let i = 0; i< recommend_items.length; i++){
                temp_recommendation_items.push(recommend_items[i])
            }
            setRecommendItemsState(temp_recommendation_items)
        }
    }


    const getRecommendationClientDataFromDB = () => {

        let all_recommendation_client_data_from_db = [
            {
                "src": "/images/homepage2/anemone.jpg",
            },
            {
                "src": "/images/homepage2/coffee.png",
            },
            {
                "src": "/images/homepage2/flowers.jpg",
            },
            {
                "src": "/images/homepage2/freedom.jpg",
            },
            {
                "src": "/images/homepage2/lemon.jpg",
            },
            {
                "src": "/images/homepage2/milkyway.jpg",
            },
            {
                "src": "/images/homepage2/river.jpg",
            },
            {
                "src": "/images/homepage2/stairs.jpg",
            },
            {
                "src": "/images/homepage2/woman.jpg",
            },
            {
                "src": "/images/homepage2/yellow.jpg",
            },
        ]

        return all_recommendation_client_data_from_db
    }



    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        setRecommendItemsState(getRecommendationClientDataFromDB())

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);


    useEffect(() => {
        const countdown = setInterval(() => {
            setCount((count) + 1);
        }, 1000);
        console.log(countdown)
        console.log(count)

        if (count % 3 === 0) {            
            if(div3Item_index === 2){
                setDiv3ItemIndex(0)
            }else{
                setDiv3ItemIndex(div3Item_index+1)
            }
        }

        return () => clearInterval(countdown);
    }, [count]);


    // useEffect(() => {
    //     if (count % 3 === 0) {            
    //         if(div3Item_index === 2){
    //             setDiv3ItemIndex(0)
    //         }else{
    //             setDiv3ItemIndex(div3Item_index+1)
    //         }
    //     }
        
        
    // }, [count]);

    // useEffect(() => {
    //     savedCallback.current = callback;
        
        
    // });

    // useEffect(() => {
    //     function tick(){
    //         savedCallback.current();
    //     }

    //     let tid = setInterval(tick, 1000);
    //     return () => clearInterval(tid);
    // }, []);

    useEffect(() => {

        let temp_div3Item_component = [
        <Div3Component1></Div3Component1>,
        <Div3Component2></Div3Component2>,
        <Div3Component3></Div3Component3>]


        if (div3Item_index === 0) {
            temp_div3Item_component = temp_div3Item_component[0]
        }
        else if (div3Item_index === 1) {
            temp_div3Item_component = temp_div3Item_component[1]
        }
        else if (div3Item_index === 2) {
            temp_div3Item_component = temp_div3Item_component[2]
        }

        setDiv3Item_component(temp_div3Item_component)
        //setRecomendationClientDataState(recommendation_client_data)

        return () => {
          console.log('디브인덱스', div3Item_index);
        };
    }, [div3Item_index]);

    useEffect(() => {
        console.log('컴포넌트가 화면에서 나타남');
        //recommendation_client_data = recommend_items
        //console.log(selected_client_data)
        // selected_client_data = selected_client_data.sort(function (a,b) {
        //     return a.due_date - b.due_date
        // })
        //console.log(selected_client_data)
        // console.log("222")

        if (recommend_items.length != 0) {
            for (var i = 0; i<7; i++) {
                recommendation_client_data.push(recommend_items[i])
            }
        }
        

        let temp_recommendation_client_data_component = recommendation_client_data.map((client_data, k) => 
            <Td style={{ width: '400px' }}>
                <BrandBox 
                    client_data = {client_data}
                />
            </Td>
        );
        
        //setRecomendationClientDataState(recommendation_client_data)
        setRecomendationClientDataComponent(temp_recommendation_client_data_component)

        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [recommend_items]);

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
                        <Font2 style={{fontWeight:"300"}}>
                        나의 콘텐츠와 어울리는 맞춤 캠페인
                        </Font2>
                        <Font2>                        
                        이제 SampleLIFE에서 만나보세요
                        </Font2>
                        <br></br>                        
                        <Button onClick={CampaignStatusClicked}>캠페인 현황보기</Button>   
                        {Login_modal}                     
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

                        <ArrowPosition style={{ width: '100px', textAlign: "center" }}>
                            <NextCampaignButton onClick={() => DivClick("before")}>
                                <NextCampaignImage src="/images/campaign/left_arrow.png" />
                            </NextCampaignButton>
                        </ArrowPosition>
                        {div3Item_component}
                        <ArrowPosition style={{ width: '100px', textAlign: "center" }}>
                            <NextCampaignButton onClick={() => DivClick("next")}>
                                <NextCampaignImage src="/images/campaign/right_arrow.png" />
                            </NextCampaignButton>
                        </ArrowPosition>
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
                        <Image src="/images/homepage/capture.PNG" />                                                
                        <br></br>
                        <FlexDiv>
                            <div style={{marginLeft:"30px"}}>
                                <Font2>
                                    01. 
                                </Font2>
                                <br></br>
                                <Font1>
                                    인플루언서 
                                    <br></br>
                                    등록
                                </Font1>                        
                            </div>
                            <Positioner4_3>
                                <Font2>
                                    02. 
                                </Font2>
                                <br></br>
                                <Font1>
                                    추천 캠페인 
                                    <br></br>
                                    캠페인 현황
                                </Font1>                        
                            </Positioner4_3>
                            <Positioner4_3>
                                <Font2>
                                    03. 
                                </Font2>
                                <br></br>
                                <Font1>
                                    캠페인 상세보기 
                                    <br></br>
                                    캠페인 참여신청
                                </Font1>                        
                            </Positioner4_3>
                            <Positioner4_3>
                                <Font2>
                                    04. 
                                </Font2>
                                <br></br>
                                <Font1>
                                    포스팅
                                </Font1>                        
                            </Positioner4_3>
                            <Positioner4_3>
                                <Font2>
                                    05. 
                                </Font2>
                                <br></br>
                                <Font1>
                                    성과측정 
                                    <br></br>
                                    &보상
                                </Font1>                        
                            </Positioner4_3>       
                        </FlexDiv>                  
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
                        <Table style={{ height: "120px"}}>
                            <Tr style={{ height: "100px"}}>
                                <Td style={{ width: '100px', textAlign: "center" }}>
                                    <NextCampaignButton onClick={() => brandClick("before")}>
                                        <NextCampaignImage src="/images/campaign/left_arrow.png" />
                                    </NextCampaignButton>
                                </Td>
                                    {recomendation_client_data_component}
                                <Td style={{ width: '100px', textAlign: "center" }}>
                                    <NextCampaignButton onClick={() => brandClick("next")}>
                                        <NextCampaignImage src="/images/campaign/right_arrow.png" />
                                    </NextCampaignButton>
                                </Td>
                            </Tr>
                        </Table>
                        <div>
                        <br></br>
                        <br></br>
                        <Button onClick={CampaignStatusClicked}>캠페인 현황보기</Button>
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

