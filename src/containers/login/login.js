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
        <div style ={{height: "100vh", display:"flex", flexDirection: "column", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            <div style= {{border: "1px solid pink", alignItems: "center", display:"flex", flexDirection: "column"}}>
                <span>Login</span>
                <form onSubmit={handleSignin} style= {{display: "flex", flexDirection: "column"}}>
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
                    <button type="submit" style= {{margin: "5px 0"}}>
                        <div>Login</div>
                    </button>
                </form>
            </div>
        </div>
    );
}