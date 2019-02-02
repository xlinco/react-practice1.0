import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user = {
      name:'Anna',
      hobbies:['sports','reading']
    }
    return (
      <div>hello world
        <Header />
        <Home
          name='max' 
          age={12} 
          user={user}
        />
      </div>
    );
  }
}

export default App;
