import { combineReducers } from 'redux';
import setPlayerCountReducer from './setPlayerCountReducer';
import setPlayersReducer from './setPlayersReducer';
import setCurrentPlayerNumberReducer from './setCurrentPlayerNumberReducer';
import setCurrentPlayerColorReducer from './setCurrentPlayerColorReducer';
import setChosenDiceComboReducer from './setChosenDiceComboReducer';
import setGameBoardReducer from './setGameBoardReducer';
import setColumnWinnersReducer from './setColumnWinnersReducer';
// import numOfPlayersReducer from './numOfPlayersReducer';

const rootReducer = combineReducers({
  playerCount: setPlayerCountReducer,
  players: setPlayersReducer,
  currentPlayerNumber: setCurrentPlayerNumberReducer,
  currentPlayerColor: setCurrentPlayerColorReducer,
  chosenDiceCombo: setChosenDiceComboReducer,
  gameBoard: setGameBoardReducer,
  columnWinners: setColumnWinnersReducer
//   numOfPlayers: numOfPlayersReducer,
});

export default rootReducer;