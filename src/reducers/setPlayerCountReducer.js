const setPlayerCountReducer = (state = 2, action) => {
  switch (action.type) {
    case 'SET_PLAYER_COUNT': 
      return action.payload;
    default:
      return state;
  }
};

export default setPlayerCountReducer;
