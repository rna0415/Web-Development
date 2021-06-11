import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const Image = styled.img`
    
`;



// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const GraphPicture = ({graph_data}) => {


    useEffect(() => {

        // console.log('graph_data' ,graph_data)

    }, []);
    
    return(
        
        
        <div>
            <Image src={graph_data.src} />
            {/* <Image src='/images/influencer_info/lilka.png'></Image> */}
        </div>
    )
};

export default GraphPicture;