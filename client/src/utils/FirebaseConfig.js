import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBHIFRRdj_7sTrntyc2v8MMLF7VXpuk5qg",
    authDomain: "whatsappclone-dd35e.firebaseapp.com",
    projectId: "whatsappclone-dd35e",
    storageBucket: "whatsappclone-dd35e.appspot.com",
    messagingSenderId: "389571313920",
    appId: "1:389571313920:web:7575eb02c9be202ccdf3e5",
    measurementId: "G-MN3Y2NMNS7"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);