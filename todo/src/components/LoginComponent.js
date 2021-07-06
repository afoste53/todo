import { useState } from "react";

const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login");
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button onClick={handleLogin}></button>
      </form>
      <p>Need an account?</p>
      <button>Register Now</button>
    </div>
  );
};

export default LoginComponent;
