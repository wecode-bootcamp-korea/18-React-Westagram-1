import React, { Component } from 'react';
import Header from './Header/Header';
import Article from './Article/Article';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <Header></Header>
        <Article></Article>
      </div>      
    );
  }
}

export default Main;

