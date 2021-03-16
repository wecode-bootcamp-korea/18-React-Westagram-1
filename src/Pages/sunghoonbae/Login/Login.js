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
        }
    }

    loginInputValue = (e) => {
        const name = e.target.className
        this.setState({
            [name]: e.target.value
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
        const id = this.state.id
        const pw = this.state.pw
        console.log(id.includes("@"))
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
                <button onClick={this.goMain} className={`login__btn ${id.includes('@') && pw.length > 5 ? 'login__btn__changeColor' : 'login__btn__color'}`}> 로그인</button>
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