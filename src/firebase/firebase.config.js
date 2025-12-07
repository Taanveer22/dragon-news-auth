// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7cpj-ws9Chm80oWtrcEapOMll6MXs-bw",
  authDomain: "dragon-news-auth-23f2b.firebaseapp.com",
  projectId: "dragon-news-auth-23f2b",
  storageBucket: "dragon-news-auth-23f2b.firebasestorage.app",
  messagingSenderId: "889186970464",
  appId: "1:889186970464:web:e1a64b315c2f1e4ade4c05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// =============export auth must==========
export default auth;
