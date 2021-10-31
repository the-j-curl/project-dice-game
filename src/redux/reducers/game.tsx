import { createSlice } from "@reduxjs/toolkit";

interface TotalScore {
  playerOne?: number
  playerTwo?: number
}
export interface Game {
  playerOneName: string
  playerTwoName: string
  isPlayerOneTurn: boolean
  isPlayerTwoTurn: boolean
  isGameStarted: boolean
  isRulesOpen: boolean
  isNameChangeOpen: boolean
  totalScore: TotalScore
  turnCount: number
}
interface Action {
  payload: any
}

const initialState: Game = {
  playerOneName: 'Player 1',
  playerTwoName: 'Player 2',
  isPlayerOneTurn: true,
  isPlayerTwoTurn: false,
  isGameStarted: false,
  isRulesOpen: false,
  isNameChangeOpen: false,
  totalScore: {
    playerOne: 0,
    playerTwo: 0,
  },
  turnCount: 1,
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitPlayerNames: (store: Game, action: Action) => {
      const { playerOneName, playerTwoName } = action.payload;
      if (playerOneName && playerTwoName) {
        store.playerOneName = playerOneName;
        store.playerTwoName = playerTwoName;
      } if (playerOneName && !playerTwoName) {
        store.playerOneName = playerOneName;
      } if (!playerOneName && playerTwoName) {
        store.playerTwoName = playerTwoName;
      }
    },
    gameStarted: (store: Game, action: Action) => {
      store.isGameStarted = action.payload;
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
    changeShowRules: (store: Game, action: Action) => {
      store.isRulesOpen = action.payload;
    },
    changeShowNameForm: (store: Game, action: Action) => {
      store.isNameChangeOpen = action.payload;
    },
    updateTurnCount: (store: Game, action: Action) => {
      store.turnCount = action.payload;
    },
    resetGame: () => {
      return initialState;
    },
  },
});