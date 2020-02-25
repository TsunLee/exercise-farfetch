import React from "react";
import { Form, Button } from "react-bootstrap";
import "../components/css/login.css";

const login = () => {
  return (
    <div className="login">
      <div className="sign">
        <h2>SIGN IN</h2>
      </div>
      <div className="log">
        <div className="facebook">
          <button>Login with Facebook</button>
        </div>
        <div className="return">
          <h4>Returning Customer</h4>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>EMAIL ADDRESS*</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>PASSWORD*</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox1">
              <Form.Check type="checkbox" label="Keep me logged in" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div className="new">
          <h4>New Customer</h4>
          <Form>
            <Form.Group controlId="formGroupName">
              <Form.Label>NAME*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>EMAIL ADDRESS*</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>PASSWORD*</Form.Label>
              <Form.Control type="password" />
              <Form.Text className="text-muted">
                By registering your details, you agree with our Terms &
                Conditions , and Privacy and Cookie Policy.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                label="Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties. "
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
      <div className="login-footer">
        <h6>NEED HELP?</h6>
        <p>+61 488 839 167</p>
      </div>
    </div>
  );
};

export default login;
