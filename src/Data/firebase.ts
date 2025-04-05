// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwkozwmzm4gbD9RzFRZEC5fGepHzURNHk",
    authDomain: "studentnest-a11bc.firebaseapp.com",
    projectId: "studentnest-a11bc",
    storageBucket: "studentnest-a11bc.firebasestorage.app",
    messagingSenderId: "834862178767",
    appId: "1:834862178767:web:ab2eee881e262367c032ba",
    measurementId: "G-GD4CJMFWZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// ✅ Export auth
export const auth = getAuth(app);
