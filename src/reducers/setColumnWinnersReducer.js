import defaultColumnWinners from './defaults/defaultColumnWinners';

const setColumnWinnersReducer = (state = defaultColumnWinners, action) => {
  switch (action.type) {
    case 'SET_COLUMN_WINNER':
      return action.payload;
    default:
      return state;
  }
}

export default setColumnWinnersReducer;