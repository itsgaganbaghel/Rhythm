

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6VI3W83ox5SfBD8vLutyVhwABYXQ3EYU",
    authDomain: "rhythm-by-gagan-baghel.firebaseapp.com",
    projectId: "rhythm-by-gagan-baghel",
    storageBucket: "rhythm-by-gagan-baghel.firebasestorage.app",
    messagingSenderId: "982585160076",
    appId: "1:982585160076:web:db4fea2cd9bed2398966a9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp)
export let __DB = getFirestore(firebaseApp)