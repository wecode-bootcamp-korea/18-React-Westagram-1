import "../Styles/Nav.scss";

import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="left">
          <div className="icon">
            <i className="fab fa-instagram fa-2x"></i>
          </div>
          <span className="logo">instagram</span>
        </div>
        <div className="center">
          <input
            className="search"
            type="text"
            placeholder="                검색"
          />
        </div>
        <div className="right">
          <img className="rightimg" src="explore.png" alt="explore" />
          <img className="rightimg" src="heart.png" alt="heart" />
          <img className="rightimg" src="profile.png" alt="profile" />
        </div>
      </nav>
    );
  }
}

export default Nav;
