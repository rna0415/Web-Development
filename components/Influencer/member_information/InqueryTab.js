import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useHistory } from "react-router-dom";
import {Inquery_Message_Table,InqueryModal} from "./";
import {GetBackendIP} from '../../../settings';
import { ExecuteBackendAPI, ExecuteFacebookAPI } from '../../../lib/api/restapi';
// import _ from 'lodash'; //lodash는 자바스크립트 유틸리티 라이브러리입니다. 여기서는 배열을 편집하기 위해 사용합니다. lodash를 사용하려는 컴포넌트에서 _를 추가해줍니다.

const Positioner = styled.div`
    position: relative;
    width: 100%;
    float: left;
    justify-content: center;
`;

const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    border-color: ${oc.gray[5]};
    table-layout: auto;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
`;
const Td = styled.td`
    height: 50px;
    text-align: center;
    background: black;
    font-family: "Rajdhani";
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
`;

// 빈칸
const RowDiv = styled.div`
    width: 100%;
    height: 40px;
    
`;

const TableDiv = styled.div`
    width:100%;
    height:600px;
`;

const ButtonDiv = styled.div`
    width:100%;
    height:40px;
    position:relatvie;
    justify-content: center;
    display: flex;
`;


const Label = styled.div`
    display: flex;
    background: white;
    float: left;
    font-size: 1rem;
    font-family: 'Rajdhani';
    font-weight: 500;
    cursor: pointer;
    height: 22px;
`;

// 빈칸
const ArrowDiv = styled.div`
    display: flex;
    width: 22px;
    height: 22px;
    float: left;
    border: 1px solid #F3F3F3;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
`;

const Select = styled.select`
    width: 150px;
    height: 28px;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    float: right;
    border: 1px solid #7f05e6;
    margin-right: 3px;
    text-align-last: center;
    &:focus {
        outline:none;
    }
`;

const Input = styled.input`
    width: 150px;
    height: 24px;
    font-size: 0.8rem;
    font-family: 'Rajdhani';
    float:right;
    border-right: hidden;
    border-top: 1px solid #7f05e6;
    border-left: 1px solid #7f05e6;
    border-bottom: 1px solid #7f05e6;
    padding-left: 15px;
    &:focus {
        outline:none;
    }
`;

const SearchDiv = styled.div`
    width: 26px;
    height: 26px;
    float:right; 
    margin-right: 70px;
    cursor: pointer;
    border-top: 1px solid #7f05e6;
    border-right: 1px solid #7f05e6;
    border-bottom: 1px solid #7f05e6;
`;

const Option = styled.option`
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    width: 180px;
    height: 50px;
    color: white;
    font-size:1rem;
    background-color: #7f05e6;
    border: 1px solid #7f05e6;
    border-radius:5px;
    position:absolute;
    right:10px;
    cursor:pointer;
`;

const PageUi = styled.ul`
  float:left;
  list-style: none;
  text-align:center;
  border-radius:3px;
  color:white;
  padding:1px;
  border-top:3px solid #186EAD;
  border-bottom:3px solid #186EAD;
  background-color: rgba( 0, 0, 0, 0.4 );
`;

const PageLi = styled.li`
  display:inline-block;
  font-size:17px;
  font-weight:600;
  padding:5px;
  border-radius:5px;
  width:25px;
  &:hover{
    cursor:pointer;
    color:white;
    background-color:#263A6C;
  }
  &:focus::after{
    color:white;
    background-color:#263A6C;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`;

const PageWrap = styled.div`
    text-align:center;
	font-size:0;
`;

const PageNation = styled.div`
    display:inline-block
`;

const PageNation_a= styled.button`
    display:block;
    margin:0 3px;
    float:left;
    border:1px solid #e6e6e6;
    width:28px;
    height:28px;
    line-height:28px;
    text-align:center;
    background-color: white;
    font-size:13px;
    color:#999999;
    text-decoration:none;
    &:hover{
        cursor:pointer;
        font-weight:600;
    }
    
`;



const InqueryTab = ({facebook_info}) => {
    const history = useHistory();
    const [ inqueryModal, setInqueryModal] = useState([]);
    const [ inquery_info_from_db, setInqueryInfoFromDB ] = useState([]);
    const [ inquery_message_campaign_data, setInquery_message_campaign_data ] = useState([])
    const [ inquery_message_campaign_data_component, setInquery_message_campaign_data_component ] = useState([])
    const [ influencerID_From_DB, setInfluencerIdFromDB ] = useState([]);
    const [trigger, setTrigger] = useState(0);

    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostsPerPage] = useState(10);
      

    const NumberButton = ({background_color, buttonClicked,children,number}) => {

        return(
            <PageNation_a style={{backgroundColor:background_color}} onClick={()=>buttonClicked(number)} >{children}</PageNation_a>
        )

    }

    const Pagination = ({ postsPerPage, totalPosts  }) => {
        const pageNumbers = [];
        // 총 페이지 넘버 수를 계산한 뒤 웹 페이지에서 보여주기 위하여, 전체 포스트 갯수를 페이지 당 포스트 갯수로 나눈 값으로 배열을 만든 것,, math.ceil은 소수점을 올림함
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        
        const buttonClicked =(number) =>{
            setCurrentPage(number)
            console.log('number',number)

        }

        return (
          <PageWrap>
            <PageNation>
                {pageNumbers.map((number,index) => {
                    let background_color
                    if (currentPage === number) {
                        background_color = "#7f05e6"
                    }else {
                        background_color = "white"
                    }
                    return(
                        <NumberButton background_color={background_color} buttonClicked={buttonClicked} number={number}>{number}</NumberButton>
                    )}
            )}
            </PageNation>
          </PageWrap>
        );
    };
                           
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage; //postsperpage:10

    // 배열의 begin번째 ~ end-1 번째 까지의 복사본을 새롭게 반환해 주는 함수
    const currentPosts = (tmp) =>{
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
       
    }

    const arrowClick = (arrow) =>{
        const pageNumbers = [];
        //  전체 포스트 갯수를 페이지 당 포스트 갯수로 나눈 값으로 배열을 만든 것,, math.ceil은 소수점을 올림함
        // x/10 하면 x가 51개라고 가정할시 i는 6개(5개+1개반올림값)가 됨
        for (let i = 1; i <= Math.ceil(inquery_info_from_db.length / 10); i++) {
            pageNumbers.push(i);
        }
        console.log('currentPage',currentPage)
        console.log('-1',pageNumbers[pageNumbers.length-1])
        if(arrow=='left1'){
            console.log('left1')
            if(currentPage!==1){
            setCurrentPage(currentPage-1)
            }
        }else if(arrow=='left2'){
            console.log('left2')
            setCurrentPage(1)
        }else if(arrow=='right1'){
            console.log('right1')
            //마지막 번호 찾기
            if(currentPage!==pageNumbers[pageNumbers.length-1]){
            setCurrentPage(currentPage+1)
            }
        }else if(arrow=='right2'){
            console.log('right2')
            setCurrentPage(pageNumbers[pageNumbers.length-1])
        }
    }


    //////////////////////////////// 1차 페이지네이션 알고리즘 /////////////////////////////////////////////////
    // const [ inqueries, setInqueries] = useState({
    //     data: [],
    //     pageSize:10,
    //     currentPage:1
    // });

    // const Paginate = (data,currentPage,pageSize) =>{
    //     const startIndex = (currentPage-1)*pageSize; // 자를 배열의 시작점

    //     return _(data)
    //     .slice(startIndex) // 시작점부터 배열을 자르되
    //     .take(pageSize) // pageSize만큼의 배열을 취함
    //     .value(); // lodash wrapper 객체를 regular 배열로 변환
    // }
    // const handlePageChange = (page) => {
    //     console.log(page)
    //     setInqueries({ ...inqueries, currentPage: page });
    // }

    // const { data, pageSize, currentPage } = inqueries;
    // const pageInqueries = Paginate(data,currentPage,pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴
    
    // const {length: count} = inqueries.data;

    // const Pagination = (props) => {
    //     console.log(props)
    //     const { itemsCount, pageSize, currentPage, onPageChagne } = props; // 각각 아이템(영화목록) 개수, 한 페이지에 보여줄 아이템(영화목록) 개수
    //     const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
      
    //     if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음
      
    //     const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1, https://lodash.com/docs/#range 참고
      
    //     return (
    //       <nav style ={{ display: 'flex', justifyContent: 'center'}}> {/* VSCode 입력: nav>ul.pagination>li.page-item>a.page-link */}
    //         <PageUi className="pagination">
    //           {pages.map(page => (
    //             <PageLi 
    //                 key={page} 
    //                 className={page === currentPage ? "page-item active":"page-item"} // Bootstrap을 이용하여 현재 페이지를 시각적으로 표시
    //                 style={{ cursor: "pointer" }}>
    //               <PageSpan className="page-link" onClick={() => onPageChagne(page)}>{page}</PageSpan> {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
    //             </PageLi>
    //           ))}
    //         </PageUi>
    //       </nav>
    //     );
    // }
      
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    const setTriggerDB = (e) => {
        console.log("test")
        console.log(e)
        setTrigger(e)
    }

    const setCloseModal = () => {
        console.log("close clicked")

        
        setInqueryModal([])
    }
    


    const componentClick = () =>{ 
        
        let temp_inquery_modal = <InqueryModal facebook_info={facebook_info} trigger={trigger} setTriggerDB={setTriggerDB} setCloseModal={setCloseModal} />
        setInqueryModal(temp_inquery_modal)
        
    };

    const getAccountInfoFromDB = async () => {
        // console.log(facebook_info)
        // 백엔드 서버 API 통신

        //로컬용
        let data 
        let id='1'
        let request = 'GET'
        let backend_ip_address = GetBackendIP()
        let backend_api_url = "http://" + backend_ip_address + "/api/influencer/" +id // https /get_user_info
        let backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request);
        console.log(backend_api_response)

        let temp_account_info_from_db = backend_api_response.data
        // console.log(temp_account_info_from_db)
        // console.log(temp_account_info_from_db.inquery)

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
        setInfluencerIdFromDB(temp_account_info_from_db.influencer_id)
        setInqueryInfoFromDB(temp_account_info_from_db.inquery)
        
        // let temp_inqueries = inqueries
        // temp_inqueries.data = temp_account_info_from_db.inquery
        // setInqueries(temp_inqueries)
        return temp_account_info_from_db
    }

    useEffect(() => {
        setLoading(true);
        getAccountInfoFromDB()
        setLoading(false);
    }, [trigger]);

    useEffect(() => {
        let temp_inquery_info_from_db = inquery_info_from_db
        for (let inquery_info of temp_inquery_info_from_db) {
            inquery_info['inquery_component'] = ""
            inquery_info['inquery_component2'] = ""
            inquery_info['up_down_arrow'] = "/images/my_campaign/down_arrow.png"
        }
        setInquery_message_campaign_data(temp_inquery_info_from_db)
        console.log(inquery_info_from_db)
        // return () => {
        //   console.log());
          
        // };
    }, [inquery_info_from_db]);

    

    useEffect(() => {


            

       
        let temp_inquery_message_campaign_data = inquery_message_campaign_data.sort(function (a,b) {
            return b.message_no - a.message_no

        })
        if (temp_inquery_message_campaign_data.length < 10) {
            for (let i = temp_inquery_message_campaign_data.length; i< temp_inquery_message_campaign_data.length; i++) {
                temp_inquery_message_campaign_data.push({})
            }
        }
        // console.log(temp_inquery_message_campaign_data)
        // console.log(selected_client_data)
        
        let temp_inquery_message_campaign_data_component = temp_inquery_message_campaign_data.reverse().map((inquery_data, index) => {
        // let temp_inquery_message_campaign_data_component = pageInqueries.map((inquery_data, index) => {
            let background_color
            if (index % 2 === 0) {
                background_color = "#EEEEEE"
            }else {
                background_color = "#F6F6F6"
            }
            let length=inquery_info_from_db.length
    
            let temp_index  =[]
            temp_index.push(length)
            for (var i=0;i<inquery_info_from_db.length;i++){
                temp_index.push(--length)
            }

            return (
                <Inquery_Message_Table 
                    temp_index={temp_index}
                    loading={loading}
                    inquery_data={inquery_data}
                    index = {index}
                    background_color ={background_color}
                />
            )
        });
        setInquery_message_campaign_data_component(temp_inquery_message_campaign_data_component)

        return () => {
        //   console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [inquery_message_campaign_data]);



    return (
        <Positioner>
            <RowDiv style={{marginTop: "20px", marginBottom: "20px"}}>
                <Label  style={{marginLeft: "50px", fontSize: "1.0rem", fontWeight: "1000", height: "100%"}}>{influencerID_From_DB}님의 상담 이력입니다.</Label>
                <Button onClick={componentClick}>1:1 상담 신청하기</Button>
                {inqueryModal}
            </RowDiv>
            <TableDiv>
                <Table className="table">
                    <Tbody className="tbody">
                        <Tr className="tabs">
                            <Td style={{borderRight: "1px solid white", width: "140px"}}>No.</Td>
                            <Td style={{borderRight: "1px solid white", width: "780px"}}>상담제목</Td>
                            <Td style={{borderRight: "1px solid white", width: "140px"}}>일자</Td>
                            <Td style={{borderRight: "1px solid white",width: "140px"}}>작성자</Td>
                            <Td style={{width: "140px"}}>상담현황</Td>
                        </Tr>
                        {currentPosts(inquery_message_campaign_data_component)}
                    </Tbody>
                </Table>
            </TableDiv>
            <ButtonDiv >
                <ArrowDiv style={{marginRight: "7px"}}>
                    <Image onClick={()=>{arrowClick('left2')}} src="/images/my_campaign/left_arrow_2.png" />
                </ArrowDiv>
                <ArrowDiv style={{marginRight: "20px"}}>
                    <Image onClick={()=>{arrowClick('left1')}} src="/images/my_campaign/left_arrow_1.png" />
                </ArrowDiv>
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={inquery_info_from_db.length} 
                    setCurrentPage={setCurrentPage}
                ></Pagination>
                <ArrowDiv style={{marginLeft: "20px"}}>
                    <Image onClick={()=>{arrowClick('right1')}} src="/images/my_campaign/right_arrow_1.png" />
                </ArrowDiv>
                <ArrowDiv style={{marginLeft: "7px"}}>
                    <Image onClick={()=>{arrowClick('right2')}} src="/images/my_campaign/right_arrow_2.png" />
                </ArrowDiv>
            </ButtonDiv>
        </Positioner>
    );
};
export default InqueryTab;