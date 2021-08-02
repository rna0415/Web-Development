import React, { useEffect } from 'react';
import { ClientHeaderLogined, LoginButton } from '../../components/Client_Base/Header';
import { connect } from 'react-redux';

// 함수 인자로 받을때 {} 이걸로 받느냐 저거 없이 받느냐 다름
// {} 이거 없이 받으면 딕셔너리로 들어감
// {} 이거 있게 받으면 원하는대로 들어감

const ClientHeaderContainerLogined = () => { 
    
    return (
        <ClientHeaderLogined>
        </ClientHeaderLogined>
    );
}

export default ClientHeaderContainerLogined;