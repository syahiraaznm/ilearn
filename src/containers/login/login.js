import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import "./login.scss";
import useForm from "./useForm";
import validate from "./validate";

// export default function Login() {
    const Login = ({submitForm}) => {
    let history = useHistory();
    // const [userInput, setUserInput] = useState(0);

    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     if ((userInput.email || userInput.password === "")) {
    //         return(
    //             console.log("incorrect input")
    //             )
    //         }
    //         history.push("/home");
    // };

    // const handleInputChange = (event) => {
    //     const name= event.target.name;
    //     if (event.target.type === "checkbox") {
    //         setUserInput({
    //             [name]: event.target.checked,
    //         });
    //     } else {
    //         setUserInput({
    //             [name]: event.target.value,
    //         })
    //     }
    // };
    // const {inputs, handleInputChange, handleSubmit ,errors} = useForm({email:'',password:''},validate);
    const {handleInputChange, userInput, handleLogIn, errors} = useForm(submitForm, validate);
    return ( 
        <div className="loginnn" style ={{height: "100vh", display:"flex", flexDirection: "column", justifyContent: "center", margin: "auto", alignItems: "center"}}>
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
                    ></input>
                    {errors.email && <p>{errors.email}</p>}
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
                    ></input>
                    {errors.password && <p>{errors.password}</p>}
                    <button type="submit" style= {{margin: "5px 0"}}>
                        <div>Login</div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;