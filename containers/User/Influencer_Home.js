import React, { Component } from 'react';
import { UserContent} from '../../components/User';
import { RightAlignedLink } from '../../components/Auth';

class Influencer_Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.location.state)
        let influencer_info = this.props.location.state
        console.log(influencer_info["name"])
        console.log(this.props.match.params)
        return (
                <UserContent title={influencer_info["name"]}>
                    <div>
                        <h3>Instagram ID: {influencer_info["instagram_user_id"]}</h3>
                        <h3>Biography: {influencer_info["biography"]} </h3>
                        <h3>Category: {influencer_info["category"]} </h3>
                        <h3>Followers Count: {influencer_info["followers_count"]} </h3>
                        <h3>Follows Count: {influencer_info["follows_count"]} </h3>
                        <h3>Media Count: {influencer_info["media_count"]} </h3>
                        <RightAlignedLink to="/auth/login">로그아웃</RightAlignedLink>
                    </div>
                </UserContent>

        );
    }
}

export default Influencer_Home;