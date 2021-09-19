import React from 'react';

import './Header.css'

type HeaderProps = {
  title: string
  logoImage: string
};

export const Header: React.FC<HeaderProps> = ({ title, logoImage }) => {
  return (
    <header className='header-container'>
      <h1 className='title'>{title}</h1>
      <img className='logo' src={`assets/${logoImage}`} />
    </header>
  );
};