export const setPlayerCount = (playerCount) => {
  return {
    type: 'SET_PLAYER_COUNT',
    payload: playerCount
  }
}

export const setPlayers = (playerColors) => {
  return {
    type: 'SET_PLAYERS',
    payload: playerColors
  }
}