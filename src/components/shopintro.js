import React from "react";
import { Button, Container } from "react-bootstrap";
import "./css/shopintro.css";

const shopintro = () => {
  return (
    <div className="shop-intro">
      <div className="butt">
        <Button variant="dark">Shop now</Button>
      </div>
      <div className="shop">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
      </div>
      <h1>Key Spring Pieces,Edited By SUGAR,Arezzo,Italy</h1>
      <p>Italian boutique SUGAR curates spring's most sought-after pieces</p>
    </div>
  );
};

export default shopintro;
