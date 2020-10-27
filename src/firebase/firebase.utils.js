import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYh8hbf8FR2dkPTS-se2HAp9LveJDKVZ4",
    authDomain: "bicitra-67e67.firebaseapp.com",
    databaseURL: "https://bicitra-67e67.firebaseio.com",
    projectId: "bicitra-67e67",
    storageBucket: "bicitra-67e67.appspot.com",
    messagingSenderId: "92612719959",
    appId: "1:92612719959:web:7e2f27bc51fc36eff3fa12"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
