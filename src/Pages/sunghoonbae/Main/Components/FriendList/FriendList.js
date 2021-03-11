import React from 'react';
import '../../Main.scss';

class FriendList extends React.Component {
    render(){
        return(
            <>
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
            </>
        )
    }
}

export default FriendList