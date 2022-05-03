import React, { useEffect, useState } from "react";
import "./AppNavbar.css";
import Logo from "../../assets/images/logo.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import AppButton from "../button/AppButton";

const AppNavbar = () => {
  const [onScroll, setOnScroll] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      let scroll = window.pageYOffset;
      scroll >= 5 ? setOnScroll("on-scroll") : setOnScroll("");
    });
  }, []);

  return (
    <Navbar expand="lg" className={`app-nav ${onScroll} w-100`} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#exploreFood" className="nav-link">
            Explore Foods
          </Nav.Link>
          <Nav.Link href="#reviews" className="nav-link">
            Reviews
          </Nav.Link>
          <Nav.Link href="#faq" className="nav-link">
            FAQ
          </Nav.Link>
          <Nav.Link href="#aboutUs" className="nav-link">
            About Us
          </Nav.Link>
          <Nav.Link href="#link">
            <AppButton>01093957807</AppButton>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
