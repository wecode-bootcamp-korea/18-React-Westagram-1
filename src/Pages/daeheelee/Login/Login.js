import React from "react";
import "../../../Styles/Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idname: "",
      pwname: "",
    };
  }

  signIn = () => {
    fetch("http://10.58.4.128:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idname,
        password: this.state.pwname, //id,password는 백엔드랑 약속 한 부분
        username: "asdasdasd",
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => {
        this.props.history.push("/main-daehee");
      });
  };

  btnEvent = () => {
    const { idname, pwname } = this.state;
    if (!idname.includes("@") && pwname.length < 5) {
      alert("다시 입력해주세요");
      return;
    }
    if (!idname.includes("@")) alert("아이디는 이메일 형태로 작성해주세요");
    if (pwname.length < 5) alert("비밀번호는 5자리 이상 작성해주세요");
    if (idname.includes("@") && pwname.length >= 5) this.signIn();
    // this.props.history.push("/main-daehee");
  };

  idhandleIdInput = e => {
    this.setState({ idname: e.target.value });
  };

  pwhandleIdInput = e => {
    this.setState({ pwname: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.btnEvent();
    }
  };

  render() {
    const { idname, pwname } = this.state;
    const compareValue = idname !== "" && pwname !== "";
    return (
      <>
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
                      onChange={this.idhandleIdInput}
                      onKeyPress={this.handleKeyPress}
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      value={idname}
                    />
                    <input
                      className="pw"
                      onChange={this.pwhandleIdInput}
                      onKeyPress={this.handleKeyPress}
                      type="password"
                      placeholder="비밀번호"
                      value={pwname}
                    />
                  </form>
                  <button
                    className={compareValue ? "bluecolor" : ""}
                    onClick={this.btnEvent}
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
