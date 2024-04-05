// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASh1UKwrgm0sikiFiKkDcuEzJffpuztUQ",
  authDomain: "dragon-news-b28d3.firebaseapp.com",
  projectId: "dragon-news-b28d3",
  storageBucket: "dragon-news-b28d3.appspot.com",
  messagingSenderId: "86651510258",
  appId: "1:86651510258:web:5db7b5b7743f53021e5f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;