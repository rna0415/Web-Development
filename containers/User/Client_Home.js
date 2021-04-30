import React, { Component } from 'react';
import { UserContent} from '../../components/User';
import { RightAlignedLink } from '../../components/Auth';
import { ExecuteBackendAPI, ExecuteFacebookAPI } from '../../lib/api/restapi';
import InfluencerInfo from "../../components/User/InfluencerInfo";
import {GetBackendIP} from '../../settings';

class Client_Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: '',
            influencer_list: []
        }
        //console.log(this.props.location.state)
        this.checkClient = async () => {
            // 백엔드 서버 API 통신
            this.setState({success: false})
            let client_id
            //let instagram_id = "17841445908768141"
            //let temp_accessToken = "EAADtIpRDjVEBAOvZBccqmZANix81WYUm9bUX3j5gDGrlZBZAgY2zVZAAViuhZAXSz9S47JRlSZC3gtGN8s4levsxCHcFtdvCaQWn5hgQU9uU9lcp8pRe4QG7NTdp6OWSASOiXiEvC3cqZBI0P5EYSEPMQUbvx7BdbHBd8L7eWYQMuHZCwxZBRwECnx"
            let request = 'GET'
            let backend_ip_address = GetBackendIP()

            let backend_api_url = "http://" + backend_ip_address + "/api/user/client/" + this.props.location.state.email.split("@")[0] + this.props.location.state.email.split("@")[1].split(".")[0]
            let backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
            //console.log(backend_api_response.data.name)
            this.setState({client_name: backend_api_response.data.name});

            request = 'GET'
            backend_api_url = "http://" + backend_ip_address + "/api/user/influencer/"
            //console.log(client_id)
            backend_api_response = await ExecuteBackendAPI(backend_api_url, client_id, request);
            //console.log('GET')
            //console.log(backend_api_response)
            this.setState({influencer_list: backend_api_response.data});
            

            //////////////////////////////////////////////////////////////////////////
            //let temp_influencer_list = []
            //for (let i = 0; i < backend_api_response.data.length; i++) {
            //    console.log(backend_api_response.data[i].instagram_id)
            //    let influencer_instagram_id = backend_api_response.data[i].instagram_id
            //    let facebook_api_url = "https://graph.facebook.com/v9.0/" + instagram_id + "?fields=business_discovery.username(3woosil){username,website,name,ig_id,id,profile_picture_url,biography,follows_count,followers_count,media_count,media}&access_token=" + temp_accessToken
            //    let facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
            //    console.log(facebook_api_response.data.business_discovery.profile_picture_url)
            //    temp_influencer_list.push(facebook_api_response)
            //}

        }
    }
    
    componentDidMount() {
        this.checkClient();
    }
    
    render() {
        //console.log(this.props.location.state)
        let client_info = this.props.location.state
        console.log(this.state.influencer_list);
        let title = "반갑습니다 " + this.state.client_name + "님"
        return (
                <UserContent title={title}>
                    <ul className="list__itemview">
                        {this.state.influencer_list &&
                        this.state.influencer_list.map((influencer_info, insertIndex) => {
                            return (
                            <InfluencerInfo
                                key={insertIndex}
                                profile_picture_url={influencer_info.profile_picture_url}
                                name={influencer_info.name}
                                instagram_id={influencer_info.instagram_id}
                                media_count={influencer_info.media_count}
                                followers_count={influencer_info.followers_count}
                                follows_count={influencer_info.follows_count}
                                category={influencer_info.category}
                                grade={influencer_info.grade}
                                advertising_costs={influencer_info.advertising_costs}
                            />
                            );
                        })}
                    </ul>
                    <RightAlignedLink to="/auth/login">로그아웃</RightAlignedLink>
                </UserContent>

        );
    }
}

export default Client_Home;