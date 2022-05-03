import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppButton from "../button/AppButton";
import "./Backed.css";

const Baked = () => {
  return (
    <section className="baked">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between p-5">
            <h2 style={{ color: "white" }}>
              Baked fresh daily by bakers with passion.
            </h2>
            <AppButton>learn more</AppButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Baked;
