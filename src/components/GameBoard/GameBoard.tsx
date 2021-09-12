import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Dice, PlayerCard } from 'components';
import styles from './styles.module.css';

export const GameBoard: React.FC = () => {
  const playerOne = useSelector((store: any) => store.game.playerOne);
  const playerTwo = useSelector((store: any) => store.game.playerTwo);
  const playerOneScore = useSelector((store: any) => store.game.totalScore.playerOne)
  const playerTwoScore = useSelector((store: any) => store.game.totalScore.playerTwo)

  const [randomNum, setRandomNum] = useState(0);
  const diceButton = "Roll Dice"; // TODO: REMOVE THIS LINE

  const randomNumberGenerator = (min: number, max: number) => { // TODO: move to helper folder
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setDiceRoll = (min: number, max: number) => { // TODO: move to helper folder
    let num = randomNumberGenerator(min, max);
    setRandomNum(num)
  };

  return (
    <main className={styles.boardWrapper}>
      <p>Game Board</p>
      <PlayerCard playerName={playerOne} totalScore={playerOneScore} />
      <PlayerCard playerName={playerTwo} totalScore={playerTwoScore} />
      <Dice />
      <Button buttonText={diceButton} onClickFunction={() => setDiceRoll(1, 6)} />
      <p>Random number: {randomNum}</p>
    </main>
  );
};