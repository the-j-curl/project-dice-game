import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

type DiceProps = {
  diceRoll: number
};

export const Dice: React.FC<DiceProps> = ({ diceRoll }) => {
  const [diceImageSrc, setDiceImageSrc] = useState('');

  useEffect(() => {
    switch (diceRoll) {
      case 1:
        setDiceImageSrc('dice-one.png');
        break;
      case 2:
        setDiceImageSrc('dice-two.png');
        break;
      case 3:
        setDiceImageSrc('dice-three.png');
        break;
      case 4:
        setDiceImageSrc('dice-four.png');
        break;
      case 5:
        setDiceImageSrc('dice-five.png');
        break;
      case 6:
        setDiceImageSrc('dice-six.png');
        break;
      default:
        setDiceImageSrc('');
    };
  }, [diceRoll]);

  return (
    <>
      <p>Dice Component Roll: {diceRoll}</p>
      {diceImageSrc &&
        <div className={styles.diceWrapper}>
          <img className={styles.diceImage} src={`/images/${diceImageSrc}`} alt='Dice' />
        </div>
      }
    </>
  );
};