import React, { useState } from 'react';
import Register from "./register";
import { useHistory } from "react-router-dom";

const AuthRegister = () => {
    let history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <Register submitForm={submitForm} />
        ) : (
        //   <FormSuccess />
        // <div>Successssss</div>
        history.push("/login")
        )}
      </div>
    </>
  );
};

export default AuthRegister;