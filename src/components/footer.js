import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "./css/footer.css";

const footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={4}>
            <div className="column1">
              <div className="basehead">
                <h5>FARFETCH APP</h5>
              </div>
              <div className="base">
                <p>Farfetch App for iOS and Android</p>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="column2">
              <div className="basehead">
                <h5>DESTINATION/REGION, CURRENCY AND LANGUAGE</h5>
              </div>
              <div className="base">
                <p>Hong Kong SAR, HKD HK$</p>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="column3">
              <div className="basehead">
                <h5>CUSTOMER SERVICE</h5>
              </div>
              <div className="base">
                <ul>
                  <li>Help & Contact Us</li>
                  <li>Order & Shipping</li>
                  <li>Payment & Pricing</li>
                  <li>Returns & Refunds</li>
                  <li>Click & Collect</li>
                  <li>FAQs</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Accessiblility</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="column4">
              <div className="basehead">
                <h5>ABOUT FARFETCH</h5>
              </div>
              <div className="base">
                <ul>
                  <li>About Us</li>
                  <li>Investors</li>
                  <li>Farfetch Boutique Partners</li>
                  <li>Affiliate Programme</li>
                  <li>Student Discount</li>
                  <li>Careers</li>
                  <li>Farfetch Customer Promise</li>
                  <li>Farfetch App</li>
                  <li>Sitemap</li>
                  <li>Positively Farfetch</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div className="basehead">
              <h5>FARFETCH APP</h5>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="base">
                <p>Farfetch App for iOS and Android</p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <div className="basehead">
              <h5>DESTINATION/REGION, CURRENCY AND LANGUAGE</h5>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="base">
                <p>Hong Kong SAR, HKD HK$</p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <div className="basehead">
              <h5>CUSTOMER SERVICE</h5>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="base">
                <ul>
                  <li>Help & Contact Us</li>
                  <li>Order & Shipping</li>
                  <li>Payment & Pricing</li>
                  <li>Returns & Refunds</li>
                  <li>Click & Collect</li>
                  <li>FAQs</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Accessiblility</li>
                </ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <div className="basehead">
              <h5>ABOUT FARFETCH</h5>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className="base">
                <ul>
                  <li>About Us</li>
                  <li>Investors</li>
                  <li>Farfetch Boutique Partners</li>
                  <li>Affiliate Programme</li>
                  <li>Student Discount</li>
                  <li>Careers</li>
                  <li>Farfetch Customer Promise</li>
                  <li>Farfetch App</li>
                  <li>Sitemap</li>
                  <li>Positively Farfetch</li>
                </ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default footer;
