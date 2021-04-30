import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import {} from '../../components/Auth';
import { AuthWrapper3 } from '../../components/Auth';

class InfService extends Component {
    render() {
        return (
            <AuthWrapper3 title="인플루언서 서비스">
                <div>
                    Home
                </div>
            </AuthWrapper3>
        );
    }
}

export default withRouter(InfService);