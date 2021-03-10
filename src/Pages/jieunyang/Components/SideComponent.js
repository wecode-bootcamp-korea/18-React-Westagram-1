import React, { Component } from 'react';

class SideComponent extends Component {
  render() {
    return (
      <>
        <div className="about_me">
            <img className="me" src={this.props.img} alt="profile img" />
            <div className="yang">{this.props.nickName}</div>
        </div>
        <div className="first">
          <div className="their_description">{this.props.content}</div>
          <div className="change">팔로우</div>
        </div>
      </>
    )
  }
}

export default SideComponent;