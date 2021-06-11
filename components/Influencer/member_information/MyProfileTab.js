import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {ProfilePicture, InstagramPicture, InstagramPicture2, GraphPicture} from '.'; 

const Positioner = styled.div`
    position: relative;
    width: 100%;
    height:100%;
    float: left;
    justify-content: center;
    // background-color:#ededed
`;

const RowDiv = styled.div`
    width: 100%;
    height: 20px;
`;

const Font1 = styled.div`
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 2rem;
    white-space;
    break-word;
    text-align: center;
    
`;
const Font2 = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 1.5rem;
    white-space;
    break-word;
    text-align: center;
    
`;

const Font3 = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 1rem;
    white-space;
    break-word;
    text-align: center;
    
`;

const Page1 = styled.div``;
const Page2 = styled.div``;
const Page3 = styled.div``;
const Page4 = styled.div``;

//배경
const Positioner1 = styled.div`
    
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    // background-color: gray;    
`;

//큰틀
const Positioner1_1 = styled.div`
    display: flex;
    width:100%;
    position: absolute;
    // background-color: skyblue;

`;
//좌측 div
const Positioner1_2 = styled.div` 
    width:50%;
    justify-content: center;    
    margin-left:5px;
    margin-top:25px;
    color:black;
    // background-color: yellow;
    border-right: 1px solid gray;

    
    
`;

//우측 div 
const Position1_3 = styled.div`
    width:50%;
    margin-left:5px;
    margin-top:75px;
    color:black;
    // background-color: green;

`;

const Positioner2 = styled.div`
    
    width: 100%;
    height: 300px;
    
    // background-color: orange;    

    display: flex;
    
    justify-content: center;

    border-bottom: 2px solid black;
`;

// const Positioner2_1 = styled.div`
    
//     display: flex;
    
//     justify-content: center;
//     background-color: red;    
// `;

const PictureDiv = styled.div`

    width: 240px;
    height:240px;       
    // background-color: white;    
    text-align: center;
`;

const Positioner3 = styled.div`
    
    width: 100%;
    height: 900px;
    
    // background-color: pink;   
    border-bottom: 2px solid black; 
`;

const Positioner3_1 = styled.div`    
    margin: 30px;    
    height:250px;       
    // background-color: skyblue;   
    text-align:center;
`;

const Positioner3_2 = styled.div`    
    display:flex;
    justify-content: center;
    height:260px;       
    // background-color: gray;    
`;

const Positioner3_2_1 = styled.div`    
    margin-right:40px;
    width:50%;
    height:200px;       
    // background-color: skyblue;    
`;
const Positioner3_2_2 = styled.div`   
    margin-left:40px;
    width:50%;
    height:200px;       
    // background-color: white;    
`;

const Positioner3_3 = styled.div` 
    margin:10px;
    height:200px;       
    // background-color: skyblue;    
    display:flex;
    justify-content: center;
`;

const Positioner3_3_div = styled.div`

    width: 240px;
    height:150px;       
    // background-color: white;    
    padding-left:10px;
    padding-right:10px;
    margin: 5px;
    border: 1px solid gray;
    border-radius:5%;
    text-align: center;
`;

const Positioner4 = styled.div`
    width:100%
    height:900px;
    // background-color: #b1a5c8;
`;

const Positioner4_1 = styled.div`
    margin-right:90%;    
    height:240px;
    // background-color: #f29886;  

`;


const Positioner4_2 = styled.div`
    
    height:400px;
    // background-color: purple;
    display:flex;
    justify-content: center;

`;

const Positioner4_3_1 = styled.div`
    width:50%;
    height:300px;
    // background-color: yellow;
`;
const Positioner4_3_2 = styled.div`
    width:50%;
    height:350px;
    // background-color: yellow;
`;
const FlexDiv = styled.div`
    display:flex;
    justify-content: center;
`;

const Positioner4_3_div1 = styled.div`
    margin-left:40px;
    width:250px;
    height:280px;
    // background-color: gray;
    border-radius:75%
    text-align:center;
    
`;

const Positioner_bundle = styled.div`
    margin:20px;
`;


const Positioner5 = styled.div`
    width:100%
    height:800px;
    // background-color: #b1a5c8;
`;

const Positioner5_1 = styled.div`  
    margin-top:50px;
    height:350px;
    // background-color: gray;
`;

const Positioner5_2 = styled.div`
    width: 230px;
    height:240px;
    margin: 5px;
    padding: 10px;
    // background-color: white;
    border-radius:5%;
    border: 1px solid skyblue;
    text-align:center;

`;

const Positioner5_3 = styled.div`   
    margin-top:50px;
    height:200px;
    // background-color: gray;
`;

const Positioner5_4 = styled.div`    
    width:40%;
`;

const Positioner5_4_1 = styled.div`    
    border-radius:24px; 
    border: 1px solid black;
    text-align:center;
    padding: 10px 32px;
    margin:3px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;



const Tbody = styled.tbody`
`;

// 내용행

const TTr = styled.tr`

`;

const Tr1 = styled.tr`
`;

const Tr2 = styled.tr`
line-height: 2rem;
`;


const Tr = styled.tr`
    border-bottom: 1px solid white;
    line-height: 1.6rem;
    &:nth-child(even){
        background-color:#C5D7E5
    };
    &:nth-child(odd){
        background-color:#D5E3EE
    };
`;
// 행
const TdBlank = styled.td`
    padding-top: 20px;
`;

const Td1 = styled.td`

`;

const Td = styled.td`
    border-left: 1px solid white;
    text-indent: 10px;

    
`;
// 셀
const TdLable = styled.td`
    text-align: center;
    width: 100px;
`;

// const Image = styled.img`
    

// `;

const MyProfileTab = () =>{
    let let_instagram_picture2 = []
    let let_instagram_picture1 = []
    let let_graph_data = []
    let let_profile_picture = []

    const [instagram_picture, setInstagram_picture] = useState([]);
    const [display_instagram_picture, setDisplay_instagram_picture ] = useState([]);
    const [display_instagram_picture2, setDisplay_instagram_picture2] = useState([]);

    const [graph_data, setGraph_data] = useState([]);
    const [display_graph_data, setDisplay_graph_data ] = useState([]);

    const [profile_picture, setProfile_picture] = useState([]);
    const [display_profile_picture, setDisplay_profile_picture ] = useState([]);

    const getPictureDataFromDB = () => {

        //인스타그램 사진 가져오는 느낌
        let instagram_picture_data_from_db = [
            
            {"src":"/images/influencer_info/1.PNG"},
            {"src":"/images/influencer_info/2.PNG"},
            {"src":"/images/influencer_info/3.PNG"}
        ]

        return instagram_picture_data_from_db
    }

    //그래프 데이터 가져오는 느낌
    const getGraphDataFromDB = () => {

        let graph_data_from_db = [
                
            {"src":"/images/influencer_info/4.PNG"},

            {"src":"/images/influencer_info/5.PNG"},

            {"src":"/images/influencer_info/6.PNG"},

            {"src":"/images/influencer_info/7.PNG"},           

            {"src":"/images/influencer_info/8.PNG"},           

            {"src":"/images/influencer_info/graph.PNG"}
               
            
        ]

        return graph_data_from_db
    }

    //프로필 사진 데이터 가져오는 느낌
    const getProfileFromDB = () => {

        let profile_picture_data_from_db = [            
            
            {"src":"/images/influencer_info/lilka.png"}     
        ]

        return profile_picture_data_from_db
    }

    useEffect(() => {
        setInstagram_picture(getPictureDataFromDB)
        console.log('instagram_picture' ,instagram_picture)
        setGraph_data(getGraphDataFromDB)
        console.log('graph_data' ,graph_data)
        setProfile_picture(getProfileFromDB)
        console.log('profile_picture' , profile_picture)
        // console.log(profile_picture[0].src)

    }, []);

    useEffect(() => {

        let_instagram_picture1 = instagram_picture

        let temp_instagram_picture1 = let_instagram_picture1.map((instapicture,index) =>{

            return(
                <InstagramPicture
                instapicture={instapicture}
                />
            )
        });
        // console.log(instagram_picture)
        // console.log(temp_profile_picture)
        setDisplay_instagram_picture(temp_instagram_picture1)

    }, [instagram_picture]);

    useEffect(() => {

        if (instagram_picture.length != 0) {
            for (var i = 0; i<3; i++) {
                let_instagram_picture2.push(instagram_picture[i])
            }
        }
        
        // let_instagram_picture2 = instagram_picture

        let temp_instagram_picture2 = let_instagram_picture2.map((instapictures,index) =>{

                              
            return(  
                <Positioner_bundle>
                    <PictureDiv>
                        <InstagramPicture2
                            instapictures={instapictures}
                            />     
                    </PictureDiv>  
                </Positioner_bundle>
            )

        });
        console.log(let_instagram_picture2)
        // console.log(temp_profile_picture)
        setDisplay_instagram_picture2(temp_instagram_picture2)

    }, [instagram_picture]);

    useEffect(() => {

        let_graph_data = graph_data

        let temp_graph_data = let_graph_data.map((graph_data,index) =>{

            return(
                <GraphPicture
                    graph_data={graph_data}
                />
            )
        });
        console.log()
        // console.log(temp_profile_picture)
        setDisplay_graph_data(temp_graph_data)

    }, [graph_data]);

    useEffect(() => {

        let_profile_picture = profile_picture

        let temp_profile_picture = let_profile_picture.map((profilepic,index) =>{

            return(
                <ProfilePicture
                profilepic={profilepic}
                />
            )
        });
        // console.log(profile_picture)
        // console.log(temp_profile_picture)
        setDisplay_profile_picture(temp_profile_picture)

    }, [profile_picture]);


    



    return(
    <Positioner>
        <RowDiv>
            <Font2>
                <label style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>SampleLife 인플루언서 분석 시스템에 의한 $회원명님의 $미디어정보 $연결계정 분석 결과입니다.</label>
            </Font2>
        </RowDiv>
        <Page1>
        <Font1>
            기본프로필
        </Font1>
            <Positioner1 id="gray">
                <Positioner1_1 id="skyblue">
                    <Positioner1_2 id="yellow">
                        {/* <Image style={{width:'200px', height:'200px', borderRadius: '70%', marginLeft:'15%'}} src={profile_picture[0]}/> */}
                        {/* <ProfilePicture></ProfilePicture> */}
                        {display_profile_picture}
                        <Font3 style={{fontWeight:'900', marginRight:'100px', marginTop:'20px', marginBottom:'20px'}}>
                            뷰티블로거지니찌
                        </Font3>
                        <Table>
                            <Tr1>
                                <TdLable>
                                    활동채널
                                </TdLable>
                                <Td1 colSpan ="3">
                                    인스타그램
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable></TdLable>
                                <Td1 colSpan ="3">
                                    www.instagram.com
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable></TdLable>
                                <Td1 colSpan ="3">
                                    유튜브
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable></TdLable>
                                <Td1 colSpan ="3">
                                    www.youtube.com
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    지역
                                </TdLable>
                                <Td1 colSpan ="3">
                                    대한민국 서울
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    성별
                                </TdLable>
                                <Td1 colSpan ="3">
                                    여성
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    연령
                                </TdLable>
                                <Td1 colSpan ="3">
                                    30세
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    직업
                                </TdLable>
                                <Td1 colSpan ="3">
                                    전업 인플루언서
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    관심사
                                </TdLable>
                                <Td1 colSpan ="3">
                                    뷰티/패션, 먹방, 스포츠
                                </Td1>
                            </Tr1>
                            
                        </Table>
                    </Positioner1_2>
                    <Position1_3 id="green">
                        {/* <Image src={graph_data[5]} style={{marginLeft:'15%'}}/> */}
                        <div style={{marginLeft:'16%'}}>
                            {display_graph_data[5]}
                        </div>
                        <div>
                            <Font1 style={{fontSize:"1rem"}}>
                                인플루언서 평점
                            </Font1>
                            <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900'}}>
                                4.2
                            </Font1>
                        </div>
                    </Position1_3>
                </Positioner1_1>
            </Positioner1>
            <Font1 style={{fontSize:"1rem", fontWeight:'900', textAlign:'left', marginTop:'6%' }}>
                인스타그램 포스팅 1296개
            </Font1>
            
            <Positioner2 id="orange">         
                {display_instagram_picture2}          
                {/* <Positioner_bundle>             */}
                    {/* <PictureDiv>     */}
                        {/* <Image src={instagram_picture[0]}/> */}
                        {/* {display_instagram_picture[0]} */}
                    {/* </PictureDiv> */}
                {/* </Positioner_bundle> */}

                {/* <Positioner_bundle> */}
                    {/* <PictureDiv> */}
                        {/* <Image src={instagram_picture[1]}/> */}
                        {/* {display_instagram_picture[1]} */}
                    {/* </PictureDiv> */}
                {/* </Positioner_bundle> */}

                {/* <Positioner_bundle> */}
                    {/* <PictureDiv> */}
                        {/* <Image src={instagram_picture[2]}/> */}
                        {/* {display_instagram_picture[2]} */}
                    {/* </PictureDiv>    */}
                {/* </Positioner_bundle>                 */}
            </Positioner2>
        </Page1>
        
        <Page2>
            <Font1>
                기본프로필
            </Font1>
            <Font2>
                뷰티블로거 지니찌 님의 팔로워는 총 517000명입니다.
            </Font2>
            <Positioner3 id="pink">
                <Font2>
                    팔로워 추이(6개월)
                </Font2>
                <Positioner3_1 id="skylbue">
                    {/* <Image src={graph_data[0]}/> */}
                    {display_graph_data[0]}
                </Positioner3_1>
                <Font2>
                    팔로워 성별 및 연령대
                </Font2>
                <Positioner3_2 id="gray">
                    <Positioner3_2_1 id="skyblue">
                        {/* <Image src={graph_data[1]}/> */}
                        {display_graph_data[1]}
                    </Positioner3_2_1>
                    <Positioner3_2_2 id="table">
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdLable>
                                        연령대
                                    </TdLable>
                                    <Td>
                                        여성
                                    </Td>
                                    <Td>
                                        남성
                                    </Td>
                                    <Td>
                                        계
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        10대
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        20대
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        30대
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        40대
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        50대이상
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        계
                                    </TdLable>
                                    <Td>
                                        x%
                                    </Td>
                                    <Td>
                                        y%
                                    </Td>
                                    <Td>
                                        z%
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Positioner3_2_2>
                </Positioner3_2>

                <Positioner3_3 id='skyblue'>
                    <Positioner3_3_div>
                        <div style={{borderBottom:"1px solid black"}}>
                            <Font3>
                                평균 ER(Engagement rate)
                            </Font3>
                            <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                                3.25%
                            </Font1>
                            <Font3 style={{color:"red"}}>
                                alert message
                            </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 댓글수 387/ 평균 좋아요 16,423
                        </Font3>
                    </Positioner3_3_div>
                    <Positioner3_3_div>
                        <div style={{borderBottom:"1px solid black"}}>
                            <Font3>
                                평균 도달율(Reach rate)
                            </Font3>
                            <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                                19%
                            </Font1>
                            <Font3 style={{color:"red"}}>
                                alert message
                            </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 조회수 98,475/ 팔로워수
                        </Font3>
                    </Positioner3_3_div>
                    <Positioner3_3_div>
                        <div style={{borderBottom:"1px solid black"}}>
                        <Font3>
                            평균 공감율(Like rate)
                        </Font3>
                        <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                            17%
                        </Font1>
                        <Font3 style={{color:"red"}}>
                            alert message
                        </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 조회수 98475/ 평균 좋아요 16,423
                        </Font3>
                    </Positioner3_3_div>
                </Positioner3_3>                
            </Positioner3>
        </Page2>
        <Page3>
        <Font1>
            포스팅
        </Font1>

        <Positioner4>
            <Font3>
            최근 1개월간 포스팅 활동
            </Font3>
            <Positioner4_1>
                {/* <Image src={graph_data[2]}/> */}
                {display_graph_data[2]}
            </Positioner4_1>     
                <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                    총 27개
                </Font1>       
                <Font3>
                    뷰티블로거지니찌님의 평균 포스팅 주기는 16일입니다.
                </Font3>    
                <Positioner4_2>
                    <Positioner4_3_1>
                        <Font3>
                            포스팅 유형
                        </Font3>
                        <Positioner4_3_div1>
                            {/* <Image src={graph_data[3]}/> */}
                            {display_graph_data[3]}
                        </Positioner4_3_div1>
                    </Positioner4_3_1>

                    <Positioner4_3_2>
                        <Font3>
                            포스팅 주요 카테고리
                        </Font3>
                        <Positioner4_3_div1>
                            {/* <Image src={graph_data[4]}/> */}
                            {display_graph_data[4]}
                        </Positioner4_3_div1>
                        <FlexDiv>
                            <Positioner_bundle>
                                <Font3 style={{fontWeight:'600'}}>
                                    1위
                                </Font3>
                                <Font3>
                                    뷰티 32%
                                </Font3>
                            </Positioner_bundle>

                            <Positioner_bundle>
                                <Font3 style={{ fontWeight:'600'}}>
                                    2위
                                </Font3>
                                <Font3>
                                    일상 20%
                                </Font3>
                            </Positioner_bundle>

                            <Positioner_bundle>
                                <Font3 style={{fontWeight:'600'}}>
                                    3위
                                </Font3>
                                <Font3>
                                    패션 18%
                                </Font3>
                            </Positioner_bundle>
                        </FlexDiv>      




                    </Positioner4_3_2>
                </Positioner4_2>
            </Positioner4>
        </Page3>
        <Page4>
            <Positioner5>
                <Positioner5_1>
                    <FlexDiv>
                        <Positioner5_2>
                            <Font3 style={{marginBottom:'10%'}}>
                                좋아요를 많이 받은 카테고리
                            </Font3>
                            <Table>
                                <Tr2>
                                    <Td1>
                                        1위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        뷰티
                                    </TdLable>
                                    <Td1>
                                        415개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        2위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        일상
                                    </TdLable>
                                    <Td1>
                                        260개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        3위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        패션
                                    </TdLable>
                                    <Td1>
                                        235개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        4위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        헬스/피트니스
                                    </TdLable>
                                    <Td1>
                                        190개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        5위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        요리/음식
                                    </TdLable>
                                    <Td1>
                                        120개
                                    </Td1>
                                </Tr2>
                            </Table>
                            
                        </Positioner5_2>
                        <Positioner5_2>
                            <Font3 style={{marginBottom:'10%'}}>
                                조회수가 많은 카테고리
                            </Font3>

                            <Table>
                                <Tr2>
                                    <Td1>
                                        1위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        뷰티
                                    </TdLable>
                                    <Td1>
                                        415개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        2위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        일상
                                    </TdLable>
                                    <Td1>
                                        260개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        3위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        패션
                                    </TdLable>
                                    <Td1>
                                        235개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        4위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        헬스/피트니스
                                    </TdLable>
                                    <Td1>
                                        190개
                                    </Td1>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        5위
                                    </Td1>
                                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                                        요리/음식
                                    </TdLable>
                                    <Td1>
                                        120개
                                    </Td1>
                                </Tr2>
                            </Table>
                        </Positioner5_2>
                        <Positioner5_2>
                            <Font3 style={{marginBottom:'10%'}}>
                                컨텐츠 바이럴
                                <br></br>
                                총 1296개 중
                            </Font3>

                            <Table>
                                <Tr2>
                                    <Td1>
                                        Tag
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        428개
                                    </TdLable>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        Save
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        215개
                                    </TdLable>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        Share
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        190개
                                    </TdLable>
                                </Tr2>

                                <Tr2>
                                    <Td1>
                                        계
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        833개
                                    </TdLable>
                                </Tr2>
                            </Table>
                        </Positioner5_2>   
                    </FlexDiv>
                </Positioner5_1>

                <Positioner2 id="orange">   
                {/* <Positioner2_1 id="red">       */}
                    <Positioner_bundle>
                        <Font3>
                            Best tag 포스트
                        </Font3>
                        <PictureDiv>
                            {display_instagram_picture[0]}                            
                            {/* <Image src={instagram_picture[0]}/> */}
                        </PictureDiv>
                    </Positioner_bundle>

                    <Positioner_bundle>
                        <Font3>
                            Best save 포스트
                        </Font3>
                        <PictureDiv>
                            {display_instagram_picture[1]}                            
                            {/* <Image src={instagram_picture[1]}/> */}
                        </PictureDiv>
                    </Positioner_bundle>

                    <Positioner_bundle>
                        <Font3>
                            Best share 포스트
                        </Font3>
                        <PictureDiv>
                            {display_instagram_picture[2]}                            
                            {/* <Image src={instagram_picture[2]}/> */}
                        </PictureDiv>   
                    </Positioner_bundle>
                {/* </Positioner2_1>             */}
                </Positioner2>

                <Positioner5_3>
                    <FlexDiv style={{justifyContent:'start'}}>
                        <Positioner5_4>
                            <Font3 style={{justifyContent:'start', marginRight:'20px', fontWeight:'600'}}>
                                Best 해시태그
                            </Font3>
                            <FlexDiv style={{justifyContent:'start', marginLeft:'100px'}}>
                                <Positioner5_4_1>#1</Positioner5_4_1>
                                <Positioner5_4_1>#2</Positioner5_4_1>
                                <Positioner5_4_1>#3</Positioner5_4_1>
                            </FlexDiv>
                            <FlexDiv style={{justifyContent:'start', marginLeft:'100px'}}>
                                <Positioner5_4_1>#4</Positioner5_4_1>
                                <Positioner5_4_1>#5</Positioner5_4_1>                                
                            </FlexDiv>    
                        </Positioner5_4>

                        <Positioner5_4>
                            <Font3 style={{justifyContent:'start', marginRight:'20px', fontWeight:'600'}}>
                                Best 키워드
                            </Font3>
                            <FlexDiv style={{justifyContent:'start', marginLeft:'100px'}}>
                                <Positioner5_4_1>#1</Positioner5_4_1>
                                <Positioner5_4_1>#2</Positioner5_4_1>
                                <Positioner5_4_1>#3</Positioner5_4_1>
                            </FlexDiv>
                            <FlexDiv style={{justifyContent:'start', marginLeft:'100px'}}>
                                <Positioner5_4_1>#4</Positioner5_4_1>
                                <Positioner5_4_1>#5</Positioner5_4_1>                                
                            </FlexDiv>
                        </Positioner5_4>
                    </FlexDiv>
                </Positioner5_3>
            </Positioner5>
        </Page4>   
    </Positioner>
    )
}
export default MyProfileTab;