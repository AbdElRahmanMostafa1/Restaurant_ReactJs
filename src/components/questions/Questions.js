import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

const Questions = () => {
  const FAQs = [
    {
      title: "Is Foodera Bread really baked fresh each day",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      title: "Do you bake breads containing animal fats or products",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      title: "Can I order your products online",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      title: "When are you opening a shop near me",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
  ];
  return (
    <section id="faq" className="p-5">
      <h1 className="p-5" style={{ color: "var(--head-text-color)" }}>
        Frequently Asked Questions
      </h1>
      <Container>
        <Row>
          {FAQs.map((question) => {
            return (
              <Col md={6}>
                <QuestionItem
                  key={question.title}
                  question={question.title}
                  answer={question.answer}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Questions;
