import React, { Component } from "react";
import "../Login/Login.scss";
import "../../../Styles/reset.scss";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
    };
  }

  gotoSign = async () => {
    const { id, password } = this.state;
    const signCheck = await fetch("http://10.58.1.171:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => res.status);

    if (parseInt(signCheck) === 200) {
      alert("회원가입에 성공하였습니다.");
    } else {
      alert("아이디의 이메일 형식 또는 비밀번호가 8자리 이상인지 확인해주세요");
    }

    if (id.includes("@") && password.length >= 8) {
      this.props.history.push("/");
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
                placeholder="사용하실 아이디를 입력하세요"
                onChange={this.handleIdValue}
              />
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={this.handlePwValue}
              />
            </div>
            <div className="btn_container">
              <button
                className={`${this.changeHandlerBgColor()} btn`}
                onClick={this.gotoSign}
              >
                가입하기
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Signup;
