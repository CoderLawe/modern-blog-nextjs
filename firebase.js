// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore" 
import { initializeApp, getApps, getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR9cikVo9in9FOE0kKXWUCjlyaV9cmprc",
  authDomain: "insta-clone-87568.firebaseapp.com",
  databaseURL: "https://insta-clone-87568-default-rtdb.firebaseio.com",
  projectId: "insta-clone-87568",
  storageBucket: "insta-clone-87568.appspot.com",
  messagingSenderId: "1037030054191",
  appId: "1:1037030054191:web:7d9625020dae700d85e9da",
  measurementId: "G-ETRW24VL01"
};

// Initialize Firebase


// Basically getting the currently initialized app. If their length is no initialize a new app, else use the already initialized  app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { db, app, storage };