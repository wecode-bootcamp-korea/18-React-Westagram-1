import React from 'react';

class FriendRecommentList extends React.Component {
    render(){
        return(
            <>
            <div className="flex_align_center mt-10">
                <img className="friend__recomment__img" src={this.props.img} alt="프로필 사진" />
                <div className="friend__recommend_id ml-10">
                    <div className="right_box_font_size font_color_id">{this.props.name}</div>
                    <div className="right_box_font_size font_color_gray mt-5">{this.props.comment}</div>
                </div>
                <div className="follow right_box_font_size font_color_blue">팔로우</div>
            </div>
            </>
        )
    }
}
{/* <i className="fas fa-user-circle fa-2x font_color_gray"></i> */}
export default FriendRecommentList