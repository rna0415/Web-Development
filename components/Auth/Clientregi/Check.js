import React from 'react';
import styled from 'styled-components';


const Label = styled.div`
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
`;

const Div = styled.div`
    width: 90%;
    margin: 10px auto;
    text-align: left;
    display: flex;
        flex-direction: column;
        justify-conent: flex-start;
        align-items: right;
`;

const Box1 = styled.div`
    float: left;    
`;
const Box2 = styled.div`
    float: right;    
`;
const inputStyle = {
    margin: '5px 0 10px 0',
    paddingLeft: '8px', 
    paddingRight: '8px',
    border: '1px solid #bfbfbf',
    outLine: 'none',
    borderRadius: '1px',
    boxSizing: 'border-box',
    lineHeight: '40px',
    fontSize: '16px',
    width: 'auto',
    
};

// class Check extends Component{
//     render(){
//         const{...rest} = this.props;
//         const checkedb = this.props.checked_bool;
//         console.log("Test Checked")
//         console.log(checkedb)

//         return(
//             <Div><Label>
//             <input style={inputStyle} {...rest} checked= {checkedb} ></input> {this.props.label}
//             <br></br>
//             </Label></Div>
//         )
//     }
// }


const checkStyle = {
    borderRadius: '5px',
    position: 'relative',
    height: '16px',
	width: '16px',
    border: '1px solid blue',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#41B883',
    cursor: 'pointer',
    color: '#41B883'
}

const Input = styled.input`
    position: relative;
    height: 16px;
    width: 16px;
    border: 1px solid blue;
    border-radius: 4px;
    outline: none;
    background-color: #41B883;
    cursor: pointer;
    color: #41B883;
`;

const Check = ({label,checked_bool, ...rest}) => {
    const checked = checked_bool;
    
    if(checked === false){
        return(
            <Div><Label>
            <input style={checkStyle} {...rest} ></input> {label}
            <br></br>
            </Label></Div>
        )
    }else{
        return(
            <Div><Label>
            <input style={checkStyle} {...rest} checked= {checked} ></input> {label}
            <br></br>
            </Label></Div>
        )

    }

}

export default Check;

// const Check = ({label,checked_bool, ...rest}) => {
//     const checkedb = checked_bool;
//     const background_color = ""

//     return(
//         <Div><Label>
//         <input style={checkStyle} {...rest} checked= {checkedb} ></input> {label}
//         <br></br>
//         </Label></Div>
//     )
// }

// export default Check;