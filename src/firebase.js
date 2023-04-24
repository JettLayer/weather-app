import { getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdbKdrCi7RPMKVEQmbJMd5QL-dTZmR3GI",
  authDomain: "push-32d31.firebaseapp.com",
  projectId: "push-32d31",
  storageBucket: "push-32d31.appspot.com",
  messagingSenderId: "42521202192",
  appId: "1:42521202192:web:cd474d7f22e343b5034495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)