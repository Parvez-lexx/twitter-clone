import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnpnshWqAIYrMQj8ndjO_Y2c46iBPGJ-s",
    authDomain: "twitter-clone-adae2.firebaseapp.com",
    projectId: "twitter-clone-adae2",
    storageBucket: "twitter-clone-adae2.appspot.com",
    messagingSenderId: "283565645724",
    appId: "1:283565645724:web:6ce6b467551d9369f83259",
    measurementId: "G-6ZPXB0KSG6"
  };

  const firebase = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;