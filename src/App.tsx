import { QuestionCard } from './components/Card/Card';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className={styles.wrapper}>
      <QuestionCard setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} />
    </div>
  );
}

export default App;
