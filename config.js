import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDfKKbP4RphcDOzvq5rKO3-kFsFN2cmBfU",
    authDomain: "foody-d56d9.firebaseapp.com",
    databaseURL: "https://foody-d56d9.firebaseio.com",
    projectId: "foody-d56d9",
    storageBucket: "foody-d56d9.appspot.com",
    messagingSenderId: "805345005634",
    appId: "1:805345005634:web:4c1fbca1a6c96253a49ddb",
    measurementId: "G-XEX8HTB6BQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();