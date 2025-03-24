// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNPTfNPmUj44Ixv7ilHMsiElcNGTWxmw0",
  authDomain: "inter-prep-cb838.firebaseapp.com",
  projectId: "inter-prep-cb838",
  storageBucket: "inter-prep-cb838.firebasestorage.app",
  messagingSenderId: "440133251799",
  appId: "1:440133251799:web:e415c4a0116426cff1b692",
  measurementId: "G-W0YSXW2D93",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
