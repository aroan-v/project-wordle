import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

/**
 *  @component
 * @param {Object} props - The properties passed to the component.
 * @param {array} props.word - An array of all the guesses madeby the user
 * @param {string} props.answer - The correct answer to compare against.
 * @returns {JSX.Element} - A styled representation of the guessed word.
 */

function Guess({ word, answer }) {
  function Cell({ status = '', letter }) {
    return (
      <span className={`cell ${status}`}>
        {letter}
        <VisuallyHidden status={status} />
      </span>
    );
  }

  function HandleCell({ currentWord }) {
    // Has not passed a word prop
    if (!currentWord) {
      return range(5).map((item, index) => (
        <Cell key={crypto.randomUUID()} />
      ));
    }

    return checkGuess(currentWord, answer).map(
      ({ letter, status }) => (
        <Cell
          status={status}
          letter={letter}
          key={crypto.randomUUID()}
        />
      )
    );
  }

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p className="guess" key={crypto.randomUUID()}>
          <HandleCell currentWord={word[num]} />
        </p>
      ))}
    </div>
  );
}

export default Guess;
