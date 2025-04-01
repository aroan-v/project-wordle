import React from 'react';

function Tracker({ word }) {
  return (
    <div className="guess-results">
      {word.map(({ input, id }) => (
        <p className="guess" key={id}>
          {input}
        </p>
      ))}
    </div>
  );
}

export default Tracker;
