// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_mK3uMWMYAedepmprDzQFM1GJxYfcYG4",
  authDomain: "philosophicalcodingblog.firebaseapp.com",
  projectId: "philosophicalcodingblog",
  storageBucket: "philosophicalcodingblog.appspot.com",
  messagingSenderId: "703480306566",
  appId: "1:703480306566:web:be50848a9baa67b77b2a07",
  measurementId: "G-TNCDLXJJ9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
