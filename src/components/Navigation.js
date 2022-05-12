import logo from "./favicon.jpg";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

export default function Component() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="horror" width="50px" />
          Micro Horror Stories
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="feedback">Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
