import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCiPW-QMu6QVSul20fWUnKaybeYEclssZs",
    authDomain: "crown-db-version-2.firebaseapp.com",
    projectId: "crown-db-version-2",
    storageBucket: "crown-db-version-2.appspot.com",
    messagingSenderId: "879596540982",
    appId: "1:879596540982:web:9909b8f045571d1f4ab497",
    measurementId: "G-1LGNB9XQYE"
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;