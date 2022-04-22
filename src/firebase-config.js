
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB95QkBDp6B56G497x2Sa6L1I78JEk8m3I",
  authDomain: "blogproject-21988.firebaseapp.com",
  projectId: "blogproject-21988",
  storageBucket: "blogproject-21988.appspot.com",
  messagingSenderId: "443380221840",
  appId: "1:443380221840:web:df7c8619f5815420a0d515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();