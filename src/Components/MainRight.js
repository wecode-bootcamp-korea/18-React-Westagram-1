import React, { Component } from "react";
import RightUserinfo from "./RightUserinfo";

export class MainRight extends Component {
  render() {
    return (
      <>
        <aside className="mainRight">
          <div className="rightProfile">
            <div className="rightImg">
              <img src="wecode.png" alt="wecode" />
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
              <li>소개ㆍ</li>
              <li>도움말ㆍ</li>
              <li>홍보 센터ㆍ</li>
              <li>APIㆍ</li>
              <li>채용 정보ㆍ</li>
              <li>개인정보처리방침ㆍ</li>
            </ul>
            <ul className="footer2">
              <li>약관ㆍ</li>
              <li>위치ㆍ</li>
              <li>인기 계정ㆍ</li>
              <li>해시태그ㆍ</li>
              <li>언어</li>
            </ul>
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </footer>
        </aside>
      </>
    );
  }
}

export default MainRight;
