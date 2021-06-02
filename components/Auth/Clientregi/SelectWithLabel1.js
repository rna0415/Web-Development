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
    font-size: 15px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const SelectWithLabel1 = ({...rest}) => (
    <Wrapper>
        <Label><Select {...rest}>
            <Option value= "선택안함">Drop-Down Box</Option>
            <Option value= "개인사업/자영업">개인사업/자영업</Option>
            <Option value= "중소기업">중소기업</Option>
            <Option value= "대기업">대기업</Option>
            <Option value= "광고대행사">광고대행사</Option>
            <Option value= "">기타</Option>
            
        </Select></Label>
    </Wrapper>
);

export default SelectWithLabel1;