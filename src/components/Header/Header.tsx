import React from 'react';

import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.titleText}>Pig Dice Game</h1>
    </header>
  );
};