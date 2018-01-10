const setPlayersReducer = (state = [{name: 'Player 1', color: null}, {name: 'Player 2', color: null}], action) => {
  switch (action.type) {
    case 'SET_PLAYERS': 
      return action.payload;
    default:
      return state;
  }
};

export default setPlayersReducer;
