import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import "./login.scss";
import useForm from "./useForm";
import validate from "./validate";

export default function Login() {
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
    const {inputs, handleInputChange, handleSubmit ,errors} = useForm({email:'',password:''},validate);
    return ( 
        <div className="loginnn" style ={{height: "100vh", display:"flex", flexDirection: "column", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            <div style= {{border: "1px solid pink", alignItems: "center", display:"flex", flexDirection: "column"}}>
                <span>Login</span>
                <form onSubmit={handleSubmit} style= {{display: "flex", flexDirection: "column"}}>
                    <div>Email</div>
                    <input
                        name="email"
                        type="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        // required
                        // errorMessage={setUserInput.emailError}
                        autoFocus
                    ></input>
                    <div style={{border: "1px solid red", color: "yellow", height: "20px"}}>
                        {errors.email}
                    </div>
                    <div>Password</div>
                    <input
                        name="password"
                        type="password"
                        value={inputs.password}
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}" 
                        // title="Must contain at least one number, special character and lowercase letter, and at least 8 or more characters"
                        // required
                        onChange={handleInputChange}
                    ></input>
                    <div style={{border: "1px solid red", color: "yellow", height: "20px"}}>
                        {errors.password}
                    </div>
                    <button type="submit" style= {{margin: "5px 0"}}>
                        <div>Login</div>
                    </button>
                </form>
            </div>
        </div>
    );
}