// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtL78TsqOv33J-nu68U9dP4H6TIMgzF5Y",
  authDomain: "health-coach-372bc.firebaseapp.com",
  projectId: "health-coach-372bc",
  storageBucket: "health-coach-372bc.appspot.com",
  messagingSenderId: "477167594827",
  appId: "1:477167594827:web:baabc13c3d8b6dd5928cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;