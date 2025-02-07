// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZGp3GT7FRnFq9Cxontze9NTvjS_ONEwA",
  authDomain: "new-moha-milon.firebaseapp.com",
  projectId: "new-moha-milon",
  storageBucket: "new-moha-milon.firebasestorage.app",
  messagingSenderId: "37842293432",
  appId: "1:37842293432:web:d6df9f5b2cc85c1589da4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);