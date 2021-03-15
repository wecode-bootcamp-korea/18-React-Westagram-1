import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Login.scss';
import logo from '../../../Images/junwookang/logo.png';
import apple from '../../../Images/junwookang/apple-download.png';
import google from '../../../Images/junwookang/google-download.png';

class Login extends Component {
  constructor() {
    super();
    this.state={      
      id: '',
      pw: '',      
    };
  }

  // handleIdValue = (e) => {
  //   this.setState({id: e.target.value});    
  // }

  // handlePwValue = (e) => {
  //   this.setState({pw: e.target.value});    
  // }
  
  handleInputValue = (e) => {
    const {name,value} = e.target
    this.setState({
      [name] : value
    },()=>{
      if(this.state.id.includes("@") && this.state.pw.length >= 6) {
        this.setState({btnColor: true});
      } else {
        this.setState({btnColor: false});
      }  
    })
  }

  // buttonChange = (e) => {
  //   if(this.state.id.includes("@") && this.state.pw.length >= 6) {
  //     console.log('1')
  //     this.setState({btnColor: true});
  //   } else {
  //     console.log('2')
  //     this.setState({btnColor: false});
  //   }       
  // };
  
  goToMain = () => {
      if(this.state.id.includes("@") && this.state.pw.length >= 6)
      this.props.history.push('/main-junwoo');
      //fetch("http://10.58.6.21:8000/user/signup", {method: "POST", body: JSON.stringify({email: "junwoo@naver.com", password: "12345678"})}).then(res => res.json()).then(res => console.log(res));
      // fetch("http://10.58.6.21:8000/user/signin", {
      //   method: "POST", 
      //   body: JSON.stringify({
      //     email: this.state.id, password: this.state.pw
      //   })})
      // .then(res => res.json())
      // .then(res => {
      //   //console.log(res);
      //   if (res.message === "SUCCESS") {
      //     localStorage.setItem('junwoo', res.access_token);
      //     // 메인 페이지로 이동  
      //     this.props.history.push('/main-junwoo');
      //   }
      // });
  };

  

  render() {
    return (
      <div class="wrap">  
  
        <header>
          <div class="main">
            <img src={logo} alt={"logo"}/>
            <input id="log-id" name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={this.handleInputValue} />
            <input id="log-pass" name="pw" type="password" placeholder="비밀번호" onChange={this.handleInputValue} />
            <button className={this.state.btnColor ? "changeColor" : "originColor"} onClick={this.goToMain}>로그인</button>
            <div class="or">
              <div class="line1"><hr /></div>
              <div class="box1"><p>또는</p></div>
              <div class="line2"><hr /></div>
            </div>
            <div class="facebook">
              <i class="fab fa-facebook-square"></i>
              <div class="facebox"><p><a href="">Facebook으로 로그인</a></p></div>
            </div>
            <div class="lost"><p><a href="">비밀번호를 잊으셨나요?</a></p></div>
          </div>
          
          <div class="join">
            <p>계정이 없으신가요? <a href="">가입하기</a></p>
          </div>

          <div class="download">
            <div class="down"><p>앱을 다운로드하세요.</p></div>
            <div class="downbox">
              <a href=""><img class="apple" src={apple} alt={"apple"} /></a>
              <a href=""><img class="google" src={google} alt={"google"} /></a>
            </div>
          </div>
        </header>

        <footer>
          <div class="imformation">
            <a href="">소개</a>
            <a href="">블로그</a>
            <a href="">채용 정보</a>
            <a href="">도움말</a>
            <a href="">API</a>
            <a href="">개인정보처리방침</a>
            <a href="">약관</a>
            <a href="">인기 계정</a>
            <a href="">해시태그</a>
            <a href="">위치</a>
            <br />
            <a href="">뷰티</a>
            <a href="">댄스 및 공연</a>
            <a href="">피트니스</a>
            <a href="">식음료</a>
            <a href="">집 및 정원</a>
            <a href="">음악</a>
            <a href="">시각 예술</a>
          </div>
          <div class="addimfor">
            <select>
              <option>한국어</option>
              <option value="china">중국어</option>
              <option value="usa">영어</option>
              <option value="japan">일본어</option>
            </select>
            <address>© 2021 Instagram from Facebook</address>
          </div>  
        </footer>

      </div>
    );
  }
}

export default withRouter(Login);