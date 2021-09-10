import React from 'react';

type OwnProps = {
  buttonText: string
  color?: string
  icon?: string
  size?: number
  onClickEvent: () => number | void
}

type Props = OwnProps

export const Button = ({ buttonText, onClickEvent }: Props) => {
  return (
    <button onClick={() => onClickEvent()}>{buttonText}</button>
  );
};