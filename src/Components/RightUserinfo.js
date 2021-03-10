import React, { Component } from "react";

export class RightUserinfo extends Component {
  constructor() {
    super();
    this.state = {
      initData: [],
    };
  }

  // componentDidMount() {
  //   // fetch("http://localhost:3000/data/RightData.json", {
  //   fetch("http://10.58.4.173/user/login.json", {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         initData: res.data,
  //       });
  //     });
  // }

  render() {
    return (
      <>
        {/* {this.state.initData.map(pr => {
          return (
            <>
              <span>{pr.imginsta}</span>
              <p>{pr.friendName}</p>
              <p>{pr.follow}</p>
            </>
          );
        })} */}

        <div className="rightNum1">
          <div className="num1Img">
            <img src="wecodemain.png" alt="wecodemain" />
          </div>
          <div className="num1Name">
            <p className="mainName">asdasd</p>
            <p className="num1Subname">회원님을 팔로우합니다</p>
          </div>
          <div className="follow">팔로우</div>
        </div>
      </>
    );
  }
}

export default RightUserinfo;
