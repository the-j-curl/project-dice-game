import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from 'components';
import { GAME_RULES, CLOSE } from '../../utils/variables'
import { game } from '../../redux/reducers/game';

import './GameRules.css';

type GameRulesProps = {

};

export const GameRules: React.FC<GameRulesProps> = () => {
  const isRulesOpen = useSelector((store: any) => store.game.isRulesOpen);
  const dispatch = useDispatch();

  return (
    <Modal open={isRulesOpen} onClose={() => dispatch(game.actions.changeShowRules(!isRulesOpen))} buttonText={CLOSE} >
      <section className="rules-container">
        <h4>Game Rules:</h4>
        <p>{GAME_RULES}</p>
      </section>
    </Modal>
  );
};