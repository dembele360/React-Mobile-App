import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAb7IW7JPAnuGcursJGWKXxNaYfxmVP9Us",
    authDomain: "mygas-e0f47.firebaseapp.com",
    projectId: "mygas-e0f47",
    storageBucket: "mygas-e0f47.appspot.com",
    messagingSenderId: "618311606943",
    appId: "1:618311606943:web:4217867860b3e68ab178aa"
  };

  // firebase.InitializeApp(firebaseConfig);
   const firebaseApp = firebase.initializeApp(firebaseConfig);
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(config);
  // }


  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}  