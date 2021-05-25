import {React, useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const UncheckedLabel = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: black;
    text-align: center;
    line-height: 40px;
    background: #f1f1f1;
    &:hover {
        color: white;
        background: #7f05e6;
    }
`;

const CheckedLabel = styled.div`
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: white;
    text-align: center;
    line-height: 40px;
    background: #7f05e6;
    &:hover {
        color: white;
        background: #7f05e6;
    }
`;
// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const TableContentLabel = ({label, type, setType, checked}) => {
    const [ checked_value, setCheckedState ] = useState(false);
    const componentClicked = (e) => {
        if (checked === false) {
            setCheckedState(!checked_value)   // Render용
            setType(type, true)
        } else {
            setCheckedState(!checked_value)  // Render용
            setType(type, false)
        }   
    }
    if (checked === true) {
        return(
            <CheckedLabel onClick={(e) => componentClicked(e)}>{label}
            </CheckedLabel>
        )
    }else {
        return(
            <UncheckedLabel onClick={(e) => componentClicked(e)}>{label}
            </UncheckedLabel>
        )
    }
};

export default TableContentLabel;