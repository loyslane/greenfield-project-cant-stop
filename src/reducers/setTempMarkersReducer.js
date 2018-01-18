const setTempMarkersReducer = (state = {length: 0}, action) => {
  switch (action.type) {
    case 'SET_TEMP_MARKERS':
      return action.payload;
    default:
      return state;
  }
}

export default setTempMarkersReducer;