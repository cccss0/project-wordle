import React from 'react';

function Banner({ isGameWon, guessListLength, answer }) {
  return (
    <>
      {isGameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {` ` + guessListLength}{' '}
              {guessListLength > 1 ? 'guesses' : 'guess'}
            </strong>
            .
          </p>
        </div>
      )}

      {isGameWon !== undefined && !isGameWon && (
        <div className="sad banner">
          <p>You are out of guesses :(</p>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
