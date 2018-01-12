const setCurrentPlayerColorReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYER_COLOR':
      return action.payload;
    default:
      return state;
  }
}

export default setCurrentPlayerColorReducer;