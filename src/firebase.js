import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCEVoBKcqKAfRp8o8zVN7arAjrSKEEDeE4",
  authDomain: "adminstoreccaracach.firebaseapp.com",
  projectId: "adminstoreccaracach",
  storageBucket: "adminstoreccaracach.appspot.com",
  messagingSenderId: "830817722913",
  appId: "1:830817722913:web:162fe31cacbc6c2e153960",
  measurementId: "G-NXW2VQYBKS",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
