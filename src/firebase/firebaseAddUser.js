import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_2O3RG-5QwhEoBmbv74YOGLG9ajDwL1M",
  authDomain: "odyssey-40461.firebaseapp.com",
  projectId: "odyssey-40461",
  storageBucket: "odyssey-40461.appspot.com",
  messagingSenderId: "950011684122",
  appId: "1:950011684122:web:dabd2794748194f56078a3",
  measurementId: "G-T1EY3H81GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return user;
};


const addUser = (uid, name, age, nickname) => {
    firebase.firestore().collection("users").doc(uid).set({
      name,
      age,
      nickname
    });
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

firebase.initializeApp(firebaseConfig);
addUser(uid, displayName, 30, "John");