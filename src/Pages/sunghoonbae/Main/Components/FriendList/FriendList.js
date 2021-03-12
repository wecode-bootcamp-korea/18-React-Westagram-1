import React from 'react';
import List from './list'
import '../../Main.scss';

class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friendList: [],
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/data/friendListData.json", {
            method:'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({
            friendList: data
        }))
    }

    render(){
        return(
            <>
            <div className="friend_list container_border bgcolor_white">
                {this.state.friendList.map(data => {
                    return (
                        <List 
                        key = {data.id}
                        img = {data.img}
                        name = {data.name}
                        />
                    )
                })}
          </div>
            </>
        )
    }
}

export default FriendList