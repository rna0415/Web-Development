import { React, useState, useEffect } from "react";
import styled from "styled-components";
import instagram from './instagram.jpg'
import oc from "open-color";
import { shadow } from "../../../lib/styleUtils";
import { useHistory } from "react-router-dom";
import {
  Label,
  Input,
  Info,
  TimeInfo,
  VerificationNumButton,
  VerificationCheckButton,
} from ".";
import { isEmail, isLength, isAlphanumeric } from "validator";

// 화살표
import { faCamera, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// 화면의 중앙에 위치시킨다

// 다음 주소검색 Api
import DaumPostcode from 'react-daum-postcode';
const Positioner = styled.div``;

const Header = styled.div`
  text-align: center;
  font-family: "Rajdhani";
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  margin: 15px 0px;
`;

const Sexbox = styled.div`
  display: flex;
  font-family: "Rajdhani";
  font-size: 13px;
  font-weight: 600;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
`;

const Sexbox_Text = styled.div`
  font-family: "Rajdhani";
  font-size: 13px;
  font-weight: 600;
  margin: 0px 15px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Sexbox_Btn = styled.input`
  font-family: "Rajdhani";
  font-size: 13px;
  margin-right: 10px;
  padding: 2.5px;
  width: 100px;
  background: #white;
  height: 30px;
  border-radius:5px;
  font-weight: 550;
`;
const Sexbox_Byear_Select = styled.select`
  width: 200px;
  vertial-align: middle;
  text-align-last:center;
  height: 30px;
  border-radius:5px;
`;
const Activetic_Area = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Area_Btn = styled.input`
  font-family: "Rajdhani";
  font-size: 13px;
  
  margin-right: 10px;
  margin: 10px 
  padding: 2.5px;

  width: 140px;
  background: white;
  height:30px;
  border-radius:5px;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const InterestBtn = styled.input`
  font-family: "Rajdhani";
  font-size: 13px;
  
  margin-right: 10px;
  margin: 10px 
  padding: 2.5px;

  width: 71px;
  background: white;
  height:80px;
  border-radius:5px;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;



const Area_Header = styled.div`
  display: flex;
`;

const Area_Header_Title = styled.h3`
  font-family: "Rajdhani";
  font-size: 13px;
  margin-right: 10px; ;
`;
const Area_Header_Subitle = styled.h3`
  font-family: "Rajdhani";
  font-size: 10px;
  margin-right: 10px;
  padding-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

const Area_Btn_Wapper = styled.div`
  margin-bottom:10px;
`;

const AreaBtnContainar = styled.div`
  margin-bottom : 10px;
`;

const BlackBorderBox = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.8);
`;

const InstaBox = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Select_element = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const InstaAdd = styled.div`
  margin 0 10px;
  display : flex;
  padding-top: 2px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

const Connect_Btn = styled.input `
font-family: "Rajdhani";
font-size: 13px;

margin-right: 10px;
margin: 10px 
padding: 2.5px;

width: 140px;
background: white;
height:30px;
border-radius:5px;

border: 1px solid rgba(0, 0, 0, 0.2);
`;

const InstaBoxText = styled.div`
  font-size: 11px;
  padding-bottom: 10px;
`;



const MediaHeader = styled.div`
  padding-top: 20px;
  display: flex;
`;

const DeliveryHeader= styled.div`
  display: flex;
`;

const AccountInfo = styled.input`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

const DeliveryInfo = styled.div`
  margin-top: 10px;
  margin-bottom:10px;
  display: flex;
`;


const Deltitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;  
  font-size:12px
  width: 
`;

const AddSerchBtn = styled.input`
  margin-left:50px;
`;

const DelInfoInput = styled.input`
  width: 200px;
  height: 30px;
`;

const postCodeStyle = {
  display: "block",
  position: "absolute",
  top: "40%",
  left: "22%",
  width: "400px",
  height: "500px",
  padding: "7px",
  
};

const ModalLayer1 = styled.div `
  position:fixed;
  top :0;
  left :0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5); 
`;


const AddBox = styled.input`
  width: 400px;
  height: 30px
`;

const Initial = () => {
  //버튼이 눌러지면 색상이 바뀌게
  const [btn_color, set_btn_color] = useState("gray");
  const [address, set_address] = useState("")
  const [zonecode, set_zonecode] = useState("")
  const [fulladd, set_fulladd] = useState("")

  //모달사용을 위함
  const [isOpenPost, setIsOpenPost] = useState(false);

  const Click = (e) => {

    if (e.target.name === "wobtn") {
      set_btn_color("red");
      console.log(e.target.value);
    }

    else if (e.target.name === "addserch") {
      setIsOpenPost(true)
    }
    
  };


  // 주소 찾아 반환하는 함수 
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    set_zonecode(data.zonecode);
    // fulladd
    set_fulladd(fullAddress);

    console.log(zonecode)
    console.log(fulladd)

    // 바로 업데이트가 일어나지 않음
    
    setIsOpenPost(false);
  };
  

  useEffect(()=>{
    // 맨처음 들어올때는 거짓으로 들어옴
    // 빈것이 아니고
    set_address(fulladd)
  },[fulladd])


  //주소 모달 뿌려줌 
  const Add =() => (
    <ModalLayer1>
    <DaumPostcode style={postCodeStyle} autoClose onComplete={handleComplete} />
    </ModalLayer1>
  )

  return (
    <Positioner>
      <Header>
        인플로언서 필수정보를 입력하시려면 SampleLife에서 캠페인 및이벤트를
        추천해 드립니다.
      </Header>
      <Sexbox>
        <Sexbox_Text>성별</Sexbox_Text>
        <Sexbox_Btn
          name="wobtn"
          type="submit"
          value="여자"
          onClick={Click}
          style = {{background: btn_color}}
        ></Sexbox_Btn>
        <Sexbox_Btn type="submit" value="남자"></Sexbox_Btn>
        <Sexbox_Text>출생년도</Sexbox_Text>
        <Sexbox_Byear_Select name="job"> 
          <option value="birthyear" selected="selected">
            2021
          </option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
          <option value="1949">1949</option>
          <option value="1948">1948</option>
          <option value="1947">1947</option>
          <option value="1946">1946</option>
          <option value="1945">1945</option>
          <option value="1944">1944</option>
          <option value="1943">1943</option>
          <option value="1942">1942</option>
          <option value="1941">1941</option>
          <option value="1940">1940</option>
          <option value="1939">1939</option>
          <option value="1938">1938</option>
          <option value="1937">1937</option>
          <option value="1936">1936</option>
          <option value="1935">1935</option>
          <option value="1934">1934</option>
          <option value="1933">1933</option>
          <option value="1932">1932</option>
          <option value="1931">1931</option>
          <option value="1930">1930</option>
          <option value="1929">1929</option>
          <option value="1928">1928</option>
          <option value="1927">1927</option>
          <option value="1926">1926</option>
          <option value="1925">1925</option>
          <option value="1924">1924</option>
          <option value="1923">1923</option>
          <option value="1922">1922</option>
          <option value="1921">1921</option>
        </Sexbox_Byear_Select>
      </Sexbox>

      <Activetic_Area>
        <Area_Header>
          <Area_Header_Title> 활동지역</Area_Header_Title>
          <Area_Header_Subitle>
          최대 3개까지 가능합니다
          </Area_Header_Subitle>
        </Area_Header>
        <Area_Btn_Wapper>
        <AreaBtnContainar>
          <Area_Btn type="button" value="전국"></Area_Btn>
          <Area_Btn type="button" value="대구"></Area_Btn>
          <Area_Btn type="button" value="경기"></Area_Btn>
          <Area_Btn type="button" value="경남"></Area_Btn>
        </AreaBtnContainar>

          <AreaBtnContainar>
          <Area_Btn type="button" value="서울"></Area_Btn>
          <Area_Btn type="button" value="부산"></Area_Btn>
          <Area_Btn type="button" value="강원"></Area_Btn>
          <Area_Btn type="button" value="전북"></Area_Btn>
          </AreaBtnContainar>

          <AreaBtnContainar>
          <Area_Btn type="button" value="인천"></Area_Btn>
          <Area_Btn type="button" value="울산"></Area_Btn>
          <Area_Btn type="button" value="충청"></Area_Btn>
          <Area_Btn type="button" value="전남"></Area_Btn>
          </AreaBtnContainar>

          <AreaBtnContainar>
          <Area_Btn type="button" value="대전"></Area_Btn>
          <Area_Btn type="button" value="광주"></Area_Btn>
          <Area_Btn type="button" value="경북"></Area_Btn>
          <Area_Btn type="button" value="제주"></Area_Btn>
          </AreaBtnContainar>

        </Area_Btn_Wapper>
      </Activetic_Area>

      
      <Activetic_Area>
        <Area_Header>
          <Area_Header_Title>주요관심사</Area_Header_Title>
          <Area_Header_Subitle>
            최대 3개까지 가능합니다
          </Area_Header_Subitle>
        </Area_Header>
        <Area_Btn_Wapper>
        <AreaBtnContainar>
          <InterestBtn type="button" value="화장품"></InterestBtn>
          <InterestBtn type="button" value="패션"></InterestBtn>
          <InterestBtn type="button" value="핫플레이스"></InterestBtn>
          <InterestBtn type="button" value="요리/음식"></InterestBtn>
          <InterestBtn type="button" value="여행"></InterestBtn>
          <InterestBtn type="button" value="뷰티"></InterestBtn>
          <InterestBtn type="button" value="육아"></InterestBtn>
          <InterestBtn type="button" value="반려동물"></InterestBtn>
        </AreaBtnContainar>

          <AreaBtnContainar>
          <InterestBtn type="button"></InterestBtn>
          <InterestBtn type="button"></InterestBtn>
          <InterestBtn type="button"></InterestBtn>
          <InterestBtn type="button"></InterestBtn>
          <InterestBtn type="button"></InterestBtn>
          <InterestBtn type="button"></InterestBtn>
          </AreaBtnContainar>
        </Area_Btn_Wapper>
      </Activetic_Area>



      <MediaHeader>
          <Area_Header_Title>미디어 정보</Area_Header_Title>
          <Area_Header_Subitle>
            인스타그램 ID를 입력하고 연결하기 버튼을 눌러주세요
          </Area_Header_Subitle>
      </MediaHeader>

      <BlackBorderBox>
        <InstaBox>
          
          <img src = {instagram}  width="30" height="30"/>
          
          <InstaAdd>www.instagram.com/</InstaAdd>

          <Area_Btn type="input" placeholder ="인스타그램 ID 입력"></Area_Btn>
          <Connect_Btn type="button" value="연결하기"></Connect_Btn>
        </InstaBox>

        <InstaBoxText>
          인플루언서 마케팅 플랫폼 SampleLife에서는 인스타그램과 유튜브 채널을 활용한 마케팅 활동을 지원합니다.<br></br>
          인플로언서 마케팅에 참여하기 위해서는 회원님이 보유하고 계신 채널을 연결해야 합니다.
        </InstaBoxText>
        
        <InstaBoxText>
          SampleLife의 인플로언서 마케팅에 참여하기 위해서는 회원님의 인스타그램 계정이 비지니스 계정이어야 합니다.<br></br>
          현재 비즈니스 계정이 아닌 경우에는 '연결하기'를 눌러 가이드에 따라 계정을 전환 후 연결이 가능합니다.
        </InstaBoxText>

        <DeliveryHeader>
          <Area_Header_Title>배송정보</Area_Header_Title>
          <Area_Header_Subitle>
            제품 리뷰 캠페인에 참여하실 때 협찬품을 받으실 수 있는 주소를 등록하여 주십시오.
          </Area_Header_Subitle>
          <Area_Header_Subitle>
            계정 정보와 동일
          </Area_Header_Subitle>
      
          <AccountInfo type="checkbox"></AccountInfo>
        </DeliveryHeader>
      </BlackBorderBox>

      <BlackBorderBox>
        <DeliveryInfo>
          <Deltitle>받는 사람</Deltitle>
          <DelInfoInput placeholder="수령인 이름을 입력하세요"></DelInfoInput>
          <Deltitle>휴대폰 번호</Deltitle>
          <DelInfoInput placeholder="-을 제외하고 입력해 주세요"></DelInfoInput>  
        </DeliveryInfo>

        <DeliveryInfo>
        <Deltitle>배송 주소</Deltitle>
          <AddBox placeholder="" value={address}></AddBox>
        
          <AddSerchBtn type="submit"
           value ="우편번호 찾기" 
           name ="addserch" 
           onClick={Click} >
            </AddSerchBtn> 
          { isOpenPost ? <Add/>: null} 


        </DeliveryInfo>

        <div>
        <input placeholder=""></input>
        </div>

      </BlackBorderBox>

      <BlackBorderBox>
      <DeliveryHeader>
          <Area_Header_Title>계좌정보</Area_Header_Title>
          <Area_Header_Subitle>
            제품 리뷰 캠페인에 참여하실 때 협찬품을 받으실 수 있는 주소를 등록하여 주십시오.
          </Area_Header_Subitle>
      </DeliveryHeader>
      </BlackBorderBox>
    </Positioner>
  );


};

export default Initial;
