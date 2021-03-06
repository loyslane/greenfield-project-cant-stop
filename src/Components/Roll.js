import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setChosenDiceCombo } from '../actions';
import Header from './Header';
import GameBoard from './GameBoard';
import CurrentPlayer from './CurrentPlayer';
import { setTempMarkers } from '../actions';
import './CSS/Roll.css'


class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRolls: [],
      allDiceCombos: [],
      allNumberCombos: [],
      currentPlayerColor: this.props.setCurrentPlayerColor,
      players: this.props.setPlayers,
      gameBoard: this.props.setupGameBoard,
      tempMarkers: this.props.setTempMarkers,
      availableNumbers: this.props.setAvailableNumbers
    }
  }

  componentWillMount() {
    this.rollDice();
  }

  rollDice = () => {
    const newDiceRollsArray = this.state.diceRolls;
    newDiceRollsArray.push(Math.floor(Math.random() * 6) + 1);
    newDiceRollsArray.push(Math.floor(Math.random() * 6) + 1);
    newDiceRollsArray.push(Math.floor(Math.random() * 6) + 1);
    newDiceRollsArray.push(Math.floor(Math.random() * 6) + 1);
    const newAllDiceCombosArray = this.state.allDiceCombos;
    const newAllNumberCombosArray = this.state.allNumberCombos;
    const comboPermutations = (array) => {
      newAllDiceCombosArray.push([array[0], array[1], array[2], array[3]]);
      newAllNumberCombosArray.push([array[0] + array[1], array[2] + array[3]])
      newAllDiceCombosArray.push([array[0], array[2], array[1], array[3]]);
      newAllNumberCombosArray.push([array[0] + array[2], array[1] + array[3]])
      newAllDiceCombosArray.push([array[0], array[3], array[1], array[2]]);
      newAllNumberCombosArray.push([array[0] + array[3], array[1] + array[2]])
    }
    comboPermutations(this.state.diceRolls);
    // let validCombos = [false, false, false];
    // console.log(this.state.tempMarkers)
    // console.log(newAllNumberCombosArray)
    // // for (let i = 0; i <= 2; i++) {
    // //   if (this.state.tempMarkers[i].includes(newAllNumberCombosArray[i][0]) || this.state.tempMarkers[i].includes(newAllNumberCombosArray[i][0])) validCombos[i] = true;
    // // }
    // console.log(validCombos);
    // console.log(this.state.availableNumbers);
    // if (this.state.tempMarkers) console.log('there are temp markers');
    // else console.log('there are no temp markers');
    // if (this.state.availableNumbers)
    // let counter = 0;
    // for (let i = 0; i <= 2; i++) {
    //   for (let j = 0; i <= 1; i++) {
    //     if (newAllNumberCombosArray[i][j])
    //   }
    // }
    // {this.state.allNumberCombos[0][0]}
    // [0][0], [0][1]
    // [1][0], [1][1]
    // [2][0], [2][1]
    //
    // if combos are invalid, end turn
    // invalid scenario 1: all whites are assigned and not a single combo number matches the assignment
    // invalid scenario 2: ....
    //
    this.setState({
      diceRolls: newDiceRollsArray,
      allDiceCombos: newAllDiceCombosArray,
      allNumberCombos: newAllNumberCombosArray
    })
  }

  showDice = (diceRollNumber) => {
    if (diceRollNumber === 1) return <img className='dice' src={require('../images/red-die-1.png')} alt='die1' />
    if (diceRollNumber === 2) return <img className='dice' src={require('../images/red-die-2.png')} alt='die1' />
    if (diceRollNumber === 3) return <img className='dice' src={require('../images/red-die-3.png')} alt='die1' />
    if (diceRollNumber === 4) return <img className='dice' src={require('../images/red-die-4.png')} alt='die1' />
    if (diceRollNumber === 5) return <img className='dice' src={require('../images/red-die-5.png')} alt='die1' />
    if (diceRollNumber === 6) return <img className='dice' src={require('../images/red-die-6.png')} alt='die1' />
  }

  combo1 = () => {
    // const chosenDiceComboArray = this.state.allNumberCombos[0];
    const num1 = this.state.allNumberCombos[0][0];
    const num2 = this.state.allNumberCombos[0][1];
    const newTempMarkersObject = this.state.tempMarkers;
    if (!newTempMarkersObject) console.log('valid combos (BOTH numbers): there are no numbers in temp marker');
    else {
      if (newTempMarkersObject[num1]) console.log('this number is in temp marker');
      else if (!newTempMarkersObject[num1]) console.log('this number is NOT in temp marker');
    }
    // if (newTempMarkersObject[num1] && newTempMarkersObject[num1] !== 1) console.log('valid combo: there is a match');
    // else if (newTempMarkersObject[num1] && newTempMarkersObject[num1] === 1) console.log('NOT a valid combo: ' + num1 + ' has reached the top');
    // else if (!newTempMarkersObject[num1] && newTempMarkersObject.length < 3) console.log('valid combo: there is room');
    // else if (!newTempMarkersObject[num1] && newTempMarkersObject.length === 3) console.log('NOT a valid combo: there is no room');
    // this.props.sendChosenDiceCombo(chosenDiceComboArray);
    this.props.history.push('/game');
  }

  combo2 = () => {
    const chosenDiceComboArray = this.state.allNumberCombos[1];
    this.props.sendChosenDiceCombo(chosenDiceComboArray);
    this.props.history.push('/game');
  }

  combo3 = () => {
    const chosenDiceComboArray = this.state.allNumberCombos[2];
    this.props.sendChosenDiceCombo(chosenDiceComboArray);
    this.props.history.push('/game');
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentPlayer />
        <h4 className='dice-rolled'>You rolled:&nbsp;&nbsp;
          {this.showDice(this.state.diceRolls[0])}
          {this.showDice(this.state.diceRolls[1])}
          {this.showDice(this.state.diceRolls[2])}
          {this.showDice(this.state.diceRolls[3])}
        </h4>
        <h3 className='dice-combos'>Please choose a dice combo: 
          <p className='combos'>
            <button className='btn-block' type='button' onClick={this.combo1}>
              {this.showDice(this.state.allDiceCombos[0][0])}
              {this.showDice(this.state.allDiceCombos[0][1])}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.showDice(this.state.allDiceCombos[0][2])}
              {this.showDice(this.state.allDiceCombos[0][3])}
              <p className='combo-numbers'>
                {this.state.allNumberCombos[0][0]}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.allNumberCombos[0][1]}
              </p>
            </button>
          </p>
          <p className='combos'>
            <button className='btn-block' type='button' onClick={this.combo2}>
              {this.showDice(this.state.allDiceCombos[1][0])}
              {this.showDice(this.state.allDiceCombos[1][1])}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.showDice(this.state.allDiceCombos[1][2])}
              {this.showDice(this.state.allDiceCombos[1][3])}
              <p className='combo-numbers'>
                {this.state.allNumberCombos[1][0]}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.allNumberCombos[1][1]}
              </p>
            </button>
          </p>
          <p className='combos'>
            <button className='btn-block' type='button' onClick={this.combo3}>
              {this.showDice(this.state.allDiceCombos[2][0])}
              {this.showDice(this.state.allDiceCombos[2][1])}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.showDice(this.state.allDiceCombos[2][2])}
              {this.showDice(this.state.allDiceCombos[2][3])}
              <p className='combo-numbers'>
                {this.state.allNumberCombos[2][0]}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.allNumberCombos[2][1]}
              </p>
            </button>
          </p>
        </h3>
        <GameBoard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setCurrentPlayerColor: state.currentPlayerColor,
    setPlayers: state.players,
    setupGameBoard: state.gameBoard,
    setAvailableNumbers: state.availableNumbers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendChosenDiceCombo: setChosenDiceCombo,
    sendTempMarkers: setTempMarkers
  }, dispatch);
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Roll));