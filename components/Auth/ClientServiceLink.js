import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from '../../lib/styleUtils';

const Aligner = styled.div`
    margin-top: 1rem;
    text-align: left;
`;

const StyledLink = styled(Link)`
color: ${oc.blue[5]};
&:hover {
    color: ${oc.blue[7]};
}

`

const ClientServiceLink = ({to, children}) => (
    <Aligner>
        <StyledLink to={to}>{children}</StyledLink>
    </Aligner>
);

export default ClientServiceLink;