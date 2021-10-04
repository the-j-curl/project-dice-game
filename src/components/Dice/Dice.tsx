import React, { useState, useEffect } from 'react';

import { DICE_ONE, DICE_TWO, DICE_THREE, DICE_FOUR, DICE_FIVE, DICE_SIX, QUESTION_MARK } from '../../utils/variables';
import './Dice.css';

type DiceProps = {
  diceRoll: number
  loading: boolean
};

export const Dice: React.FC<DiceProps> = ({ diceRoll, loading }) => {
  const [diceImageSrc, setDiceImageSrc] = useState<string>(''); // TODO: maybe create custom type?

  useEffect(() => {
    switch (diceRoll) {
      case 1:
        setDiceImageSrc(DICE_ONE);
        break;
      case 2:
        setDiceImageSrc(DICE_TWO);
        break;
      case 3:
        setDiceImageSrc(DICE_THREE);
        break;
      case 4:
        setDiceImageSrc(DICE_FOUR);
        break;
      case 5:
        setDiceImageSrc(DICE_FIVE);
        break;
      case 6:
        setDiceImageSrc(DICE_SIX);
        break;
      default:
        setDiceImageSrc(QUESTION_MARK);
    };
  }, [diceRoll]);

  return (
    <>
      <div className="dice-wrapper">
        {loading ? <img className="dice-image" src={`/assets/${QUESTION_MARK}`} alt="Question mark from https://www.flaticon.com" /> :
          <img className="dice-image" src={`/assets/${diceImageSrc}`} alt="Dice and question mark images from https://www.flaticon.com" />
        }
      </div>
    </>
  );
};