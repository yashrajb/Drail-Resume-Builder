import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";
const Header = props => {

  return (
    <div>
      <Navbar expand="md">
        <div className="navbar-brand">
          <Link to="/">
            <span className="logo">Drail</span> Resume Builder
          </Link>
        </div>
        <NavbarToggler/>
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">Builder</Link>
            </NavItem>
            <NavItem>
              <Link to="/resume">Resume</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
