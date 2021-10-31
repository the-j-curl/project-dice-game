import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dice, GameRules, PlayerCard, Modal, PlayerNameForm } from 'components';
import { game } from '../../redux/reducers/game';
import { ROLL_DICE, HOLD, RESET_GAME, NEW_GAME, SHOW_RULES, CHANGE_NAMES } from 'utils/variables';
import './GameBoard.css';

interface WinnerData {
  winner: {
    name: string;
    score: number;
    turns: number;
  };
};

export const GameBoard: React.FC = () => {
  const playerOneName = useSelector((store: any) => store.game.playerOneName); // TODO: import Game type and use here **Create Types file**
  const playerTwoName = useSelector((store: any) => store.game.playerTwoName); // TODO: import Game type and use here
  const playerOneScore = useSelector((store: any) => store.game.totalScore.playerOne); // TODO: import Game type and use here
  const playerTwoScore = useSelector((store: any) => store.game.totalScore.playerTwo); // TODO: import Game type and use here
  const isPlayerOneTurn = useSelector((store: any) => store.game.isPlayerOneTurn); // TODO: import Game type and use here
  const isPlayerTwoTurn = useSelector((store: any) => store.game.isPlayerTwoTurn); // TODO: import Game type and use here
  const isRulesOpen = useSelector((store: any) => store.game.isRulesOpen); // TODO: import Game type and use here
  const turnCount = useSelector((store: any) => store.game.turnCount);
  // const isGameStarted = useSelector((store: any) => store.game.isGameStarted);
  const isNameFormOpen = useSelector((store: any) => store.game.isNameChangeOpen);
  const player = useRef(null);
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [turnScore, setTurnScore] = useState<number>(0);
  const [diceRolls, setDiceRolls] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // TODO: Rename this to End Game Modal
  const [diceLoader, setDiceLoader] = useState<boolean>(false);
  const [winner, setWinner] = useState<WinnerData>({
    winner: {
      name: '',
      score: 0,
      turns: 0
    }
  });

  useEffect(() => {
    if (randomNumber !== 1) {
      setTurnScore(turnScore + randomNumber);
    };
    if (randomNumber === 1) {
      dispatch(game.actions.changeTurn(!isPlayerOneTurn));
      setTurnScore(0);
      return;
    };
    // eslint-disable-next-line
  }, [diceRolls]);

  useEffect(() => {
    if (playerOneScore <= 99 && playerTwoScore <= 99 && isPlayerOneTurn && randomNumber !== 0) {
      dispatch(game.actions.updateTurnCount(turnCount + 1));
    } if (playerOneScore >= 100 || playerTwoScore >= 100) {
      setIsModalOpen(true);
      if (playerOneScore > playerTwoScore) {
        setWinner({
          winner: {
            name: playerOneName,
            score: playerOneScore,
            turns: turnCount
          }
        });

      } else {
        setIsModalOpen(true);
        setWinner({
          winner: {
            name: playerTwoName,
            score: playerTwoScore,
            turns: turnCount
          }
        });
      }
    }
    // eslint-disable-next-line
  }, [isPlayerOneTurn]);

  const randomNumberGenerator = (min: number, max: number): number => { // TODO: move to helper folder
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rollTheDice = (min: number, max: number) => { // TODO: move to helper folder
    setDiceLoader(true);
    setTimeout(function () {
      let num = randomNumberGenerator(min, max);
      setRandomNumber(num);
      setDiceRolls(diceRolls + 1);
      setDiceLoader(false);
    }, 400);
  };

  const updateTotalScore = (turnScore: number) => {
    dispatch(game.actions.updateScore(turnScore));
    dispatch(game.actions.changeTurn(!isPlayerOneTurn));
    setTurnScore(0);
  };

  const resetGame = () => {
    dispatch(game.actions.resetGame());
    setTurnScore(0);
    setRandomNumber(0);
    setIsModalOpen(false);
    setWinner({
      winner: {
        name: '',
        score: 0,
        turns: 0
      }
    });
  };

  const handleSetRules = () => {
    dispatch(game.actions.changeShowRules(!isRulesOpen));
  };

  const handleShowNameForm = () => {
    dispatch(game.actions.changeShowNameForm(!isNameFormOpen))
  };

  return (
    <main className="game">
      <PlayerNameForm />
      {isRulesOpen ? <GameRules /> : null}
      <p className="game-turn">Turn to roll: <span>{isPlayerOneTurn ? 'Player One' : 'Player Two'}</span> - Turn number: <span className="game-span">{turnCount}</span></p>
      <section className="game-content">
        <PlayerCard
          playerName={playerOneName}
          totalScore={playerOneScore}
          turnScore={isPlayerOneTurn ? turnScore : 0}
          isPlayerTurn={isPlayerOneTurn ? true : false}
          ref={player}
        />
        <section className="game-content-button-section">
          <Button type="button" buttonText={RESET_GAME} buttonStyle="btn-warning-hover" onClickFunction={() => resetGame()} />
          <Button type="button" buttonText={ROLL_DICE} buttonStyle="btn-primary-solid" onClickFunction={() => rollTheDice(1, 6)} />
          <Dice diceRoll={randomNumber} loading={diceLoader} />
          <Button type="button" buttonText={HOLD} buttonStyle="btn-success-hover" onClickFunction={() => updateTotalScore(turnScore)} />
        </section>
        <PlayerCard
          playerName={playerTwoName}
          totalScore={playerTwoScore}
          turnScore={isPlayerTwoTurn ? turnScore : 0}
          isPlayerTurn={!isPlayerOneTurn ? true : false}
          ref={player}
        />
      </section>
      <Modal open={isModalOpen} onClose={resetGame} buttonText={NEW_GAME} onButtonClick={resetGame} buttonStyle="btn-success-hover">
        Congratualtions {winner.winner.name}! <br />You won in {winner.winner.turns} turns and scored {winner.winner.score} points! 🏆
      </Modal>
      <section className="game-lower-buttons">
        <Button type="button" buttonText={SHOW_RULES} buttonStyle="btn-secondary-solid" onClickFunction={() => handleSetRules()} />
        <Button type="button" buttonText={CHANGE_NAMES} buttonStyle="btn-secondary-solid" onClickFunction={() => handleShowNameForm()} />
      </section>
    </main>
  );
};