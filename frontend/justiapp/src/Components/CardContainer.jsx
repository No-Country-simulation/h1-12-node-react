const Card = ({ bgColor, title, description }) => (
  <div className={`max-w-32 p-4 ${bgColor} rounded-xl`}>
    <div className=" flex flex-col  ">
      <div className=" flex flex-col  ">
        <h1 className="  text-white text-base font-bold font-lato leading-tight">
          {title}
        </h1>
      </div>
    </div>
    <div className=" text-white text-sm font-normal font-sans leading-none">
      {description}
    </div>
    <button className="btn outl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
);

const CardContainer = ({ cardData }) => (
  <div className="flex flex-wrap sm:max-w-xs max-w-96 justify-center p-2 gap-5">
    {cardData.map((card) => (
      <Card
        key={card.id}
        bgColor={card.bgColor}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default CardContainer;
