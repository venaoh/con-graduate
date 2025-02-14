import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNvS-8Mwtk6PKUyqQOMtngxhD1MNtmsx0",
  authDomain: "con-graduate.firebaseapp.com",
  projectId: "con-graduate",
  storageBucket: "con-graduate.firebasestorage.app",
  messagingSenderId: "721538801660",
  appId: "1:721538801660:web:f747fc4025cba34f8adc79",
  measurementId: "G-Y3YG5WRNPT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
