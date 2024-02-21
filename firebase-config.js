// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {initializeAuth,getReactNativePersistence} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFGZDqo1cohCUJZjHJetP66l45crqZgRk",
  authDomain: "rebudatabase.firebaseapp.com",
  projectId: "rebudatabase",
  storageBucket: "rebudatabase.appspot.com",
  messagingSenderId: "967253033725",
  appId: "1:967253033725:web:a5b278d4404ea081e4b494"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database= getDatabase(app);
export const db = getFirestore(app);