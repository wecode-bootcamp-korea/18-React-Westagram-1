import React, { Component } from 'react';
import './Header.scss';
import logo from '../../../../Images/junwookang/logo.png';


class Header extends Component {
  render() {
    return (
      <div class="head">      
        <div class="head-left">        
          <img src={logo} alt={"logo"} />
        </div>

        <div class="head-center">
          <input class="search" type="text" placeholder="검색" />
          <i class="fas fa-search"></i>
        </div>

        <div class="head-right">
          <i class="fas fa-home"></i>
          <i class="far fa-paper-plane"></i>
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
        </div>        
      </div>
    );
  }
}

export default Header;