import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from 'components';
import { CLOSE, GAME_RULES2 } from '../../utils/variables';
import { game } from '../../redux/reducers/game';

import './GameRules.css';

type GameRulesProps = {

};

export const GameRules: React.FC<GameRulesProps> = () => {
  const isRulesOpen = useSelector((store: any) => store.game.isRulesOpen);
  const dispatch = useDispatch();

  return (
    <Modal open={isRulesOpen} onClose={() => dispatch(game.actions.changeShowRules(!isRulesOpen))} buttonText={CLOSE} buttonStyle="btn-secondary-solid">
      <section className="rules">
        <h4 className="rules-header">Game Rules:</h4>
        <p className="rules-content">{GAME_RULES2}</p>
      </section>
    </Modal>
  );
};