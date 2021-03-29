import React, { useState } from 'react';
import useForm  from "./useForm";
import validate from "./validate";

// export default function Register() {
    const Register = ({submitForm}) => {
        
        const { handleInputChange, userInput, handleRegister, errors } = useForm(submitForm, validate);
    return ( 
        <div style ={{height: "100vh", display:"flex", flexDirection: "column", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            <div style= {{border: "1px solid pink", alignItems: "center", display:"flex", flexDirection: "column"}}>
                <span>Register</span>
                <form onSubmit={handleRegister} style= {{display: "flex", flexDirection: "column"}}>
                    <div>Username</div>
                    <input
                        name="username"
                        type="text"
                        value={userInput.username}
                        onChange={handleInputChange}
                        // required
                        autoFocus
                    ></input>
                    {errors.username && <p>{errors.username}</p>}
                    <div>Date of Birth</div>
                    <input
                        name="dob"
                        type="date"
                        value={userInput.dob}
                        onChange={handleInputChange}
                        // required
                        autoFocus
                    ></input>
                    <div>Email</div>
                    <input
                        name="email"
                        type="email"
                        value={userInput.email}
                        onChange={handleInputChange}
                        autoFocus
                    ></input>
                    {errors.email && <p>{errors.email}</p>}
                    <div>Password</div>
                    <input
                        name="password"
                        type="password"
                        value={userInput.password}
                        onChange={handleInputChange}
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}" 
                        // title="Must contain at least one number, special character and lowercase letter, and at least 8 or more characters"
                        // required
                    ></input>
                    {errors.password && <p>{errors.password}</p>}
                    <button type="submit" style= {{margin: "5px 0"}}>
                        <div>Register</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Register;