import React from "react";
import "./Ribbon.css";
import RibbonElement from "./RibbonElement";

const Ribbon = () => {
  const ribbonData = [
    {
      number: "1287+",
      value: "savings",
    },
    {
      number: "5786+",
      value: "photos",
    },
    {
      number: "1440+",
      value: "rockets",
    },
    {
      number: "7110+",
      value: "globes",
    },
  ];
  return (
    <section className="ribbon p-4 d-flex justify-content-around flex-wrap">
      {ribbonData.map((el) => (
        <RibbonElement key={el.number} heading={el.number} text={el.value} />
      ))}
    </section>
  );
};

export default Ribbon;
