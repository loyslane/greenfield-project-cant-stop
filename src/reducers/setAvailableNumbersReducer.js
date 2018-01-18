const setAvailableNumbersReducer = (state = [2,3,4,5,6,7,8,9,10,11,12], action) => {
  switch (action.type) {
    case 'SET_AVAILABLE_NUMBERS':
      return action.payload;
    default:
      return state;
  }
}

export default setAvailableNumbersReducer;