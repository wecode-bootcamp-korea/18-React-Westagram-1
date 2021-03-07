import React from 'react';
import './State.scss';

export class State extends React.Component {
    constructor() {
        super(); 
        this.state = {
            color: true
        }
    }

    colorChange = () => {   
        this.setState({
            color: !this.state.color
        })
    }

    render() {   
        const { color } = this.state;

        return (
            <div className="state">
                <h2 className={color ? 'blueText' : 'redText'}>Hello</h2>
                <button onClick={this.colorChange}>Click</button>
            </div>
        )
    }
}

export default State;