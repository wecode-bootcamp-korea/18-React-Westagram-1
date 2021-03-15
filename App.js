import React, {Component} from 'react';
import './App.css';
import User from './components/user'; 

class App extends Component {
  state = {
    users: [
      {name: 'personA', age:20},
      {name: 'personB', age:15},
      {name: 'personC', age:25},
    ]
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users})
  }

render() {
  console.log(this.state.deleteUser);
    return (
      <div>
        <ul>
          {
            this.state.users.map((user, index)=>{
              return (<User 
                age={user.age}
                delEvent={this.deleteUser.bind(this, index)}
                >{user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }  
}

export default App;
