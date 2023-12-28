// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-ee34e.firebaseapp.com",
  projectId: "netflix-gpt-ee34e",
  storageBucket: "netflix-gpt-ee34e.appspot.com",
  messagingSenderId: "915938842460",
  appId: "1:915938842460:web:858948cd1d849336175399",
  measurementId: "G-YHWB7V74T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
