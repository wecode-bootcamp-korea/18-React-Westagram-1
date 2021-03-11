import React from "react";
import Nav from "./Components/Nav";
import MainRight from "./Components/MainRight";
import Feeds from "./Components/Feeds";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="instaMain">
        <Nav />
        <div className="main">
          <Feeds />
          <MainRight />
        </div>
      </div>
    );
  }
}

export default Main;
