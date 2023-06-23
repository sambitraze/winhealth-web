const FaqCard = ({ signUpProcessText, carePlanText }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[10px] text-left text-xl text-primary-black-1 font-headline-h4-medium">
      <div className="relative w-[1698px] h-[70px]">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1698px] h-[70px] border-[1px] border-solid border-secondary-grey-5-inputs">
          <div className="absolute top-[18px] left-[24px] w-[1651px] h-[34px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.07em] leading-[130%] capitalize font-medium flex items-center w-[1254.64px] h-[34px]">
              {signUpProcessText}
            </div>
            <img
              className="absolute top-[calc(50%_-_12px)] left-[1616.03px] w-[34.97px] h-6"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="bg-secondary-grey-6-bg w-[1698px] flex flex-row py-2.5 pr-0 pl-6 box-border items-start justify-start text-primary-black-2 font-body-text-body-text-pt-reg">
        <div className="relative tracking-[0.1em] leading-[26px] inline-block w-[1601.67px] shrink-0">
          {carePlanText}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
