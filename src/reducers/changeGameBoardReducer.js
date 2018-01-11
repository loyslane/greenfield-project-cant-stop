import defaultGameBoard from './defaultGameBoard';

const changeGameBoardReducer = (state = defaultGameBoard, action) => {
  switch (action.type) {
    case 'SET_DICE_COMBO':
      return action.payload;
    default:
      return state;
  }
}

export default changeGameBoardReducer;
