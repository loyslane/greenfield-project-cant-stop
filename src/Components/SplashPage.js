import React, { Component } from 'react';
import './SplashPage.css';

class SplashPage extends Component {
  constructor() {
    super();
    this.newGame = this.newGame.bind(this);
  }

  newGame = () => {
    this.props.history.push('/new-game');
  }

  render() {
    return (
      <div>
        <img className="logo" src={require('../cant-and-stop.png')} alt="logo" />
        <br/>
        <br/>
        <button className='btn' type='button' onClick={this.newGame}>New Game</button>
      </div>
    );
  }
}

export default SplashPage;
