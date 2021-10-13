import React from 'react';

import './Button.css';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  buttonText: string;
  type: ButtonType;
  buttonSize?: string;
  buttonStyle?: string;
  onClickFunction: () => number | void;
};

const STYLES = [
  'btn-primary-solid',
  'btn-secondary-solid',
  'btn-warning-solid',
  'btn-success-solid',
  'btn-primary-outline',
  'btn-secondary-outline',
  'btn-warning-outline',
  'btn-success-outline',
  'btn-primary-hover',
  'btn-secondary-hover',
  'btn-warning-hover',
  'btn-success-hover',
];

const SIZE = ['btn-medium', 'btn-large'];

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  type,
  onClickFunction,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle =
    buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize =
    buttonSize && SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={() => onClickFunction()}
    >
      {buttonText}
    </button>
  );
};
