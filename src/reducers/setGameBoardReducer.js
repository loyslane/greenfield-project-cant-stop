import defaultGameBoard from './defaults/defaultGameBoard';

const setGameBoardReducer = (state = defaultGameBoard, action) => {
  switch (action.type) {
    case 'SET_DICE_COMBO':
      return action.payload;
    default:
      return state;
  }
}

export default setGameBoardReducer;
