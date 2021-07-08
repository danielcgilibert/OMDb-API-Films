import firebase from "firebase/app";
import 'firebase/firebase-firestore'
import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCCWsPzxb2H7KzWL4r_wqFaXPSRnT16HHs",
//     authDomain: "omdb-projecto.firebaseapp.com",
//     projectId: "omdb-projecto",
//     storageBucket: "omdb-projecto.appspot.com",
//     messagingSenderId: "668355497102",
//     appId: "1:668355497102:web:3250ab9feb6733f5d7cddf",
//     measurementId: "G-Y28C0JWMLL"
//   };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: process.env.REACT_APP_authDomain_FIREBASE ,
    projectId: process.env.REACT_APP_projectId_FIREBASE,
    storageBucket:process.env.REACT_APP_storageBucket_FIREBASE,
    messagingSenderId: process.env.REACT_APP_messagingSenderId_FIREBASE,
    appId: process.env.REACT_APP_appId_FIREBASE,
    measurementId: process.env.REACT_APP_measurementId_FIREBASE
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export{
    firebase
}
//  export default firebase.firestore();