import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {ProfilePicture, InstagramPicture, Top_Popular_Posting, GraphPicture, GraphLine, GraphBar, GraphPie, GraphRadar} from '.'; 
import {GetBackendIP} from '../../../settings';
import { ExecuteBackendAPI, ExecuteFacebookAPI } from '../../../lib/api/restapi';

const Positioner = styled.div`
    position: relative;
    width: 855px;
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
    margin-top: 5%;
    margin-bottom: 2%;
    font-size: 1.5rem;
    line-height: 18px;
    text-align: center;
    
`;

const Font3 = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
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
    height:300px; 
    margin-top:30px;
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
    text-align: center;
    margin-left: 45px;
`;

const Positioner3 = styled.div`
    
    width: 100%;
    height: 800px;
    
    // background-color: pink;   
    border-bottom: 2px solid black; 
`;

const Positioner3_1 = styled.div`
    height:250px;
`;

const Positioner3_2 = styled.div`    
    display:flex;
    justify-content: center;
    height:260px;       
    // background-color: gray;    
`;

const Positioner3_2_1 = styled.div`
    width:60%;
    height:100%;       
    // background-color: skyblue;    
`;
const Positioner3_2_2 = styled.div`   
    margin-left:10px;
    width:40%;
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
    height:250px;
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
    width: 100%;
    justify-content: center;
`;

const Positioner4_3_div1 = styled.div`
    margin-left:0px;
    width:100%;
    height:420px;
    // background-color: gray;
    border-radius:75%
    text-align:center;
    
`;

const Positioner_bundle = styled.div`
    margin:0px;
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
    // background-color: gray;
`;

const Positioner5_4 = styled.div`    
    width:50%;
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
    text-align:center;
`;
// 셀
const TdLable = styled.td`
    text-align: center;
    width: 100px;
`;

// const Image = styled.img`
    

// `;

const MyProfileTab = () =>{
    const history = useHistory();

    const [account_info_from_db, setAccountInfoFromDB ] = useState([]);
    const [user_age, setUserAge] = useState([]);
    const [user_region, setUserRegion] = useState([]);
    const [user_career, setUserCareer] = useState([]);
    const [user_interest, setUserInterest] = useState([]);
    const [instagram_user, setInstagramUser] = useState([]);
    const [influencer_total_grade, setInfluencerTotalGrade] = useState([]);
    const [instagram_score_data, setInstagramScoreData] = useState([]);
    const [instagram_new_follower_count, setInstagramNewFollowerCount] = useState([]);
    const [instagram_audience_gender_age, setInstagramAudienceGenderAge] = useState([]);
    const [instagram_follower_reaction, setInstagramFollowerReaction] = useState([]);
    const [instagram_new_media_count, setInstagramNewMediaCount] = useState([]);
    const [instagram_recent_media_count, setInstagramRecentMediaCount] = useState([]);
    const [instagram_new_media_period, setInstagramNewMediaPeriod] = useState([]);
    const [instagram_media_type, setInstagramMediaType] = useState([]);
    const [instagram_media_category, setInstagramMediaCategory] = useState([]);
    const [instagram_media_category_like_componenet, setInstagramMediaCategoryLikeComponent] = useState([]);
    const [instagram_media_category_impressions_componenet, setInstagramMediaCategoryImpressionsComponent] = useState([]);
    const [instagram_best_hash_tag, setInstagramBestHashTag] = useState([]);
    const [instagram_address, setInstagramAddress] = useState([]);
    const [top_popular_posting, setTopPopularPosting] = useState([]);
    const [sum_of_impressions_count, setSumOfImpressionsCount] = useState([]);
    const [sum_of_like_count, setSumOfLikeCount] = useState([]);
    const [sum_of_comments_count, setSumOfCommentsCount] = useState([]);
    const [sum_of_contents_count, setSumOfContentsCount] = useState([]);
    const [best_impressions_posting, setBestImpressionsPosting] = useState([]);
    const [best_like_posting, setBestLikePosting] = useState([]);
    const [best_comments_posting, setBestCommentsPosting] = useState([]);
    const [best_saved_posting, setBestSavedPosting] = useState([]);
    const [display_instagram_picture, setDisplay_instagram_picture ] = useState([]);
    const [display_instagram_picture2, setDisplay_instagram_picture2] = useState([]);

    const [graph_data, setGraph_data] = useState([]);
    const [display_graph_data, setDisplay_graph_data ] = useState([]);

    const [profile_picture, setProfile_picture] = useState([]);
    const [display_profile_picture, setDisplay_profile_picture ] = useState([]);
    
    const [ facebook_info, setFacebookInfoState ] = useState(history.location.state)

    const getPictureDataFromDB = () => {

        //인스타그램사진 간이 데이터베이스
        let instagram_picture_data_from_db = [
            
            {"src":"/images/influencer_info/1.PNG"},
            {"src":"/images/influencer_info/2.PNG"},
            {"src":"/images/influencer_info/3.PNG"}
        ]

        return instagram_picture_data_from_db
    }

    //그래프 데이터 간이 데이터베이스
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

    //프로필 사진 간이 데이터베이스
    const getProfileFromDB = () => {
        console.log(account_info_from_db)
        let profile_picture_data_from_db
        if (account_info_from_db.length !== 0){
            profile_picture_data_from_db = [            
                {"src":account_info_from_db.instagram_user.profile_picture_url}     
            ]
        }

        return profile_picture_data_from_db
    }

    //그래프 데이터 가져오는 느낌
    const getAccountInfoFromDB = async () => {    
        console.log(facebook_info)


        // 백엔드 서버 API 통신
        let data = {
            "influencer_email": facebook_info.email
        }

        let request = 'GET'

        let backend_ip_address = GetBackendIP()
        let backend_api_url = "https://" + backend_ip_address + "/api/influencer/get_user_info/"
        let backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request)
        console.log(backend_api_response)
        let temp_account_info_from_db = backend_api_response.data[0]

        if (temp_account_info_from_db.birth_year != null) {
            let now_year = new Date().getFullYear()
            let temp_age = now_year - Number(temp_account_info_from_db.birth_year) + 1
            setUserAge(temp_age + "세")
        }

        if (temp_account_info_from_db.region.length != 0) {
            let temp_region = ""
            for (let region of temp_account_info_from_db.region) {
                temp_region += (region.region + ", ")
            }
            setUserRegion(temp_region.slice(0, temp_region.length-2))
        }

        if (temp_account_info_from_db.career.length != 0) {
            let temp_career = ""
            for (let career of temp_account_info_from_db.career) {
                temp_career += (career.career_type + ", ")
            }
            setUserCareer(temp_career.slice(0, temp_career.length-2))
        }

        if (temp_account_info_from_db.interest.length != 0) {
            let temp_interest = ""
            for (let interest of temp_account_info_from_db.interest) {
                temp_interest += (interest.interest + ", ")
            }
            setUserInterest(temp_interest.slice(0, temp_interest.length-2))
        }
        
        if (backend_api_response.data.length !== 0) {
            console.log(temp_account_info_from_db)
            let temp_instagram_user_name = temp_account_info_from_db.instagram_user.instagram_username
            console.log(temp_instagram_user_name)
            let temp_instagram_score_data = []
            let temp_instagram_grade_score_name = ["영향력", "호감도", "팔로워", "컨텐츠", "성장성"]
            for (let instagram_grade_score_name of temp_instagram_grade_score_name) {
                let temp_instagram_score_dict = {}
                if (instagram_grade_score_name === "영향력") {
                    temp_instagram_score_dict["score"] = "영향력"
                    temp_instagram_score_dict[temp_instagram_user_name] = temp_account_info_from_db.influencer_grade.influence_ranking
                    temp_instagram_score_dict["평균"] = 2.5
                }else if (instagram_grade_score_name === "호감도") {
                    temp_instagram_score_dict["score"] = "호감도"
                    temp_instagram_score_dict[temp_instagram_user_name] = temp_account_info_from_db.influencer_grade.favorability_ranking
                    temp_instagram_score_dict["평균"] = 2.5
                }else if (instagram_grade_score_name === "팔로워") {
                    temp_instagram_score_dict["score"] = "팔로워"
                    temp_instagram_score_dict[temp_instagram_user_name] = temp_account_info_from_db.influencer_grade.follower_ranking
                    temp_instagram_score_dict["평균"] = 2.5
                }else if (instagram_grade_score_name === "컨텐츠") {
                    temp_instagram_score_dict["score"] = "컨텐츠"
                    temp_instagram_score_dict[temp_instagram_user_name] = temp_account_info_from_db.influencer_grade.contents_ranking
                    temp_instagram_score_dict["평균"] = 2.5
                }else if (instagram_grade_score_name === "성장성") {
                    temp_instagram_score_dict["score"] = "성장성"
                    temp_instagram_score_dict[temp_instagram_user_name] = temp_account_info_from_db.influencer_grade.potential_ranking
                    temp_instagram_score_dict["평균"] = 2.5
                }
                temp_instagram_score_data.push(temp_instagram_score_dict)
            }

            console.log(temp_instagram_score_data)
            let temp_influencer_total_grade = ((temp_account_info_from_db.influencer_grade.influence_ranking + temp_account_info_from_db.influencer_grade.favorability_ranking
                + temp_account_info_from_db.influencer_grade.follower_ranking + temp_account_info_from_db.influencer_grade.contents_ranking
                + temp_account_info_from_db.influencer_grade.potential_ranking)/5).toFixed(1)
            setInfluencerTotalGrade(temp_influencer_total_grade)
            setInstagramScoreData(temp_instagram_score_data)

            ///////////////////////////////////////////// 인기 포스팅 //////////////////////////////////
            let sorted_instagram_media = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                return b.like_count - a.like_count
            })
            temp_account_info_from_db["instagram_media"] = sorted_instagram_media

            let temp_top_popular_posting_list = []
            if (temp_account_info_from_db["instagram_media"].length > 3) {
                for (var i = 0; i<3; i++) {
                    temp_top_popular_posting_list.push(temp_account_info_from_db["instagram_media"][i])
                }
            }else {
                for (var i = 0; i<temp_account_info_from_db["instagram_media"].length; i++) {
                    temp_top_popular_posting_list.push(temp_account_info_from_db["instagram_media"][i])
                }
            }
            let temp_top_popular_posting = temp_top_popular_posting_list.map((media_info,index) =>{                     
                return(  
                    <Positioner_bundle>
                        <PictureDiv>
                            <Top_Popular_Posting
                                media_info={media_info}
                            />     
                        </PictureDiv>  
                    </Positioner_bundle>
                )
            });
            console.log(temp_top_popular_posting)
            setTopPopularPosting(temp_top_popular_posting)
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            setAccountInfoFromDB(temp_account_info_from_db)
            setInstagramUser(temp_account_info_from_db.instagram_user)


            ///////////////////////////////////////////////// new_follower_count //////////////////////////////////
            let new_follower_count_data_list = []
            for (var new_follower_count_data of temp_account_info_from_db.follower_count){
                let temp_new_follower_count_data_dict = {}
                temp_new_follower_count_data_dict["x"] = new_follower_count_data["end_time"].slice(5,7) + new_follower_count_data["end_time"].slice(8,10)
                temp_new_follower_count_data_dict["y"] = new_follower_count_data["value"]
                new_follower_count_data_list.push(temp_new_follower_count_data_dict)
            }
            let new_follower_count_graph_data = [
                {
                "id": "korea",
                "color": "hsl(256, 70%, 50%)",
                "data": new_follower_count_data_list
                }
            ]
            setInstagramNewFollowerCount(new_follower_count_graph_data)

            ///////////////////////////////////////////////// audience_gender_age //////////////////////////////////
            let temp_audience_gender_age = temp_account_info_from_db.audience_gender_age
            temp_account_info_from_db.audience_gender_age["sum_13_17"] = Math.round(parseFloat(temp_audience_gender_age["f_13_17"].slice(0, temp_audience_gender_age["f_13_17"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_13_17"].slice(0, temp_audience_gender_age["m_13_17"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_18_24"] = Math.round(parseFloat(temp_audience_gender_age["f_18_24"].slice(0, temp_audience_gender_age["f_18_24"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_18_24"].slice(0, temp_audience_gender_age["m_18_24"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_25_34"] = Math.round(parseFloat(temp_audience_gender_age["f_25_34"].slice(0, temp_audience_gender_age["f_25_34"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_25_34"].slice(0, temp_audience_gender_age["m_25_34"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_35_44"] = Math.round(parseFloat(temp_audience_gender_age["f_35_44"].slice(0, temp_audience_gender_age["f_35_44"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_35_44"].slice(0, temp_audience_gender_age["m_35_44"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_45_54"] = Math.round(parseFloat(temp_audience_gender_age["f_45_54"].slice(0, temp_audience_gender_age["f_45_54"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_45_54"].slice(0, temp_audience_gender_age["m_45_54"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_55_64"] = Math.round(parseFloat(temp_audience_gender_age["f_55_64"].slice(0, temp_audience_gender_age["f_55_64"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_55_64"].slice(0, temp_audience_gender_age["m_55_64"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_65"] = Math.round(parseFloat(temp_audience_gender_age["f_65"].slice(0, temp_audience_gender_age["f_65"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_65"].slice(0, temp_audience_gender_age["m_65"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_f"] = 
                Math.round(parseFloat(temp_audience_gender_age["f_13_17"].slice(0, temp_audience_gender_age["f_13_17"].length-1)) +
                parseFloat(temp_audience_gender_age["f_18_24"].slice(0, temp_audience_gender_age["f_18_24"].length-1)) + 
                parseFloat(temp_audience_gender_age["f_25_34"].slice(0, temp_audience_gender_age["f_25_34"].length-1)) + 
                parseFloat(temp_audience_gender_age["f_35_44"].slice(0, temp_audience_gender_age["f_35_44"].length-1)) + 
                parseFloat(temp_audience_gender_age["f_45_54"].slice(0, temp_audience_gender_age["f_45_54"].length-1)) + 
                parseFloat(temp_audience_gender_age["f_55_64"].slice(0, temp_audience_gender_age["f_55_64"].length-1)) + 
                parseFloat(temp_audience_gender_age["f_65"].slice(0, temp_audience_gender_age["f_65"].length-1)) * 100) / 100 + "%"
            temp_account_info_from_db.audience_gender_age["sum_m"] = 
                Math.round(parseFloat(temp_audience_gender_age["m_13_17"].slice(0, temp_audience_gender_age["m_13_17"].length-1)) +
                parseFloat(temp_audience_gender_age["m_18_24"].slice(0, temp_audience_gender_age["m_18_24"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_25_34"].slice(0, temp_audience_gender_age["m_25_34"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_35_44"].slice(0, temp_audience_gender_age["m_35_44"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_45_54"].slice(0, temp_audience_gender_age["m_45_54"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_55_64"].slice(0, temp_audience_gender_age["m_55_64"].length-1)) + 
                parseFloat(temp_audience_gender_age["m_65"].slice(0, temp_audience_gender_age["m_65"].length-1)) * 100) / 100 + "%"

            let temp_follower_count = temp_account_info_from_db.instagram_user.followers_count
            temp_account_info_from_db.audience_gender_age["graph_data"] = [
                {
                    "연령대": "13~17세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_13_17"].slice(0, temp_audience_gender_age["f_13_17"].length-1)) / 100),
                    "hot dogColor": "hsl(11, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_13_17"].slice(0, temp_audience_gender_age["m_13_17"].length-1)) / 100),
                    "kebabColor": "hsl(132, 70%, 50%)"
                },
                {
                    "연령대": "18~24세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_18_24"].slice(0, temp_audience_gender_age["f_18_24"].length-1)) / 100),
                    "hot dogColor": "hsl(122, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_18_24"].slice(0, temp_audience_gender_age["m_18_24"].length-1)) / 100),
                    "kebabColor": "hsl(330, 70%, 50%)"
                },
                {
                    "연령대": "25~34세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_25_34"].slice(0, temp_audience_gender_age["f_25_34"].length-1)) / 100),
                    "hot dogColor": "hsl(130, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_25_34"].slice(0, temp_audience_gender_age["m_25_34"].length-1)) / 100),
                    "kebabColor": "hsl(115, 70%, 50%)"
                },
                {
                    "연령대": "35~44세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_35_44"].slice(0, temp_audience_gender_age["f_35_44"].length-1)) / 100),
                    "hot dogColor": "hsl(253, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_35_44"].slice(0, temp_audience_gender_age["m_35_44"].length-1)) / 100),
                    "kebabColor": "hsl(140, 70%, 50%)"
                },
                {
                    "연령대": "45~54세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_45_54"].slice(0, temp_audience_gender_age["f_45_54"].length-1)) / 100),
                    "hot dogColor": "hsl(84, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_45_54"].slice(0, temp_audience_gender_age["m_45_54"].length-1)) / 100),
                    "kebabColor": "hsl(147, 70%, 50%)"
                },
                {
                    "연령대": "55~64세",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_55_64"].slice(0, temp_audience_gender_age["f_55_64"].length-1)) / 100),
                    "hot dogColor": "hsl(109, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_55_64"].slice(0, temp_audience_gender_age["m_55_64"].length-1)) / 100),
                    "kebabColor": "hsl(262, 70%, 50%)"
                },
                {
                    "연령대": "65세이상",
                    "여성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["f_65"].slice(0, temp_audience_gender_age["f_65"].length-1)) / 100),
                    "hot dogColor": "hsl(101, 70%, 50%)",
                    "남성": parseInt(temp_follower_count * parseFloat(temp_audience_gender_age["m_65"].slice(0, temp_audience_gender_age["m_65"].length-1)) / 100),
                    "kebabColor": "hsl(270, 70%, 50%)"
                }
            ]
            setInstagramAudienceGenderAge(temp_account_info_from_db.audience_gender_age)
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            setInstagramAddress("https://www.instagram.com/" + temp_account_info_from_db.instagram_user.instagram_username)
            setInstagramFollowerReaction(temp_account_info_from_db.followers_reaction)

            ///////////////////////////////////////////////// new_media_count //////////////////////////////////
            let new_media_count_data_list = []
            let sorted_instagram_media_for_timestamp = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                let a_date = new Date(a.timestamp).getTime()
                let b_date = new Date(b.timestamp).getTime()
                return b_date - a_date
            })

            let month_ago = new Date()
            month_ago.setDate(month_ago.getDate()-28)

            let new_instagram_media_list = []
            for (var instagram_media of sorted_instagram_media_for_timestamp){
                let timestamp = new Date(instagram_media['timestamp']).getTime()
                if (timestamp > month_ago.getTime()){
                    new_instagram_media_list.push(instagram_media)
                }
            }

            let new_instagram_media_data_list = []
            let total_recent_media_count = 0
            let posting_date_count = 1
            for (let day=0; day<28; day++) {
                month_ago.setDate(month_ago.getDate()+1)
                let temp_new_instagram_media_data_dict = {}
                let count = 0
                let month = String(month_ago.getMonth()+1)
                if (month.length === 1) {
                    month = "0" + month
                }
                let date = String(month_ago.getDate())
                if (date.length === 1) {
                    date = "0" + date
                }
                temp_new_instagram_media_data_dict["x"] = month + date
                for (var new_instagram_media_data of new_instagram_media_list){
                    let media_month = String(new Date(new_instagram_media_data['timestamp']).getMonth()+1)
                    if (media_month.length === 1) {
                        media_month = "0" + media_month
                    }
                    let media_date =  String(new Date(new_instagram_media_data['timestamp']).getDate())
                    if (media_date.length === 1) {
                        media_date = "0" + media_date
                    }

                    if ( month + date === media_month + media_date){
                        count += 1
                        total_recent_media_count += 1
                    }
                }
                if (count !== 0) {
                    posting_date_count += 1
                }
                temp_new_instagram_media_data_dict["y"] = count
                new_instagram_media_data_list.push(temp_new_instagram_media_data_dict)
            }
            let average_posting_period = (28/posting_date_count).toFixed(1)
            let temp_new_instagram_media_data = [
                {
                "id": "korea",
                "color": "hsl(256, 70%, 50%)",
                "data": new_instagram_media_data_list
                }
            ]
            setInstagramRecentMediaCount(total_recent_media_count)
            setInstagramNewMediaPeriod(average_posting_period)
            setInstagramNewMediaCount(temp_new_instagram_media_data)
            
            //////////////////////////////////////// Posting Type //////////////////////////////////////////
            let media_type_dict = {
                "CAROUSEL_ALBUM": 0,
                "IMAGE": 0,
                "VIDEO": 0
            }
            let total_media_count = temp_account_info_from_db.instagram_user.media_count

            for (let temp_instagram_media of temp_account_info_from_db["instagram_media"]) {
                media_type_dict[temp_instagram_media.media_type] += 1
            }
            
            let temp_instagram_media_type_data = [
                {
                "id": "Carousel",
                "label": "Carousel",
                "value": (media_type_dict["CAROUSEL_ALBUM"]/total_media_count*100).toFixed(2),
                "color": "hsl(160, 70%, 50%)"
                },
                {
                "id": "Image",
                "label": "Image",
                "value": (media_type_dict["IMAGE"]/total_media_count*100).toFixed(2),
                "color": "hsl(330, 70%, 50%)"
                },
                {
                "id": "Video",
                "label": "Video",
                "value": (media_type_dict["VIDEO"]/total_media_count*100).toFixed(2),
                "color": "hsl(51, 70%, 50%)"
                }
            ]
            setInstagramMediaType(temp_instagram_media_type_data)
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let media_category_dict = {}
            let media_category_like_dict = {}
            let media_category_impressions_dict = {}
            for (let temp_instagram_media of temp_account_info_from_db["instagram_media"]) {
                console.log(temp_instagram_media.category)
                if (temp_instagram_media.category != null) {
                    let category_list = temp_instagram_media.category.split(",")
                    for (let category of category_list) {
                        if (category in media_category_dict) {
                            media_category_dict[category] += 1
                            media_category_like_dict[category] += temp_instagram_media.like_count
                            media_category_impressions_dict[category] += temp_instagram_media.impressions
                        }else {
                            media_category_dict[category] = 1
                            media_category_like_dict[category] = temp_instagram_media.like_count
                            media_category_impressions_dict[category] = temp_instagram_media.impressions
                        }
                    }
                }
            }

            var sorted_media_category_list = Object.keys(media_category_dict).map(function(key) {
                return [key, media_category_dict[key]];
              });
            var sorted_media_category_like_list = Object.keys(media_category_like_dict).map(function(key) {
                return [key, media_category_like_dict[key]];
              });
            var sorted_media_category_impressions_list = Object.keys(media_category_impressions_dict).map(function(key) {
                return [key, media_category_impressions_dict[key]];
            });

            sorted_media_category_list.sort(function(first, second) {
                return second[1] - first[1];
            });
            let sorted_media_category_dict = {}
            for (let element  of sorted_media_category_list){
                sorted_media_category_dict[element[0]] = element[1]
            }

            sorted_media_category_like_list.sort(function(first, second) {
                return second[1] - first[1];
            });
            let sorted_media_category_like_dict = {}
            for (let element  of sorted_media_category_like_list){
                sorted_media_category_like_dict[element[0]] = element[1]
            }

            sorted_media_category_impressions_list.sort(function(first, second) {
                return second[1] - first[1];
            });
            let sorted_media_category_impressions_dict = {}
            for (let element  of sorted_media_category_impressions_list){
                sorted_media_category_impressions_dict[element[0]] = element[1]
            }

            console.log(sorted_media_category_dict)
            console.log(sorted_media_category_like_dict)
            console.log(sorted_media_category_impressions_dict)


            let temp_instagram_media_category_data = []
            let color = 10
            for (let category_key in sorted_media_category_dict){
                let temp_media_category_dict = {
                    "id": category_key,
                    "label": category_key,
                    "value": (sorted_media_category_dict[category_key]/total_media_count*100).toFixed(2),
                    "color": "hsl(" + color + ", 50%, 50%)"
                }
                color += 10
                temp_instagram_media_category_data.push(temp_media_category_dict)
            }
            setInstagramMediaCategory(temp_instagram_media_category_data)

            let media_category_like_componenet = Object.keys(sorted_media_category_like_dict).map((media_category, index) => {
                return (
                    <Tr2>
                    <Td1>
                       {index+1}위
                    </Td1>
                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                        {media_category}
                    </TdLable>
                    <Td1>
                        {media_category_like_dict[media_category]}개
                    </Td1>
                </Tr2>
                )
            });
            setInstagramMediaCategoryLikeComponent(media_category_like_componenet)

            let media_category_impressions_componenet = Object.keys(sorted_media_category_impressions_dict).map((media_category, index) => {
                return (
                    <Tr2>
                    <Td1>
                       {index+1}위
                    </Td1>
                    <TdLable style={{textAlign: 'left', width: '120px'}}>
                        {media_category}
                    </TdLable>
                    <Td1>
                        {media_category_impressions_dict[media_category]}개
                    </Td1>
                </Tr2>
                )
            });
            setInstagramMediaCategoryImpressionsComponent(media_category_impressions_componenet)
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let temp_sum_of_impressions_count = 0
            let temp_sum_of_like_count = 0
            let temp_sum_of_comments_count = 0
            for (let media of temp_account_info_from_db["instagram_media"]) {
                temp_sum_of_impressions_count += media.impressions
                temp_sum_of_like_count += media.like_count
                temp_sum_of_comments_count += media.comments_count
            }

            setSumOfImpressionsCount(temp_sum_of_impressions_count)
            setSumOfLikeCount(temp_sum_of_like_count)
            setSumOfCommentsCount(temp_sum_of_comments_count)
            setSumOfContentsCount(temp_sum_of_impressions_count + temp_sum_of_like_count + temp_sum_of_comments_count)

            ///////////////////////////////////////////// Best Impressions Posting //////////////////////////////////
            let sorted_instagram_media_for_impressions = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                return b.impressions - a.impressions
            })
            setBestImpressionsPosting(sorted_instagram_media_for_impressions[0])
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////// Best Likes Posting //////////////////////////////////
            let sorted_instagram_media_for_like = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                return b.like_count - a.like_count
            })
            setBestLikePosting(sorted_instagram_media_for_like[0])
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////// Best Comments Posting //////////////////////////////////
            let sorted_instagram_media_for_comments = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                return b.comments_count - a.comments_count
            })
            setBestCommentsPosting(sorted_instagram_media_for_comments[0])
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////// Best Saved Posting //////////////////////////////////
            let sorted_instagram_media_for_saved = temp_account_info_from_db["instagram_media"].sort(function (a,b) {
                return b.saved - a.saved
            })
            setBestSavedPosting(sorted_instagram_media_for_saved[0])
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////


            let temp_instagram_best_hash_tag = temp_account_info_from_db.best_hash_tag.map((best_hash_tag, index) => {
                return(
                    <Positioner5_4_1>{best_hash_tag.hash_tag}</Positioner5_4_1>
                )
            });
            setInstagramBestHashTag(temp_instagram_best_hash_tag)

            return temp_account_info_from_db
        }
    }

    useEffect(() => {
        getAccountInfoFromDB()
        // console.log(facebook_info)
        // console.log(instagram_user)
    }, []);

    return(
    <Positioner>
        <RowDiv>
            <Font2>
                <label style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>SampleLife 인플루언서 분석 시스템에 의한&nbsp;
                 {account_info_from_db.name}님의 인스타그램 계정 {instagram_user.instagram_username} 분석 결과입니다.</label>
            </Font2>
        </RowDiv>
        <Page1>
        <Font1>
            기본프로필
        </Font1>
            <Positioner1 id="gray">
                <Positioner1_1 id="skyblue">
                    <Positioner1_2 id="yellow">
                        <ProfilePicture
                            profilepic={instagram_user.profile_picture_url}
                        />
                        <Font3 style={{fontWeight:'900', marginRight:'100px', marginTop:'20px', marginBottom:'20px'}}>
                            {instagram_user.instagram_username}
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
                                    <a href={instagram_address} target="_blank">{instagram_address}</a>
                                </Td1>
                            </Tr1>

                            {/* <Tr1>
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
                            </Tr1> */}

                            <Tr1>
                                <TdLable>
                                    지역
                                </TdLable>
                                <Td1 colSpan ="3">
                                    {user_region}
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    성별
                                </TdLable>
                                <Td1 colSpan ="3">
                                    {account_info_from_db.gender}
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    연령
                                </TdLable>
                                <Td1 colSpan ="3">
                                    {user_age}
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    직업
                                </TdLable>
                                <Td1 colSpan ="3">
                                    {user_career}
                                </Td1>
                            </Tr1>

                            <Tr1>
                                <TdLable>
                                    관심사
                                </TdLable>
                                <Td1 colSpan ="3">
                                    {user_interest}
                                </Td1>
                            </Tr1>
                            
                        </Table>
                    </Positioner1_2>
                    <Position1_3 id="green">
                        <GraphRadar data={instagram_score_data} username={instagram_user.instagram_username} />
                        <Font1 style={{fontSize:"1rem"}}>
                            인플루언서 평점
                        </Font1>
                        <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900'}}>
                            {influencer_total_grade}
                        </Font1>
                    </Position1_3>
                </Positioner1_1>
            </Positioner1>
            <Font1 style={{fontSize:"1rem", fontWeight:'900', textAlign:'left', marginTop:'6%' }}>
                인스타그램 포스팅 {instagram_user.media_count}개
            </Font1>
            
            <Positioner2 id="orange">         
                {top_popular_posting}
            </Positioner2>
        </Page1>
        
        <Page2>
            <Font1>
                팔로워
            </Font1>
            <Font2>
                {instagram_user.instagram_username} 님의 팔로워는 총 {instagram_user.followers_count}명입니다.
            </Font2>
            <Positioner3 id="pink">
                {/* <Font2>
                    팔로워 추이(6개월)
                </Font2> */}
                <Positioner3_1 id="skylbue">
                    <GraphLine data={instagram_new_follower_count} legend='팔로워 추이 (1개월)' />
                </Positioner3_1>
                <Font2>
                    팔로워 성별 및 연령대
                </Font2>
                <Positioner3_2 id="gray">
                    <Positioner3_2_1 id="skyblue">
                        <GraphBar data={instagram_audience_gender_age.graph_data} />
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
                                        13~17세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_13_17}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_13_17}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_13_17}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        18~24세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_18_24}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_18_24}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_18_24}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        25~34세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_25_34}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_25_34}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_25_34}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        35~44세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_35_44}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_35_44}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_35_44}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        45~54세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_45_54}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_45_54}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_45_54}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        55~64세
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_55_64}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_55_64}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_55_64}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        65세이상
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.f_65}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.m_65}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_65}
                                    </Td>
                                </Tr>

                                <Tr>
                                    <TdLable>
                                        계
                                    </TdLable>
                                    <Td>
                                        {instagram_audience_gender_age.sum_f}
                                    </Td>
                                    <Td>
                                        {instagram_audience_gender_age.sum_m}
                                    </Td>
                                    <Td>
                                        100%
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
                                {instagram_follower_reaction.average_er}
                            </Font1>
                            <Font3 style={{color:"red"}}>
                                alert message
                            </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 댓글수 {instagram_follower_reaction.average_comments_count}/ 평균 좋아요 {instagram_follower_reaction.average_like_count}
                        </Font3>
                    </Positioner3_3_div>
                    <Positioner3_3_div>
                        <div style={{borderBottom:"1px solid black"}}>
                            <Font3>
                                평균 도달율(Reach rate)
                            </Font3>
                            <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                                {instagram_follower_reaction.average_rr}
                            </Font1>
                            <Font3 style={{color:"red"}}>
                                alert message
                            </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 조회수 {instagram_follower_reaction.average_impressions_count}/ 팔로워수 {instagram_user.followers_count}
                        </Font3>
                    </Positioner3_3_div>
                    <Positioner3_3_div>
                        <div style={{borderBottom:"1px solid black"}}>
                        <Font3>
                            평균 공감율(Like rate)
                        </Font3>
                        <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                            {instagram_follower_reaction.average_lr}
                        </Font1>
                        <Font3 style={{color:"red"}}>
                            alert message
                        </Font3>
                        </div>
                        <Font3 style={{fontSize:"0.8rem"}}>
                            평균 조회수 {instagram_follower_reaction.average_impressions_count}/ 평균 좋아요 {instagram_follower_reaction.average_like_count}
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
                <GraphLine data={instagram_new_media_count} legend='최근 1개월간 포스팅 활동'/>
            </Positioner4_1>
                <Font1 style={{fontSize:"2rem", color:'#7f05e6', fontWeight:'900', margin:'0%'}}>
                    총 {instagram_recent_media_count}개
                </Font1>       
                <Font3>
                {instagram_user.instagram_username} 님의 평균 포스팅 주기는 {instagram_new_media_period}일입니다.
                </Font3>    
                <Positioner4_2>
                    <Positioner4_3_1>
                        <Font3>
                            포스팅 유형 (%)
                        </Font3>
                        <Positioner4_3_div1>
                            {/* <Image src={graph_data[3]}/> */}
                            <GraphPie data={instagram_media_type} />
                        </Positioner4_3_div1>
                    </Positioner4_3_1>

                    <Positioner4_3_2>
                        <Font3>
                            포스팅 주요 카테고리
                        </Font3>
                        <Positioner4_3_div1>
                            <GraphPie data={instagram_media_category} />
                        </Positioner4_3_div1>
     
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
                                {instagram_media_category_like_componenet}
                            </Table>
                            
                        </Positioner5_2>
                        <Positioner5_2>
                            <Font3 style={{marginBottom:'10%'}}>
                                조회수가 많은 카테고리
                            </Font3>

                            <Table>
                                {instagram_media_category_impressions_componenet}
                            </Table>
                        </Positioner5_2>
                        <Positioner5_2>
                            <Font3 style={{marginBottom:'10%'}}>
                                컨텐츠 바이럴
                                <br></br>
                                총 {sum_of_contents_count}개 중
                            </Font3>

                            <Table>
                                <Tr2>
                                    <Td1>
                                        조회
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        {sum_of_impressions_count}개
                                    </TdLable>
                                </Tr2>
                                <Tr2>
                                    <Td1>
                                        좋아요
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        {sum_of_like_count}개
                                    </TdLable>
                                </Tr2>
                                <Tr2>
                                    <Td1>
                                        댓글
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        {sum_of_comments_count}개
                                    </TdLable>
                                </Tr2>
                                <Tr2>
                                    <Td1>
                                        계
                                    </Td1>
                                    <TdLable style={{textAlign: 'center', width: '120px'}}>
                                        {sum_of_contents_count}개
                                    </TdLable>
                                </Tr2>
                            </Table>
                        </Positioner5_2>   
                    </FlexDiv>
                </Positioner5_1>

                <Positioner2 id="orange">   
                    <Positioner_bundle>
                        <Font3>
                            Best 조회 포스트
                        </Font3>
                        <PictureDiv>
                            <Top_Popular_Posting
                                media_info={best_impressions_posting}
                            />     
                        </PictureDiv>
                    </Positioner_bundle>
                    <Positioner_bundle>
                        <Font3>
                            Best 좋아요 포스트
                        </Font3>
                        <PictureDiv>
                            <Top_Popular_Posting
                                media_info={best_like_posting}
                            />     
                        </PictureDiv>
                    </Positioner_bundle>
                    <Positioner_bundle>
                        <Font3>
                            Best 댓글 포스트
                        </Font3>
                        <PictureDiv>
                            <Top_Popular_Posting
                                media_info={best_comments_posting}
                            />     
                        </PictureDiv>
                    </Positioner_bundle>
                </Positioner2>

                <Positioner5_3>
                    <FlexDiv>
                        <Positioner5_4>
                            <Font3 style={{marginRight:'20px', fontWeight:'600'}}>
                                Best 해시태그
                            </Font3>
                            <FlexDiv style={{flexWrap: 'wrap'}}>
                                {instagram_best_hash_tag}
                            </FlexDiv>    
                        </Positioner5_4>

                        <Positioner5_4>
                            <Font3 style={{marginRight:'20px', fontWeight:'600'}}>
                                Best 키워드 (TBD)
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