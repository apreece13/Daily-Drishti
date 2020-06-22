import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="success" variant="light">
          <Navbar.Brand href="/">Daily Drishti</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/drishti">Drishti</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;