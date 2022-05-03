import React from "react";
import TestimoinalCarousel from "./TestimoinalCarousel";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="reviews" className=" testimonial p-5 ">
      <h1 className="p-5" style={{ color: "white" }}>
        Testimonials
      </h1>
      <article
        className="p-3"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <TestimoinalCarousel />
      </article>
    </section>
  );
};

export default Testimonial;
