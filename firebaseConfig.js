// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0y7Ib1EIZZY5PY8b1XuFJVfQJ_HuKSvA",
  authDomain: "femhub-9dea1.firebaseapp.com",
  projectId: "femhub-9dea1",
  storageBucket: "femhub-9dea1.firebasestorage.app",
  messagingSenderId: "760312848847",
  appId: "1:760312848847:web:f63dea89a291236b9eb2ba",
  measurementId: "G-2689S576ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// 📦 Export Firestore database
const db = getFirestore(app);
const auth = getAuth(app); // ✅ Make sure this exists!

export { auth, db }; // ✅ Export `auth`!

