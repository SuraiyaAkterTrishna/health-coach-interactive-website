import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Health Coach</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
            <Nav>
              {
                user ?
                <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button> 
                :
                <Nav.Link eventKey={2} href="/login">
                 Log in
                </Nav.Link>
              } 
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;