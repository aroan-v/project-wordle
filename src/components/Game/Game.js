import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// import { nextTick } from 'process';

function Game() {
  const [word, setWords] = React.useState([]);
  const [tracker, setTracker] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  function handleSetWords(input) {
    const newWords = [...word];
    newWords.push(input);
    setWords(newWords);

    if (input === answer) {
      setTracker('win');
      return;
    }

    if (newWords.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log('lost!');
      setTracker('lose');
    }
  }

  function resetGame() {
    setAnswer(() => {
      return sample(WORDS);
    });
    setWords([]);
    setTracker(false);
  }

  console.info({ answer });

  return (
    <>
      <Guess word={word} answer={answer} />
      <Form handleSetWords={handleSetWords} tracker={tracker} />
      {!!tracker && (
        <Banner
          result={tracker}
          counter={word.length}
          answer={answer}
          resetCallback={resetGame}
        />
      )}
    </>
  );
}

export default Game;
