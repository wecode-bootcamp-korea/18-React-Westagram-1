import React from 'react';
import CommentInfo from './comment'
import imgA from '../../../../../Images/sunghoonbae/1.JPG';
import imgB from '../../../../../Images/sunghoonbae/3.jpg';
import '../../Main.scss';

class FeedList extends React.Component {
    constructor() {
    super();
    this.state = {
            textarea: "",
            commentInfo: [],
         }           
    }
        
          inputComment = (e) => {
            this.setState({
              [e.target.className]: e.target.value
            })
          }
        
          enterPress = (e) => {
            if ( e.key === "Enter" )
            {
              this.commentHandlerBtn();
              e.preventDefault();
            }
          }
        
          commentHandlerBtn = () => {
            const comments = {
                id: '',
                userName: 'tjdgns503',
                content: this.state.textarea,
                isLiked: false,
            }
        
            this.setState({
               commentInfo: this.state.commentInfo.concat(comments),
               textarea: "",
            })
          }
     render() {
        return (
            <>
            <div className="feeds container_border bgcolor_white">
                <div className="feeds_header feeds_area">
                    <div className="feeds_header_img mr-10">
                        <img src={imgA} alt="사진" />
                    </div>
                    <div className="feeds_header_id mr-10">
                        hoon__503
                    </div>
                    <div className="feeds_header_icon">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="feeds_body">
                    <img src={imgB} alt="메인 사진" />
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
                        {this.state.commentInfo.map(comment => {
                            return (
                                <CommentInfo 
                                key={comment.id}
                                name={comment.userName}
                                comment={comment.content}
                                />
                             )
                        })}
                    </ul>
                </div>
                <div className="feeds_time mt-10">3시간</div>
                </div>
                    <div className="feeds_comment_input_area feeds_area" >
                        <i className="far fa-smile fa-2x mr-10"></i>
                        <textarea
                            onKeyPress={this.enterPress}
                            onChange={this.inputComment}
                            className="textarea"
                            type="text"
                            placeholder="댓글달기..."
                            value={this.state.textarea}
                        ></textarea>
                    <button onClick={this.commentHandlerBtn} className="comment_btn icon_cursor" id="comment_btn">게시</button>
                </div>
            </div>
        </>
        );
    }
}

export default FeedList;