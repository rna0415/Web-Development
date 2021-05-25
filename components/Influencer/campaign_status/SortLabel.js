import {React, useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const UncheckedLabel = styled.div`
    width: 60px;
    height: 14px;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: gray;
    text-align: center;
    float: right;
    cursor: pointer;
    &:hover {
        color: #7f05e6;
    }
`;

const CheckedLabel = styled.div`
    width: 60px;
    height: 14px;
    font-size: 0.6rem;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: #7f05e6;
    text-align: center;
    float: right;
`;
// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const SortLabel = ({label, setSortType, checked, border_right_prop}) => {
    const [ checked_value, setCheckedState ] = useState(false);
    const componentClicked = (e) => {
        if (checked === false) {
            setCheckedState(!checked_value)   // Render용
            setSortType(label, true)
        } else {
            setCheckedState(!checked_value)  // Render용
            setSortType(label, false)
        }   
    }
    if (checked === true) {
        return(
            <CheckedLabel style={{borderRight: border_right_prop}} onClick={(e) => componentClicked(e)}>{label}
            </CheckedLabel>
        )
    }else {
        return(
            <UncheckedLabel style={{borderRight: border_right_prop}} onClick={(e) => componentClicked(e)}>{label}
            </UncheckedLabel>
        )
    }
};

export default SortLabel;