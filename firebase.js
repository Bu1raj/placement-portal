import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBSoCCqU3NjB_Vgg4SevfJa9Kbs2FWfPGo",
    authDomain: "placement-portal-5f51a.firebaseapp.com",
    projectId: "placement-portal-5f51a",
    storageBucket: "placement-portal-5f51a.appspot.com",
    messagingSenderId: "576611106382",
    appId: "1:576611106382:web:88513efdbbc38154b7cd1f"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)