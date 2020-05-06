import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function navbar() {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">¯\_(ツ)_/¯</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">A</Nav.Link>
      <Nav.Link href="#features">Chat</Nav.Link>
      <Nav.Link href="#pricing">App</Nav.Link>
    </Nav>

  </Navbar>
        </div>
    )
}
