const setCurrentPlayerNumberReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYER_NUMBER':
      return action.payload;
    default:
      return state;
  }
};

export default setCurrentPlayerNumberReducer;