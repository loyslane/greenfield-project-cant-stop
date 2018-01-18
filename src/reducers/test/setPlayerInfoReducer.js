import defaultPlayerInfo from './defaults/defaultPlayerInfo';

const setPlayerInfoReducer = (state = defaultPlayerInfo, action) => {
  switch (action.type) {
    case 'SET_PLAYER_COUNT':
      return action.payload;
    // case 'SET_CURRENT_PLAYER_NUMBER':
    //   return action.payload;
    // case 'SET_CURRENT_PLAYER_COLOR':
    //   return action.payload;
    // case 'SET_PLAYERS':
    //   return action.payload;
    default:
      return state;
  }  
};

export default setPlayerInfoReducer;