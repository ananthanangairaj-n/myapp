// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6i9TiI8JhNH3DvTf0Mqw7Gg8kIzkC4N0",
  authDomain: "fir-crud-abf32.firebaseapp.com",
  projectId: "fir-crud-abf32",
  storageBucket: "fir-crud-abf32.appspot.com",
  messagingSenderId: "137875057483",
  appId: "1:137875057483:web:e086dd855c73b3cdea96ce",
  measurementId: "G-BZ2QY299CL"
};
// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);
export const googleprovider = new GoogleAuthProvider();

export const db = getFirestore(app);