import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdwm0tXlnfSb8Q7CKW5e8a9Ez4irjxXTo",
  authDomain: "restoapp-4fe26.firebaseapp.com",
  projectId: "restoapp-4fe26",
  storageBucket: "restoapp-4fe26.appspot.com",
  messagingSenderId: "893672040952",
  appId: "1:893672040952:web:3c255d17cc40a0bc438e0d"
};

export const  firebaseApp = firebase.initializeApp(firebaseConfig);