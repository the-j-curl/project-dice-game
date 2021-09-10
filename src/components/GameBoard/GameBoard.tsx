import React, { useState } from 'react';

import { Button, Dice } from 'components';
import styles from './styles.module.css';

export const GameBoard = () => {
  const [randomNum, setRandomNum] = useState(0)
  const diceButton = "Roll Dice";

  const randomNumberGenerator = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setDiceRoll = (min: number, max: number) => {
    let num = randomNumberGenerator(min, max);
    setRandomNum(num)
  };

  return (
    <main className={styles.boardWrapper}>
      <p>Game Board</p>
      <Dice />
      <Button buttonText={diceButton} onClickFunction={() => setDiceRoll(1, 6)} />
      <p>Random number: {randomNum}</p>
    </main>
  );
};