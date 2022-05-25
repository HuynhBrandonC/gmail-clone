import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNUFu4aFpixpVOyL6krU_mUrMLXIeYh9Q",
  authDomain: "clone-project-3c597.firebaseapp.com",
  projectId: "clone-project-3c597",
  storageBucket: "clone-project-3c597.appspot.com",
  messagingSenderId: "76208712410",
  appId: "1:76208712410:web:b73aac052f8cecae0d93e3",
  measurementId: "G-29H7WLBLMC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
