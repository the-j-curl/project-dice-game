import { createSlice } from "@reduxjs/toolkit";

interface TotalScore {
  playerOne?: number
  playerTwo?: number
}
interface Game {
  playerOne: string
  playerTwo: string
  totalScore: TotalScore
  isPlayerOneTurn: boolean
}

// interface UpdateNameAction {
//   payload: string
// }

// interface ScoreAction {
//   payload: number
// }

// interface TurnAction {
//   payload: boolean
// }

interface Action {
  payload: any
}

const initialState: Game = {
  playerOne: 'Player 1',
  playerTwo: 'Player 2',
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
    updatePlayerName: (store: Game, action: Action) => {
      const { playerOne, playerTwo } = action.payload;
      store.playerOne = playerOne;
      store.playerTwo = playerTwo;
      localStorage.setItem('playerOne', playerOne);
      localStorage.setItem('playerTwo', playerTwo);
    },
    updateScore: (store: Game, action: Action) => {
      const { playerScore } = action.payload;
      if (store.isPlayerOneTurn) {
        store.totalScore.playerOne += playerScore;
      }
      if (!store.isPlayerOneTurn) {
        store.totalScore.playerTwo = store.totalScore.playerTwo + playerScore;
      }
    },
    changeTurn: (store: Game, action: Action) => {
      const { turn } = action.payload;
      store.isPlayerOneTurn = turn;
    },
  },
});