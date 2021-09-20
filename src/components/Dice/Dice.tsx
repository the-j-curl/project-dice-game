import React, { useState, useEffect } from 'react';

import './Dice.css';

type DiceProps = {
  diceRoll: number
};

export const Dice: React.FC<DiceProps> = ({ diceRoll }) => {
  const [diceImageSrc, setDiceImageSrc] = useState<string>(''); // TODO: maybe create custom type?

  useEffect(() => {
    switch (diceRoll) {
      case 1:
        setDiceImageSrc('dice-one.png'); // TODO: create variables for img names
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
        setDiceImageSrc('question-mark.png');
    };
  }, [diceRoll]);

  return (
    <>
      <div className="dice-wrapper">
        <img className="dice-image" src={`/assets/${diceImageSrc}`} alt='Dice' />
      </div>
    </>
  );
};