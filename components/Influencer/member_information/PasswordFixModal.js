import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

// import { shadow } from '../../../lib/styleUtils';
// import { DeliveryInfoChangeModal } from "./"

//모달 CSS
const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);   ///배경에 픽스를 주고 투명도를 준다.
    z-index: 5;
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
 
`;

// 로고
const LogoWrapper = styled.div`
    background: #A6B4C1;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const Logo = styled.div`
    color: #696969;
    font-size: 1rem;
    font-weight: 900;
    margin-left:10%;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

// 로그인 CSS
const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
`;



// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const PasswordFixModal = ({setCloseModal}) => {
    const history = useHistory();
    
    const closeClicked = (e) => {
        if (e === 'close'){
            setCloseModal()

        }
    }
    
    

    return(
        <BackgroundModal>      
            <Positioner>
                <ShadowedBox>
                    <LogoWrapper>
                        <Logo>비밀번호 수정하기</Logo>
                    </LogoWrapper>
                    <Contents>
                    <CloseButton onClick={(e) => closeClicked('close')} src="/images/homepage/x.png" />
                        <div>
                            hi
                        </div>
                        
                        <AlignerCenter>
                            
                        </AlignerCenter>
                    </Contents>
                </ShadowedBox>
            </Positioner>     
        </BackgroundModal>
    )
};

export default PasswordFixModal;