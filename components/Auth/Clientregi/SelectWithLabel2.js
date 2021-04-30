import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Label = styled.div`
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
`;
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Select = styled.select`
    width: 100%;
    height: 33px;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 0.7rem;
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

const SelectWithLabel2 = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label} <Select {...rest}>
            <Option value= "선택안함">Drop-Down Box</Option>
            <Option value= "1">온라인광고</Option>
            <Option value= "2">포털 검색</Option>
            <Option value= "3">문자, 이메일</Option>
            <Option value= "4">지인 추천</Option>
            <Option value= "5">행사(박람회, 세미나</Option>            
            <Option value= "기타">기타</Option>
            
        </Select></Label>
    </Wrapper>
);

export default SelectWithLabel2;