import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Main/Main.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="header">
      <div className="header_container">
          <h1 className="logo"><Link to="/">Westagram</Link></h1>
          <div className="header_bar">
              <input className="search_bar" type="text" />
              <i class="fas fa-search"></i>
          </div>
          <div className="icons">
              <i class="fas fa-home"></i>
              <i class="far fa-comments"></i>
              <i class="far fa-compass"></i>
              <i class="far fa-heart"></i>
              <img className="profile_img" src="https://media.vlpt.us/images/poohv7/post/d60edb23-650d-4c2b-8880-b5b6aa66d320/my%20profile.jpg" alt="profile img" />
          </div>
      </div>
  </nav> 
    );
  }
}

export default Nav;