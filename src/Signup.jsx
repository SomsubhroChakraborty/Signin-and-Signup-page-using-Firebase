import React ,{useState}from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';

const auth = getAuth(app);

function Signup() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(value => alert("Success")
    ) ;

    }
  return (
    <div className='signup-page'>
     <h1>Signup page</h1>
        <label>Enter Your Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter email'/>
        <label>Enter Your Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password}type="password" placeholder='enter password'/>
        <button onClick={createUser}>Signup</button>
    </div>
  )
}

export default Signup