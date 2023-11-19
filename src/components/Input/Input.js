import React from 'react';

function Input({ addGuess }) {
  const [input, setInput] = React.useState('');

  const logGuess = (event) => {
    event.preventDefault();
    addGuess(input.toUpperCase());
    setInput('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => logGuess(event)}>
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
