import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Aligner = styled.div`
    margin-top: 0.5rem;
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration-line : none;
    color: ${oc.gray[6]};
    &:hover {
        color: #7f05e6;
    }
`

const LeftAlignedLink = ({to, children}) => (
    <Aligner>
        <StyledLink to={to}>{children}</StyledLink>
    </Aligner>
);

export default LeftAlignedLink;