// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaybohlDwKNuPKcMGgnr1HydeqMKHmw0U",
  authDomain: "chat-bfbad.firebaseapp.com",
  projectId: "chat-bfbad",
  storageBucket: "chat-bfbad.appspot.com",
  messagingSenderId: "641621246641",
  appId: "1:641621246641:web:b1a6d438aeecdc78a0d890",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
