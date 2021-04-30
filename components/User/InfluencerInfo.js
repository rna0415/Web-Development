// page/lp.js
import React from "react";
import styled from 'styled-components';
import oc from 'open-color';

const Influencer_List = styled.li`
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
`;

const Influencer_Profile_IMG = styled.img`
    float: left;
    width: 100px;
    margin-right: 10px;
    border-right: px solid #ddd;
`;

const Influencer_Contents = styled.div`
    margin-bottom: 0.4rem;
`;

function InfluencerInfo({ key, profile_picture_url, name, instagram_id, media_count, followers_count, follows_count, category, grade, advertising_costs }) {
  return (
      <test>
    <Influencer_List key={key}>
      <Influencer_Profile_IMG src={profile_picture_url} alt="" />
      <Influencer_Contents> 이름: {name} ({instagram_id}) </Influencer_Contents>
      <Influencer_Contents> 게시글: {media_count} 팔로워: {followers_count} 팔로우: {follows_count} </Influencer_Contents>
      <Influencer_Contents> 카테고리: {category} </Influencer_Contents>
      <Influencer_Contents> 평점: {grade} / 추정광고비: {advertising_costs}원</Influencer_Contents>
    </Influencer_List>
    </test>
  );
}
export default InfluencerInfo;
