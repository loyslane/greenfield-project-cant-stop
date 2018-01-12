import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Header from './Header';
import CurrentPlayer from './CurrentPlayer';
import GameBoard from './GameBoard';
import './CSS/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerColor: this.props.setCurrentPlayerColor,
      currentPlayerNumber: this.props.setCurrentPlayerNumber,
      players: this.props.setPlayers
    }
  }

  rollDice = () => {
    this.props.history.push('/game/roll');
  }

  endTurn = () => {
    // set all white markers to current player's color
    // check for column winners
    // if winner of game, go to winner page
    // change current player number and current player color
    // refresh page

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

const mapStateToProps = (state) => {
  return {
    setCurrentPlayerColor: state.currentPlayerColor,
    setCurrentPlayerNumber: state.currentPlayerNumber,
    setPlayers: state.players
  }
}

export default withRouter(connect(mapStateToProps,null)(Game));