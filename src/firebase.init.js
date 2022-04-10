// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudOWdBFSWNASbnQQ_skFyXXaHHcrQTE0",
  authDomain: "ema-jhon-simple-d448b.firebaseapp.com",
  projectId: "ema-jhon-simple-d448b",
  storageBucket: "ema-jhon-simple-d448b.appspot.com",
  messagingSenderId: "1042315682587",
  appId: "1:1042315682587:web:1898d3cbb789728edaa9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;