import { QuestionCard } from './components/Card/Card';
import styles from './App.module.scss';
import { useLocation } from 'react-router-dom';
import { questions } from './data/questions';
import { questionsJs } from './data/questions-js';
// import FileSaver from 'file-saver';
// import { useEffect } from 'react';
// import { db, getClues, setClues } from './firebase';

function App() {
  // useEffect(() => {
  //   const fetchClues = async () => {
  //     const clues = await getClues(db);
  //     return clues;
  //   };
  //   const addClues = async () => {
  //     await setClues(db);
  //   };
  //   addClues();
  //   fetchClues();
  // }, []);

  const location = useLocation();
  const includesJs = location.pathname === '/js';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index lower than the current element
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function formatDataForWord(data: any) {
    let formattedText = '';
    shuffleArray(data).forEach((item: { [x: string]: string }) => {
      for (const key in item) {
        formattedText += item[key] + '\n\n'; // Value as another paragraph
        formattedText += key + '\n\n'; // Key as one paragraph
      }
    });
    return formattedText;
  }

  const formattedText = formatDataForWord(questions);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const blob = new Blob([JSON.stringify(formattedText)], {
    type: 'text/plain;charset=utf-8',
  });
  console.log(blob);
  // FileSaver.saveAs(blob, 'hello world.txt');

  return (
    <div className={styles.wrapper}>
      {includesJs && <QuestionCard storageKey='js' questions={questionsJs} />}
      {!includesJs && <QuestionCard storageKey='general' questions={questions} />}
    </div>
  );
}

export default App;
