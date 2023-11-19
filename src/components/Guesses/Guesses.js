import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

function Guesses({ guessList }) {
  let numGuessesLeft = NUM_OF_GUESSES_ALLOWED - guessList.length;

  return (
    <div className="guess-results">
      {guessList.map(({ id, guess }) => (
        <p key={id} className="guess">
          {[...guess].map((letter, idx) => (
            <span key={idx} className="cell">
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
