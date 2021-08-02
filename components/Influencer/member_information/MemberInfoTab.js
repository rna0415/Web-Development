import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import { FixModal, PasswordFixModal,PhoneFixModal,EssentialFixModal,AdditionalFixModal, PreferenceTable } from '.';
import {GetBackendIP} from '../../../settings';
import { ExecuteBackendAPI, ExecuteFacebookAPI } from '../../../lib/api/restapi';

const Positioner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    justify-content: center;
`;

const RowDiv = styled.div`
    margin-top:5%;
    margin-bottom:5%;
    width: 100%;
    height: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
`;

const Tbody = styled.tbody`
`;

// 행
const Tr = styled.tr`
    border-bottom: 1px solid #e0e0e0;

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
const FixButton= styled.button`
    background-color: white;   
    border: 1px solid #adadad;
    padding: 8px 16px;
    color: #adadad;
    font-weight:600;
    cursor: pointer;

`;

// 셀
const TdLable = styled.td`
    width: 130px;
    background-color:#ededed;
    line-height: 2.5rem;
    
    text-indent: 10px;
`;

const TdLable1 = styled.td`
    width: 130px;
    background-color:#ededed;
    line-height: 2.5rem;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    text-indent: 10px;
`;

const MemberInfoTab = ({facebook_info}) =>{

    const [fixModal, setFixModal] = useState([])
    const [account_info_from_db, setAccountInfoFromDB ] = useState([]);
    const [hidden_password, setHiddenPassword] = useState('');
    const [marriage, setMarriage ] = useState('');
    const [children, setChildren] = useState('');
    const [region, setRegion] = useState('');
    const [interest, setInterest] = useState('');
    const [delivery, setDelivery] = useState({
        address: "",
        address_detailed: "",
        influencer_id: "",
        phone_num: "",
        recipient: "",
    });
    const [account, setAccount] = useState({
        account_num: "",
        bank_name: "",
        influencer_id: "1",
        name: ""
    });
    const [career, setCareer] = useState('');
    const [pet, Setpet] = useState('')
    const [preference, setPreference] = useState({
        experience_review: "",
        expertise: "",
        individuality: "",
        sale: "",
        upload: "",
        visit_review: "",
        volunteer: ""
    });

    const [instagram_user, setInstagramUser] = useState({
        instagram_id: "",
        instagram_username: "",
        profile_picture_url: "",
        followers_count: "",
        follows_count: "",
    });

    const [display_preference, setDisplay_preference]= useState([]);
    const [display_preference_list, setDisplay_preference_list]= useState([]);
    let temp_preference_list= []
    


    // const [data_from_db, setData_from_db] = useState(
    //     {
    //         account= ""
    //     }
    // )

    //그래프 데이터 가져오는 느낌
    const getAccountInfoFromDB = async () => {
        console.log(facebook_info)
        // 백엔드 서버 API 통신
        // console.log(email)

        //로컬용
        let data
        let request = 'GET'
        let backend_ip_address = GetBackendIP()
        let backend_api_url = "http://" + backend_ip_address + "/api/influencer/1/" // https /get_user_info
        let backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request);
        let temp_account_info_from_db = backend_api_response.data
       
        //aws용
        // let data = {
        //     "influencer_email": facebook_info.email
        // }
        // let request = 'GET'

        // let backend_ip_address = GetBackendIP()
        // let backend_api_url = "https://" + backend_ip_address + "/api/influencer/get_user_info/"
        // let backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request)
        // console.log(backend_api_response)
        // let temp_account_info_from_db = backend_api_response.data[0]

        console.log(temp_account_info_from_db)
        setAccountInfoFromDB(temp_account_info_from_db)


        return temp_account_info_from_db
    }

    const setCloseModal = () => {
        console.log("close clicked")

        
        setFixModal([])
    }
    
   
    const ModalClicked = (e) => {
        console.log("modal clicked")
        console.log(account_info_from_db)
        console.log(account_info_from_db.region.length)

        if(e === "password"){
            let temp_campaign_status_modal = <PasswordFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
        }else if(e === "phone"){
            let temp_campaign_status_modal = <PhoneFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)

        }else if(e === "essential"){
            let temp_campaign_status_modal = <EssentialFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
            
        }else if(e === "additional"){
            let temp_campaign_status_modal = <AdditionalFixModal setCloseModal={setCloseModal} />
            setFixModal(temp_campaign_status_modal)
        }
        // let temp_campaign_status_modal = <FixModal setCloseModal={setCloseModal} />
        //     setFixModal(temp_campaign_status_modal)

        }

        

    useEffect(() => {
        getAccountInfoFromDB()
    }, []);
    
    useEffect(() => {
        console.log('account_info_from_db:',account_info_from_db)
        if(account_info_from_db.length !== 0){
            console.log(account_info_from_db)

            if (account_info_from_db.password !== null) {
                let temp_password = "*".repeat(account_info_from_db.password.length)
                setHiddenPassword(temp_password)
            }

            if(account_info_from_db.marriage === true){
                setMarriage('기혼')
                
            }else{
                setMarriage('미혼')
            }

            if(account_info_from_db.marriage === true){
                setChildren('있음')
            }else{
                setChildren('없음')
            }



            let temp_region = ""
            for (var i = 0; i<account_info_from_db.region.length; i++) {
                temp_region += account_info_from_db.region[i].region
                if (i !== account_info_from_db.region.length-1){  
                    temp_region += ', '
                    
                }
            }setRegion(temp_region)

            let temp_interest = ""
            for (var i = 0; i<account_info_from_db.interest.length; i++) {                
                temp_interest += account_info_from_db.interest[i].interest
                if (i !== account_info_from_db.interest.length-1){  
                    temp_interest += ', '
                    
                }
            }setInterest(temp_interest)

            if (account_info_from_db.delivery !== null) {
                let temp_delivery = delivery
                temp_delivery.address = account_info_from_db.delivery.address
                temp_delivery.address_detailed = account_info_from_db.delivery.address_detailed
                temp_delivery.influencer_id = account_info_from_db.delivery.influencer_id
                temp_delivery.phone_num = account_info_from_db.delivery.phone_num
                temp_delivery.recipient = account_info_from_db.delivery.recipient
                setDelivery(temp_delivery)
            }

            if (account_info_from_db.account !== null) {
                let temp_account = account
                temp_account.account_num = account_info_from_db.account.account_num
                temp_account.bank_name = account_info_from_db.account.bank_name
                temp_account.influencer_id = account_info_from_db.account.influencer_id
                temp_account.name =account_info_from_db.account.name
                setAccount(temp_account)
            }

            let temp_career = ""
            for (var i =0; i< account_info_from_db.career.length; i++){
                temp_career += account_info_from_db.career[i].career_type
                if (i !== account_info_from_db.career.length-1){
                    temp_career += ', '
                }
            }setCareer(temp_career)

            let temp_pet = ""
            for (var i=0; i< account_info_from_db.pet.length; i++){
                temp_pet += account_info_from_db.pet[i].pet_type
                if(i !== account_info_from_db.pet.length-1){
                    temp_pet += ', '
                }
            }Setpet(temp_pet)

            if (account_info_from_db.preference !== null) {
                let preference_list = []
                let temp_preference = preference

                if(account_info_from_db.preference.experience_review === true){
                    temp_preference.experience_review = "제품을 협찬받아 사용한 훈에 체험후기 작성"
                    preference_list.push(temp_preference.experience_review)
                }else{
                    temp_preference.experience_review = ""
                }
                if(account_info_from_db.preference.expertise === true){
                    temp_preference.expertise = "나의 전문지식을 활용하여 캠페인 활동 참여"
                    preference_list.push(temp_preference.expertise)
                }else{
                    temp_preference.expertise = ""
                }
                if(account_info_from_db.preference.individuality === true){
                    temp_preference.individuality = "내 개성에 맞는 특정 브랜드나 제품의 캠페인 선호"
                    preference_list.push(temp_preference.individuality)
                }else{
                    temp_preference.individuality = ""
                }
                if(account_info_from_db.preference.sale === true){
                    temp_preference.sale = "내 채널을 활용하여 공동구매 또는 할인판매 진행"
                    preference_list.push(temp_preference.sale)
                }else{
                    temp_preference.sale = ""
                }
                if(account_info_from_db.preference.upload === true){
                    temp_preference.upload = "특정한 이미지나 영상을 내 채널에 업로드"
                    preference_list.push(temp_preference.upload)
                }else{
                    temp_preference.upload = ""
                }
                if(account_info_from_db.preference.visit_review === true){
                    temp_preference.visit_review = "매장이나 명소를 방문한 후에 이용 후기 작성"
                    preference_list.push(temp_preference.visit_review)
                }else{
                    temp_preference.visit_review = ""
                }
                if(account_info_from_db.preference.volunteer === true){
                    temp_preference.volunteer = "사회 봉사활동이나 공익활동 캠페인 참여"
                    preference_list.push(temp_preference.volunteer)
                }else{
                    temp_preference.volunteer = ""
                }
                // console.log(preference_list)
                setDisplay_preference(preference_list)
            }

            if (account_info_from_db.instagram_user !== null) {
                let temp_instagram_user = instagram_user
                temp_instagram_user.instagram_id = account_info_from_db.instagram_user.instagram_id
                temp_instagram_user.instagram_username = account_info_from_db.instagram_user.instagram_username
                temp_instagram_user.profile_picture_url = account_info_from_db.instagram_user.profile_picture_url
                temp_instagram_user.followers_count = account_info_from_db.instagram_user.followers_count
                temp_instagram_user.follows_count = account_info_from_db.instagram_user.follows_count
                setInstagramUser(temp_instagram_user)
            }
        }
        
    }, [account_info_from_db]);

    useEffect(()=>{
        // console.log(display_preference)
         
        // console.log((Object.keys(temp_preference)).length)

        // for(var i=0; i<(Object.keys(temp_preference)).length;i++){          
        // }
        if (display_preference.length != 0) {
            for (var i = 0; i<display_preference.length; i++) {
                temp_preference_list.push(display_preference[i])
            }
        }
        console.log(temp_preference_list)
    
        let temp_display_preferences
        if (temp_preference_list.length !== 0) {
            temp_display_preferences = temp_preference_list.map((preference, index) => {
                console.log(index)

                if (index === 0) {
                    return(
                        <Tr>
                            <TdLable style={{borderBottom: '2px solid #ededed'}}> 선호 캠페인</TdLable>
                            <PreferenceTable
                                preference={preference}
                                index={index}
                            />
                        </Tr>
                    )
                }
                else {
                    return(
                        <Tr>
                            <TdLable style={{borderBottom: '2px solid #ededed'}}></TdLable>
                            <PreferenceTable
                                preference={preference}
                                index={index}
                            />
                        </Tr>
                    )
                }
            });
        }
        else {
            temp_display_preferences =
            <Tr>
                <TdLable style={{borderBottom: '2px solid #ededed'}}>
                    선호 캠페인
                </TdLable>
                <Td colSpan ="5" >
                </Td>
            </Tr>
        }
        // setDisplay_preference_list(temp_display_preferences)
        // console.log(temp_display_preferences)
        // console.log(temp_display_preferences)
        setDisplay_preference_list(temp_display_preferences)

    },[display_preference]);  

    return(
        <Positioner>
            <RowDiv>
                <label style={{marginLeft: "-25px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>회원가입일자에 등록된 회원명님의 회원구분 등록정보입니다.</label>
            </RowDiv>
            {fixModal}
            <Table>
                <Tbody>
                    <Tr>
                        <StrongTd>
                            계정정보
                        </StrongTd>
                        <Td colSpan="5"></Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            이메일(아이디)  
                        </TdLable>
                        <Td colSpan ="5">
                            {account_info_from_db.influencer_email}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            비밀번호    
                        </TdLable>
                        <Td colSpan ="4">
                            {hidden_password}  
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('password')}>수정하기</FixButton> 
                            {/* password 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            이름    
                        </TdLable>
                        <Td colSpan ="5">
                            {account_info_from_db.name}    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            휴대폰 번호 
                        </TdLable>
                        <Td colSpan ="4">
                            {account_info_from_db.phone_num} 
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('phone')}>수정하기</FixButton>
                            {/* phone 번호 변경 모달 팝업 */}
                        </Td>
                    </Tr>
                    
                    <TdBlank></TdBlank>

                    <Tr>
                        <StrongTd>
                            필수정보    
                        </StrongTd>
                        <Td colSpan ="4">
                            
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('essential')}>수정하기</FixButton>
                            {/* essential 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            성별    
                        </TdLable>
                        <Td colSpan ="5">
                            {account_info_from_db.gender}     
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            출생년도    
                        </TdLable>
                        <Td colSpan ="5">
                            {account_info_from_db.birth_year}    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            활동지역    
                        </TdLable>
                        <Td colSpan ="5">
                            {region}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            주요관심사 
                        </TdLable>
                        <Td colSpan ="5">
                            {interest}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            미디어정보  
                        </TdLable>
                        <Td colSpan ="5">
                            {instagram_user.instagram_username}  
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <Td colSpan ="5">
                            www.youtube.com 연결계정    
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            배송정보
                        </TdLable>
                        <TdLable1 >
                            받는사람
                        </TdLable1>
                        <Td style={{width:'120px'}}>                            
                            {delivery.recipient}                        
                        </Td>
                        <TdLable1>
                            휴대폰 번호
                        </TdLable1>
                        <Td>
                            {delivery.phone_num}
                        </Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            주소
                        </TdLable1>                        
                            
                        
                        <Td colSpan="4">
                            {delivery.address}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            계좌정보
                        </TdLable>
                        <TdLable1>
                            예금주
                        </TdLable1>
                        <Td>
                            {account.name}
                        </Td>
                        <TdLable1>
                            은행명
                        </TdLable1>
                        <Td>
                            {account.bank_name}
                        </Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            계좌번호
                        </TdLable1>
                        <Td>
                            {account.account_num}
                        </Td>
                        <Td colSpan="3"></Td>
                    </Tr>

                    <TdBlank></TdBlank>

                    <Tr>
                        <StrongTd>
                            추가정보    
                        </StrongTd>
                        <Td colSpan ="4">
                            
                        </Td>
                        <Td>
                            <FixButton onClick={(e) =>ModalClicked('additional')}>수정하기</FixButton>
                            {/* additional 변경 모달 팝업 */}
                        </Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            직업정보    
                        </TdLable>
                        <Td colSpan ="5">
                            {career}
                        </Td>
                    </Tr>
                    
                    <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            라이프정보
                        </TdLable>
                        <TdLable1>
                            결혼여부
                        </TdLable1>
                        <Td>
                            {marriage}
                            {/* {account_info_from_db.marriage} */}
                        </Td>
                        <TdLable1>
                            자녀유무
                        </TdLable1>
                        <Td>
                            {children}
                            {/* {account_info_from_db.children} */}
                        </Td>
                        <Td></Td>
                    </Tr>
                    
                    <Tr>
                        <TdLable></TdLable>
                        <TdLable1>
                            반려동물
                        </TdLable1>
                        <Td>
                            {pet}                            
                        </Td>
                        <Td colSpan ="3"></Td>
                    </Tr>

                    <Tr>
                        <TdLable>
                            활동지역
                        </TdLable>
                        <Td colSpan="5">
                            {region}
                        </Td>
                        
                    </Tr>

                    {/* <Tr>
                        <TdLable style={{borderBottom: '2px solid #ededed'}}>
                            선호 캠페인
                        </TdLable>
                        <Td colSpan ="5" >
                            선호하는 캠페인 방법
                        </Td>
                    </Tr> */}
                    {display_preference_list}


                </Tbody>
            </Table>
        </Positioner>
    )
}
export default MemberInfoTab;