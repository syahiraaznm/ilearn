import React, { useState } from 'react';
import Login from "./login";
import { useHistory } from "react-router-dom";

const AuthLogin = () => {
    let history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
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

export default AuthLogin;