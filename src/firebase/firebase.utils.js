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



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;