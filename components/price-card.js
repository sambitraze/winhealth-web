const PriceCard = ({ priceText, subscriptionText }) => {
  return (
    <div className="self-stretch flex flex-col p-7 items-center justify-center gap-[28px] text-left text-21xl text-gray-400 font-roboto border-b-[1px] border-solid border-lavender">
      <div className="flex flex-row items-end justify-center gap-[8px]">
        <b className="relative">{priceText}</b>
        <div className="flex flex-row py-[7px] px-0 items-end justify-start text-sm text-lightslategray font-inter">
          <div className="relative leading-[20px] font-medium">
            {subscriptionText}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded bg-gray-400 flex flex-row py-4 px-6 items-center justify-center text-center text-sm text-lavender font-inter">
        <b className="flex-1 relative leading-[20px]">Choose This Plan</b>
      </div>
    </div>
  );
};

export default PriceCard;
