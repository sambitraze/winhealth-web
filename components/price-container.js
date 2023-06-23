import PriceCard from "./price-card";

const PriceContainer = () => {
  return (
    <div className="absolute top-[0px] left-[1080px] bg-paleturquoise-100 box-border w-[360px] flex flex-col items-center justify-center text-left text-sm text-gray-400 font-inter border-r-[1px] border-solid border-lavender">
      <PriceCard priceText="$40" subscriptionText="/Month" />
      <div className="self-stretch box-border h-20 flex flex-col py-5 px-0 items-center justify-center gap-[4px] border-b-[1px] border-solid border-lavender">
        <div className="relative leading-[20px] font-medium">Unlimited</div>
        <div className="relative leading-[20px] font-medium text-lightslategray">
          Add-ons on Demand
        </div>
      </div>
      <div className="self-stretch box-border h-20 flex flex-col py-5 px-0 items-center justify-center gap-[4px] border-b-[1px] border-solid border-dimgray-100">
        <div className="relative leading-[20px] font-medium">Unlimited</div>
        <div className="relative leading-[20px] font-medium text-lightslategray">
          Add-ons on Demand
        </div>
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
      <div className="self-stretch box-border h-20 flex flex-row py-5 px-[123px] items-center justify-center border-b-[1px] border-solid border-dimgray-100">
        <img className="relative w-5 h-5" alt="" src="/frame.svg" />
      </div>
    </div>
  );
};

export default PriceContainer;
