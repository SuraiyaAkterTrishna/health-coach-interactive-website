import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email);
    console.log(password);
  };
  const navigateRegister = event =>{
      navigate('/register');
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center text-success">Please Log In</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <p>New to Health Coach? <Link to='/register' onClick={navigateRegister} className="text-success text-decoration-none">Register Now</Link></p>
      </Form>
    </div>
  );
};

export default Login;
