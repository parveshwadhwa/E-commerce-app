import firebase from 'firebase/app'; //pulling firebase utility library

import 'firebase/firestore';// pulling firestore for database
import 'firebase/auth';// pulling auth from firestore for authentication

const config = { // object for our project
    apiKey: "AIzaSyAZ9PR-WJ7-jXfnXOkWDa5pL60ZNYOJ5-Q",
    authDomain: "e-commerce-app-5727b.firebaseapp.com",
    projectId: "e-commerce-app-5727b",
    storageBucket: "e-commerce-app-5727b.appspot.com",
    messagingSenderId: "866900738320",
    appId: "1:866900738320:web:9d44ccffe3c6ff11f76595",
    measurementId: "G-P5W9WMK4P2"
  }

  export const CreateUserProfileDocument = async (UserAuth, additionalData) => {

    if(!UserAuth) return;

    const userRef = firestore.doc('users/123kjdhdj4')

    const snapShot = await userRef.get();

    console.log(snapShot)

  }

  firebase.initializeApp(config); // initalize our appz

  export const auth = firebase.auth(); // exporting an auth anywhere we need it
  export const firestore = firebase.firestore(); // exporting firestore also 

  const provider = new firebase.auth.GoogleAuthProvider(); // gives access to googleAuth provider from auth library
  provider.setCustomParameters({prompt: 'select_account'}); // it means we always need popup when we signin by googleAuthprovvider
  export const SignInWithGoogle = () => auth.signInWithPopup(provider); // exporting this method for signup for popup and we can also use twitter etc.

  export default firebase;