import firebase from 'firebase';
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyA7w4PkzckhW3Fq_WagfR_EDNqujweZWG4",
    authDomain: "vue-shop-bae3f.firebaseapp.com",
    databaseURL: "https://vue-shop-bae3f.firebaseio.com",
    projectId: "vue-shop-bae3f",
    storageBucket: "vue-shop-bae3f.appspot.com",
    messagingSenderId: "937170786965",
    appId: "1:937170786965:web:6f916696bf3bc63389199c",
    measurementId: "G-ZGE8WXQDFS"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
   export  const db = firebase.firestore();
    