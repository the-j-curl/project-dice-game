import React from 'react';
// import { useSelector } from 'react-redux';

import styles from './styles.module.css';

type Props = { // TODO: Change this
  playerName: string
  totalScore: number
  turnScore: number | 0
}

export const PlayerCard: React.FC<Props> = ({ playerName, totalScore, turnScore }) => {
  // const reduxScore = useSelector((store: any) => store.game.totalScore)
  return (
    <section className={styles.cardWrapper}>
      <h2>{playerName}</h2>
      <h4>Total: {totalScore}</h4>
      {console.log('totalScore', totalScore)}
      <h4>Turn score: {turnScore}</h4>
    </section>
  );
};