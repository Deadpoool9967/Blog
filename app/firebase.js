// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGGib48dd5Q6inZLRTJwDco6SLJE90jAQ",
  authDomain: "blogging-b7915.firebaseapp.com",
  databaseURL: "https://blogging-b7915-default-rtdb.firebaseio.com",
  projectId: "blogging-b7915",
  storageBucket: "blogging-b7915.appspot.com",
  messagingSenderId: "919401637773",
  appId: "1:919401637773:web:8dc85bfa348f4ea786ffc4",
  measurementId: "G-38VG0FF370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const auth = getAuth(app);