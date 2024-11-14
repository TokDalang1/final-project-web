// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM70dRWd5BcKKA-hQegZ4uA9otZdcxUBQ",
  authDomain: "final-project-web-d3cbe.firebaseapp.com",
  projectId: "final-project-web-d3cbe",
  storageBucket: "final-project-web-d3cbe.firebasestorage.app",
  messagingSenderId: "355064150228",
  appId: "1:355064150228:web:3be25a7ccc30d061e7e341",
  measurementId: "G-F684N2SF6R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
