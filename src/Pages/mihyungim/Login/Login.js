import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {

   state = {
      inputId: "",
      inputPw: "",
         };

  handleValueInput =(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render() {
    const isValid = this.state.inputId.includes('@') 
                    && this.state.inputPw.length>=5
    return (
      <div className="LoginComponent">
        <div className="Login">
          <div className="container">
            <div className="logoLogin">westagram</div>
            <form
              className="login"
            >
              <input
              name="inputId"
                type="text"
                className="input inputName"                
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleValueInput}
              />
              <input
                name="inputPw"
                type="password"
                className="input inputPassword"
                placeholder="비밀번호"
                onChange={this.handleValueInput}
              />
              <Link to="/main"><button
                type="button"
               style={{ background:isValid ? "pink" : "gray" }}
                disabled={!isValid}
                className="btn logInBtn"
              >
                로그인
              </button></Link>
            </form>
            <div className="line">
              <div className="lineGray"></div>
              <div className="or">또는</div>
              <div className="lineGray"></div>
            </div>
            <div className="facebookLogin">
              <span></span>
              <span className="text">Facebook으로 로그인</span>
            </div>
            <div className="notice">비밀번호를 잊으셨나요?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
