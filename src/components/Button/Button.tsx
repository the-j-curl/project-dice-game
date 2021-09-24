import React from 'react';

import './Button.css';

type ButtonProps = {
  buttonText: string
  buttonType: string
  color?: string
  buttonSize?: string
  buttonStyle?: string
  onClickFunction: () => number | void
}

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",

];

const SIZE = ["btn--medium", "btn--small"];

export const Button: React.FC<ButtonProps> = ({ buttonText, buttonType, onClickFunction, color, buttonStyle, buttonSize }) => {

  const checkButtonStyle = buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = buttonSize && SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    // <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={buttonType} onClick={() => onClickFunction()}>{buttonText}</button>
    <button className="game-button" onClick={() => onClickFunction()}>{buttonText}</button>
  );
};