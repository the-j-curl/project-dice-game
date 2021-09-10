import React from 'react';

import styles from './styles.module.css';

type OwnProps = {
  playerName: string
  totalScore: number
}

type Props = OwnProps

export const PlayerCard = ({ playerName, totalScore }: Props) => {
  return (
    <section className={styles.cardWrapper}>
      <h2>{playerName}</h2>
      <h4>{totalScore}</h4>
    </section>
  );
};