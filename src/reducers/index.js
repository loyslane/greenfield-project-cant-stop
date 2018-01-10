import { combineReducers } from 'redux';
import setPlayerCountReducer from './setPlayerCountReducer';
import setPlayersReducer from './setPlayersReducer';
import setCurrentPlayerReducer from './setCurrentPlayerReducer';
// import numOfPlayersReducer from './numOfPlayersReducer';
// import gameBoard from './gameBoardReducer';

const rootReducer = combineReducers({
  playerCount: setPlayerCountReducer,
  players: setPlayersReducer,
  currentPlayerNumber: setCurrentPlayerReducer
//   numOfPlayers: numOfPlayersReducer,
//   gameBoard: gameBoardReducer
});

export default rootReducer;