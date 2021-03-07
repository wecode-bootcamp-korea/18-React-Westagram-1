//import logo from './logo.svg';
//import images from '../../../public/images/1.JPG';
//import './App.css';
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            id: "",
        }
    }

     inputIdValue = (e) => {
         this.setState({
              id: e.target.value
         })
     }


    render(){
       console.log(this.setState.id)
     return (
        <>
            <div className="main__login">
            <div className="main__logo">
                <h1>Instagram</h1>
            </div>
            <div className="login__box">
             <input onChange={this.inputIdValue}
                  id="loginId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                <input  id="loginPw" type="password" placeholder="비밀번호" />
                <button className="login__btn"><Link to = "/main" className="main_link">로그인</Link></button>
                </div>
                <div className="help__password">
                 <span><a href="#">비밀번호를 잊으셨나요?</a></span>
                 </div>
             </div>
        </>
        );
    }
}

export default Login;