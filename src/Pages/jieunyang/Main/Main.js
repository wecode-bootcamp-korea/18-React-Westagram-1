import React from 'react';
import './Main.scss'
import '../../../Styles/reset.scss'

class Main extends React.Component {
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
      //console.log(this.state.commentList);
    return (
        <>
    <nav className="header">
    <div className="header_container">
        <h1 className="logo">Westagram</h1>
        <div className="header_bar">
            <input className="search_bar" type="text" />
            <i class="fas fa-search"></i>
        </div>
        <div className="icons">
            <i class="fas fa-home"></i>
            <i class="far fa-comments"></i>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <img className="profile_img" src="https://media.vlpt.us/images/poohv7/post/d60edb23-650d-4c2b-8880-b5b6aa66d320/my%20profile.jpg" alt="profile img" />
        </div>
    </div>
</nav>
<main className="main_container">
    <section className="whole_section">
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
        <section className="wrap_sideright">
        <div className="side_right">
            <div className="about_me">
                <img className="me" src="https://media.vlpt.us/images/poohv7/post/d60edb23-650d-4c2b-8880-b5b6aa66d320/my%20profile.jpg" alt="profile img"/>
                <div className="yang">yang_ji_eun</div>
            </div>
                <div className="first">
                <div className="id">지은</div>
                <div className="change">전환</div>
            </div>
            <div className="second">
            <div className="recommend">회원님을 위한 추천</div>
            <div className="recommend_side">모두 보기</div>
        </div>
        <div className="about_me">
            <img className="me" src="https://media.vlpt.us/images/poohv7/post/8011c9a2-97ac-4f26-9a59-4226809b10fa/KakaoTalk_20210225_133013188.jpg" alt="profile img" />
            <div className="yang">wombat</div>
        </div>
            <div className="first">
            <div className="their_description">안녕하세요 웜뱃입니다.</div>
            <div className="change">팔로우</div>
        </div>
        <div class="about_me">
            <img className="me" src="https://media.vlpt.us/images/poohv7/post/821a116f-1508-4417-b100-905ffa4e473d/KakaoTalk_20210225_132834557.jpg" alt="profile img" />
            <div className="yang">cat</div>
        </div>
            <div className="first">
            <div className="their_description">My favorite food is cake! F4F</div>
            <div className="change">팔로우</div>
        </div>
        <div className="about_me">
            <img className="me" src="https://media.vlpt.us/images/poohv7/post/34d9f7e2-0921-46bc-aacc-6a33a85781c5/KakaoTalk_20210225_133012878.jpg" alt="profile img" />
            <div className="yang">platypus</div>
        </div>
            <div className="first">
            <div className="their_description">92년생, 주로 물가에 서식</div>
            <div className="change">팔로우</div>
        </div>
        <div className="about_me">
            <img className="me" src="https://media.vlpt.us/images/poohv7/post/2b4246cc-4cb9-46ee-a9d8-fb938612384f/KakaoTalk_20210225_133011781.jpg" alt="profile img" />
            <div className="yang">i_am_a_dog</div>
        </div>
            <div className="first">
            <div className="their_description">강아지(30)</div>
            <div className="change">팔로우</div>
        </div>
        <div className="about_me">
            <img className="me" src="https://media.vlpt.us/images/poohv7/post/be1b1e79-b823-4aae-9cfb-096281eda8e4/1.jpg" alt="profile img" />
            <div className="yang">quokka</div>
        </div>
            <div className="first">
            <div className="their_description">이런 귀한 곳에 누추한 분이...</div>
            <div className="change">팔로우</div>
        </div>
    </div>
        </section>
        </section>
    </main>
    <script type="text/javascript" src="main.js"></script>    
</>
        )
  }
}

export default Main;