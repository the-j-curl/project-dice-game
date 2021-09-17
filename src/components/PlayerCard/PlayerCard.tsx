import React from 'react';

import styles from './styles.module.css';

type Props = { // TODO: Change this
  defaultPlayerName: string
  totalScore: number
  turnScore: number | 0
  ref: any
}

export const PlayerCard: React.FC<Props> = ({ defaultPlayerName, totalScore, turnScore }) => {

  // const playerTurn = useRef();
  // console.log('selectPlayerCard', playerTurn)
  // const reduxScore = useSelector((store: any) => store.game.totalScore)
  return (
    <section className={styles.cardWrapper}>
      {/* <input ref={playerTurn} /> */}
      <h2>{defaultPlayerName}</h2>
      <h4>Total: {totalScore}</h4>
      <h4>Turn score: {turnScore}</h4>
    </section>
  );
};