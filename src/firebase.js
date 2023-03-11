// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbGM36zWzQxhdmxgbcHsPOqINcFDAelwY",
  authDomain: "react-auth-9fc6d.firebaseapp.com",
  projectId: "react-auth-9fc6d",
  storageBucket: "react-auth-9fc6d.appspot.com",
  messagingSenderId: "978229797797",
  appId: "1:978229797797:web:6269746fec10af2241be4c",
  measurementId: "G-J61ZRFC8Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);