import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCeurjdv3bg2CyowPsakSX7XIRb6hJI2HU",
    authDomain: "barter-app-6808e.firebaseapp.com",
    projectId: "barter-app-6808e",
    storageBucket: "barter-app-6808e.appspot.com",
    messagingSenderId: "750540067869",
    appId: "1:750540067869:web:e6a40d5a5653354e61e2f4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();