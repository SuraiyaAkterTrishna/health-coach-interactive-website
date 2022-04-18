import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Password reset email send! Please check your email.');
    } else {
      toast('Please Enter Your Email Address.');
    }
  }
  const navigateRegister = event => {
    navigate('/register');
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center text-success">Please Log In</h1>
      <SocialLogin></SocialLogin>

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
        {errorElement}
        {toast}
        <Button className="w-50 d-block m-2 mx-auto" variant="success" type="submit">
          Login
        </Button>
        <p>Forget Password? <button to='/register' onClick={handleForgetPassword} className="btn btn-text text-primary text-decoration-none">Reset Password</button></p>
        <p>New to Health Coach? <Link to='/register' onClick={navigateRegister} className="text-primary text-decoration-none">Register Now</Link></p>
        <ToastContainer></ToastContainer>
      </Form>
    </div>
  );
};

export default Login;
