import React from "react";
import Card from "./Card";

const CardContainer = ({
  title,
  cardData,
  containerStyles = "bg-white",
  titleColor = "text-black",
  titleStyles = "text-2xl",
}) => (
  <div
    className={`w-11/12 flex flex-col items-center rounded-xl p-4 gap-5 ${containerStyles}`}
  >
    {title && <h2 className={` ${titleStyles} `}>{title}</h2>}
    <div className="flex flex-wrap justify-center gap-5">
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
  </div>
);

export default CardContainer;
