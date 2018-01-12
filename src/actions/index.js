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

export const setChosenDiceCombo = (diceCombo) => {
  return {
    type: 'SET_DICE_COMBO',
    payload: diceCombo
  }
}

export const setCurrentPlayerColor = (color) => {
  return {
    type: 'SET_CURRENT_PLAYER_COLOR',
    payload: color
  }
}