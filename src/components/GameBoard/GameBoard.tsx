import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dice, PlayerCard } from 'components';
// import { updateScore } from '../../reducers/game'
import { game } from '../../reducers/game'
import styles from './styles.module.css';

export const GameBoard: React.FC = () => {
  const playerOne = useSelector((store: any) => store.game.playerOne); // TODO: import Game type and use here
  const playerTwo = useSelector((store: any) => store.game.playerTwo); // TODO: import Game type and use here
  const playerOneScore = useSelector((store: any) => store.game.totalScore.playerOne); // TODO: import Game type and use here
  const playerTwoScore = useSelector((store: any) => store.game.totalScore.playerTwo); // TODO: import Game type and use here
  const isPlayerOneTurn = useSelector((store: any) => store.game.isPlayerOneTurn); // TODO: import Game type and use here
  const isPlayerTwoTurn = useSelector((store: any) => store.game.isPlayerTwoTurn); // TODO: import Game type and use here
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState(0);
  const [turnScore, setTurnScore] = useState(0);
  const diceButton = "Roll Dice"; // TODO: REMOVE THIS LINE
  const holdButton = "Hold"; // TODO: Move this to a new file

  useEffect(() => {
    if (randomNumber !== 1) {
      setTurnScore(turnScore + randomNumber)
    }
    if (randomNumber === 1) {
      // dispatch(changeTurn()) TODO: set up turn dispatch
      return
    }

  }, [randomNumber]);

  const randomNumberGenerator = (min: number, max: number) => { // TODO: move to helper folder
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setDiceRoll = (min: number, max: number) => { // TODO: move to helper folder
    let num = randomNumberGenerator(min, max);
    setRandomNumber(num)
  };

  const setHoldScore = (turnScore: number) => {
    dispatch(game.actions.updateScore(turnScore));
    dispatch(game.actions.changeTurn(!isPlayerOneTurn));
    setTurnScore(0);
  };

  return (
    <main className={styles.boardWrapper}>
      <p>Game Board</p>
      <PlayerCard playerName={playerOne} totalScore={playerOneScore} turnScore={turnScore} />
      <PlayerCard playerName={playerTwo} totalScore={playerTwoScore} turnScore={turnScore} />
      <Dice />
      <Button buttonText={diceButton} onClickFunction={() => setDiceRoll(1, 6)} />
      <p>Random number: {randomNumber}</p>
      <p>Turn total: {turnScore}</p>
      <Button buttonText={holdButton} onClickFunction={() => setHoldScore(turnScore)} />
      <p>Player turn: {isPlayerOneTurn ? "Player One" : "Player Two"}</p>
    </main>
  );
};