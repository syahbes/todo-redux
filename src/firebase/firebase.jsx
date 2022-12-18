import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWSUjVMUBlbpUM_ITh0awmK4EUtPeZVjk",
  authDomain: "todo-v3-redux.firebaseapp.com",
  projectId: "todo-v3-redux",
  storageBucket: "todo-v3-redux.appspot.com",
  messagingSenderId: "27582371127",
  appId: "1:27582371127:web:371cdde66accd7f4c0f6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
