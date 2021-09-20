import React from 'react';

import './GameRules.css';

export const GameRules: React.FC = () => {

  return (
    <section className="rules-container">
      <h4>Game Rules</h4>
      <p>Each player takes it in turns to roll the dice. The player continues to roll the dice until they choose to hold their current score or they roll a one. When you hold your current turn score your points  will be added to your total score. If you roll a one your turn ends. The first player to score 100 or more wins. Good luck! </p>
    </section>
  );
};