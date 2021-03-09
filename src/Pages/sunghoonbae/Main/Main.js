import React from 'react';
// import Comment from './comment'
import './Main.scss';
import './reset.scss';



class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      textarea: "",
  }
}

  inputComment = (e) => {
    console.log(e.target.className);
  }

  commentHandlerBtn = () => {
    this.setState({
      
    })
  }

    render(){
     return (
        <>
            <nav className="nav">
             <div className="nav_bar">
                <div className="nav_bar_container">
                    <div className="nav_bar_container_logo">instagram</div>
                        <div className="nav_bar_container_search">
                            <i className="fas fa-search fa-xs"></i>
                            <input className="container_border" type="text" placeholder="검색" />
                        </div>
                    <div className="nav_bar_container_icon">
                        <i className="fas fa-home fa-lg mr-15 homeicon"></i>
                        <i className="far fa-paper-plane fa-lg mr-15"></i>
                        <i className="far fa-compass fa-lg mr-15"></i>
                        <i className="far fa-heart fa-lg mr-15"></i>
                        <i className="far fa-user fa-lg"></i>
                    </div>
                </div>
             </div>
            </nav>
 
    <section className="main_section">
      <div className="main_section_container">
        <div className="main_section_container_box">
          <div className="friend_list container_border bgcolor_white">
            <div className="friend_list_profile_img_id mr-10">
              <div className="friend_item friend_profile_img">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/80452228_1276431125887357_5922463548440576_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=wY4iQCIOuHoAX8ndO_G&oh=a141327480860a5c3c021e47b42ce8d3&oe=6064E32E"
                  alt="친구 프로필 사진"
                />
              </div>
              <div className="friend_item friend_name">hooeeeeee</div>
            </div>
            <div className="friend_list_profile_img_id">
              <div className="friend_item friend_profile_img">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/117350299_597863607572038_1485637149936799204_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=SObQx0g4z7AAX_Txmgg&amp;oh=626fbe438f5a7674d415603ba2025a3a&amp;oe=60661C55"
                  alt="친구 프로필 사진"
                />
              </div>
              <div className="friend_name">hyunnnjinnnn</div>
            </div>
          </div>
          <div className="feeds container_border bgcolor_white">
            <div className="feeds_header feeds_area">
              <div className="feeds_header_img mr-10">
                <img src="/images/1.JPG" alt="사진" />
              </div>
              <div className="feeds_header_id mr-10">
                hoon__503
              </div>
              <div className="feeds_header_icon">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="feeds_body">
              <img src="/images/2.jpg" alt="메인 사진" />
            </div>
            <div className="feeds_area">
              <div className="feeds_icon flex">
                <i className="far fa-heart fa-2x icon_cursor mr-10" id="like_color" value="false"></i>
                <i className="far fa-comment fa-2x icon_cursor mr-10"></i>
                <i className="far fa-paper-plane fa-2x icon_cursor mr-10"></i>
                <i className="far fa-square fa-2x icon_cursor"></i>
              </div>
              <div className="feeds_like mt-10">
                <div>좋아요 <span id="feeds_like">174</span>개</div>
              </div>
              <div className="feeds_container mt-10" id="feeds_container">
                <div className="feeds_content">hoon__503</div>
                <ul>
                  <li className="mt-10">{this.state.textarea}</li>
                </ul>
                {/* <Comment /> */}
                {/* 댓글영역 */}
              </div>
              <div className="feeds_time mt-10">3시간</div>
            </div>
            <div className="feeds_comment_input_area feeds_area" >
              <i className="far fa-smile fa-2x mr-10"></i>
              <textarea
                onChange={this.inputComment}
                className="textarea mr-10"
                type="text"
                placeholder="댓글달기..."
                id="comment_textarea"
              ></textarea>
              <button onClick={this.commentHandlerBtn} className="comment_btn icon_cursor" id="comment_btn">게시</button>
            </div>
          </div>
        </div>
        <aside className="right_box">
          <div className="my_profile mt-20">
            <i className="fas fa-user-circle fa-3x font_color_gray"></i>
            <div className="my_profile_id_name ml-10">
              <div className="my_profile_id right_box_font_size">tjdgns503</div>
              <div className="my_profile_name right_box_font_size mt-5">배성훈</div>
            </div>
            <div className="my_profile_change right_box_font_size font_color_blue">전환</div>
          </div>
          <div className="friend_recommend_container mt-20">
            <div className="me_friend_recommend right_box_font_size font_bold font_color_gray">회원님을 위한 추천</div>
            <div className="friend_recommned_all right_box_font_size font_bold font_color_black">모두 보기</div>
          </div>
          <div className="friend_recommend_list mt-20">
            <div className="flex_align_center">
              <i className="fas fa-user-circle fa-2x font_color_gray"></i>
              <div className="friend__recommend_id ml-10">
               <div className="right_box_font_size font_color_id">hyjinnnnnnn</div>
                <div className="right_box_font_size font_color_gray mt-5">회원님을 팔로우 합니다</div>
              </div>
              <div className="follow right_box_font_size font_color_blue">팔로우</div>
            </div>
            </div>
        </aside>
      </div>
    </section>
  
        </>
        );
    }
}

export default Main;