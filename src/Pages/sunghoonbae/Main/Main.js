import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import FriendList from './Components/FriendList/FriendList';
import Feed from './Components/FeedList/Feed';
import SideBar from './Components/SideBar/SideBar';
import './Main.scss';
import './reset.scss';

class Main extends React.Component {
    render(){
     return (
        <>
          <NavBar />
          <section className="main_section">
            <div className="main_section_container">
              <div className="main_section_container_box">
                  <FriendList /> 
                  <Feed />
              </div>   
                  <SideBar />
            </div>
          </section>
        </>
        );
    }
}

export default Main;