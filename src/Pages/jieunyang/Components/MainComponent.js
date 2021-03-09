import React, { Component } from 'react';
import '../Main/Main.scss';

class MainComponent extends Component {
    constructor() {
    super();

    this.state = {
        value: "",
        commentList: [
            {
                name: "",
                text: "",
            },
        ],
    };
}

inputComment = (e) => {
    this.setState({value : e.target.value })
};

pressEnter =(e) => {
    this.setState({
        commentList: this.state.commentList.concat({name: 'yang_ji_eun ', text:this.state.value})
    }
    )};

    render() {
    return (
    <main className="main_container">
    <div className="feeds">
    <section className="feeds_header">          
    <div className="account_info">
        <img className="profile" src="https://media.vlpt.us/images/poohv7/post/d60edb23-650d-4c2b-8880-b5b6aa66d320/my%20profile.jpg" alt="profile img" />
                <div className="account_id">yang_ji_eun</div>
                <div className="more_info">•••</div>
            </div>
            <div className="wrap_location">
            <div className="location">Brisbane Australia</div>
            </div>
        </section>
        <section className="section_main">
            <img className="main_photo" src="https://media.vlpt.us/images/poohv7/post/ab43d22f-6e37-4150-be54-3e425a973086/main%20photo.jpg" alt="main img"/>
        </section>
        <section className="section_footer">
            <div className="icons2">
                <i class="fas fa-grin-hearts" onclick="change_color()"></i>
                <i class="far fa-comment-dots"></i>
                <i class="far fa-paper-plane"></i>
            </div>
            <i class="far fa-bookmark"></i>
        </section>
        <section className="section_input">
            <div className="like_number">좋아요 20,549개</div>
            <div className="section_description">
            <div className="wrap_description">
            <div className="nickname">yang_ji_eun</div>
            <div className="description">조명맛집들</div>
        </div>
            </div>
            <ul className="textBox">
            {this.state.commentList.map(el=> {
                return(
                <li>
                    <span>{el.name}</span>
                    <span>{el.text}</span>
                </li>               
        );
        })}
            </ul>
            <div className="time">5시간 전</div>
        </section>
        <section className="section_comment">
            <div className="comment_box">
                <i class="far fa-smile"></i>
                <input className="input_comment" 
                type="text" 
                placeholder="댓글 달기..."
                onChange={this.inputComment}
                value={this.state.value}
                />
            </div>
            <button className="enter" onClick={this.pressEnter}>게시</button>
        </section>
    </div>
</main> 
    );
    }
}

export default MainComponent;