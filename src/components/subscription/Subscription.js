import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import AppButton from "../button/AppButton";
import "./Subscription.css";

const Subscription = () => {
  return (
    <section className="subscription p-5">
      <Container>
        <Row>
          <Col>
            <h1 className="mb-5" style={{ color: "var(--head-text-color)" }}>
              Hurry up! Subscribe our newsletter <br /> and get 25% Off
            </h1>
            <p className="mb-5">
              Limited time offer for this month. No credit card required.
            </p>

            <form>
              <Col md={4}>
                <InputGroup className="mb-3">
                  <FormControl
                    id="email"
                    type="email"
                    placeholder="Email Address here"
                  />
                </InputGroup>
              </Col>
              <Col md={4}>
                <AppButton>subscribe</AppButton>
              </Col>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscription;
