import { combineReducers } from 'redux';
import setPlayerCountReducer from './setPlayerCountReducer';
import setPlayersReducer from './setPlayersReducer';
// import numOfPlayersReducer from './numOfPlayersReducer';
// import gameBoard from './gameBoardReducer';

const rootReducer = combineReducers({
  playerCount: setPlayerCountReducer,
  players: setPlayersReducer,
//   numOfPlayers: numOfPlayersReducer,
//   gameBoard: gameBoardReducer
});

export default rootReducer;