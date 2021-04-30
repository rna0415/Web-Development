import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`;

const Select = styled.select`
    width: 104%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;


const Option = styled.option`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const SelectWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Select {...rest}>
            <Option value= "선택안함">카테고리 선택</Option>
            <Option value= "예술가">예술가</Option>
            <Option value= "음악가/밴드">음악가/밴드</Option>
            <Option value= "블로거">블로거</Option>
            <Option value= "의류(브랜드)">의류(브랜드)</Option>
            <Option value= "커뮤니티">커뮤니티</Option>
            <Option value= "디지털 크리에이터">디지털 크리에이터</Option>
            <Option value= "교육">교육</Option>
            <Option value= "사업가">사업가</Option>
            <Option value= "건강/뷰티">건강/뷰티</Option>
            <Option value= "편집자">편집자</Option>
            <Option value= "문인">문인</Option>
            <Option value= "개인 블로그">개인 블로그</Option>
            <Option value= "제품/서비스">제품/서비스</Option>
            <Option value= "게이머">게이머</Option>
            <Option value= "음식점">음식점</Option>
            <Option value= "뷰티,화장품,개인용품">뷰티,화장품,개인용품</Option>
            <Option value= "식품점">식품점</Option>
            <Option value= "사진가">사진가</Option>
            <Option value= "쇼핑 및 유통">쇼핑 및 유통</Option>
            <Option value= "동영상 크리에이터">동영상 크리에이터</Option>
        </Select>
    </Wrapper>
);

export default SelectWithLabel;