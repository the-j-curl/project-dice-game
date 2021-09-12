import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dice, PlayerCard } from 'components';
import { game } from '../../reducers/game'
import styles from './styles.module.css';

export const GameBoard: React.FC = () => {
  const playerOne = useSelector((store: any) => store.game.playerOne); // TODO: import Game type and use here
  const playerTwo = useSelector((store: any) => store.game.playerTwo); // TODO: import Game type and use here
  const playerOneScore: number = useSelector((store: any) => store.game.totalScore.playerOne); // TODO: import Game type and use here
  const playerTwoScore: number = useSelector((store: any) => store.game.totalScore.playerTwo); // TODO: import Game type and use here
  const isPlayerOneTurn = useSelector((store: any) => store.game.isPlayerOneTurn); // TODO: import Game type and use here
  const isPlayerTwoTurn = useSelector((store: any) => store.game.isPlayerTwoTurn); // TODO: import Game type and use here
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState(0);
  const [turnScore, setTurnScore] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);
  const diceButton = 'Roll Dice'; // TODO: REMOVE THIS LINE
  const holdButton = 'Hold'; // TODO: Move this to a new file
  const resetButton = 'Restart Game'; // TODO: Move this to a new file
  const newGameButton = 'New Game'; // TODO: Move this to a new file

  useEffect(() => {
    if (randomNumber !== 1) {
      setTurnScore(turnScore + randomNumber);
    }
    if (randomNumber === 1) {
      dispatch(game.actions.changeTurn(!isPlayerOneTurn));
      setTurnScore(0);
      return;
    }
    // eslint-disable-next-line
  }, [randomNumber, diceRolls]);

  const randomNumberGenerator = (min: number, max: number) => { // TODO: move to helper folder
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rollTheDice = (min: number, max: number) => { // TODO: move to helper folder
    let num = randomNumberGenerator(min, max);
    setRandomNumber(num);
    setDiceRolls(diceRolls + 1)
  };

  const updateTotalScore = (turnScore: number) => {
    dispatch(game.actions.updateScore(turnScore));
    dispatch(game.actions.changeTurn(!isPlayerOneTurn));
    setTurnScore(0);
  };

  const resetGame = () => {
    dispatch(game.actions.resetGame());
    dispatch(game.actions.changeTurn(!isPlayerOneTurn));
    setTurnScore(0);
    setRandomNumber(0);
  };

  if (playerOneScore <= 99 && playerTwoScore <= 99) {
    return (
      <main className={styles.boardWrapper}>
        <p>Game Board - First to 100 wins!</p>
        <PlayerCard
          playerName={playerOne}
          totalScore={playerOneScore}
          turnScore={isPlayerOneTurn ? turnScore : 0}
        />
        <PlayerCard
          playerName={playerTwo}
          totalScore={playerTwoScore}
          turnScore={isPlayerTwoTurn ? turnScore : 0}
        />
        <Dice />
        <Button buttonText={diceButton} onClickFunction={() => rollTheDice(1, 6)} />
        <p>Random number: {randomNumber}</p>
        <p>Turn total: {turnScore}</p>
        <Button buttonText={holdButton} onClickFunction={() => updateTotalScore(turnScore)} />
        <p>Player turn: {isPlayerOneTurn ? "Player One" : "Player Two"}</p>
        <Button buttonText={resetButton} onClickFunction={() => resetGame()} />
      </main>
    );
  } else {
    return (
      <main className={styles.boardWrapper}>
        <p>Congratualtions, you won</p>
        <Button buttonText={newGameButton} onClickFunction={() => resetGame()} />
      </main>
    ); // TODO: Create a congratutions component
  };
};