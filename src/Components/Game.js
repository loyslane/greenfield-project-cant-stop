import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header';
import CurrentPlayer from './CurrentPlayer';
import GameBoard from './GameBoard';

class Game extends Component {

  rollDice = () => {
    this.props.history.push('/game/roll');
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentPlayer />
        <GameBoard />
        <button type='button' onClick={this.rollDice}>Roll dice</button>
        <br/>
        <br/>
        <button type='button' onClick={this.endTurn}>End turn</button>
      </div>
    );
  }
}

export default withRouter(Game);