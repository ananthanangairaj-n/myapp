// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc4fj2Lo1tkHKKqZzQnoieiBaDUC7k2bI",
  authDomain: "appcrud-f331d.firebaseapp.com",
  projectId: "appcrud-f331d",
  storageBucket: "appcrud-f331d.appspot.com",
  messagingSenderId: "273321104790",
  appId: "1:273321104790:web:9929ceed3ec7687d3979b7",
  measurementId: "G-YVW8TN5VDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);
export const googleprovider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const db = getFirestore(app);




