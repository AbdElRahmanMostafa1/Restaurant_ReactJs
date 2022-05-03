import React from "react";
import "./IngredientItem.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import AppButton from "../button/AppButton";

const IngredientItem = ({ flexDirection, image, header, text, optionalText }) => {
  return (
    <section className="p-5 ingredient-item">
      <Container>
        <Row style={{ flexDirection }}>
          <Col md={6}>
            <Image fluid className="rounded" src={image} alt="food image" />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center"
            style={{ textAlign: "left" }}
          >
            <h1>{header}</h1>
            <p>{text} </p>
            {optionalText && (
              <>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{
                      fontWeight: "700",
                      color: "var(--main-color)",
                      minWidth: "20px",
                    }}
                  ></i>{" "}
                  Etiam sed dolor ac diam volutpat.
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{
                      fontWeight: "700",
                      color: "var(--main-color)",
                      minWidth: "20px",
                    }}
                  ></i>{" "}
                  Erat volutpat aliquet imperdiet.
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{
                      fontWeight: "700",
                      color: "var(--main-color)",
                      minWidth: "20px",
                    }}
                  ></i>{" "}
                  purus a odio finibus bibendum.
                </p>
              </>
            )}
            <AppButton style={{ width: "fit-content" }}>Learn More</AppButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IngredientItem;
