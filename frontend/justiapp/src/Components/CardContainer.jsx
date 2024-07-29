import React from "react";
import Card from "./Card";

const CardContainer = ({ cardData }) => (
  <div className=" flex w-11/12 flex-wrap  justify-center p-2 gap-5">
    {cardData.map((card) => (
      <Card
        key={card.id}
        bgColor={card.bgColor}
        title={card.title}
        description={card.description}
        link={card.link}
      />
    ))}
  </div>
);

export default CardContainer;
