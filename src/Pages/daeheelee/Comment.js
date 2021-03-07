import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <li>
        <span className="name">{this.props.userName}</span>
        <span>{this.props.writeComment}</span>
        <span class="textremove"></span>
      </li>
    );
  }
}

export default Comment;
