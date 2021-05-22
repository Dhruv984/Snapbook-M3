import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_ivyAfm8_uAB8b83XJosdwHBRBQ6FxOY",
    authDomain: "snapbook-5541c.firebaseapp.com",
    projectId: "snapbook-5541c",
    storageBucket: "snapbook-5541c.appspot.com",
    messagingSenderId: "478748719765",
    appId: "1:478748719765:web:2842741093e9e8f7e1399c",
    measurementId: "G-ZCECC6N3MR"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage,provider};