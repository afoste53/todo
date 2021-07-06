import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

const LoginSignUpScreen = (props) => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      <h2>{hasAccount ? "Login" : "Sign Up"}</h2>
      {!hasAccount && <RegisterComponent />}
      {hasAccount && <LoginComponent />}
    </>
  );
};

export default LoginSignUpScreen;
