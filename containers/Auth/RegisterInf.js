import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Content,
  Tab,
  IDTab,
  PasswordTab,
  AddtionalInfoTab,
} from "../../components/Auth/JoinInflu";

//딕셔너리 형태로 있음
const tabs = {
  id: <IDTab />,
  password: <PasswordTab />,
  addtional: <AddtionalInfoTab />,
};

class Find extends Component {
  // 생성자 state는 변화할 수 있는 값임
  // 반드시 super(props)호출할 것
  constructor(props) {
    super(props);
    this.state = {
      active_tab: "id",
    };

    // 설정된 아이디 값을 사용함 값을 변경하고 싶을 때는 setState를 이용한다
    this.setActiveTab = (id) => {
      if (id == "id") {
        // id를 선택하면
        //console.log("id");
        this.setState({ active_tab: "id" }); // state를 id로
      } else if (id == "password") {
        //console.log("password");
        this.setState({ active_tab: "password" });
      } else if (id == "addtional") {
        console.log("addtional");
        this.setState({ active_tab: "addtional" });
      }
    };

    // 초기에는 id창을 열겠다는 의미 ,,
    // 처음에는 null 로 설정되어 있음
    // 다른 페이지에서 왔을 때
    //-------------------------------------------------------//
    if (this.props.location.state == null) {
      this.state = {
        active_tab: "id",
      };
    } else {
      // 만약 초기 값이 널이 아니면 ?
      this.state = { active_tab: this.props.location.state.active_tab };
    }
  }

  // 경로를 잡아주는 부분
  //------------------------------------------------------//
  render() {
    return (
      <Wrapper title="SAMPLE LIFE">
        <Tab
          active_tab={this.state.active_tab}
          setActiveTab={this.setActiveTab}
        ></Tab>
        <Content>{tabs[this.state.active_tab]}</Content>
      </Wrapper>
    );
  }
}

export default withRouter(Find);
