//import logo from './logo.svg';
//import images from '../../../public/images/1.JPG';
//import './App.css';
import React from 'react';
import './Login.scss';

class LoginSunghoon extends React.Component {
    constructor(){
        super();
        this.state = {
            id: "",
            pw: "",
            loginBtnColor: 'login__btn__color',
        }
    }

    //  inputIdValue = (e) => {
    //      this.setState({
    //           id: e.target.value
    //      })
    //  }

    //  inputPwValue = (e) => {
    //      this.setState({
    //          pw: e.target.value
    //      })
    //  }

     loginInputValue = (e) => {
        const name = e.target.className // 객체 구조분해, 이벤트에 해당하는 className을 변수 name 에 할당
        this.setState({
            [name]: e.target.value // [name] <-- 객체의 키 값 / e.target.value [name] 키 에 해당하는 value 값
         }, () => {
            const { id,pw } = this.state
            if( id.length >= 5 && id.includes('@') && pw.length >= 5) {
                this.setState({
                    loginBtnColor: 'login__btn__changeColor'
                })
            } else {
                this.setState({
                    loginBtnColor: 'login__btn__color'
                })
            }
         })      
     }

     goMain = () => {
        fetch('http://10.58.1.71:8000/user/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.id,
                password: this.state.pw
            })
          })
            .then(res => res.json())
            .then(result => alert(result.message))
        
            //this.props.history.push("/main-sunghoon")
     }
     

    render(){
     return (
        <>
        <div className="main__body">
            <div className="main__login">
            <div className="main__logo">
                <h1>Instagram</h1>
            </div>
            <div className="login__box">
             <input onChange={this.loginInputValue}
                className="id"    
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
             />
                <input onChange={this.loginInputValue} className="pw" type="password" placeholder="비밀번호" />
                <button onClick={this.goMain} className={`login__btn ${this.state.loginBtnColor}`}>로그인</button>
            </div>
            <div className="help__password">
                <span><a href="#">비밀번호를 잊으셨나요?</a></span>
            </div>
            </div>
            </div>
     
        </>
        );
    }
}

export default LoginSunghoon;