import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZ9PR-WJ7-jXfnXOkWDa5pL60ZNYOJ5-Q",
    authDomain: "e-commerce-app-5727b.firebaseapp.com",
    projectId: "e-commerce-app-5727b",
    storageBucket: "e-commerce-app-5727b.appspot.com",
    messagingSenderId: "866900738320",
    appId: "1:866900738320:web:9d44ccffe3c6ff11f76595",
    measurementId: "G-P5W9WMK4P2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;