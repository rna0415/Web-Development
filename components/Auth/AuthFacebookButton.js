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

class AuthFacebookButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false,
          instagram_user_id:'',
          name: '',
          biography: '',
          category: '',
          followers_count: '',
          follows_count: '',
          media_count: '',
          profile_picture_url: ''
      }
        this.responseFacebook = response => {
  

          let temp_accessToken = response.accessToken
  
          const getInstagramInfo = async () => {
  
            let facebook_api_url
            let facebook_api_response

            facebook_api_url = "https://graph.facebook.com/v9.0/me/accounts?access_token=" + temp_accessToken;
            facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);

            // 페이스북 Page ID & Category
            let instagram_page_id = facebook_api_response.data.data[0].id
            let instagram_category = facebook_api_response.data.data[0].category

            // 인스타그램 고유 ID (인스타그램이 관리하고 있는 ID)
            facebook_api_url =  "https://graph.facebook.com/v9.0/" + instagram_page_id  + "?fields=instagram_business_account&access_token=" + temp_accessToken;
            facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
            let instagram_id = facebook_api_response.data.instagram_business_account.id
  
            // 인스타그램 계정 (사용자가 가입시 입력한 계정)
            facebook_api_url =  "https://graph.facebook.com/v9.0/" + instagram_id  + "?fields=username&access_token=" + temp_accessToken;
            facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
            let instagram_user_id = facebook_api_response.data.username
  
            // 인스타그램 계정 정보
            console.log(instagram_id)
            facebook_api_url = "https://graph.facebook.com/v9.0/" + instagram_id + "?fields=business_discovery.username(" + instagram_user_id + "){username,website,name,ig_id,id,profile_picture_url,biography,follows_count,followers_count,media_count,media}&access_token=" + temp_accessToken
            facebook_api_response = await ExecuteFacebookAPI(facebook_api_url);
            console.log(facebook_api_response)
            let name = facebook_api_response.data.business_discovery.name
            let biography = facebook_api_response.data.business_discovery.biography
            let followers_count = facebook_api_response.data.business_discovery.followers_count
            let follows_count = facebook_api_response.data.business_discovery.follows_count
            let media_count = facebook_api_response.data.business_discovery.media_count
            let profile_picture_url = facebook_api_response.data.business_discovery.profile_picture_url

            // 백엔드 서버 API 통신
            let params = {}
            let request = 'GET'
            let backend_ip_address = GetBackendIP()
            let backend_api_url = "http://" + backend_ip_address + "/api/user/influencer/" + instagram_user_id + "/"
            let backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
            console.log(backend_api_response)
            
            params = {
              'instagram_id': instagram_user_id,
              'name': name,
              'biography': biography,
              'category': instagram_category,
              'followers_count': followers_count,
              'follows_count': follows_count,
              'media_count': media_count,
              'profile_picture_url': profile_picture_url
            }

            if (backend_api_response){
              request = 'PUT'
              backend_api_url = "http://" + backend_ip_address + "/api/user/influencer/" + instagram_user_id + "/"
              backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
              console.log('PUT')
              console.log(backend_api_response)
            } else {
              request = 'POST'
              backend_api_url = "http://" + backend_ip_address + "/api/user/influencer/"
              backend_api_response = await ExecuteBackendAPI(backend_api_url, params, request);
              console.log('POST')
              console.log(backend_api_response)
            }
            this.setState({
              isLoggedIn: true,
              instagram_user_id: instagram_user_id,
              name: name,
              biography: biography,
              category: instagram_category,
              followers_count: followers_count,
              follows_count: follows_count,
              media_count: media_count,
              profile_picture_url: profile_picture_url
            });
          };


          
          getInstagramInfo();
      };
  
      this.componentClicked = () => console.log('clicked');
    }

    componentDidMount() {
      //console.log("componentDidMount")
    }
    componentDidUpdate() {
      //console.log("componentDidUpdate ")
      if (this.state.isLoggedIn === true){
        this.props.history.push({pathname: "/user/influencer/home", state: this.state})
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
            />)
        return (
            <div>
                <AlignerCenter>
                    <div>
                        {fbContent}
                    </div>
                </AlignerCenter>
            </div>
        )
    }
}
export default withRouter(AuthFacebookButton);