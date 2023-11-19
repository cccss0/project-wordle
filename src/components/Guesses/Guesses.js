import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guesses({ guessList, answer }) {
  let numGuessesLeft = NUM_OF_GUESSES_ALLOWED - guessList.length;

  const getGuessResults = (guess) => {
    return checkGuess(guess, answer);
  };

  return (
    <div className="guess-results">
      {guessList.map(({ id, guess }) => (
        <p key={id} className="guess">
          {getGuessResults(guess).map(({ letter, status }, idx) => (
            <span key={idx} className={'cell ' + status}>
              {letter}
            </span>
          ))}
        </p>
      ))}

      {range(0, numGuessesLeft).map((wal, idx) => (
        <p key={idx} className="guess">
          {range(0, WORD_LENGTH).map((val, idx) => (
            <span key={idx} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
