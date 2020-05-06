import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function sidebar(props) {





    return (

    <Navbar className="sidebar" bg="dark" variant="dark">
      <div className="textbox">
{ props.username ? <div>HI, <span className="userName">{props.username}</span> </div> : <p>unknown</p> }


      </div>

      
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">
</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}

  </Navbar>
       
    )
}
