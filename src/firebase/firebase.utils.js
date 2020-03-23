/*
Imports firestore for database and auth for authentication
The code inside "config" is taken from teh project overview page on firebase.com
*/

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfJwXAngoWJSGZNAO-RkibkkhbTkmJyOE",
    authDomain: "crwn-db-6e965.firebaseapp.com",
    databaseURL: "https://crwn-db-6e965.firebaseio.com",
    projectId: "crwn-db-6e965",
    storageBucket: "crwn-db-6e965.appspot.com",
    messagingSenderId: "103660704433",
    appId: "1:103660704433:web:3006144a2defca99ff0890",
    measurementId: "G-GEYD376B63"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // userAuth doesn't exist; exit

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } 
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;