import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { GameBoard, Header } from 'components';
import { game } from '../../redux/reducers/game';
import { headerTitle, lightLogo, darkLogo, blueLogo, darkBlueLogo, orangeLogo } from '../../utils/variables';
import './App.css'

const reducer = combineReducers({
  game: game.reducer,
});
const store = configureStore({ reducer });

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <div className='container'> */}
      <Header title={headerTitle} logoImage={darkBlueLogo} />
      <GameBoard />
      {/* </div> */}
    </Provider>
  );
};
