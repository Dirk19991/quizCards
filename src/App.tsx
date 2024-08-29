/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionCard } from './components/Card/Card';
import styles from './App.module.scss';
import { useLocation } from 'react-router-dom';
import { questions } from './data/questions';
import { questions2 } from './data/questions2';
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
  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     // Generate a random index lower than the current element
  //     const j = Math.floor(Math.random() * (i + 1));

  //     // Swap elements at indices i and j
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  function removeDuplicates(array) {
    const seenValues = new Set();
    return array.filter(
      (obj: { [s: string]: unknown } | ArrayLike<unknown>) => {
        const value = Object.values(obj)[0];
        if (seenValues.has(value)) {
          return false;
        } else {
          seenValues.add(value);
          return true;
        }
      }
    );
  }

  function formatDataForWord(data: any) {
    let formattedText = '';
    const getKey = (obj: object) => Object.keys(obj)[0].trim();

    const filteredData = removeDuplicates(data);
    console.log(filteredData, 'data');
    filteredData
      .sort((a: any, b: any) => {
        const keyA = getKey(a);
        const keyB = getKey(b);
        return keyA.localeCompare(keyB);
      })
      .forEach((item: { [x: string]: string }) => {
        for (const key in item) {
          formattedText += `${key} - ${item[key]}` + '\n\n';
        }
      });
    return formattedText;
  }

  const fullQuestions = questions.concat(questions2);
  const formattedText = formatDataForWord(fullQuestions);
  console.log(formattedText);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const blob = new Blob([JSON.stringify(formattedText)], {
  //   type: 'text/plain;charset=utf-8',
  // });
  // console.log(blob);
  // FileSaver.saveAs(blob, 'hello world.txt');

  return (
    <div className={styles.wrapper}>
      {includesJs && <QuestionCard storageKey='js' questions={questionsJs} />}
      {!includesJs && (
        <QuestionCard storageKey='general' questions={fullQuestions} />
      )}
    </div>
  );
}

export default App;
