//import logo from './logo.svg';
//import images from '../../../public/images/1.JPG';
//import './App.css';
import React from 'react';
<<<<<<< HEAD
import './Login.scss';
=======
import './Login.css';
>>>>>>> 77ade7e78229994c9f13499ce8c7ba0e52f845bb
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            id: "",
<<<<<<< HEAD
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
     

    render(){
     return (
        <>
       
=======
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
>>>>>>> 77ade7e78229994c9f13499ce8c7ba0e52f845bb
            <div className="main__login">
            <div className="main__logo">
                <h1>Instagram</h1>
            </div>
            <div className="login__box">
<<<<<<< HEAD
             <input onChange={this.loginInputValue}
                className="id"    
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
             />
                <input onChange={this.loginInputValue} className="pw" type="password" placeholder="비밀번호" />
                <button className={`login__btn ${this.state.loginBtnColor}`}><Link to = "/main" className="main_link">로그인</Link></button>
            </div>
            <div className="help__password">
                <span><a href="#">비밀번호를 잊으셨나요?</a></span>
            </div>
            </div>
     
=======
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
>>>>>>> 77ade7e78229994c9f13499ce8c7ba0e52f845bb
        </>
        );
    }
}

export default Login;