import React, { Component } from 'react';
import  ClientHeader,{ClientLoginButton} from '../../components/Client_Base/Header';

import { connect } from 'react-redux';

class ClientHeaderContainer extends Component {
    render() {
        const { visible } = this.props;
        if(!visible) return null;

        return (
            <ClientHeader>
            </ClientHeader>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible'])
    }),
    (dispatch) => ({

    })
)(ClientHeaderContainer);