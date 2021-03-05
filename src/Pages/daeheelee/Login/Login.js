import React from "react";
import "./Login.scss";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import instaleftimg from '.../Images/daeheelee/insta.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      //변경이 가능한 정보
      idname: "",
      pwname: "",
      btncolor: "skycolor",
    };
  }

  btnEvent = () => {
    this.props.history.push("/main-daehee");
  };

  idinput = e => {
    this.setState({ idname: e.target.value });
    console.log(this.state.idname);
    console.log(e.target);
    {
      this.state.idname !== "" && this.state.pwname !== ""
        ? this.setState({ btncolor: "bluecolor" })
        : this.setState({ btncolor: "skycolor" });
    }
  };

  pwinput = e => {
    this.setState({ pwname: e.target.value });
    console.log(this.state.pwname);
    {
      this.state.idname !== "" && this.state.pwname !== ""
        ? this.setState({ btncolor: "bluecolor" })
        : this.setState({ btncolor: "skycolor" });
    }
  };

  render() {
    return (
      <>
        {/* {console.log(e.target)} */}
        <div className="loginBody">
          <div className="centerBody">
            <div className="main">
              <div className="left">
                <img src="insta.png" alt="insta" />
              </div>
              <div className="right">
                <div className="rightBox1">
                  <span className="logo" style={{ fontSize: 48 }}>
                    Westagram
                  </span>
                  <form className="inputs">
                    <input
                      className="id"
                      onChange={this.idinput}
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      value={this.state.idname}
                    />
                    <input
                      className="pw"
                      onChange={this.pwinput}
                      type="password"
                      placeholder="비밀번호"
                      value={this.state.pwname}
                    />
                  </form>
                  {/* <button className='btn'>로그인</button> */}
                  <button
                    className="btn"
                    onClick={this.btnEvent}
                    id={this.state.btncolor}
                  >
                    로그인
                  </button>
                  <div className="orbox">
                    <div className="or1" />
                    <p className="loginText1">또는</p>
                    <div className="or2" />
                  </div>
                  <div className="facebook">
                    <i className="fab fa-facebook-square"></i>
                    <p className="loginText2">Facebook으로 로그인</p>
                  </div>
                  <p className="loginText3">비밀번호를 잊으셨나요?</p>
                </div>
                <div className="rightBox2">
                  <p>
                    계정이 없으신가요? <span className="join">가입하기</span>
                  </p>
                </div>
                <div className="rightBox3">
                  <p className="rightbox3_p">앱을 다운로드하세요</p>
                  <img src="down.png" alt="down" />
                </div>
              </div>
            </div>
          </div>
          <footer>
            <ul className="line1">
              <li>소개</li>
              <li>블로그</li>
              <li>채용정보</li>
              <li>도움말</li>
              <li>API</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>인기 계정</li>
              <li>해시태그</li>
              <li>위치</li>
            </ul>
            <ul className="line2">
              <li>뷰티</li>
              <li>댄스 및 공연</li>
              <li>피트니스</li>
              <li>식음료</li>
              <li>집 및 정원</li>
              <li>음악</li>
              <li>시각 예술</li>
            </ul>
            <ul className="line3">
              <li>한국어 ⋁</li>
              <li>© 2021 Instagram from Facebook</li>
            </ul>
          </footer>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
