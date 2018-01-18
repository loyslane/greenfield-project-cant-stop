import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Header from './Header';
import GameBoard from './GameBoard';
import { setCurrentPlayerNumber, setCurrentPlayerColor } from '../actions';
import './CSS/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerColor: this.props.setCurrentPlayerColor,
      currentPlayerNumber: this.props.setCurrentPlayerNumber,
      players: this.props.setPlayers,
      playerCount: this.props.setPlayerCount
    }
  }

  showPlayerMarker= (color) => {
    if (color === 'blue') return <img className='player-marker' src={require('../images/blue.png')} alt='blue-marker' />;
    if (color === 'green') return <img className='player-marker' src={require('../images/green.png')} alt='green-marker' />;
    if (color === 'orange') return <img className='player-marker' src={require('../images/orange.png')} alt='orange-marker' />;
    if (color === 'yellow') return <img className='player-marker' src={require('../images/yellow.png')} alt='yellow-marker' />;
  }

  rollDice = () => {
    this.props.history.push('/game/roll');
  }

  endTurn = () => {
    // set all white markers to current player's color
    // check for column winners
    // if winner of game, go to winner page
    let newCurrentPlayerNumber = this.state.currentPlayerNumber;
    let newCurrentPlayerColor = this.state.currentPlayerColor;
    if (newCurrentPlayerNumber === this.state.playerCount) {
      newCurrentPlayerNumber = 1;
      newCurrentPlayerColor = this.state.players[0].color;
    } else {
      newCurrentPlayerNumber += 1;
      newCurrentPlayerColor = this.state.players[newCurrentPlayerNumber - 1].color;
    }
    this.props.sendCurrentPlayerNumber(newCurrentPlayerNumber);
    this.props.sendCurrentPlayerColor(newCurrentPlayerColor);
    this.setState({
      currentPlayerNumber: newCurrentPlayerNumber,
      currentPlayerColor: newCurrentPlayerColor
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        <h3 className='current-player'>
          Current player:
          &nbsp;&nbsp;
          {this.showPlayerMarker(this.state.currentPlayerColor)}
          &nbsp;&nbsp;
          {this.state.currentPlayerColor}
          &nbsp;&nbsp;
          {this.showPlayerMarker(this.state.currentPlayerColor)}
        </h3>
        <hr/>
      </div>
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
    setPlayers: state.players,
    setPlayerCount: state.playerCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendCurrentPlayerColor: setCurrentPlayerColor,
    sendCurrentPlayerNumber: setCurrentPlayerNumber
  }, dispatch);
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Game));