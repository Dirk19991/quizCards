import { QuestionCard } from './components/Card/Card';
import styles from './App.module.scss';
import { useLocation } from 'react-router-dom';
import { questions } from './data/questions';
import { questionsJs } from './data/questions-js';

function App() {
  const location = useLocation();
  const includesJs = location.pathname === '/js';

  return (
    <div className={styles.wrapper}>
      {includesJs && <QuestionCard storageKey='js' questions={questionsJs} />}
      {!includesJs && (
        <QuestionCard storageKey='general' questions={questions} />
      )}
    </div>
  );
}

export default App;
