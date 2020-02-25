import React from "react";
import { Form, Button } from "react-bootstrap";
import "./css/contact.css";

const contact = () => {
  return (
    <div className="contact">
      <div className="sign-info">
        <h3>What's new?</h3>
        <p>Sign up for exclusive early sale access and tailored new arrivals</p>
      </div>
      <Form className="sign-up">
        <Form.Group>
          <Form.Check
            type="radio"
            inline
            label="Womenswear"
            name="gender"
            id="gender1"
          />
          <Form.Check
            type="radio"
            inline
            label="Menswear"
            name="gender"
            id="gender2"
          />
        </Form.Group>
      </Form>
      <div className="mail">
        <div className="mail-type">
          <Form.Control type="email" placeholder="Yes,here's my mail" />
        </div>
        <div className="button">
          <Button className="button" variant="dark" type="submit">
            Sign Me Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default contact;
