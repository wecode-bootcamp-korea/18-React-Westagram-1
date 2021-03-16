import React from 'react';

class List extends React.Component {
    render() {
        return (
            <>
            <div className="friend_list_profile_img_id ml-10">
                <div className="friend_item friend_profile_img">
                    <img
                        src={this.props.img}
                        alt="친구 프로필 사진"
                    />
                </div>
                <div className="friend_name">{this.props.name}</div>
            </div>
            </>           
        )
    }
}

export default List;