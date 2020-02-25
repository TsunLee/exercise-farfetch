import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/kids">Kids</Link>
      </Navbar.Collapse>
      <Nav className="nav-bar">
        <Navbar.Brand className="logo" href="/">
          Shopping
        </Navbar.Brand>
        <div className="media">
          <Link to="/login">
            <img
              src="https://image.flaticon.com/icons/svg/1828/1828499.svg"
              alt="user"
            />
          </Link>
          <Link to="/">
            <img
              src="https://image.flaticon.com/icons/svg/2107/2107928.svg"
              alt="star"
            />
          </Link>
          <Link to="/cart">
            <img
              src="https://image.flaticon.com/icons/svg/1170/1170627.svg"
              alt="cart"
            />
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
