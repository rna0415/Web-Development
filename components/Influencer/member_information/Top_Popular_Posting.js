import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
// import { shadow } from '../../../lib/styleUtils';
import { useHistory } from "react-router-dom";

const A = styled.a`
    width: 100%;
    height: 100%;
`;

const Div = styled.div`
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Label = styled.div`
    text-align: center;
    font-size: 1.0rem;
    font-family: 'Rajdhani';
`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const Top_Popular_Posting = ({media_info}) => {
    
    return(               
        <Div>
            <Div style={{width: "80%", height: "80%"}}>
                <A href={media_info.permalink} target="_blank">
                    <Image src={media_info.media_url} />
                </A>
            </Div>
            <Div style={{width: "20%", height: "20%", display: "flex"}}>
                <Image style={{width: "50%", height: "50%", marginTop: "5px", marginLeft: "5px"}} src="/images/influencer_info/like_count.png" />
                <Label style={{width: "50%", height: "50%", marginTop: "6px", marginLeft: "3px"}}>{media_info.like_count}</Label>
                <Image style={{width: "50%", height: "50%", marginTop: "5px", marginLeft: "10px"}} src="/images/influencer_info/comments_count.png" />
                <Label style={{width: "50%", height: "50%", marginTop: "6px", marginLeft: "3px"}}>{media_info.comments_count}</Label>
            </Div>
        </Div>              

    )
};

export default Top_Popular_Posting;