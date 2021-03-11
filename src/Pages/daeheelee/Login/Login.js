import React from "react";
import { withRouter } from "react-router-dom";
import instaLoginimg from "../../../Images/daeheelee/insta.png";
import appDown from "../../../Images/daeheelee/down.png";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idname: "",
      pwname: "",
      footerLineOne: [],
      footerLineTwo: [],
      email: "",
      password: "",
    };
  }

  signIn = () => {
    fetch("http://10.58.4.128:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idname,
        password: this.state.pwname, //id,password는 백엔드랑 약속 한 부분
        username: "ldh",
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.props.history.push("/main-daehee");
      });
  };

  btnEvent = () => {
    const { email, password } = this.state;
    if (!email.includes("@") && password.length < 5) {
      alert("다시 입력해주세요");
      return;
    }
    if (!email.includes("@")) alert("아이디는 이메일 형태로 작성해주세요");
    if (password.length < 5) alert("비밀번호는 5자리 이상 작성해주세요");
    if (email.includes("@") && password.length >= 5) this.signIn();
  };

  idhandleIdInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.btnEvent();
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/Loginfooterlist.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          footerLineOne: res,
        });
      });

    fetch("http://localhost:3000/data/Loginfooterlist2.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          footerLineTwo: res,
        });
      });
  }

  render() {
    const { email, password } = this.state;
    const compareValue = email !== "" && password !== "";
    return (
      <div className="loginBody">
        <div className="centerBody">
          <div className="main">
            <div className="left">
              <img src={instaLoginimg} alt="insta" />
            </div>
            <div className="right">
              <div className="rightBox1">
                <span className="logo">Westagram</span>
                <form className="inputs">
                  <input
                    className="id"
                    name="email"
                    onChange={this.idhandleIdInput}
                    onKeyPress={this.handleKeyPress}
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    value={email}
                  />
                  <input
                    className="pw"
                    name="password"
                    onChange={this.idhandleIdInput}
                    onKeyPress={this.handleKeyPress}
                    type="password"
                    placeholder="비밀번호"
                    value={password}
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
                <img src={appDown} alt="down" />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <ul className="line1">
            {this.state.footerLineOne.map(footerInfo => {
              return <li>{footerInfo.Contents}</li>;
            })}
          </ul>
          <ul className="line2">
            {this.state.footerLineTwo.map(footerInfo => {
              return <li>{footerInfo.Contents}</li>;
            })}
          </ul>
          <ul className="line3">
            <li>한국어 ⋁</li>
            <li>© 2021 Instagram from Facebook</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
