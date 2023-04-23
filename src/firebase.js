// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnVUtdTzLMPWuYSpWRDbL4oKLJs6xJJs4",
  authDomain: "dropdown-8c0f6.firebaseapp.com",
  databaseURL: "https://dropdown-8c0f6-default-rtdb.firebaseio.com",
  projectId: "dropdown-8c0f6",
  storageBucket: "dropdown-8c0f6.appspot.com",
  messagingSenderId: "1035936788512",
  appId: "1:1035936788512:web:446e80c9256f1d50ad8c45",
  measurementId: "G-EMWSTY4PQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);