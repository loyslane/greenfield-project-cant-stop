import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './CSS/GameBoard.css';

// const blue = <img className='winner-icon' src={require('../images/blue.png')} alt='blue-icon' />
// const green = <img className='winner-icon' src={require('../images/green.png')} alt='green-icon' />
// const orange = <img className='winner-icon' src={require('../images/orange.png')} alt='orange-icon' />
// const yellow = <img className='winner-icon' src={require('../images/yellow.png')} alt='yellow-icon' /> 

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.setPlayers,
      currentPlayerColor: this.props.setCurrentPlayerColor,
      chosenDiceCombo: this.props.setChosenDiceCombo,
      gameBoard: this.props.setupGameBoard,
      gameBoardTitles: [2,3,4,5,6,7,8,9,10,11,12],
      columnWinners: this.props.setColumnWinners
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='column2 grid-title'>{this.state.gameBoardTitles[0]}</div>  
            <p className='row1 grid-item'>
              {/* <img className='player-icon' src={require('../images/blue.png')} alt='blue-icon' />
              <img className='player-icon' src={require('../images/green.png')} alt='green-icon' />
              <img className='player-icon' src={require('../images/orange.png')} alt='orange-icon' />
              <img className='player-icon' src={require('../images/yellow.png')} alt='yellow-icon' />
              <img className='player-icon' src={require('../images/white.png')} alt='white-icon' /> */}
            </p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
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
          <div className='column3 grid-title'>{this.state.gameBoardTitles[1]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 empty'></p>
            <p className='row7 empty'></p>
            <p className='row8 empty'></p>
            <p className='row9 empty'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column4 grid-title'>{this.state.gameBoardTitles[2]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 empty'></p>
            <p className='row9 empty'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column5 grid-title'>{this.state.gameBoardTitles[3]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 grid-item'></p>
            <p className='row9 grid-item'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column6 grid-title'>{this.state.gameBoardTitles[4]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 grid-item'></p>
            <p className='row9 grid-item'></p>
            <p className='row10 grid-item'></p>
            <p className='row11 grid-item'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column7 grid-title'>{this.state.gameBoardTitles[5]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 grid-item'></p>
            <p className='row9 grid-item'></p>
            <p className='row10 grid-item'></p>
            <p className='row11 grid-item'></p>
            <p className='row12 grid-item'></p>
            <p className='row13 grid-item'></p>
          <div className='column8 grid-title'>{this.state.gameBoardTitles[6]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 grid-item'></p>
            <p className='row9 grid-item'></p>
            <p className='row10 grid-item'></p>
            <p className='row11 grid-item'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column9 grid-title'>{this.state.gameBoardTitles[7]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 grid-item'></p>
            <p className='row9 grid-item'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column10 grid-title'>{this.state.gameBoardTitles[8]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 grid-item'></p>
            <p className='row7 grid-item'></p>
            <p className='row8 empty'></p>
            <p className='row9 empty'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column11 grid-title'>{this.state.gameBoardTitles[9]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
            <p className='row4 grid-item'></p>
            <p className='row5 grid-item'></p>
            <p className='row6 empty'></p>
            <p className='row7 empty'></p>
            <p className='row8 empty'></p>
            <p className='row9 empty'></p>
            <p className='row10 empty'></p>
            <p className='row11 empty'></p>
            <p className='row12 empty'></p>
            <p className='row13 empty'></p>
          <div className='column12 grid-title'>{this.state.gameBoardTitles[10]}</div>
            <p className='row1 grid-item'></p>
            <p className='row2 grid-item'></p>
            <p className='row3 grid-item'></p>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setPlayers: state.players,
    setCurrentPlayerColor: state.currentPlayerColor,
    setChosenDiceCombo: state.chosenDiceCombo,
    setupGameBoard: state.gameBoard,
    setColumnWinners: state.columnWinners
  };
};

export default withRouter(connect(mapStateToProps, null)(GameBoard));