import React from 'react';

function Reset({ resetCallback }) {
  return (
    <button className="reset-button" onClick={resetCallback}>
      Reset Game
    </button>
  );
}

export default Reset;
