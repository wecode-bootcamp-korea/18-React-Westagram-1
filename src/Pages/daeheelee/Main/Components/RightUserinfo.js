import React, { Component } from "react";
import wecodemain from "../../../../Images/daeheelee/wecodemain.png";

export class RightUserinfo extends Component {
  constructor() {
    super();
    this.state = {
      initData: [],
    };
  }

  render() {
    return (
      <>
        <div className="rightNum1">
          <div className="num1Img">
            <img src={wecodemain} alt="wecodemain" />
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
