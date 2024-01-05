import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1jeacwSr0sZmBWle5Nm36QE8Y0iqBleU",
  authDomain: "react-netflix-clone-e79e1.firebaseapp.com",
  projectId: "react-netflix-clone-e79e1",
  storageBucket: "react-netflix-clone-e79e1.appspot.com",
  messagingSenderId: "162576373677",
  appId: "1:162576373677:web:30596d252b1d79fd0b3324",
  measurementId: "G-HKY2YE92CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
