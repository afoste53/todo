import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import { Container } from "react-bootstrap";

const LoginSignUpScreen = (props) => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <Container className="d-flex flex-column mt-5">
      <h2 className="align-self-center m-4">
        {hasAccount ? "Login" : "Sign Up"}
      </h2>
      {!hasAccount && <RegisterComponent setHasAccount={setHasAccount} />}
      {hasAccount && <LoginComponent setHasAccount={setHasAccount} />}
    </Container>
  );
};

export default LoginSignUpScreen;
