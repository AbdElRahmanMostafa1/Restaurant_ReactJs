import React from "react";
import singleDish from "../../assets/images/singleDish.png";
import manyDishes from "../../assets/images/manyDishes.png";
import IngredientItem from "./IngredientItem";

const IngredientList = () => {
  return (
    <>
      <IngredientItem
        header={
          "We pride ourselves on making real food from the best ingredients."
        }
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus."
        image={singleDish}
      />
      <IngredientItem
        flexDirection={"row-reverse"}
        header={
          "We make everything by hand with the best possible ingredients."
        }
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        image={manyDishes}
        optionalText={true}
      />
    </>
  );
};

export default IngredientList;
