// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3d4da.firebaseapp.com",
  projectId: "mern-blog-3d4da",
  storageBucket: "mern-blog-3d4da.appspot.com",
  messagingSenderId: "785510306399",
  appId: "1:785510306399:web:8f17d15cb96355c17541ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);