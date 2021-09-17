import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

type DiceProps = {
  diceRoll: number
};

export const Dice: React.FC<DiceProps> = ({ diceRoll }) => {
  const [diceImage, setDiceImage] = useState('');

  useEffect(() => {
    switch (diceRoll) {
      case 1:
        setDiceImage('dice-one.png');
        break;
      case 2:
        setDiceImage('dice-two.png');
        break;
      case 3:
        setDiceImage('dice-three.png');
        break;
      case 4:
        setDiceImage('dice-four.png');
        break;
      case 5:
        setDiceImage('dice-five.png');
        break;
      case 6:
        setDiceImage('dice-six.png');
        break;
      default:
        setDiceImage('');
    };
  }, [diceRoll]);

  return (
    <>
      <p>Dice Component Roll: {diceRoll}</p>
      {diceImage &&
        <div className={styles.diceWrapper}>
          <img className={styles.diceImage} src={`/images/${diceImage}`} alt='Dice' />
        </div>
      };
    </>
  );
};