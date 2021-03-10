import React from 'react';
import Nav from '../Components/Nav';
import MainComponent from '../Components/MainComponent';
import Side from '../Components/Side';
import '../Main/Main.scss';

class Main extends React.Component {
    render() {
    return (
        <>
            <Nav />
            <MainComponent />
            <Side />
        </>
        );
    }
}

export default Main;