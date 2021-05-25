import React, { Component } from 'react';
import { UserContent} from '../../components/User';
import { RightAlignedLink } from '../../components/Auth';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.location.state)
        // let influencer_info = this.props.location.state
        // console.log(influencer_info["name"])
        // console.log(this.props.match.params)
        return (
                <UserContent title="김진용">
                    <div>
                        <h3>Instagram ID: timkim09230930</h3>
                        <RightAlignedLink to="/auth/login">로그아웃</RightAlignedLink>
                    </div>
                </UserContent>

        );
    }
}

export default Main;