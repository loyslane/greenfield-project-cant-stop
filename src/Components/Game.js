import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCount: this.props.setPlayerCount,
      players: this.props.setPlayers
    }
  }

  render() {
    console.log(this.state.playerCount);
    return (
      <div>
        <Header />
        <h3>current player: </h3>
        <p>THIS IS THE GAME PAGE!</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setPlayerCount: state.playerCount,
    setPlayers: state.players,
  };
};

export default connect(mapStateToProps, null)(Game);