import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeuj_FY4XO_T9GhZi6xVFI89hoP6OAiH8",
  authDomain: "clone-93e35.firebaseapp.com",
  projectId: "clone-93e35",
  storageBucket: "clone-93e35.appspot.com",
  messagingSenderId: "753127783952",
  appId: "1:753127783952:web:bdf18951a822c5a44d9495",
  measurementId: "G-LTTW7T6MJG",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
