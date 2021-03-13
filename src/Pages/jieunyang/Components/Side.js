import React, { Component } from "react";
import SideComponent from "../Components/SideComponent";

class Side extends Component {
  render() {
    const sideComponentLists = [
      {
        name: "wombat",
        src:
          "https://media.vlpt.us/images/poohv7/post/8011c9a2-97ac-4f26-9a59-4226809b10fa/KakaoTalk_20210225_133013188.jpg",
        description: "안녕하세요 웜뱃입니다.",
      },
      {
        name: "cat",
        src:
          "https://media.vlpt.us/images/poohv7/post/821a116f-1508-4417-b100-905ffa4e473d/KakaoTalk_20210225_132834557.jpg",
        description: "고양이다옹. 맞팔환영이라옹.",
      },
      {
        name: "platypus",
        src:
          "https://media.vlpt.us/images/poohv7/post/34d9f7e2-0921-46bc-aacc-6a33a85781c5/KakaoTalk_20210225_133012878.jpg",
        description: "92년생, 주로 물가에 서식",
      },
      {
        name: "i_am_a_dog",
        src:
          "https://media.vlpt.us/images/poohv7/post/2b4246cc-4cb9-46ee-a9d8-fb938612384f/KakaoTalk_20210225_133011781.jpg",
        description: "강아지(30)",
      },
      {
        name: "quokka",
        src:
          "https://media.vlpt.us/images/poohv7/post/be1b1e79-b823-4aae-9cfb-096281eda8e4/1.jpg",
        description: "이런 귀한 곳에 누추한 분이..",
      },
    ];
    return (
      <section className="wrap_sideright">
        <div className="side_right">
          <div className="about_me">
            <img
              className="me"
              src="https://media.vlpt.us/images/poohv7/post/d60edb23-650d-4c2b-8880-b5b6aa66d320/my%20profile.jpg"
              alt="profile img"
            />
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
          {sideComponentLists.map((el, idx) => {
            return (
              <SideComponent
                key={idx}
                nickName={el.name}
                img={el.src}
                content={el.description}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Side;
