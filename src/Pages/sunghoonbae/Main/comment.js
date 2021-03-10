import React from 'react';

class CommentInfo extends React.Component {
    render() {
        return(
            <>
              <li> {this.props.name} {this.props.comment}  </li>
            </>
        )
    }
}

export default CommentInfo;