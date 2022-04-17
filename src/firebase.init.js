// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNhF5r8xUgSWHpEhEC4WzliV5G6py6Dk",
  authDomain: "assginment-ten.firebaseapp.com",
  projectId: "assginment-ten",
  storageBucket: "assginment-ten.appspot.com",
  messagingSenderId: "29252996097",
  appId: "1:29252996097:web:893a1ace819a693dab0400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;