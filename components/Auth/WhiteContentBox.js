import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    height: auto;
`;

const TransparentBorder = styled.div`
    background: white;
    padding: 1rem;
    height: auto;
`;

const WhiteContentBox = ({children}) => (
    <Positioner>
        <TransparentBorder>
            {children}
        </TransparentBorder>
    </Positioner>
);

export default WhiteContentBox;