import React, {useState, useEffect} from 'react';

// export default useForm;
const useForm = (callback, validate) => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = e => {
        const {name, value} = e.target
        setUserInput({
            ...userInput,
            [name] : value
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        setErrors(validate(userInput));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
    );

    return { handleInputChange, userInput, handleLogIn, errors };
}
export default useForm;