import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.setPlayers,
      currentPlayer: this.props.setCurrentPlayer
    }
  }

  render() {
    return (
      <div>
        <h3>Current player: {this.state.players[this.state.currentPlayer - 1].color}</h3>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setPlayers: state.players,
    setCurrentPlayer: state.currentPlayerNumber
  }
}

export default connect(mapStateToProps)(CurrentPlayer);