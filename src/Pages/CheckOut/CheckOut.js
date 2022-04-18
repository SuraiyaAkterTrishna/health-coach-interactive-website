import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const handleBookNow = event =>{
        event.preventDefault();
        toast('Congratulations Dear, Your Booking Complete!');
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Phone Number" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Your Address</Form.Label>
    <Form.Control type="text" placeholder="Your Address" />
  </Form.Group>
  
  <Button onClick={handleBookNow} variant="success" className="w-50 d-block m-2 mx-auto" type="submit">
    Book Now
  </Button>
  <ToastContainer></ToastContainer>
</Form>
        </div>
    );
};

export default CheckOut;