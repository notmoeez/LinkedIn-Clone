// import { fireEvent } from '@testing-library/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwR8wUGEDUizZvAVPGaWv4oarXnyHL164",
    authDomain: "linkedin-clone-24ecd.firebaseapp.com",
    projectId: "linkedin-clone-24ecd",
    storageBucket: "linkedin-clone-24ecd.appspot.com",
    messagingSenderId: "302218619908",
    appId: "1:302218619908:web:f91289fa6b7c36a4649951",
    measurementId: "G-G4P44M4RSN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };