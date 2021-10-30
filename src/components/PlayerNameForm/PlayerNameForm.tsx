import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button } from 'components';
import { CLOSE } from '../../utils/variables';
import { game } from '../../redux/reducers/game';

import './PlayerNameForm.css';

type PlayerNameProps = {
  defaultPlayerOneName: string
  defaultPlayerTwoName: string
};

export const PlayerNameForm: React.FC<PlayerNameProps> = ({ defaultPlayerOneName, defaultPlayerTwoName }) => {
  const isNameFormOpen = useSelector((store: any) => store.game.isNameChangeOpen)
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
    <Modal open={isNameFormOpen} onClose={() => dispatch(game.actions.changeShowNameForm(!isNameFormOpen))} buttonText={CLOSE}>
      <section className="change-name">
        <h4 className="change-name-heading">Enter Player Names</h4>
        <form className="change-name-form" onSubmit={handleOnSubmitName}>
          <label htmlFor="playeronename">Player One:
            <input
              type="text"
              className="change-name-form-input"
              name="playeronename"
              minLength={playerNameMinLength}
              maxLength={playerNameMaxLength}
              placeholder="Enter Name"
              value={playerOneName}
              onChange={(event) => setPlayerOneName(event.target.value)}
            />
          </label>
          <label htmlFor="playertwoname">Player Two:
            <input
              type="text"
              className="change-name-form-input"
              name="playertwoname"
              minLength={playerNameMinLength}
              maxLength={playerNameMaxLength}
              placeholder="Enter Name"
              value={playerTwoName}
              onChange={(event) => setPlayerTwoName(event.target.value)}
            />
          </label>
          <button type="submit" disabled={false}>Submit</button>
        </form>
      </section>
    </Modal>
  );
};
