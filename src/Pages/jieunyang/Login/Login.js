import React from 'react';
import { withRouter } from 'react-router-dom'
import './Login.scss'
import '../../../Styles/reset.scss'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      btnChangeId: "",
      btnChangePw: ""
    };
  }

  goToMain = () => {
    const { id, password } = this.state;
    if (id.includes("@") && password.length >= 5) {
      this.props.history.push('/main');
    }
};
//
changeHandlerBgColor = () => {
  return this.state.btnChangeId && this.state.btnChangePw ? "trueColor" : "falseColor"
}

handleIdValue = (e) => {
  this.setState({ id : e.target.value })
  this.setState({ btnChangeId : e.target.value.includes("@")});
}

handlePwValue = (e) => {
  this.setState({ password : e.target.value })
  this.setState({ btnChangePw : e.target.value.length >= 5 ? true : false })
}

  render() {
    return (
  <div id="wrap_main">
    <main className="container">
      <h1 className="westagram">Westagram</h1>
      <div className="mainlayout">
        <div className="inputs">
          <input id ="id" 
                type="text" 
                placeholder="아이디"
                onChange={this.handleIdValue} />
          <input id = "password" 
                type="password" 
                placeholder="비밀번호"
                onChange={this.handlePwValue} />
        </div>
        <div className="btn_container">
          <button className={`${this.changeHandlerBgColor()} btn`}  
          onClick={this.goToMain}>로그인</button>
        </div>
        <div className="divider">
          <div className="line_l"></div>
          <div className="centerchar">또는</div>
          <div className="line_r"></div>
        </div>
        <div className="facebook">
          <button className="btn_fb">
            <i class="fab fa-facebook-square"></i>
            <span className="fb_char">Facebook으로 로그인</span>
          </button>
        </div>
        <div className="password_container">
          <button className="btn_password">비밀번호를 잊으셨나요?</button>
        </div>
        <footer className="joinform">
          <p className="join">계정이 없으신가요? <button className="btn_join">가입하기</button></p>
        </footer>
      </div>
    </main>
    <script type="text/javascript" src="login.js"></script>
    </div>
    )
  }
}

export default withRouter(Login);