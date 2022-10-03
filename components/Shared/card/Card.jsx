import React from "react";
import CardContainer from "../../UI/cards/CardContainer";
const Card = ({ children }) => {
  console.log(children);
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
