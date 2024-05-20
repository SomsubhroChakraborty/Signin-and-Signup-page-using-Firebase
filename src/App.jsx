import React,{ useState } from 'react'
import {app} from "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; //Authentication
import Signup from './Signup';
import Signin from './Signin';
import './App.css'

const auth = getAuth(app);

function App() {

  return (
    <>
    <div>   
      <Signup/>
      <Signin/>
    </div>

    </>
  )
}
export default App
