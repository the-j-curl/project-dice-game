import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dice, GameRules, PlayerCard, Modal } from 'components';
import { game } from '../../redux/reducers/game'
import { ROLL_DICE, HOLD, RESET_GAME, NEW_GAME } from 'utils/variables';
import './GameBoard.css';

export const GameBoard: React.FC = () => {
  const playerOne = useSelector((store: any) => store.game.playerOneName); // TODO: import Game type and use here **Create Types file**
  const playerTwo = useSelector((store: any) => store.game.playerTwoName); // TODO: import Game type and use here
  const playerOneScore: number = useSelector((store: any) => store.game.totalScore.playerOne); // TODO: import Game type and use here
  const playerTwoScore: number = useSelector((store: any) => store.game.totalScore.playerTwo); // TODO: import Game type and use here
  const isPlayerOneTurn: boolean = useSelector((store: any) => store.game.isPlayerOneTurn); // TODO: import Game type and use here
  const isPlayerTwoTurn = useSelector((store: any) => store.game.isPlayerTwoTurn); // TODO: import Game type and use here
  const player = useRef(null);
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [turnScore, setTurnScore] = useState<number>(0);
  const [diceRolls, setDiceRolls] = useState<number>(0);
  const [turnCount, setTurnCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (randomNumber !== 1) {
      setTurnScore(turnScore + randomNumber);
    }
    if (randomNumber === 1) {
      dispatch(game.actions.changeTurn(!isPlayerOneTurn));
      setTurnScore(0);
      return;
    }
    // eslint-disable-next-line
  }, [randomNumber, diceRolls]);

  useEffect(() => {
    if (playerOneScore <= 99 && playerTwoScore <= 99 && isPlayerOneTurn) {

      setTurnCount(turnCount + 1)

    } if (playerOneScore >= 100 || playerTwoScore >= 100) {
      setTurnCount(0)
    }
  }, [isPlayerOneTurn]);

  const randomNumberGenerator = (min: number, max: number) => { // TODO: move to helper folder
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rollTheDice = (min: number, max: number) => { // TODO: move to helper folder
    let num = randomNumberGenerator(min, max);
    setRandomNumber(num);
    setDiceRolls(diceRolls + 1)
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
    setTurnCount(0);
  };

  if (playerOneScore <= 99 && playerTwoScore <= 99) {
    return (
      // <div className="main-wrapper">
      <main className="game">
        <p className="game-turn">Turn to roll: <span className="game-span">{isPlayerOneTurn ? 'Player One' : 'Player Two'}</span> - Turn number: <span className="game-span">{turnCount}</span></p>
        {/* <PlayerNameForm defaultPlayerName={pl} /> */}
        <section className="game-content">
          <PlayerCard
            // playerName={playerOne}
            defaultPlayerName={playerOne}
            totalScore={playerOneScore}
            turnScore={isPlayerOneTurn ? turnScore : 0}
            isPlayerTurn={isPlayerOneTurn ? true : false}
            ref={player}
          />
          <section className="game-content-button-section">
            <Button buttonText={RESET_GAME} onClickFunction={() => resetGame()} />
            <Button buttonText={ROLL_DICE} onClickFunction={() => rollTheDice(1, 6)} />
            <Dice diceRoll={randomNumber} />
            <Button buttonText={HOLD} onClickFunction={() => updateTotalScore(turnScore)} />
          </section>
          <PlayerCard
            // playerName={playerTwo}
            defaultPlayerName={playerTwo}
            totalScore={playerTwoScore}
            turnScore={isPlayerTwoTurn ? turnScore : 0}
            isPlayerTurn={!isPlayerOneTurn ? true : false}
            ref={player}
          />
        </section>
        <button onClick={() => setIsOpen(!isOpen)}>Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          This is the Modal
        </Modal>
        <GameRules />

      </main>
      // </div>
    );
  } else {
    return (
      <main className="boardWrapper">
        <p>Congratualtions {playerOneScore > playerTwoScore ? <span>{playerOne}</span> : <span>{playerTwo}</span>}, you won with {playerOneScore > playerTwoScore ? playerOneScore : playerTwoScore} points! 🏆</p>
        <Button buttonText={NEW_GAME} onClickFunction={() => resetGame()} />
      </main>
    ); // TODO: Create an end of game (EndGame) component
  };
};