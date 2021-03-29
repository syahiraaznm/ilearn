import React, { useState } from 'react';
import Login from "./login";
import { useHistory } from "react-router-dom";

const Form = () => {
    let history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <Login submitForm={submitForm} />
        ) : (
        //   <FormSuccess />
        // <div>Successssss</div>
        history.push("/home")
        )}
      </div>
    </>
  );
};

export default Form;