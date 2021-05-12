import React, { useState }  from 'react';
import "./login.scss";
import useForm from "./useForm";
import validate from "./validate";

// export default function Login() {
    const Login = ({submitForm}) => {
    const {handleInputChange, userInput, handleLogIn, errors} = useForm(submitForm, validate);
    return ( 
            <div style= {{border: "1px solid pink", alignItems: "center", display:"flex", flexDirection: "column"}}>
                <span>Login</span>
                <form onSubmit={handleLogIn} style= {{display: "flex", flexDirection: "column"}} noValidate>
                    <div>Email</div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={userInput.email}
                        onChange={handleInputChange}
                        // required
                        // errorMessage={setUserInput.emailError}
                        autoFocus
                    />
                    <div style= {{color: "red"}}>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>Password</div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={userInput.password}
                        onChange={handleInputChange}
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}" 
                        // title="Must contain at least one number, special character and lowercase letter, and at least 8 or more characters"
                        // required
                    />
                    <div style= {{color: "red"}}>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button type="submit" style= {{margin: "5px 0"}}>
                        <div>Login</div>
                    </button>
                </form>
            </div>
    );
}

export default Login;