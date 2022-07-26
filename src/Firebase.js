import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCk9vu9uo5Pk0tGF8YgJCGt2XJ97bfDL4U",
    authDomain: "women-safety-22d48.firebaseapp.com",
    projectId: "women-safety-22d48",
    storageBucket: "women-safety-22d48.appspot.com",
    messagingSenderId: "823931630367",
    appId: "1:823931630367:web:36f8e1d9ba10a93f7c362a",
    measurementId: "G-3ZS4FKLWVP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

