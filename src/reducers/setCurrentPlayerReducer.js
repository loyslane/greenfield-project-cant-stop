const setCurrentPlayerReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYER':
      return action.payload;
    default:
      return state;
  }
};

export default setCurrentPlayerReducer;