import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './CSS/GameBoard.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.setPlayers,
      currentPlayer: this.props.setCurrentPlayer,
      chosenDiceCombo: this.props.setChosenDiceCombo,
      gameBoard: this.props.setupGameBoard
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='column2 grid-title'>2</div>
          <p className='row1 grid-item'>
          <img className='player-icon' src={require('../images/blue.png')} alt='logo' />
          <img className='player-icon' src={require('../images/green.png')} alt='logo' />
          <img className='player-icon' src={require('../images/orange.png')} alt='logo' />
          <img className='player-icon' src={require('../images/yellow.png')} alt='logo' />
          {/* <img className='player-icon' src={require('../images/white.png')} alt='logo' /> */}
          </p>
          <p className='row2 grid-item'><img className='player-icon' src={require('../images/white.png')} alt='logo' /></p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 empty'></p>
          <p className='row5 empty'></p>
          <p className='row6 empty'></p>
          <p className='row7 empty'></p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column3 grid-title'>3</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 empty'></p>
          <p className='row7 empty'></p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column4 grid-title'>4</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column5 grid-title'>5</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 grid-item'>colors</p>
          <p className='row9 grid-item'>colors</p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column6 grid-title'>6</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 grid-item'>colors</p>
          <p className='row9 grid-item'>colors</p>
          <p className='row10 grid-item'>colors</p>
          <p className='row11 grid-item'>colors</p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column7 grid-title'>7</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 grid-item'>colors</p>
          <p className='row9 grid-item'>colors</p>
          <p className='row10 grid-item'>colors</p>
          <p className='row11 grid-item'>colors</p>
          <p className='row12 grid-item'>colors</p>
          <p className='row13 grid-item'>colors</p>
        <div className='column8 grid-title'>8</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 grid-item'>colors</p>
          <p className='row9 grid-item'>colors</p>
          <p className='row10 grid-item'>colors</p>
          <p className='row11 grid-item'>colors</p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column9 grid-title'>9</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 grid-item'>colors</p>
          <p className='row9 grid-item'>colors</p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column10 grid-title'>10</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 grid-item'>colors</p>
          <p className='row7 grid-item'>colors</p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column11 grid-title'>11</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 grid-item'>colors</p>
          <p className='row5 grid-item'>colors</p>
          <p className='row6 empty'></p>
          <p className='row7 empty'></p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <div className='column12 grid-title'>12</div>
          <p className='row1 grid-item'>colors</p>
          <p className='row2 grid-item'>colors</p>
          <p className='row3 grid-item'>colors</p>
          <p className='row4 empty'></p>
          <p className='row5 empty'></p>
          <p className='row6 empty'></p>
          <p className='row7 empty'></p>
          <p className='row8 empty'></p>
          <p className='row9 empty'></p>
          <p className='row10 empty'></p>
          <p className='row11 empty'></p>
          <p className='row12 empty'></p>
          <p className='row13 empty'></p>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // setPlayerCount: state.playerCount,
    setPlayers: state.players,
    setCurrentPlayer: state.currentPlayerNumber,
    setChosenDiceCombo: state.chosenDiceCombo,
    setupGameBoard: state.gameBoard,
  };
};

export default withRouter(connect(mapStateToProps, null)(GameBoard));