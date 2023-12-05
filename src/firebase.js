// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "-43K9RRHSyvDh68",
    authDomain: "ebaseapp.com",
    projectId: "firestore-test-b0931",
    storageBucket: "firestore-test-b0931.appspot.com",
    messagingSenderId: "",
    appId: "1::web:4d20fd60224289168913b2"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
