// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3z-zzbF81e3sLNk1ewpJPALMFb8HX5A0",
  authDomain: "ai-trip-planner-bf344.firebaseapp.com",
  projectId: "ai-trip-planner-bf344",
  storageBucket: "ai-trip-planner-bf344.firebasestorage.app",
  messagingSenderId: "1025924456877",
  appId: "1:1025924456877:web:c902161677774e3dd30124",
  measurementId: "G-TZ4HE63RYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);