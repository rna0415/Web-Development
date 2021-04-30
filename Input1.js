import oc from 'open-color';
import React from 'react';
import styled from 'styled-components';

// const Label = styled.div`
//     margin: '10px 0 5px 0',
//     fontFamily: 'Arial, Helvetica, sans-serif',
//     fontSize: '15px',
// `;

// const Div = styled.div`
//     width: 90%;
//     margin: 10px auto;
//     text-align: left;
//     display: flex;
//         flex-direction: column;
//         justify-conent: flex-start;
//         align-items: right;
// `;

// const Box1 = styled.div`
//     float: left;

// `;
// const Box2 = styled.div`
//     float: right;    
// `;

// const inputStyle = {
//     margin: '-10px 0 15px 0',
//     paddingLeft: '8px', 
//     paddingRight: '8px',
//     border: '1px solid #bfbfbf',
//     outLine: 'none',
//     borderRadius: '1px',
//     boxSizing: 'border-box',
//     lineHeight: '40px',
//     fontSize: '16px',
//     width: '397px',
    
// };


// const Input1 = ({label, ...rest}) => {
//     return(            
//         <Div><Label>
//         <Box1>{label}</Box1><Box2><input style={inputStyle} {...rest}></input></Box2>
//         <br></br>
//         </Label></Div>
//     )
// }


const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const InputEnabled = styled.input`
    width: 97%;
    height: 30px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[9]};
`;

const InputDisabled = styled.input`
    width: 97%;
    height: 30px;
    border: 1px solid;
    padding: 0px;
    padding-left: 10px;
    font-size: 0.7rem;
    border-color: ${oc.gray[1]};
    background: ${oc.gray[1]};
`;

// const Input = ({component_disabled, ...rest}) => {
//     if (component_disabled === false) {
//         return(
//             <Wrapper>
//                 <InputEnabled {...rest} />
//             </Wrapper>
//         )  
//     } else {
//         return(
//             <Wrapper>
//                 <InputDisabled {...rest} disabled/>
//             </Wrapper>
//         )  
//     }
// };


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Input1 = ({...rest}) => {
        return(
            <Wrapper>
                <InputEnabled {...rest}/>
            </Wrapper>
        )  
};
export default Input1;