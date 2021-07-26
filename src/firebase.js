import firebase from "firebase/app";
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2B2mSqR7UiM6HLfzzSsnkt6R42Pmz7Bk",
    authDomain: "zhiwei-porfolio.firebaseapp.com",
    projectId: "zhiwei-porfolio",
    storageBucket: "zhiwei-porfolio.appspot.com",
    messagingSenderId: "122880779843",
    appId: "1:122880779843:web:992827f7c96b62141656f6"
});

export const db = app.firestore()
export default app

