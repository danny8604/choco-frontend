// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb4xyceOHnRKNdbMkfIf7hVKT_jW_k0mI",
  authDomain: "react-ecom-cfcb1.firebaseapp.com",
  databaseURL: "https://react-ecom-cfcb1-default-rtdb.firebaseio.com",
  projectId: "react-ecom-cfcb1",
  storageBucket: "react-ecom-cfcb1.appspot.com",
  messagingSenderId: "46047334285",
  appId: "1:46047334285:web:1133a2cface6a1589977c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const databaseURL =
  "https://react-ecom-cfcb1-default-rtdb.firebaseio.com";

export const apiKey = "AIzaSyDb4xyceOHnRKNdbMkfIf7hVKT_jW_k0mI";

const db = getDatabase();

export const dbRef = ref(getDatabase());

// const testPush = push(ref(db), "posts");
