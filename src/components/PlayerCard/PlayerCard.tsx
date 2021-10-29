import React from 'react';

import './PlayerCard.css';

type Props = { // TODO: Change this
  playerName: string
  totalScore: number
  turnScore: number
  isPlayerTurn: boolean
  colorTheme?: string
  ref: any
};

export const PlayerCard: React.FC<Props> = ({ playerName, totalScore, turnScore, isPlayerTurn, colorTheme }) => {

  return (
    <section className={isPlayerTurn ? "player-card-selected" : "player-card"}>
      {/* <input ref={playerTurn} /> */}
      <h2 className="player-name">{playerName}</h2>
      <h3 className="score">{totalScore}</h3>
      <div className={isPlayerTurn ? "turn-score-selected" : "turn-score"}>
        <p className="turn-score-text">Turn score</p>
        <p className="turn-score-number">{turnScore}</p>
      </div>
    </section >
  );
};

// TODO: create player name component and turn score component