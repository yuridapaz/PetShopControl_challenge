// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAostB7TIExi8_-VI4uldKi_cptF_s6tz0",
  authDomain: "pet-shop-management-challenge.firebaseapp.com",
  projectId: "pet-shop-management-challenge",
  storageBucket: "pet-shop-management-challenge.appspot.com",
  messagingSenderId: "1008392937723",
  appId: "1:1008392937723:web:1068b934885b60fb3b905e",
  measurementId: "G-HPLG400RVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
