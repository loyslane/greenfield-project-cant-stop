import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header';
import CurrentPlayer from './CurrentPlayer';
import GameBoard from './GameBoard';
import './CSS/Game.css';

class Game extends Component {

  rollDice = () => {
    this.props.history.push('/game/roll');
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentPlayer />
        <div className='choice-buttons'>
          <button className='btns' type='button' onClick={this.rollDice}>Roll dice</button>
          <button className='btns' type='button' onClick={this.endTurn}>End turn</button>
        </div>
        <GameBoard />
      </div>
    );
  }
}

export default withRouter(Game);