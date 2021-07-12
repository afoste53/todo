import { useState } from "react";
import firebase from "../firebase";
import { Container, Form, Button, Row, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";

const LoginComponent = ({ setHasAccount, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseErrors, setFirebaseErrors] = useState(null);

  const handleInputChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.login(email, password);
      history.push("/");
    } catch (e) {
      console.error("Auth Error: ", e);
      setFirebaseErrors(e.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center login-register-container">
      <Form onSubmit={handleLogin}>
        <Row>
          <FormControl
            className="my-1"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            name="email"
          />
          <FormControl
            className="my-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            name="password"
          />
          {firebaseErrors && <p className="error-text">{firebaseErrors}</p>}
          <Button variant="success" type="submit">
            Login
          </Button>
        </Row>
        <Row className="my-3">
          <Button variant="outline-info" onClick={(e) => setHasAccount(false)}>
            Need an account?
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default withRouter(LoginComponent);
