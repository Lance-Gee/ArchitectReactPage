import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.jpg";

function MainNavigationBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top ms-5"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Container>
          <Navbar.Brand href="#home">Architects</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">A.Erickson</Nav.Link>
            <Nav.Link href="#features">D.Cardinal</Nav.Link>
            <Nav.Link href="#pricing">M.Safdie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigationBar;
