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
  //state를 가지기 위해 지정을 해주었다.
  //데이터가 바뀔 때마다 화면에 나타내기 위해서 지정해준다.
  //현재 값은 state에 저장

  goToMain = () => {
    const { id, password } = this.state;
    //객체 비구조화 할당. 동시에 두개를 할당해줬다.
    if (id.includes("@") && password.length >= 5) {
      //메인페이지로 넘어가기 위한 조건을 부여.
      this.props.history.push('/main');
      //routing 으로 특정 페이지에서 다른 페이지로 이동할 때 props를 통해 넘겨준 것.
      //history 객체의 속성들 중에 하나인 push를 통하여 페이지 이동.
    }
};
//
changeHandlerBgColor = () => {
  return this.state.btnChangeId && this.state.btnChangePw ? "trueColor" : "falseColor"
  //위에서 지정해준 state 값을 가져온 것이다. 
  //id 와 pw 가 참이니? 거짓이니? 를 삼항연산자를 통하여 지정. 참일 때는 트루컬러로, 거짓일 때는 거짓컬러로.
  //두 개 다 참이어야 색깔이 바뀌도록 조건을 부여.
  //비구조화 할당 가능. const { btnChangeId } = this.state 이런 식으로.
}

handleIdValue = (e) => {
  this.setState({ id : e.target.value })
  //event.target은 부모로부터 위임되어 발생하는 자식의 위치, 즉 내가 클릭한 자식의 요소를 반환.
  //setState를 호출하면 state 값이 갱신된다.
  //id input 에서 event가 발생하면 ,
  //this.state.id의 value가 e.target.value로, 즉 입력한 값으로 setState 되는 것.
  this.setState({ btnChangeId : e.target.value.includes("@")});
  //this.state.btnChangeId 의 value가 e.target.value로, "@"를 포함한 입력한 값으로 setState 되는 것.
}

handlePwValue = (e) => {
  this.setState({ password : e.target.value })
  this.setState({ btnChangePw : e.target.value.length >= 5 ? true : false })
  //password의 조건을 삼항연사자를 통하여 지정해줌. 
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
                {/*위에서 지정해준 함수를 입력값으로 받고, 변경되었을 때 이벤트가 발생되도록.*/}
          <input id = "password" 
                type="password" 
                placeholder="비밀번호"
                onChange={this.handlePwValue} />
                {/*위에서 지정해준 함수를 입력값으로 받고, 변경되었을 때 이벤트가 발생되도록.*/}
        </div>
        <div className="btn_container">
          <button className={`${this.changeHandlerBgColor()} btn`}  
          //클래스 네임 두 개를 같이 지정해줬다. 위에서 만든 함수를 호출함.
          onClick={this.goToMain}>로그인</button>
          {/*onClick 이벤트를 사용, 마우스로 클릭할 시 이벤트가 발생한다.*/}
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