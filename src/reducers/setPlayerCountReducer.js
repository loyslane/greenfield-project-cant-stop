// import { SET_PLAYER_COUNT } from "../actions/index";

const setPlayerCountReducer = (state = 2, action) => {
  switch (action.type) {
    case 'SET_PLAYER_COUNT': 
      return {
        ...state,
        playerCount: action.playerCount
      };
    default:
      return state;
  }
};

export default setPlayerCountReducer;
