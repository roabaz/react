// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJ9mLpgkwSNQLtWbtx40Z5dp6y5AOc4U",
  authDomain: "cubic-react.firebaseapp.com",
  projectId: "cubic-react",
  storageBucket: "cubic-react.appspot.com",
  messagingSenderId: "770441173832",
  appId: "1:770441173832:web:dccb6e4acd9ffb0f1df17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear una instancia de la base de datos
export const db = getFirestore(app);

