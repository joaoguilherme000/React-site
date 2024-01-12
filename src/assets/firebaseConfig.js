import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc,setDoc,getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcRwgbdQJsOLyKHfJKqgj1eWQdE2i6xOs",
  authDomain: "crimen-la-morte.firebaseapp.com",
  projectId: "crimen-la-morte",
  storageBucket: "crimen-la-morte.appspot.com",
  messagingSenderId: "264329765697",
  appId: "1:264329765697:web:27993205b70050a99a77c0",
  measurementId: "G-RL9FMETB1Y"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, collection, doc,setDoc,getDoc};