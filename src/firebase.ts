// import { initializeApp } from 'firebase/app';
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   doc,
//   setDoc,
//   updateDoc,
// } from 'firebase/firestore/lite';
// import { questions } from './data/questions';
// import { Question } from './data/questions';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCycHccm94CYZH-tu7jXcNfNyrsTvMFCmk',
//   authDomain: 'quiz-4db30.firebaseapp.com',
//   projectId: 'quiz-4db30',
//   storageBucket: 'quiz-4db30.appspot.com',
//   messagingSenderId: '600793709262',
//   appId: '1:600793709262:web:d9d9a74e16f8c1565cae9f',
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// export async function getClues(db: ReturnType<typeof getFirestore>) {
//   const cluesCol = collection(db, 'clues');
//   const cluesSnapshot = await getDocs(cluesCol);
//   cluesSnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });

//   return cluesSnapshot;
// }

// export async function setClues(db: ReturnType<typeof getFirestore>) {
//   const docRef = doc(db, 'clues', '2a2vhlLqal3eCxLnQqOb');
//   questions.forEach(async (ques: Question) => {
//     const key = Object.keys(ques)[0];
//     const value = Object.values(ques)[0];

//     await updateDoc(docRef, {
//       [key]: value,
//     });
//   });
// }
