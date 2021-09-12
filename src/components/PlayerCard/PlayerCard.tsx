import React from 'react';

import styles from './styles.module.css';

type OwnProps = { // TODO: Change this
  playerName: string
  totalScore: number
}

type Props = OwnProps

export const PlayerCard: React.FC<Props> = ({ playerName, totalScore }) => {
  return (
    <section className={styles.cardWrapper}>
      <h2>{playerName}</h2>
      <h4>{totalScore}</h4>
    </section>
  );
};