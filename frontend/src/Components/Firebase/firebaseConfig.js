// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/app";
// import firebase from 'firebase/app';


// const firebaseConfig = {
//   apiKey: "AIzaSyAXBC88bOT-E9KYrnTpX8IEdEDFmfNJSQE",
//   authDomain: "oldvoy-c60db.firebaseapp.com",
//   projectId: "oldvoy-c60db",
//   storageBucket: "oldvoy-c60db.appspot.com",
//   messagingSenderId: "1069256971399",
//   appId: "1:1069256971399:web:2a33d2b96f77ab2ef51422",
//   measurementId: "G-1MFXH7TJKN"
// };

// // Initialize Firebase
// const app = initializeApp (firebaseConfig);
// export const database = getAuth(app);




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCq5c8VMkZJQKhZchBiBqQHf-bR8ahkqrQ",
  authDomain: "oldvoy-b0474.firebaseapp.com",
  projectId: "oldvoy-b0474",
  storageBucket: "oldvoy-b0474.appspot.com",
  messagingSenderId: "936207864475",
  appId: "1:936207864475:web:b469404d27812b54552c3e"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)