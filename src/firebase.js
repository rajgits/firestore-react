// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "firestore-test-b0931.firebaseapp.com",
    projectId: "firestore-test-b0931",
    storageBucket: "firestore-test-b0931.appspot.com",
    messagingSenderId: "323518381111",
    appId: "1:323518381111:web:4d20fd60224289168913b2"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
