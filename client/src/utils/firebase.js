import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepwise-f47a6.firebaseapp.com",
  projectId: "prepwise-f47a6",
  storageBucket: "prepwise-f47a6.firebasestorage.app",
  messagingSenderId: "474132305794",
  appId: "1:474132305794:web:3e448bcac2cbcf531be19b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
