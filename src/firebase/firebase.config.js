// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAglfuIQF6m3ZfLnG0HqqvPD8P18-ADTxM",
  authDomain: "bbc-developer-portal.firebaseapp.com",
  projectId: "bbc-developer-portal",
  storageBucket: "bbc-developer-portal.appspot.com",
  messagingSenderId: "538241156095",
  appId: "1:538241156095:web:b3c2b8aae4519d084dddca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
