const validate = (inputs) => {
    //Email errors
   const errors = {};
   if (!inputs.email) {
       errors.email = 'Check Email';
   } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
   ) {
       errors.email = 'Invalid email address';
   }

   //Password Errors
   if(!inputs.password || inputs.password.length < 8){
       errors.password = 'Check Password'
   } 
   else if (inputs.password === "(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).{8,}") {
    errors.password = 'Invalid Password'
   }
//    else if (!/^[A-Z0-9!@#\$%\^&\*]{8,}$/i.test(inputs.password)) {
//     errors.password = 'Invalid Password'
//    }
   
   return errors;
}

export default validate;