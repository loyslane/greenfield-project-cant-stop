import { combineReducers } from 'redux';
import setPlayerCountReducer from './setPlayerCountReducer';
import setPlayersReducer from './setPlayersReducer';
import setCurrentPlayerReducer from './setCurrentPlayerReducer';
import setChosenDiceComboReducer from './setChosenDiceComboReducer';
import changeGameBoardReducer from './changeGameBoardReducer';
// import numOfPlayersReducer from './numOfPlayersReducer';

const rootReducer = combineReducers({
  playerCount: setPlayerCountReducer,
  players: setPlayersReducer,
  currentPlayerNumber: setCurrentPlayerReducer,
  chosenDiceCombo: setChosenDiceComboReducer,
  gameBoard: changeGameBoardReducer
//   numOfPlayers: numOfPlayersReducer,
});

export default rootReducer;