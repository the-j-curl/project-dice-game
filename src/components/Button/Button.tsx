import React from 'react';

type OwnProps = {
  buttonText: string
  color?: string
  icon?: string
  size?: number
  onClickFunction: () => number | void
}

type Props = OwnProps

export const Button = ({ buttonText, onClickFunction }: Props) => {
  return (
    <button onClick={() => onClickFunction()}>{buttonText}</button>
  );
};