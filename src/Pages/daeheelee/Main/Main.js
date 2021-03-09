import React from "react";
import "../../../Styles/Main.scss";
import Nav from "../../../Components/Nav";
import MainRight from "../../../Components/MainRight";
import Feeds from "../../../Components/Feeds";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="instamain">
          <Nav />
          <div className="main">
            <Feeds />
            <MainRight />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
