import { Form, FormControl, Button, Row, Container } from "react-bootstrap";
import firebase from "../firebase";
import { useState } from "react";
import { withRouter } from "react-router";

const RegisterComponent = ({ setHasAccount, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState(null);
  const [firebaseErrors, setFirebaseErrors] = useState(null);

  const handleInputChange = (e) => {
    e.target.name === "name"
      ? setName(e.target.value)
      : e.target.name === "email"
      ? setEmail(e.target.value)
      : e.target.name === "password"
      ? setPassword(e.target.value)
      : setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // check that passwords match and throw a fit if not
    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
    }

    try {
      // create new user
      const createdUser = await firebase.register(name, email, password);
      // update newly created user to include the name provided by user
      await createdUser.user.updateProfile({ displayName: name });
      history.push("/");
    } catch (e) {
      console.error("Auth Error: ", e);
      setFirebaseErrors(e.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center login-register-container">
      <Form onSubmit={handleRegister}>
        <Row>
          <FormControl
            className="my-1"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            name="name"
          />
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
          <FormControl
            className="my-1"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
          {errors && <p className="error-text">{errors}</p>}
          {firebaseErrors && <p className="error-text">{firebaseErrors}</p>}
          <Button className="my-1" variant="success" type="submit">
            Register
          </Button>
        </Row>
        <Row className="my-3">
          <Button variant="outline-info" onClick={(e) => setHasAccount(true)}>
            Already have an account?
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default withRouter(RegisterComponent);
