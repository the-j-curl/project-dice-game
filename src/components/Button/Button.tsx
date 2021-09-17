import React from 'react';

type ButtonProps = {
  buttonText: string
  color?: string
  icon?: string
  size?: number
  onClickFunction: () => number | void
}

export const Button: React.FC<ButtonProps> = ({ buttonText, onClickFunction }) => {
  return (
    <button onClick={() => onClickFunction()}>{buttonText}</button>
  );
};