import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5QoFlzrLsbOACuq2tqxE-9pJdtcjrDYs",
  authDomain: "sea-salon-65d13.firebaseapp.com",
  projectId: "sea-salon-65d13",
  storageBucket: "sea-salon-65d13.appspot.com",
  messagingSenderId: "314149694368",
  appId: "1:314149694368:web:f854025d5b8b2cd76e92c5",
  measurementId: "G-DJC4NLT1F0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, db, provider, storage, firebaseConfig };
