import React, { Component } from "react";
import Comment from "./Comment";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      datas: "",
      commentArray: [
        {
          userName: "Wecodebootcamp",
          writeComment:
            "최고의 공간 WeWork에서 진행되는 세션",
          date: Date.now(),
        },
      ],
    };
  }

  changeCom = e => {
    this.setState({ datas: e.target.value });
  };

  btnClick = e => {
    e.preventDefault();
    this.setState({
      commentArray: [
        ...this.state.commentArray,
        {
          userName: "Wecodebootcamp",
          writeComment: this.state.datas,
          date: Date.now(),
        },
      ],
    });
    this.setState({ datas: "" });
  };

  removeText = e => {
    const commentarray = [...this.state.commentArray];
    const removecom = commentarray.filter(item => {
      return item.date != e;
    });
    this.setState({ commentArray: removecom });
  };

  render() {
    return (
      <>
        <div className="feeds">
          <div className="story">
            <div className="wecodeStory1">
              <img src="wecodestory1.png" alt="wecodestory1" />
              <div className="wecodeStory1_name">
                <p>Wework</p>
              </div>
            </div>
          </div>
          <section>
            <header className="header">
              <div className="flex">
                <div className="header1">
                  <img src="wecode.png" alt="wecode" />
                </div>
                <div className="header2">
                  <p style={{ fontWeight: 800 }}>wecode_bootcamp</p>
                  <p>WeCode</p>
                </div>
              </div>
              <div className="dotIcon">
                <i className="fas fa-ellipsis-h" />
              </div>
            </header>
            <article>
              <div className="imageSection">
                <img src="wecodemain.png" alt="wecodemain" />
              </div>
              <div className="iconline">
                <div className="iconBox">
                  <a className="heartIcon">
                    <i className="far fa-heart fa-2x" />{" "}
                  </a>
                  <i className="far fa-comment fa-2x" />
                  <i className="far fa-paper-plane fa-2x" />
                </div>
                <div>
                  <i className="far fa-bookmark fa-2x" />
                </div>
              </div>
              <div className="like">
                <p style={{ fontWeight: 800 }}>좋아요 10개</p>
              </div>
              <div className="text">
                <span className="name">wecode_bootcamp</span>
                <span className="info">
                  일 잘하는 직장인을 위한 👩🏻‍🔬👨🏻‍✈️👩🏻‍🏫👮🏻‍♀️👨🏻‍💼 wecode
                  social club 2기가 시작되었습니다.{" "}
                </span>
              </div>
            </article>
            <ul className="comments">
              {this.state.commentArray.map(commentIdex => {
                return (
                  <Comment
                    date={commentIdex.date}
                    userName={commentIdex.userName}
                    writeComment={commentIdex.writeComment}
                    removeText={this.removeText}
                  />
                );
              })}
            </ul>
            <form className="inputComment">
              <div className="smile">
                <i className="far fa-smile fa-2x" />
              </div>
              <div className="post">
                <input
                  className="inputBox"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={this.changeCom}
                  value={this.state.datas}
                />
              </div>
              <button className="submitBtn" onClick={this.btnClick}>
                게시
              </button>
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default Feeds;
