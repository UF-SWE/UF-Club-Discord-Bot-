// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDP0Cx3l6atn-7Dzo3Y6PgO7jVG0Uv76z8",
  authDomain: "cob-app-d5529.firebaseapp.com",
  projectId: "cob-app-d5529",
  storageBucket: "cob-app-d5529.appspot.com",
  messagingSenderId: "196288341786",
  appId: "1:196288341786:web:d79aec1204c7c1128e2ea3",
  measurementId: "G-NK0TYLSE4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);