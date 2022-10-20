// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5itx2hFTcfkTYicOxiX6uXgqrqh8vGA",
  authDomain: "sell-it-55291.firebaseapp.com",
  projectId: "sell-it-55291",
  storageBucket: "sell-it-55291.appspot.com",
  messagingSenderId: "289142388194",
  appId: "1:289142388194:web:1639a966f0438945b2f5bb",
  databaseURL:
    "https://sell-it-55291-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
