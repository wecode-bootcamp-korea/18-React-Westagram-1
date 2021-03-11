import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      btnChangeId: "",
      btnChangePw: "",
    };
  }

  goToMain = async () => {
    const { id, password } = this.state;

    if (id.includes("@") && password.length >= 8) {
      return alert("아이디와 비밀번호를 제대로 입력해주세요");
    }

    const loginCheck = await fetch("http://10.58.1.171:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.status);

    if (parseInt(loginCheck) === 200) {
      alert("🎉로그인 성공🎉");
      this.props.history.push("/main");
    } else {
      alert("아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  handleIdValue = (e) => {
    this.setState({
      id: e.target.value,
      btnChangeId: e.target.value.includes("@"),
    });
  };

  handlePwValue = (e) => {
    this.setState({
      password: e.target.value,
      btnChangePw: e.target.value.length >= 8,
    });
  };

  changeHandlerBgColor = () => {
    const { btnChangeId, btnChangePw } = this.state;
    return btnChangeId && btnChangePw ? "trueColor" : "falseColor";
  };

  render() {
    return (
      <div id="wrap_main">
        <main className="container">
          <h1 className="westagram">Westagram</h1>
          <div className="mainlayout">
            <div className="inputs">
              <input
                id="id"
                type="text"
                placeholder="아이디"
                onChange={this.handleIdValue}
              />
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwValue}
              />
            </div>
            <div className="btn_container">
              <button
                className={`${this.changeHandlerBgColor()} btn`}
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
            <div className="divider">
              <div className="line_l"></div>
              <div className="centerchar">또는</div>
              <div className="line_r"></div>
            </div>
            <div className="facebook">
              <button className="btn_fb">
                <i className="fab fa-facebook-square" />
                <span className="fb_char">Facebook으로 로그인</span>
              </button>
            </div>
            <div className="password_container">
              <button className="btn_password">비밀번호를 잊으셨나요?</button>
            </div>
            <footer className="joinform">
              <p className="join">
                계정이 없으신가요?
                <button className="btn_join">
                  <Link to="/Signup">가입하기</Link>
                </button>
              </p>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
