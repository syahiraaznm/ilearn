import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

export default function Register() {
    let history = useHistory();
    const [userInput, setUserInput] = useState(0);

    const handleSignin = (e) => {
        e.preventDefault();
        history.push("/login");
    }
        return ( 
            <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto", alignItems: "center"}}>Registerrrrrrrrrrrr
                <form onSubmit={handleSignin}>
                <div>Username</div>
                <input
                    name="username"
                    type="text"
                    value={userInput.name}
                    // onChange={handleInputChange}
                    required
                    autoFocus
                ></input>
                <div>Date of Birth</div>
                <input
                    name="dob"
                    type="date"
                    value={userInput.dob}
                    // onChange={handleInputChange}
                    required
                    autoFocus
                ></input>
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
                    <div>Register</div>
                </button>
                </form>
            </div>
         );
}