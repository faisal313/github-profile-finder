import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends React.Component {
  render(){
    return(
      <div className="App">
      <Navbar />
      <UserItem />
      <div className='container'>
        <Users />
      </div>

      </div>
    )
  }

}

export default App;
