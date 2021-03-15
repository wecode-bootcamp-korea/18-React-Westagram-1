import React, { Component } from 'react';
import './Article.scss';
import big from '../../../../Images/junwookang/instar-main.jpg';
import wecode from '../../../../Images/junwookang/wecode.jpg';

class Article extends Component {
  constructor() {
    super();
    this.state = {      
      inputComment: '',
      commentList: [],
      heartBtn: false,
      bookMarkBtn : false,      
    };
  }

  commentValue = (e) => {
    this.setState({inputComment: e.target.value});
  }

  addComment = () => {
    this.setState({commentList: this.state.commentList.concat([this.state.inputComment])})
  }

  deleteBtn = (idx) => {   
    let test = this.state.commentList;
    test.splice(idx, 1);
    this.setState({commentList: test})
  }

  heartBtnClick = (e) => {
    this.setState({heartBtn: !this.state.heartBtn})  
    //console.log(e);
  }

  bookMarkBtnClick = (e) => {
    this.setState({bookMarkBtn: !this.state.bookMarkBtn})  
    console.log(e);
  }
  
  render() {    
    //console.log(this.state.heartBtn);
    return (
      <main>
        <div class="main-story">
          <div class="story-img">
            <img class="first" src={big} alt={"big"} />
          </div>        
          <div class="story-text">          
            <div class="story-follow">
              <div class="wecode-img">
                <img src={wecode} alt={"wecode"} />
              </div>            
              <div class="story-follow-text">
                <div class="follow-text-center">
                  <div class="follow-text-main">
                    <div class="gray"><a href="">wecode_bootcamp</a></div>
                    <div class="blue"><a href="">팔로우</a></div>
                  </div>
                  <div class="follow-text-sub">
                    <div class="black"><a href="">Wecode</a></div>
                  </div>
                </div>
                <div class="follow-text-option">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
            <div id="chatList" class="story-read">            
              <ul class="comment-wrap">
              {/* <!--댓글 기능--> */}
                {this.state.commentList.map((comm, idx) => {
                  return <li key={idx}>
                    <img src={wecode} />
                    <span class="userName">Junwoo Kang</span>
                    <span class="commentText">{comm}</span>
                    <button onClick={() => this.deleteBtn(idx)}>delete</button>
                  </li>                    
                  })}
              </ul>                   
            </div>
            <div class="story-option">
              <div class="icon">
                <div class="icon-left">                  
                  <div className={this.state.heartBtn ? "change" : "unchange"} onClick={this.heartBtnClick}><i class="far fa-heart"></i></div>
                  <i class="far fa-comment"></i>
                  <i class="far fa-paper-plane"></i>
                </div>
                <div class="icon-right">
                  <div className={this.state.bookMarkBtn ? "change2" : "unchange2"} onClick={this.bookMarkBtnClick}><i class="far fa-bookmark"></i></div>
                </div>              
              </div>
              <div class="option-good"><p>좋아요 107개</p></div>
              <div class="option-day"><p>2월 15일</p></div>        
            </div>
            <div class="story-comment">
              <div class="comment-left">
                <select>
                  <option value="">이모티콘</option>
                </select>              
                <i class="far fa-smile"></i>
              </div>
              <div class="comment-center">
                <input id="myComment" onChange={this.commentValue} type="text" placeholder="댓글 달기..." />
              </div>
              <div class="comment-right">
                <button id="enter" onClick={this.addComment}>게시</button>
              </div>            
            </div>
          </div>
        </div>      
      </main>
    );
  }
}

export default Article;