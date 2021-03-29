// const validate = (inputs) => {
//     //Email errors
//    const errors = {};
//    if (!inputs.email) {
//        errors.email = 'Check Email';
//    } else if (
//        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
//    ) {
//        errors.email = 'Invalid email address';
//    }

//    //Password Errors
//    if(!inputs.password || inputs.password.length < 8){
//        errors.password = 'Check Password'
//    } 
//    else if (inputs.password === "(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}") {
//     errors.password = 'Invalid Password'
//    }
// //    else if (!/^[A-Z0-9!@#\$%\^&\*]{8,}$/i.test(inputs.password)) {
// //     errors.password = 'Invalid Password'
// //    }
   
//    return errors;
// }

// export default validate;
export default function validate(userInput) {
    let errors = {};

    // EMAIL
    if (!userInput.email) {
        errors.email="Email required!"
        console.log(errors.email)
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInput.email)) {
        errors.email="Email address is invalid!"
        console.log(errors.email)
    }

    // PASSWORD
    if (!userInput.password) {
        errors.password = "Password required"
        console.log(errors.password)
    }
    else if (userInput.password.length < 8) {
        errors.password = "Password must be 8 characters or more"
        console.log(errors.password)
    }
    return errors;
}