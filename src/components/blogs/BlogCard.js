import React from "react";
import { Image } from "react-bootstrap";
import AppButton from "../button/AppButton";

const BlogCard = ({ img, title, time, newPrice, price }) => {
  return (
    <section className="m-3 text-start">
      <Image fluid rounded src={img} className="mb-4" />
      <h6 style={{ color: "var(--head-text-color)" }}> {title} </h6>
      <p> {time} </p>
      <h3>
        <span className="me-4" style={{ color: "var(--main-color)" }}>
          {" "}
          ${newPrice}{" "}
        </span>
        <span style={{ textDecoration: "line-through", color: "#999999" }}>
          {" "}
          ${price}{" "}
        </span>
      </h3>
      <hr />
      <AppButton>order now</AppButton>
    </section>
  );
};

export default BlogCard;
