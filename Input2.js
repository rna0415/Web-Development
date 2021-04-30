import oc from 'open-color';
import React from 'react';
import styled from 'styled-components';




const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const InputEnabled = styled.input`
    width: 97%;
    height: 33px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[9]};
`;

const InputDisabled = styled.input`
    width: 97%;
    height: 33px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[1]};
    background: ${oc.gray[1]};
`;

const Input2 = ({component, ...rest}) => {
    if (component === true) {
        return(
            <Wrapper>
                <InputEnabled {...rest}/>
            </Wrapper>
        )  
    } else {
        return(
            <Wrapper>
                <InputDisabled {...rest} disabled/>
            </Wrapper>
        )  
    }
};


export default Input2;