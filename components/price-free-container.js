import PriceCard from "./price-card";

const PriceFreeContainer = () => {
  return (
    <div className="absolute top-[0px] left-[360px] bg-paleturquoise-100 box-border w-[360px] flex flex-col items-center justify-center text-left text-sm text-gray-400 font-inter border-r-[1px] border-solid border-lavender">
      <PriceCard priceText="Free" subscriptionText="/Lifetime" />
      <div className="self-stretch box-border h-20 flex flex-col py-5 px-0 items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <div className="relative leading-[20px] font-medium">2 weeks</div>
      </div>
      <div className="self-stretch box-border h-20 flex flex-col py-5 px-0 items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <div className="relative leading-[20px] font-medium">5 Pages</div>
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 border-b-[1px] border-solid border-dimgray-100" />
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
    </div>
  );
};

export default PriceFreeContainer;
