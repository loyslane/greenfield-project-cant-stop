import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.setPlayers,
      playerCount: this.props.setPlayerCount,
      currentPlayer: this.props.setCurrentPlayer
    }
  }

  render() {
    return (
      <div>
        {this.setPlayerCount}
        <Header />
        <h3>Current player: {this.state.players[this.state.currentPlayer - 1].color}</h3>
        <button type='button' onClick={this.rollDice}>Roll dice</button>
        <p>THIS IS THE GAME PAGE!</p>
        <button type='button' onClick={this.endTurn}>End turn</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setPlayerCount: state.playerCount,
    setPlayers: state.players,
    setCurrentPlayer: state.currentPlayerNumber
  };
};

export default connect(mapStateToProps, null)(Game);