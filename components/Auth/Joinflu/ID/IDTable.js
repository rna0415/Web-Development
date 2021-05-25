import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../../lib/styleUtils';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    height: auto;
    margin-top: 1rem;
`;

const Table = styled.table`
    width: 100%;
    border: 1px hidden;
    border-collapse: collapse;
`;
const Tbody = styled.tbody`
`;
const Tr = styled.tr`
`;

const TdType = styled.td`
    border-top: 1px hidden;
    padding: 0.3rem;
    font-family: 'Rajdhani';
    font-size: 0.8rem;
    font-weight: 900;
    width: 45%;
    text-align: center;
    color: ${oc.gray[7]};
`;

const TdID = styled.td`
    border-top: 1px hidden;
    padding: 0.3rem;
    font-family: 'Rajdhani';
    font-size: 0.8rem;
    font-weight: 900;
    color: ${oc.violet[9]};
    width: 55%;
`;

const FindIDTable = (user_data) => {
    //console.log(user_data.user_data)

    const listItems = user_data.user_data.map((user_data, user_data_index) => 
        <Tbody key={user_data_index}>
            <Tr>
                <TdType>{user_data.type}</TdType>
                <TdID>{user_data.id}</TdID>
            </Tr>
        </Tbody>
    );
    //console.log(user_data.map(client))
    return(
        <Positioner>
            <Table>
                {listItems}
            </Table>
        </Positioner>
)};

export default FindIDTable;