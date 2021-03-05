import React from 'react';
import { withRouter } from 'react-router-dom'
import './Login.scss'
import '../../../Styles/reset.scss'

class Login extends React.Component {

  goToMain = () => {
    this.props.history.push('/main');
}

  render() {
    return (
  <div id="wrap_main">
    <main className="container">
      <h1 className="westagram">Westagram</h1>
      <div className="mainlayout">
        <div className="inputs">
          <input id ="userid" type="text" placeholder="아이디"></input>
          <input id = "password" type="password" placeholder="비밀번호"></input>
        </div>
        <div className="btn_container">
          <button className="btn" onClick={this.goToMain}>로그인</button>
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