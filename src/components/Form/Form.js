import React from 'react';

function Form({ handleSetWords, tracker }) {
  const [input, setInput] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(input);
        setInput('');
        handleSetWords(input);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern="^[A-Z]{5}$"
        title="Must be exactly 5 characters long. Letters only."
        maxLength={5}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
        disabled={tracker}
      ></input>
    </form>
  );
}

export default Form;
