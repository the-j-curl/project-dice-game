import React from 'react';

import { GAME_RULES } from '../../utils/variables'
import './GameRules.css';

export const GameRules: React.FC = () => {

  return (
    <section className="rules-container">
      <h4>Game Rules</h4>
      <p>{GAME_RULES}</p>
    </section>
  );
};