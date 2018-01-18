import { combineReducers } from 'redux';
import setPlayerCountReducer from './setPlayerCountReducer';
// import setPlayerInfoReducer from './setPlayerInfoReducer';
import setPlayersReducer from './setPlayersReducer';
import setCurrentPlayerNumberReducer from './setCurrentPlayerNumberReducer';
import setCurrentPlayerColorReducer from './setCurrentPlayerColorReducer';
import setChosenDiceComboReducer from './setChosenDiceComboReducer';
import setGameBoardReducer from './setGameBoardReducer';
import setColumnWinnersReducer from './setColumnWinnersReducer';
import setTempMarkersReducer from './setTempMarkersReducer';
import setAvailableNumbersReducer from './setAvailableNumbersReducer';

const rootReducer = combineReducers({
  playerCount: setPlayerCountReducer,
  // playerInfo: setPlayerInfoReducer,
  players: setPlayersReducer,
  currentPlayerNumber: setCurrentPlayerNumberReducer,
  currentPlayerColor: setCurrentPlayerColorReducer,
  chosenDiceCombo: setChosenDiceComboReducer,
  gameBoard: setGameBoardReducer,
  columnWinners: setColumnWinnersReducer,
  tempMarkers: setTempMarkersReducer,
  availableNumbers: setAvailableNumbersReducer
});

export default rootReducer;