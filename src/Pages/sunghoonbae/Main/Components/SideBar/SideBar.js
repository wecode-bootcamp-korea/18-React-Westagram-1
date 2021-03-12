import React from 'react';
import FriendRecommentList from './friendRecommentList';
import '../../Main.scss'

class SideBar extends React.Component {
    constructor() {
        super();
        this.state={
            friendRecommentList: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/recommentFriendListData.json', {
            method:'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({
            friendRecommentList: data,
        }))
    }

    render() {
        return(
            <>
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
                    {this.state.friendRecommentList.map(list => {
                        return (
                            <FriendRecommentList
                                key={list.id}
                                name={list.userName}
                                comment={list.content}
                                img={list.img}
                            />
                        )
                    })}
                </div>
            </aside>
            </>
        )
    }
}
export default SideBar