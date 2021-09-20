import React from 'react';

import './Button.css';

type ButtonProps = {
  buttonText: string
  color?: string
  icon?: string
  size?: number
  onClickFunction: () => number | void
}

export const Button: React.FC<ButtonProps> = ({ buttonText, onClickFunction }) => {
  return (
    <button className="game-button" onClick={() => onClickFunction()}>{buttonText}</button>
  );
};