import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Contents = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const UserContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        <br></br>
        <Contents> 인플루언서 정보 </Contents>
        {children}
    </div>
);

export default UserContent;