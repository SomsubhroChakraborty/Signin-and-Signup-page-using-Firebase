import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBWSCZofIhUpOMKRqXc6b2BZWv7ot2LrWw",
    authDomain: "app-3578b.firebaseapp.com",
    databaseURL: "https://app-3578b-default-rtdb.firebaseio.com",
    projectId: "app-3578b",
    storageBucket: "app-3578b.appspot.com",
    messagingSenderId: "21133342619",
    appId: "1:21133342619:web:49565a226c65ceb78a533e"
  };

  export const app = initializeApp(firebaseConfig);