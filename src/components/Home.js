import React, { Component } from 'react';

class Home extends Component {
  render() {
    // console.log(this.props)
    const { name, age, user } = this.props;
    return (
      <div>Home
        <div>{name}</div>
        <div>{age}</div>
        <div>{user.name}</div>
        <ul>
          {user.hobbies?user.hobbies.map((item, i) =><li key={i}>{item}</li>):''
          }
        </ul>
      </div>
    );
  }
}

export default Home;
