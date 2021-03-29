import {useState} from 'react';
import { useHistory } from "react-router-dom";

const useForm = (initialValues,validate) => {
	const [inputs,setInputs] = useState(initialValues);
	const [errors,setErrors] = useState({});
    let history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validate(inputs);
		const noErrors = Object.keys(validationErrors).length === 0;
		setErrors(validationErrors);
		if(noErrors){
            history.push("/home");
            // return inputs;
			console.log("Authenticated",inputs);
		}else{
            return (
                // <div>Try Again</div>
                console.log("errors try again",validationErrors)
            )
        //    return validationErrors;
		}
		
	}

	const handleInputChange = (event) => {
    	event.persist();
    	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  	}

	return {
    	handleSubmit,
   		handleInputChange,
    	inputs,
    	errors
  	};
}

export default useForm;