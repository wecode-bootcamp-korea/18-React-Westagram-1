import React from 'react';
import FeedList from './FeedList';
import '../../Main.scss';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
                feedList: [],
             }           
        }
    componentDidMount() {
        fetch('http://localhost:3000/data/feedData.json', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({
            feedList: data,
        }))
    }
     render() {
        return (
            <>
            {this.state.feedList.map(list => 
                <FeedList
                    key={list.id}
                    name={list.userName}
                    profileImg={list.profile_img}
                    mainImg={list.main_img} 
                    content={list.content}
                />
            )}
        </>
        );
    }
}

export default Feed;