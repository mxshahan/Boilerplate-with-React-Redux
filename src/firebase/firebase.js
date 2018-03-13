import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCYhmUkTybA4QZ1A3StHFlu6Vtgnm9_Y5g",
    authDomain: "boilerplate-redux.firebaseapp.com",
    databaseURL: "https://boilerplate-redux.firebaseio.com",
    projectId: "boilerplate-redux",
    storageBucket: "boilerplate-redux.appspot.com",
    messagingSenderId: "515956560417"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };
