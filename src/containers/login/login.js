import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();
    const [userInput, setUserInput] = useState(0);

    const handleSignin = (e) => {
        e.preventDefault();
        history.push("/home");
    }
    return ( 
        <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto", alignItems: "center"}}>Loginnnnnnnnnnnn
        <form onSubmit={handleSignin}>
          <div>Email</div>
          <input
            name="email"
            type="email"
            value={userInput.email}
            // onChange={handleInputChange}
            required
            autoFocus
          ></input>
          <div>Password</div>
          <input
            name="password"
            type="password"
            value={userInput.password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}" 
            title="Must contain at least one number, special character and lowercase letter, and at least 8 or more characters"
            required
            // onChange={handleInputChange}
          ></input>
          <button type="submit">
            <div>Login</div>
          </button>
        </form>
        </div>
    );
}