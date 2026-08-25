import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDTXdBJXMiZwICF0TSVMqcMPzIGeODgnU",
  authDomain: "chisendposproduction009.firebaseapp.com",
  databaseURL: "https://chisendposproduction009-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chisendposproduction009",
  storageBucket: "chisendposproduction009.firebasestorage.app",
  messagingSenderId: "1049207083428",
  appId: "1:1049207083428:web:425756e155e661f6b3b131",
  measurementId: "G-2TM89SJW2Q"
};



const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


