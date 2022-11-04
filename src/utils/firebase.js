// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtUfdqdvP0GEUV6J1RLORMh68zGLDdatU",
  authDomain: "musicfy-499a5.firebaseapp.com",
  projectId: "musicfy-499a5",
  storageBucket: "musicfy-499a5.appspot.com",
  messagingSenderId: "1025657452671",
  appId: "1:1025657452671:web:60ced54ba1082f21bba74a",
  measurementId: "G-3W4L5E03ZS"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);