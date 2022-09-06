// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaMMpncpRLZNT1snts015Y-TjWiHLWjeo",
  authDomain: "doctor-portal-2022-45428.firebaseapp.com",
  projectId: "doctor-portal-2022-45428",
  storageBucket: "doctor-portal-2022-45428.appspot.com",
  messagingSenderId: "770392999588",
  appId: "1:770392999588:web:ee359cbcba4ac771afc831",
  measurementId: "G-YTMPZLFCSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;