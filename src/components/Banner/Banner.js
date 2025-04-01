import React from 'react';
import Reset from '../Reset/Reset';

function Banner({ result, counter, answer, resetCallback }) {
  if (result === 'win') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations! </strong>
          Got it in
          <strong>
            {counter === 1
              ? ` ${counter} guess.`
              : ` ${counter} guesses.`}
          </strong>
        </p>
        <Reset resetCallback={resetCallback} />
      </div>
    );
  } else if (result === 'lose')
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is
          <strong> {answer}.</strong>
        </p>
        <Reset resetCallback={resetCallback} />
      </div>
    );
}

export default Banner;
