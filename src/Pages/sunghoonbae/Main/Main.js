import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import FriendList from './Components/FriendList/FriendList';
import FeedList from './Components/FeedList/FeedList';
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
                  <FeedList />
              </div>   
                  <SideBar />
            </div>
          </section>
        </>
        );
    }
}

export default Main;