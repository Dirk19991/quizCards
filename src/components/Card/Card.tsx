import styles from './Card.module.scss';
import { questions } from '../../data/questions';
import { Dispatch, SetStateAction, useState } from 'react';
import { shuffleArray } from '../../utils/shuffle';

interface CardProps {
  questionNumber: number;
  setQuestionNumber: Dispatch<SetStateAction<number>>;
}

export const QuestionCard = ({
  questionNumber,
  setQuestionNumber,
}: CardProps) => {
  const [answerShown, setAnswerShown] = useState(false);
  const [clues, setClues] = useState(() => shuffleArray(questions));

  const length = clues.length;

  const setPrevious = () => {
    setQuestionNumber((prev) => (prev - 1 < 0 ? prev : prev - 1));
    setAnswerShown(false);
  };
  const setNext = () => {
    setQuestionNumber((prev) => (prev + 1 >= length ? prev : prev + 1));
    setAnswerShown(false);
  };

  const answer = Object.keys(clues[questionNumber])[0];
  const question =
    Object.values(clues[questionNumber])[0][0]?.toUpperCase() +
    Object.values(clues[questionNumber])[0].slice(1);
  const toggleAnswer = () => setAnswerShown((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>{answerShown ? answer : question}</div>
        <div className={styles.showAnswer} onClick={toggleAnswer}>
          {answerShown ? 'Show question' : 'Show answer'}
        </div>
        <div className={styles.buttons}>
          <div className={styles.prevButton} onClick={setPrevious}>
            Previous
          </div>
          <div className={styles.nextButton} onClick={setNext}>
            Next
          </div>
        </div>
      </div>
      <div className={styles.totalMix}>
        <div>
          Total: {length} / Current: {questionNumber + 1}
        </div>
        <div onClick={() => setClues(shuffleArray(clues))}>MIX</div>
      </div>
    </div>
  );
};
