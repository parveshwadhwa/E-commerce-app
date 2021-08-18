import firebase from 'firebase/app'; //pulling firebase utility library

import 'firebase/firestore';// pulling firestore for database
import 'firebase/auth';// pulling auth from firestore for authentication

const config = { // object for our project conaining all the details
    apiKey: "AIzaSyAZ9PR-WJ7-jXfnXOkWDa5pL60ZNYOJ5-Q",
    authDomain: "e-commerce-app-5727b.firebaseapp.com",
    projectId: "e-commerce-app-5727b",
    storageBucket: "e-commerce-app-5727b.appspot.com",
    messagingSenderId: "866900738320",
    appId: "1:866900738320:web:9d44ccffe3c6ff11f76595",
    measurementId: "G-P5W9WMK4P2"
  }

  // why we use async bcz this is an API request thats why it is an asynchrozied method

  export const CreateUserProfileDocument = async (UserAuth, additionalData) => { // this function takes our user from authentication to store in our database
// UserAuth object is the object which logged in and additional data might we need that we can use later
    if(!UserAuth) return; // if object is not valid or no user then it will return or we can say UserAuth doesnt exist

    // if object occurs then we have to query in database for it
    const userRef = firestore.doc(`users/${UserAuth.uid}`);

    const snapShot = await userRef.get(); // we have to use await bcz it is async 

    if(!snapShot.exists)
    {
      const {displayName, email} = UserAuth;
      const createdAt = new Date();

      try{  // we use this try catch bcz it is API request
               await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData,
               })
      }catch(error)
      {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  export const addCollectionAndDocuments = async (CollectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(CollectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocref = collectionRef.doc();
      batch.set(newDocref, obj);
    });

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {items, title} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()), // it is a javascript method which takes and return string and it is used for Url's such that some url contains special symbols so it will convert them so as url can understand it  
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection;
       return accumulator;
    }, {});
  }

  firebase.initializeApp(config); // initalize our appz

  export const auth = firebase.auth(); // exporting an auth anywhere we need it
  export const firestore = firebase.firestore(); // exporting firestore also 

  const provider = new firebase.auth.GoogleAuthProvider(); // gives access to googleAuth provider from auth library
  provider.setCustomParameters({prompt: 'select_account'}); // it means we always need popup when we signin by googleAuthprovvider
  export const SignInWithGoogle = () => auth.signInWithPopup(provider); // exporting this method for signup for popup and we can also use twitter etc.

  export default firebase;

  //*********************************************QUERY************************************************ */

  /* A query is a request we make to firestore to give us something from database
   Firestore returns us two types of objects: references and snapshots. Of these objects, they can be either Document or Collection versions
   Firestore will always return us these objects, even if nothing exists at from that query.*/

  //*************************************************Query Reference************************************** */

  /* A queryReference Object is an object that represents the "current" place in the database that we are querying.
   We get them by calling either   firestore.doc('/users/:userid');  firestore.collections('/users');
   The queryReference object doesnot have the actual data of the collection or document. It instead has properties that tells us details about it
   or the method to get snapshot object which gives us the data we are looking for.*/

  //********************************************Difference B/W DocumentRefrence vs. CollectionReference****************** */
  /* We use documentRef objects to perform our CRUD methods(create, retrieve, update, delete). The documentRef methods are .set(), .get(), .update() and delete() respectively
    We can also add documents to collections using the collectionRef object using the .add() method. // collectionRef.add({//value:prop})
    We get the snapshot object from the reference Object using the .get() method. i.e documentRef.get() or collectionRef.get()
    documentRef returns a documentsnapShot object
    collectionRef returns a querySnapShot object */

    //*******************************************Document SnapShot******************************************* */
    /* We get a Document SnapShot object from our Document Reference object
       The DocumentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean
       We can also get the actual properties on the object by calling the .data() method, which returns us a JSON object of the document */


    /******************************************Query SnapShot******************************** */
    /* We get a querySnapshot object from our collectionReference object
       We can check if there are any documents in the collection by calling the .empty property which returns a boolean
       we can get all the documents in the collection by calling .docs property. It returns an array of our documents as QueryDocumentSnapshot objects */ 

       //**********************Query Practise************** */

       /*import firebase from 'firebase/app';
           import 'firebase/firestore';

          const firestore = firebase.firestore();

          firestore.collection('users').doc('7Pu6e9XtH0ZjJ2JsQj0R').collection('cartItems').doc('MQH3KcPFmBmuRXi6oLwN');
          firestore.doc('/users/7Pu6e9XtH0ZjJ2JsQj0R/cartItems/MQH3KcPFmBmuRXi6oLwN');

          firestore.collection('/users/7Pu6e9XtH0ZjJ2JsQj0R/cartItems') 
    */