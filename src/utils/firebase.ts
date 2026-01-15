import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Xn-rh1mDweSpJnscxLQ8PK3KcUxnmUo",
  authDomain: "cecpu-1c609.firebaseapp.com",
  projectId: "cecpu-1c609",
  storageBucket: "cecpu-1c609.firebasestorage.app",
  messagingSenderId: "868006479782",
  appId: "1:868006479782:web:01a11432f54612096ab167",
  measurementId: "G-8NZR6MGNME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
