import React from 'react';

function Input({ isGameWon, addGuess }) {
  const [input, setInput] = React.useState('');

  const logGuess = (event) => {
    event.preventDefault();
    addGuess(input.toUpperCase());
    setInput('');
  };

  const showInput = isGameWon === undefined;

  return (
    <form
      className="guess-input-wrapper"
      style={{ visibility: showInput ? 'visible' : 'hidden' }}
      onSubmit={(event) => logGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
}

export default Input;
