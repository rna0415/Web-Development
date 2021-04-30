import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const Aligners = styled.div`
    margin-top: 1rem;
    text-align: right;
`;

const StyledLink = styled(Link)`
    color: ${oc.gray[6]};
    &:hover {
        color: ${oc.gray[7]};
    }
`
const FindPW = ({to, children}) => (
    <Aligners>
        <StyledLink to={to}>{children}</StyledLink>
    </Aligners>
);

export default FindPW;