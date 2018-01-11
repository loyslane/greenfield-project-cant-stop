const setChosenDiceComboReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DICE_COMBO':
      return action.payload;
    default:
      return state;
  }
}

export default setChosenDiceComboReducer;