import React, { Component } from 'react';
import './CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <img className='App-logo' src={require('../images/cant-stop.png')} alt='logo' />
      </div>
    );
  }
}

export default Header;