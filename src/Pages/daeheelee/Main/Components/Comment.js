import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { writeComment, userName, date } = this.props;
    return (
      <li>
        <span className="name">{userName}</span>
        <span>{writeComment}</span>
        <span
          className="textRemove"
          onClick={() => this.props.removeText(date)}
        >
          <i className="fas fa-ellipsis-h"></i>
        </span>
      </li>
    );
  }
}

export default Comment;
