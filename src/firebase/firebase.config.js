// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIF7mkpmPjN6SFg4ltObT6OvrI0UEla2k",
  authDomain: "auth-and-private-route-eb80b.firebaseapp.com",
  projectId: "auth-and-private-route-eb80b",
  storageBucket: "auth-and-private-route-eb80b.appspot.com",
  messagingSenderId: "807930267489",
  appId: "1:807930267489:web:87728fc517b545cb84e720",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
