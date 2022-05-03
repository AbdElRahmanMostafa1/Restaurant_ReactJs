import React from "react";
import "./QuestionItem.css";

const QuestionItem = ({ question, answer }) => {
  return (
    <article className="text-start">
      <h5>
        <span className="question-start">~</span> {question} ?
      </h5>
      <p> {answer} </p>
    </article>
  );
};

export default QuestionItem;
