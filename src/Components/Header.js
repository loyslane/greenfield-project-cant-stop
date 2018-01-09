import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <img className="App-logo" src={require('../cant-stop.png')} alt="logo" />
      </div>
    );
  }
}

export default Header;