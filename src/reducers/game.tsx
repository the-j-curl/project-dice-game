import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerOne: 'Player 1',
  playerTwo: 'Player 2',
  currentScore: {
    playerOne: 0,
    playerTwo: 0,
  },
  totalScore: {
    playerOne: 0,
    playerTwo: 0,
  },
  isPlayerOneTurn: true,
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updatePlayerName: (store, action) => {
      const { playerOneName, playerTwoName } = action.payload;
      store.playerOne = playerOneName;
      store.playerTwo = playerTwoName;
      localStorage.setItem('playerOne', playerOneName);
      localStorage.setItem('playerTwo', playerTwoName);
    },
    updateScore: (store, action) => {
      const { playerScore } = action.payload;
      if (store.isPlayerOneTurn) {
        store.totalScore.playerOne = store.totalScore.playerOne + playerScore;
      }
      if (!store.isPlayerOneTurn) {
        store.totalScore.playerTwo = store.totalScore.playerTwo + playerScore;
      }
    },
    changeTurn: (store, action) => {
      const { turn } = action.payload;
      store.isPlayerOneTurn = turn;
    },
  },
});