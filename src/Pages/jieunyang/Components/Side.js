import React, { Component } from 'react';
import '../Main/Main.scss';

class Side extends Component {
  render() {
    return (
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
    );
    }
}

export default Side;