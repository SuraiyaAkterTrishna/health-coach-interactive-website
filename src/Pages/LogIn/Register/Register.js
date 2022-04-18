import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }
  if (user) {
    navigate('/home');
  }
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };
  const navigateLogin = event => {
    navigate('/login');
  }
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center text-success">Registration</h1>
        <SocialLogin></SocialLogin>
        <Form onSubmit={handleSubmit} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

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
          {errorElement}

          <Button className="w-50 d-block m-2 mx-auto" variant="success" type="submit">
            Register
          </Button>
          <p>Already have an account? <Link to='/login' onClick={navigateLogin} className="text-primary text-decoration-none">Log In</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;