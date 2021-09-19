import { createSlice } from "@reduxjs/toolkit";

interface TotalScore {
  playerOne?: number
  playerTwo?: number
}
interface Game {
  playerOneName: string
  playerTwoName: string
  isPlayerOneTurn: boolean
  isPlayerTwoTurn: boolean
  totalScore: TotalScore
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
  playerOneName: 'Player 1',
  playerTwoName: 'Player 2',
  isPlayerOneTurn: true,
  isPlayerTwoTurn: false,
  totalScore: {
    playerOne: 0,
    playerTwo: 0,
  },
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitPlayerName: (store: Game, action: Action) => {
      const { playerOne, playerTwo } = action.payload;
      store.playerOneName = playerOne;
      store.playerTwoName = playerTwo;
      localStorage.setItem('playerOne', playerOne);
      localStorage.setItem('playerTwo', playerTwo);
    },
    updateScore: (store: any, action: any) => {
      if (store.isPlayerOneTurn) {
        store.totalScore.playerOne = store.totalScore.playerOne + action.payload;
      }
      if (store.isPlayerTwoTurn) {
        store.totalScore.playerTwo = store.totalScore.playerTwo + action.payload;
      }
    },
    changeTurn: (store: Game, action: Action) => {
      store.isPlayerOneTurn = action.payload;
      store.isPlayerTwoTurn = !action.payload;
    },
    resetGame: () => {
      return initialState;
    },
  },
});