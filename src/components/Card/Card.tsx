import styles from './Card.module.scss';
import { useState } from 'react';
import { shuffleArray } from '../../utils/shuffle';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { Question } from '../../data/questions';

interface CardProps {
  questions: Question[];
  storageKey: string;
}

export const QuestionCard = ({ storageKey, questions }: CardProps) => {
  console.log('questions', questions);
  const [questionNumber, setQuestionNumber] = useLocalStorage(storageKey + 'number', 0);
  const [answerShown, setAnswerShown] = useState(false);
  const [clues, setClues] = useLocalStorage(storageKey, questions);

  const totalQuestions = clues.length;

  const setPrevious = () => {
    setQuestionNumber((prev) => (prev - 1 < 0 ? prev : prev - 1));
    setAnswerShown(false);
  };
  const setNext = () => {
    setQuestionNumber((prev) => (prev + 1 >= totalQuestions ? prev : prev + 1));
    setAnswerShown(false);
  };

  const mixClues = () => {
    setClues(shuffleArray(clues));
    setQuestionNumber(0);
  };

  console.log(clues);

  const trimmedAnswer = Object.keys(clues[questionNumber])[0].trim();
  const answer = trimmedAnswer[0]?.toUpperCase() + trimmedAnswer.slice(1);

  const trimmedQuestion = Object.values(clues[questionNumber])[0].trim();
  const question = trimmedQuestion[0]?.toUpperCase() + trimmedQuestion.slice(1);
  const toggleAnswer = () => setAnswerShown((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>{answerShown ? answer : question}</div>

        <div className={styles.showAnswer} onClick={toggleAnswer}>
          {answerShown ? 'Show question' : 'Show answer'}
        </div>
        <div className={styles.buttons}>
          <button className={styles.prevButton} onClick={setPrevious}>
            Previous
          </button>
          <button className={styles.nextButton} onClick={setNext}>
            Next
          </button>
        </div>
      </div>
      <div className={styles.totalMix}>
        <div>
          {questionNumber + 1} / {totalQuestions}
        </div>
        <Link className={styles.togglePage} to={storageKey === 'general' ? 'js' : `/`}>
          {storageKey === 'general' ? 'JS questions' : `Quiz questions`}
        </Link>
        <div onClick={mixClues}>MIX</div>
      </div>
    </div>
  );
};
