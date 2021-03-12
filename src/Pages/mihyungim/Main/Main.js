import React, { Component } from "react";
import "./Main.scss";
import Reply from "./Reply";

class Main extends Component {
  state = {
    contents: [],
    text: "",
    like: 259,
    heart: false,
    search: false,
  };

  handleSearch = () => {
    this.setState({
      search: true,
    });
  };
  handleSearchOut = () => {
    this.setState({
      search: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      content: this.state.text,
      color: false,
    };
    this.setState({
      contents: [...this.state.contents, newItem],
      text: "",
    });
  };

  handleDelete = (id) => {
    this.setState({
      contents: this.state.contents.filter((el) => el.id !== id),
    });
  };

  handleClickHeart = (id) => {
    this.setState({
      contents: this.state.contents.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            color: !el.color,
          };
        }
        return el;
      }),
    });
  };

  handleLikeHeart = () => {
    const { heart, like } = this.state;
    this.setState({
      heart: !heart,
      like: heart ? like - 1 : like + 1,
    });
  };
  render() {
    const styleA = {
      paddingLeft: "35px",
      fontSize: "16px",
    };

    const styleB = {
      left: "150px",
    };

    return (
      <div className="mainComponent">
        <header className="section">
          <div className="inner">
            <div className="logo">
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="logo"
              />
            </div>
            <div className="search">
              <input
                style={this.state.search ? styleA : null}
                onClick={this.handleSearch}
                onBlur={this.handleSearchOut}
                type="text"
                placeholder="검색"
              />
              <i
                style={this.state.search ? styleB : { fontSize: 8 }}
                className="fas fa-search"
              ></i>
            </div>
            <nav>
              <svg
                aria-label="홈"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
              </svg>
              <svg
                aria-label="Direct"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path>
              </svg>
              <svg
                aria-label="사람 찾기"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path
                  clip-rule="evenodd"
                  d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-label="활동 피드"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              <div className="img--container">
                <img
                  width="30px"
                  alt="oooosalon님의 프로필 사진"
                  className="_6q-tv"
                  crossorigin="anonymous"
                  data-testid="user-avatar"
                  draggable="false"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53109714_1233187460181996_6213483789318881280_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=7IBTa-PIRkwAX_3pevH&amp;tp=1&amp;oh=465e931f70159cfc37597fae3a4ef30b&amp;oe=605EECAA"
                />
              </div>
            </nav>
          </div>
        </header>

        <main className="section">
          <div className="inner">
            <section className="contents__all">
              <div className="contents__up">
                <div className="up__inner">
                  <div className="up__list">
                    <div className="up__img">
                      <img
                        salt="seol.zzi님의 프로필 사진"
                        className="_6q-tv"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/13774187_174142326337975_1692517332_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=LL8Ha5Zie2gAX9UGW6Q&amp;tp=1&amp;oh=8b5ad227c047eef173454a6b1fda4bc3&amp;oe=605C85F3"
                      />
                    </div>
                    <div className="up_text">seol.zzi</div>
                  </div>
                  <div className="up__list">
                    <div className="up__img">
                      <img
                        salt="muchable.nl님의 프로필 사진"
                        className="_6q-tv"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/92823825_683607305718152_8059282260068663296_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=wLmXDBZdd44AX-k9qdp&tp=1&oh=5b5c1710c100d8bff7212e7ed5beb931&oe=605F69D7"
                      />
                    </div>
                    <div className="up_text">muchable.nl</div>
                  </div>
                  <div className="up__list">
                    <div className="up__img">
                      <img
                        salt="coucou_illustration님의 프로필 사진"
                        className="_6q-tv"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/127045638_794196607825611_4159996360528917456_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=dZZBUy1Clk0AX-ZghNr&tp=1&oh=d2a6d1749f5d4f73bc9c61398a034fdf&oe=605E8272"
                      />
                    </div>
                    <div className="up_text">coucou_illustration</div>
                  </div>
                  <div className="up__list">
                    <div className="up__img">
                      <img
                        salt="moyeon__flower님의 프로필 사진"
                        className="_6q-tv"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/96150979_262768458181144_5137025243885338624_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=djYzZTPVxpAAX-_G9Ya&tp=1&oh=5ba57411bcc6e4bd7b0b6962eb43939e&oe=605EC756"
                      />
                    </div>
                    <div className="up_text">moyeon__flower</div>
                  </div>
                </div>
              </div>
              <div className="contents__down">
                <div className="title">
                  <div className="list__inner">
                    <div className="img--container">
                      <img
                        width="100%"
                        alt="oooosalon님의 프로필 사진"
                        className="_6q-tv"
                        crossorigin="anonymous"
                        data-testid="user-avatar"
                        draggable="false"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/13712284_1142615669129178_1333412901_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=eN0LSeCTpjwAX_VLtF3&tp=1&oh=416eb779c2abed1d8824eb13fb737c77&oe=6060DD07"
                      />
                    </div>
                    <div className="name">
                      <div className="nickname">thortful</div>
                    </div>
                  </div>
                  <div className="picture">
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/153598097_116741346993457_249445519375038439_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=3chLwg_1RUYAX8dJ7op&tp=1&oh=e96b52c4eac9a04b497e730b9973f6b0&oe=605FD690"
                      alt="insta1"
                    />
                  </div>
                  <div className="symbol">
                    <i
                      onClick={this.handleLikeHeart}
                      style={{
                        color: this.state.heart ? "tomato" : "black",
                        fontSize: 24,
                      }}
                      className="far fa-heart"
                    ></i>
                    <i className="far fa-comments" style={{ fontSize: 24 }}></i>
                    <i
                      className="fab fa-telegram-plane"
                      style={{ fontSize: 24 }}
                    ></i>
                  </div>
                  <div className="like">
                    좋아요 <span>{this.state.like}</span>개
                  </div>
                  <div className="reply--list">
                    <div className="reply">
                      <div className="reply__name">thortful</div>
                      <div className="reply__desc">One step at a time 🙌💙</div>
                    </div>
                    <div className="reply">
                      <div className="reply__name">durumi</div>
                      <div className="reply__desc">하핳 time🙌 🙌🙌🙌</div>
                      <i className="fas fa-ellipsis-h"></i>
                      <i className="far fa-heart"></i>
                      <div className="reply__heart">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                    <Reply
                      contents={this.state.contents}
                      onClickDelete={this.handleDelete}
                      onClickHeart={this.handleClickHeart}
                    />
                  </div>
                  <div className="time">12시간 전s</div>
                  <div className="write">
                    <form onSubmit={this.handleSubmit}>
                      <i className="far fa-smile" style={{ fontSize: 24 }}></i>
                      <input
                        value={this.state.text}
                        onChange={(e) => {
                          this.setState({
                            text: e.target.value,
                          });
                        }}
                        className="mainInput"
                        name="reply"
                        type="text"
                        placeholder="댓글 달아요"
                      />
                      <button
                        style={{
                          color: this.state.text.length ? "#199FF6" : "#B2DFFC",
                        }}
                        type="submit"
                        className="write__send"
                      >
                        게시
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <aside>
                <div className="aside_up">
                  <div className="img--container">
                    <img
                      width="100%"
                      alt="oooosalon님의 프로필 사진"
                      className="_6q-tv"
                      crossorigin="anonymous"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53109714_1233187460181996_6213483789318881280_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=7IBTa-PIRkwAX_3pevH&amp;tp=1&amp;oh=465e931f70159cfc37597fae3a4ef30b&amp;oe=605EECAA"
                    />
                  </div>
                  <div className="name">
                    <div className="nickname">oooosalon</div>
                    <div className="desc">엉망징창살롱 마케터 신디</div>
                  </div>
                  <div className="transform">
                    <a href="" className="btn--blue">
                      전환
                    </a>{" "}
                  </div>
                </div>
                <div className="aside_down">
                  <div className="title">
                    <div className="title_left">회원님을 위한 추천</div>
                    <div className="title_right">모두 보기</div>
                  </div>
                  <div className="list">
                    <div className="list__inner">
                      <div className="img--container">
                        <img
                          width="100%"
                          alt="oooosalon님의 프로필 사진"
                          className="_6q-tv"
                          crossorigin="anonymous"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://instagram.fluh3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fluh3-1.fna.fbcdn.net&_nc_ohc=8AUoZNYMP5IAX8LwS5_&oh=96ea40c486c42b1c06348e0354037f4e&oe=605FE68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </div>
                      <div className="name">
                        <div className="nickname">deah0205</div>
                        <div className="desc">회원님을 팔로우합니다</div>
                      </div>
                      <div className="follow">
                        <a href="" className="btn--blue">
                          팔로우
                        </a>{" "}
                      </div>
                    </div>
                    <div className="list__inner">
                      <div className="img--container">
                        <img
                          width="100%"
                          alt="oooosalon님의 프로필 사진"
                          className="_6q-tv"
                          crossorigin="anonymous"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://instagram.fluh3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fluh3-1.fna.fbcdn.net&_nc_ohc=8AUoZNYMP5IAX8LwS5_&oh=96ea40c486c42b1c06348e0354037f4e&oe=605FE68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </div>
                      <div className="name">
                        <div className="nickname">deah0205</div>
                        <div className="desc">회원님을 팔로우합니다</div>
                      </div>
                      <div className="follow">
                        <a href="" className="btn--blue">
                          팔로우
                        </a>{" "}
                      </div>
                    </div>
                    <div className="list__inner">
                      <div className="img--container">
                        <img
                          width="100%"
                          alt="oooosalon님의 프로필 사진"
                          className="_6q-tv"
                          crossorigin="anonymous"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://instagram.fluh3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fluh3-1.fna.fbcdn.net&_nc_ohc=8AUoZNYMP5IAX8LwS5_&oh=96ea40c486c42b1c06348e0354037f4e&oe=605FE68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </div>
                      <div className="name">
                        <div className="nickname">deah0205</div>
                        <div className="desc">회원님을 팔로우합니다</div>
                      </div>
                      <div className="follow">
                        <a href="" className="btn--blue">
                          팔로우
                        </a>{" "}
                      </div>
                    </div>
                    <div className="list__inner">
                      <div className="img--container">
                        <img
                          width="100%"
                          alt="oooosalon님의 프로필 사진"
                          className="_6q-tv"
                          crossorigin="anonymous"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://instagram.fluh3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fluh3-1.fna.fbcdn.net&_nc_ohc=8AUoZNYMP5IAX8LwS5_&oh=96ea40c486c42b1c06348e0354037f4e&oe=605FE68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </div>
                      <div className="name">
                        <div className="nickname">deah0205</div>
                        <div className="desc">회원님을 팔로우합니다</div>
                      </div>
                      <div className="follow">
                        <a href="" className="btn--blue">
                          팔로우
                        </a>{" "}
                      </div>
                    </div>
                    <div className="list__inner">
                      <div className="img--container">
                        <img
                          width="100%"
                          alt="oooosalon님의 프로필 사진"
                          className="_6q-tv"
                          crossorigin="anonymous"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://instagram.fluh3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fluh3-1.fna.fbcdn.net&_nc_ohc=8AUoZNYMP5IAX8LwS5_&oh=96ea40c486c42b1c06348e0354037f4e&oe=605FE68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </div>
                      <div className="name">
                        <div className="nickname">deah0205</div>
                        <div className="desc">회원님을 팔로우합니다</div>
                      </div>
                      <div className="follow">
                        <a href="" className="btn--blue">
                          팔로우
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aside_footer">
                  <ul className="footer_list">
                    <li>소개</li>
                    <li>도움말</li>
                    <li>홍보센터</li>
                    <li> API</li>
                    <li>채용 정보</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>인기계정</li>
                    <li></li>
                    <li>해시태그</li>
                    <li>언어</li>
                  </ul>
                  <div className="footer_author">
                    © 2021 INSTAGRAM FROM FACEBOOK
                  </div>
                </div>
              </aside>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default Main;
