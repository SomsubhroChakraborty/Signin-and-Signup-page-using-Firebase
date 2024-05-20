import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Signin success"))
      .catch((err) => console.log("Error: ", err.message)); // Improved error handling
  };

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Enter Your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder='Enter your email'
      />
      <label>Enter Your Password</label> {/* Added label for password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"  // Changed type to "password"
        placeholder='Enter your password'
      />
      <button onClick={signinUser}>Signin</button> {/* Added missing button */}
    </div>
  );
}

export default Signin;
