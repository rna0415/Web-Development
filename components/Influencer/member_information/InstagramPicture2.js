import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const Image = styled.img`
    
`;

const Positioner2 = styled.div`
    
    width: 100%;
    height: 300px;
    
    // background-color: orange;    

    display: flex;
    
    justify-content: center;

    border-bottom: 2px solid black;
`;

const Positioner_bundle = styled.div`
    margin:20px;
`;

const PictureDiv = styled.div`

    width: 240px;
    height:240px;       
    // background-color: white;    
    text-align: center;
`;



// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InstagramPicture2 = ({instapictures}) => {


    useEffect(() => {

        console.log('123123' ,instapictures)

    }, []);
    
    return(               
        <div>
            <Image src={instapictures.src}/>   
        </div>              

    )
};

export default InstagramPicture2;