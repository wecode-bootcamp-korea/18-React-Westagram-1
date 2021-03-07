import React from "react";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      com: "",
      commnet: [
        {
          userName: "Wecodebootcamp",
          writeComment:
            "최고의 공간 WeWork에서 진행되는 세션",
        },
      ],
    };
  }

  changeCom = e => {
    this.setState({ com: e.target.value });
  };

  btnClick = e => {
    e.preventDefault();
    this.setState({
      commnet: [
        ...this.state.commnet,
        { userName: "Wecodebootcamp", writeComment: this.state.com },
      ],
    });
    this.setState({ com: "" });
  };

  render() {
    return (
      <>
        <div className="instamain">
          <nav>
            <div className="left">
              <div className="icon">
                <i className="fab fa-instagram fa-2x"></i>
              </div>
              <span className="logo">instagram</span>
            </div>
            <div className="center">
              <input
                className="search"
                type="text"
                placeholder="                검색"
              />
            </div>
            <div className="right">
              <img className="rightimg" src="explore.png" alt="explore" />
              <img className="rightimg" src="heart.png" alt="heart" />
              <img className="rightimg" src="profile.png" alt="profile" />
            </div>
          </nav>
          <div className="main">
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
                      일 잘하는 직장인을 위한 👩🏻‍🔬👨🏻‍✈️👩🏻‍🏫👮🏻‍♀️👨🏻‍💼
                      wecode social club 2기가 시작되었습니다.{" "}
                    </span>
                  </div>
                </article>
                <ul className="comments">
                  {/* <li className="comment">
                    <span className="name">Wecodebootcamp</span>
                    <span className="cominfo">
                      최고의 공간 WeWork에서 진행되는 세션
                    </span>
                  </li> */}
                  {console.log("나오면 render")}
                  {this.state.commnet.map(dat => {
                    return (
                      <li>
                        <span className="name">{dat.userName}</span>
                        <span>{dat.writeComment}</span>
                      </li>
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
                      value={this.state.com}
                    />
                  </div>
                  <button className="submitBtn" onClick={this.btnClick}>
                    게시
                  </button>
                </form>
              </section>
            </div>

            <aside className="mainRight">
              <div className="rightProfile">
                <div className="rightImg">
                  <img src="wecode.png" alt="wecode" />
                </div>
                <div className="nameProfile">
                  <p className="mainName">Wecode_bootcamp</p>
                  <p className="subname">위코드</p>
                </div>
                <div className="change">
                  <p>전환</p>
                </div>
              </div>
              <div className="rightrecommend">
                <div className="commendtext">
                  <span className="commendtext-left">회원님을 위한 추천</span>
                  <span className="commendtext-right">모두 보기</span>
                </div>
                <div className="rightNum1">
                  <div className="num1Img">
                    <img src="wecodemain.png" alt="" />
                  </div>
                  <div className="num1Name">
                    <p className="mainName">asdasd</p>
                    <p className="num1Subname">회원님을 팔로우합니다</p>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="rightNum1">
                  <div className="num1Img">
                    <img src="wecodemain.png" alt="wecodemain" />
                  </div>
                  <div className="num1Name">
                    <p className="mainName">asdasd</p>
                    <p className="num1Subname">회원님을 팔로우합니다</p>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="rightNum1">
                  <div className="num1Img">
                    <img src="wecodemain.png" alt="wecodemain" />
                  </div>
                  <div className="num1Name">
                    <p className="mainName">asdasd</p>
                    <p className="num1Subname">회원님을 팔로우합니다</p>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="rightNum1">
                  <div className="num1Img">
                    <img src="wecodemain.png" alt="wecodemain" />
                  </div>
                  <div className="num1Name">
                    <p className="mainName">asdasd</p>
                    <p className="num1Subname">회원님을 팔로우합니다</p>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="rightNum1">
                  <div className="num1Img">
                    <img src="wecodemain.png" alt="wecodemain" />
                  </div>
                  <div className="num1Name">
                    <p className="mainName">asdasd</p>
                    <p className="num1Subname">회원님을 팔로우합니다</p>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
              </div>
              <footer className="list">
                <ul className="footer1">
                  <li>소개ㆍ</li>
                  <li>도움말ㆍ</li>
                  <li>홍보 센터ㆍ</li>
                  <li>APIㆍ</li>
                  <li>채용 정보ㆍ</li>
                  <li>개인정보처리방침ㆍ</li>
                </ul>
                <ul className="footer2">
                  <li>약관ㆍ</li>
                  <li>위치ㆍ</li>
                  <li>인기 계정ㆍ</li>
                  <li>해시태그ㆍ</li>
                  <li>언어</li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
              </footer>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
