import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('7Pu6e9XtH0ZjJ2JsQj0R').collection('cartItems').doc('MQH3KcPFmBmuRXi6oLwN');
firestore.doc('/users/7Pu6e9XtH0ZjJ2JsQj0R/cartItems/MQH3KcPFmBmuRXi6oLwN');

firestore.collection('/users/7Pu6e9XtH0ZjJ2JsQj0R/cartItems')