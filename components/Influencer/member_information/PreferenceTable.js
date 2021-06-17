import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const Tr = styled.tr`
    border-bottom: 1px solid #e0e0e0;

`;
const Td = styled.td`
    line-height: 2.5rem;
    text-indent: 10px;   
    
`;
const TdLable = styled.td`
    width: 130px;
    background-color:#ededed;
    line-height: 2.5rem;    
    text-indent: 10px;
`;



// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const PreferenceTable = ({preference,index}) => {


    useEffect(() => {

        console.log('123123' ,preference)
        console.log('123123' ,index)

    }, []);
    
    return(              
        <Td colSpan ="5">
            {preference}
        </Td>                     
    )
};

export default PreferenceTable;