import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import {} from '../../components/Auth';
import { AuthWrapper3 } from '../../components/Auth';

class ClientService extends Component {
    render() {
        return (
            <AuthWrapper3 title="클라이언트 서비스">
                <div>
                    Home
                </div>
            </AuthWrapper3>
        );
    }
}

export default withRouter(ClientService);