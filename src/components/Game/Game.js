import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(undefined);

  const addGuess = (newGuess) => {
    const newGuessList = [...guessList];
    const guessObj = { id: crypto.randomUUID(), guess: newGuess };

    if (guessList.find((obj) => obj.guess === newGuess) === undefined) {
      newGuessList.push(guessObj);
      console.log('Guess: ' + newGuess);
      setGuessList(newGuessList);
    } else {
      window.alert('You already guessed that. Try another word!');
    }

    if (newGuessList.length === NUM_OF_GUESSES_ALLOWED && newGuess !== answer) {
      setIsGameWon(false);
    } else if (newGuess === answer) {
      setIsGameWon(true);
    }
  };

  return (
    <>
      <Banner
        isGameWon={isGameWon}
        guessListLength={guessList.length}
        answer={answer}
      ></Banner>
      <Guesses guessList={guessList} answer={answer}></Guesses>
      <Input isGameWon={isGameWon} addGuess={addGuess}></Input>
    </>
  );
}

export default Game;
