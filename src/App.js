import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>hello world
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
