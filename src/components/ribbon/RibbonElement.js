import React from "react";

const RibbonElement = ({ heading, text }) => {
  return (
    <article className="m-3">
      <h1>{heading}</h1>
      <h5 className="text-uppercase">{text}</h5>
    </article>
  );
};

export default RibbonElement;
