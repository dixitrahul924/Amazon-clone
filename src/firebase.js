import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDK0JjhMrWlsbezaWNyZn-uGqdAVG1vMj4",
  authDomain: "clone-am4z0n.firebaseapp.com",
  projectId: "clone-am4z0n",
  storageBucket: "clone-am4z0n.appspot.com",
  messagingSenderId: "931073764323",
  appId: "1:931073764323:web:cd4862fc45921c2a830ed6",
  measurementId: "G-W546HHEL24",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};