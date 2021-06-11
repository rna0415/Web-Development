import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, MyCampaign, Campaign_Status, CampaignDetail, CompleteApplication, MyCampaignDetail, CompleteCampaignCancel, MyInformation } from '../containers/Influencer';
import HeaderContainerLogined from '../containers/Base/HeaderContainerLogined';
import styled from 'styled-components';

// 상단 고정, 그림자
const Positioner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    top: 47px;
    justify-content: center;
    left: 0px;
`;

class Influencer extends Component {
    render() {
        return (
            <Positioner>
                <Switch>
                    <Route exact path="/influencer/main/" component={Main}/>
                    <Route exact path="/influencer/main/my_campaign" component={MyCampaign}/>
                    <Route exact path="/influencer/main/my_campaign/participation_campaign/*" component={MyCampaignDetail}/>
                    <Route exact path="/influencer/main/my_campaign/campagin_cancel_completed" component={CompleteCampaignCancel}/>
                    <Route exact path="/influencer/main/campaign_status" component={Campaign_Status}/>
                    <Route exact path="/influencer/main/campaign_status/application_completed" component={CompleteApplication}/>
                    <Route exact path="/influencer/main/campaign_status/*" component={CampaignDetail}/>
                    <Route exact path="/influencer/main/my_information" component={MyInformation}/>

                </Switch>
                <HeaderContainerLogined/>
            </Positioner>
        );
    }

}
export default Influencer;