import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../../reducers/game';

type PlayerNameProps = {
  defaultPlayerName: string
};

export const PlayerNameForm: React.FC<PlayerNameProps> = ({ defaultPlayerName }) => {
  const [playerName, setPlayerName] = useState('');
  const dispatch = useDispatch();
  const playerNameMinLength = 1;
  const playerNameMaxLength = 20;
  const handleOnSubmitName = () => {
    dispatch(game.actions.submitPlayerName(playerName));
  };

  return (
    <form onSubmit={handleOnSubmitName}>
      <label htmlFor="playername">Enter Name: </label>
      <input
        type="text"
        name="playername"
        minLength={playerNameMinLength}
        maxLength={playerNameMaxLength}
        placeholder={defaultPlayerName}
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
      <button type='submit' disabled={false}>Submit</button>
    </form>
  );
};
