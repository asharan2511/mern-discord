import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_aDGbjkZbUJqG6P20c6BgaG5trwghhno",
  authDomain: "mern-discord-59e0a.firebaseapp.com",
  projectId: "mern-discord-59e0a",
  storageBucket: "mern-discord-59e0a.appspot.com",
  messagingSenderId: "383239963014",
  appId: "1:383239963014:web:76f346ae3b6f62ee592c07",
  measurementId: "G-N8XJ4SX8ES",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
