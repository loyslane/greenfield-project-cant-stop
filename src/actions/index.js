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

export const setCurrentPlayerNumber = (number) => {
  return {
    type: 'SET_CURRENT_PLAYER_NUMBER',
    payload: number
  }
}

export const setCurrentPlayerColor = (color) => {
  return {
    type: 'SET_CURRENT_PLAYER_COLOR',
    payload: color
  }
}

export const setTempMarkers = (tempMarkers) => {
  return {
    type: 'SET_TEMP_WORKERS',
    payload: tempMarkers
  }
}

export const setAvailableNumbers = (availableNumbers) => {
  return {
    type: 'SET_AVAILABLE_NUMBERS',
    payload: availableNumbers
  }
}