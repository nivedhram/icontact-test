import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChLFEgQiV_qQp_zeulm0PZz9eFmE5qob4",
  authDomain: "icontact-e1db9.firebaseapp.com",
  projectId: "icontact-e1db9",
  storageBucket: "icontact-e1db9.appspot.com",
  messagingSenderId: "665207793901",
  appId: "1:665207793901:web:db5ff91af61a15471004e4"
};


firebase.initializeApp(firebaseConfig);

export default firebase;

