import React, { useState } from 'react';

export const Dice = () => {
  const [diceRoll, setDiceRoll] = useState(0)

  return (
    <p>Dice Roll: {diceRoll}</p>
  );
};