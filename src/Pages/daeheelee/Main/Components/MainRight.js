import React, { Component } from "react";
import RightUserinfo from "./RightUserinfo";
import wecodeUser from "../../../../Images/daeheelee/wecode.png";

export class MainRight extends Component {
  constructor() {
    super();
    this.state = {
      mainFooter: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/Mainfooterlist.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          mainFooter: res,
        });
      });
  }

  render() {
    return (
      <>
        <aside className="mainRight">
          <div className="rightProfile">
            <div className="rightImg">
              <img src={wecodeUser} alt="wecode" />
            </div>
            <div className="nameProfile">
              <p className="mainName">Wecode_bootcamp</p>
              <p className="subname">위코드</p>
            </div>
            <div className="change">
              <p>전환</p>
            </div>
          </div>
          <div className="rightrecommend">
            <div className="commendtext">
              <span className="commendtext-left">회원님을 위한 추천</span>
              <span className="commendtext-right">모두 보기</span>
            </div>
            <RightUserinfo />
            <RightUserinfo />
            <RightUserinfo />
            <RightUserinfo />
          </div>
          <footer className="list">
            <ul className="footer1">
              {this.state.mainFooter.map((item, index) => {
                if (index < 6) return <li>{item.Contents}</li>;
              })}
            </ul>
            <ul className="footer2">
              {this.state.mainFooter.map((item, index) => {
                if (index > 5) return <li>{item.Contents}</li>;
              })}
            </ul>
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </footer>
        </aside>
      </>
    );
  }
}

export default MainRight;
