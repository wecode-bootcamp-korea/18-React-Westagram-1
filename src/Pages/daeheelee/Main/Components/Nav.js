import React, { Component } from "react";
import explore from "../../../../Images/daeheelee/explore.png";
import heart from "../../../../Images/daeheelee/heart.png";
import profile from "../../../../Images/daeheelee/profile.png";
import "./Nav.scss";

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
          <img className="rightimg" src={explore} alt="explore" />
          <img className="rightimg" src={heart} alt="heart" />
          <img className="rightimg" src={profile} alt="profile" />
        </div>
      </nav>
    );
  }
}

export default Nav;
