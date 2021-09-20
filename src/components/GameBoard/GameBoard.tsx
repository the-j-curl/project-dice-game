import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Dice, GameRules, PlayerCard } from 'components';
import { game } from '../../redux/reducers/game'
import { ROLL_DICE, HOLD, RESET_GAME, NEW_GAME } from 'utils/variables';
import './GameBoard.css';

export const GameBoard: React.FC = () => {
  const playerOne = useSelector((store: any) => store.game.playerOneName); // TODO: import Game type and use here **Create Types file**
  const playerTwo = useSelector((store: any) => store.game.playerTwoName); // TODO: import Game type and use here
  const playerOneScore: number = useSelector((store: any) => store.game.totalScore.playerOne); // TODO: import Game type and use here
  const playerTwoScore: number = useSelector((store: any) => store.game.totalScore.playerTwo); // TODO: import Game type and use here
  const isPlayerOneTurn = useSelector((store: any) => store.game.isPlayerOneTurn); // TODO: import Game type and use here
  const isPlayerTwoTurn = useSelector((store: any) => store.game.isPlayerTwoTurn); // TODO: import Game type and use here
  const player = useRef(null);
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState(0);
  const [turnScore, setTurnScore] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);

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
  };

  if (playerOneScore <= 99 && playerTwoScore <= 99) {
    return (
      // <div className="main-wrapper">
      <main className="game">
        <p className="game-turn">Turn to roll: <span className="game-span">{isPlayerOneTurn ? 'Player One' : 'Player Two'}</span></p>
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