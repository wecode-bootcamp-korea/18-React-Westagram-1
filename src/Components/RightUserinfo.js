import React, { Component } from "react";

export class RightUserinfo extends Component {
  render() {
    return (
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
    );
  }
}

export default RightUserinfo;
