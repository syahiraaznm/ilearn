
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
        errors.password = "Password required!"
        console.log(errors.password)
    }
    else if (userInput.password.length < 8) {
        errors.password = "Password must be 8 characters or more"
        console.log(errors.password)
    }
    return errors;
}

//regex
// laparlaparlapar