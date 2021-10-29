import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../../redux/reducers/game';

type PlayerNameProps = {
  defaultPlayerOneName: string
  defaultPlayerTwoName: string
};

export const PlayerNameForm: React.FC<PlayerNameProps> = ({ defaultPlayerOneName, defaultPlayerTwoName }) => {
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');

  const dispatch = useDispatch();

  const playerNameMinLength = 1;
  const playerNameMaxLength = 20;

  const handleOnSubmitName = (event: any) => {
    event.preventDefault();
    dispatch(game.actions.submitPlayerNames({ playerOneName, playerTwoName }));
    setPlayerOneName('');
    setPlayerTwoName('');
  };

  return (
    <form onSubmit={handleOnSubmitName}>
      <label htmlFor="playeronename">Enter Name: </label>
      <input
        type="text"
        name="playeronename"
        minLength={playerNameMinLength}
        maxLength={playerNameMaxLength}
        placeholder={defaultPlayerOneName}
        value={playerOneName}
        onChange={(event) => setPlayerOneName(event.target.value)}
      />
      <label htmlFor="playertwoname">Enter Name: </label>
      <input
        type="text"
        name="playertwoname"
        minLength={playerNameMinLength}
        maxLength={playerNameMaxLength}
        placeholder={defaultPlayerTwoName}
        value={playerTwoName}
        onChange={(event) => setPlayerTwoName(event.target.value)}
      />
      <button type="submit" disabled={false}>Submit</button>
      <button type="button" disabled={false}>Cancel</button>
    </form>
  );
};
