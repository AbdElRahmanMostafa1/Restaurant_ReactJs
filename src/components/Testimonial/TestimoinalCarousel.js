import React from "react";
import "./TestimoinalCarousel.css";
import { Carousel } from "react-bootstrap";
import personalProfile from "../../assets/images/personal-profile.jpeg";
import profile1 from "../../assets/images/profile1.jpg";

const TestimoinalCarousel = () => {
  return (
    <Carousel className="testimoinal-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={personalProfile} alt="profile 1" />
        <Carousel.Caption>
          <p>This is made by me... Thank you!</p>
          <h3>
            <i class="fa-solid fa-quote-left"></i> AbdElRahman Mostafa - Web
            Developer <i class="fa-solid fa-quote-right"></i>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={profile1} alt="profile 1" />
        <Carousel.Caption>
          <p>This is another carousel</p>
          <h3>
            <i class="fa-solid fa-quote-left"></i> Maccy Doe - Front End{" "}
            <i class="fa-solid fa-quote-right"></i>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={personalProfile} alt="profile 1" />
        <Carousel.Caption>
          <p>This is the third slide</p>
          <h3>
            <i class="fa-solid fa-quote-left"></i> AbdElRahman Mostafa - Backend
            Developer <i class="fa-solid fa-quote-right"></i>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TestimoinalCarousel;
