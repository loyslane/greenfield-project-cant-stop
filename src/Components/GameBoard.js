import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.setPlayers,
      // playerCount: this.props.setPlayerCount,
      currentPlayer: this.props.setCurrentPlayer,
      chosenDiceCombo: this.props.setChosenDiceCombo
    }
  }

  render() {
    return (
      <div>
        {/* <h3>Current player: {this.state.players[this.state.currentPlayer - 1].color}</h3> */}
        <p>INSERT GAME BOARD HERE</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // setPlayerCount: state.playerCount,
    setPlayers: state.players,
    setCurrentPlayer: state.currentPlayerNumber,
    setChosenDiceCombo: state.chosenDiceCombo
  };
};

export default withRouter(connect(mapStateToProps, null)(GameBoard));