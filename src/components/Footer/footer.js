import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";
import "../../style/custom.css";

const Footer = () => {
  return (
    <footer className="custom-primary text-white py-4">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div>
              <img
                src={Logo}
                alt="Logo"
                width="70%"
                height="auto"
                class="mb-4"
              />
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-start justify-content-md-center align-items-center mt-4 mt-md-0"
          >
            <div>
              <h4 className="text-center font-weight-bold" class="mb-4">
                Our Technology
              </h4>
              <ul class="list-unstyled">
                <li class="mb-2">React</li>
                <li class="mb-2">Gatsby</li>
                <li class="mb-2">Next.js</li>
                <li class="mb-2">Node.js</li>
              </ul>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-start justify-content-md-end align-items-center mt-4 mt-md-0"
          >
            <div>
              <h4 className="font-weight-bold" class="mb-4">
                Our Services
              </h4>
              <ul class="list-unstyled">
                <li class="mb-2">Social Media Marketing</li>
                <li class="mb-2">
                  Web & Mobile App <br /> Development
                </li>
                <li class="mb-2">Data & Analytics</li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr class="custom-hr bg" />
        <Row>
          <Col xs={12} className="text-center">
            <p>Privacy | Terms and Conditions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
