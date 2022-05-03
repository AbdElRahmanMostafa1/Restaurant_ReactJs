import React from "react";
import { Col, Container } from "react-bootstrap";
import AppButton from "../button/AppButton";
import AppNavbar from "../nav/AppNavbar";
import "./Header.css";

const Header = () => {
  return (
    <header id="home" className="header">
      <Container>
        <AppNavbar />
        <section
          className="header-text"
          style={{ paddingTop: "40vh", textAlign: "left" }}
        >
          <Col md={4}>
            <h1>Good food choices are good investments.</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>

            <section className="header-btn-section d-flex justify-content-center">
              <AppButton className="me-2">
                order now <i className="fa-solid fa-cart-shopping"></i>
              </AppButton>
              <AppButton>
                learn more <i className="fa-solid fa-arrow-right"></i>{" "}
              </AppButton>
            </section>
          </Col>
        </section>
      </Container>
    </header>
  );
};

export default Header;
