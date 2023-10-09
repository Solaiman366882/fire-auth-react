// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnCEovqCMU_T9SirrJm3emuOEpaLBoPTc",
  authDomain: "react-wedding-planning.firebaseapp.com",
  projectId: "react-wedding-planning",
  storageBucket: "react-wedding-planning.appspot.com",
  messagingSenderId: "956196089820",
  appId: "1:956196089820:web:10e736d60a0aecc5d5a919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;