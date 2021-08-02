import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';
import { ExecuteBackendAPI, ExecuteFacebookAPI } from '../../lib/api/restapi';
import { createHashHistory } from 'history'
import { withRouter } from "react-router-dom"
import {GetBackendIP} from '../../settings';

const AlignerCenter = styled.div`
    margin-top: 1rem;
    text-align: center;
    
`;

const LoginButton = styled.button`
    width: 104%;
    margin-top: 1rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
    border-color: white;

    background: #4C69BA;
    color: white;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;


`;

class AuthFacebookButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            temp_accessToken:'',
            name: '',
            email:'',
            instagram_id:'',
            instagram_username:'',
            instagram_name:'',
            profile_picture_url: ''
        }
        this.responseFacebook = response => {
  
            const getInstagramInfo = async () => {
                let facebook_api_url
                let facebook_api_response
                let facebook_page_id = ''
                let temp_accessToken = response.accessToken
                let name = ''
                let email = ''
                let instagram_id = ''
                let instagram_username = ''
                let instagram_name = ''
                let followers_count = 0
                let follows_count = 0
                let profile_picture_url = ''
                // console.log(temp_accessToken)

                facebook_api_url = "https://graph.facebook.com/v10.0/me?fields=id,name,email&access_token=" + temp_accessToken;
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
                // console.log(facebook_api_response)

                name = facebook_api_response.data.name
                email = facebook_api_response.data.email

                facebook_api_url = "https://graph.facebook.com/v10.0/me/accounts?access_token=" + temp_accessToken;
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);

                // 페이스북 Page ID & Category
                facebook_page_id = facebook_api_response.data.data[0].id
                
                // 인스타그램 고유 ID (인스타그램이 관리하고 있는 ID)
                facebook_api_url =  "https://graph.facebook.com/v10.0/" + facebook_page_id  + "?fields=instagram_business_account&access_token=" + temp_accessToken;
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
                instagram_id = facebook_api_response.data.instagram_business_account.id
    
                // 인스타그램 계정 (사용자가 가입시 입력한 계정)
                facebook_api_url =  "https://graph.facebook.com/v10.0/" + instagram_id  + "?fields=username&access_token=" + temp_accessToken;
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
                instagram_username = facebook_api_response.data.username
    
                // 인스타그램 계정 정보
                // console.log(instagram_id)
                //restapi
                facebook_api_url = "https://graph.facebook.com/v10.0/" + instagram_id + "?fields=business_discovery.username(" + instagram_username + "){username,website,name,ig_id,id,profile_picture_url,biography,follows_count,followers_count,media_count,media}&access_token=" + temp_accessToken 
                
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
                // console.log(facebook_api_response)
                instagram_name = facebook_api_response.data.business_discovery.name
                followers_count = facebook_api_response.data.business_discovery.followers_count
                follows_count = facebook_api_response.data.business_discovery.follows_count
                profile_picture_url = facebook_api_response.data.business_discovery.profile_picture_url

                // 백엔드 서버 API 통신
                let params = {
                    "influencer_email": email
                }

                console.log(email)
                let request = 'GET'
                let backend_ip_address = GetBackendIP()
                let backend_api_url = "https://" + backend_ip_address + "/api/influencer/get_user_info/"
                let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
                console.log(backend_api_response)

                facebook_api_url = "https://graph.facebook.com/v11.0/oauth/access_token"
                params = {
                    "grant_type": "fb_exchange_token",
                    "client_id": "260732772126033",
                    "client_secret": "08fb98241b5be4c091948e6bd65d3bd7",
                    "fb_exchange_token": temp_accessToken
                }
                facebook_api_response = await ExecuteFacebookAPI(facebook_api_url, params);
                console.log(temp_accessToken)
                console.log(facebook_api_response.data.access_token)
                if (backend_api_response.data.length === 0){
                    let data = {
                        "influencer_email": email,
                        "name": name,
                        "instagram_user": {
                            "instagram_id": instagram_id,
                            "instagram_username": instagram_username,
                            "followers_count": followers_count,
                            "follows_count": follows_count,
                            "profile_picture_url": profile_picture_url,
                            "access_token": facebook_api_response.data.access_token
                        }
                    }
                    // 페이스북 API 추가
                    request = 'POST'
                    backend_api_url = "https://" + backend_ip_address + "/api/influencer/"
                    backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request);
                }else {
                    let influencer_id = backend_api_response.data[0].influencer_id
                    let data = {
                        "instagram_id": instagram_id,
                        "instagram_username": instagram_username,
                        "followers_count": followers_count,
                        "follows_count": follows_count,
                        "profile_picture_url": profile_picture_url,
                        "access_token": facebook_api_response.data.access_token
                    }
                    // 수정 필요
                    console.log(data)
                    request = 'PATCH'
                    backend_api_url = "https://" + backend_ip_address + "/api/influencer/instagram_user/" + influencer_id + "/create_instagram_info/"
                    backend_api_response = await ExecuteBackendAPI(backend_api_url, data, request);
                    console.log(backend_api_response)
                }

                this.setState({
                isLoggedIn: true,
                temp_accessToken: temp_accessToken,
                name: name,
                email: email,
                instagram_id: instagram_id,
                instagram_username: instagram_username,
                profile_picture_url: profile_picture_url
                });
            };
            getInstagramInfo();
        };
  
      // this.componentClicked = () => console.log('clicked');
    }

    componentDidMount() {
      //console.log("componentDidMount")
    }
    componentDidUpdate() {
      //console.log("componentDidUpdate ")
      if (this.state.isLoggedIn === true){
        this.props.history.push({pathname: "/influencer/main/campaign_status", state: this.state})
      }
    }
    render() {
        let fbContent;
        fbContent = (<FacebookLogin
            appId="260732772126033"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            icon="fa-facebook"   
            style={{LoginButton}}    
            />)
        return (<LoginButton>
                  {fbContent}        
                </LoginButton>        
        )
    }
}
export default withRouter(AuthFacebookButton);