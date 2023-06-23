import { useMemo } from "react";

const TeamCard = ({
  position,
  position1,
  position2,
  containerBlock2Block2Position,
  containerBlock2Block2Top,
  containerBlock2Block2Left,
}) => {
  const block2Style = useMemo(() => {
    return {
      position: containerBlock2Block2Position,
      top: containerBlock2Block2Top,
      left: containerBlock2Block2Left,
    };
  }, [
    containerBlock2Block2Position,
    containerBlock2Block2Top,
    containerBlock2Block2Left,
  ]);

  return (
    <div
      className="h-[601px] flex flex-row items-start justify-start gap-[24px] text-left text-xl text-primary-black-1 font-headline-h4-medium"
      style={block2Style}
    >
      <div className="relative w-[376px] h-[601px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[376px] h-[472px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_188px)] w-[375px] h-[472px] object-cover mix-blend-luminosity"
            alt=""
            src="/div@2x.png"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.67))] hidden" />
          <img
            className="absolute top-[0px] left-[0px] w-[379px] h-[569px] object-cover"
            alt=""
            src="/pexelsrdnestockproject7580640-1@2x.png"
          />
        </div>
        <div className="absolute top-[471px] left-[0px] bg-white flex flex-col py-9 px-6 items-start justify-center">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[328px] h-[58px] flex flex-col items-start justify-start gap-[8px]">
              <b className="relative tracking-[0.12em] leading-[120%] uppercase flex items-center w-[328px] h-6 shrink-0">
                John doe
              </b>
              <div className="relative text-lg tracking-[0.01em] leading-[130%] font-body-text-body-text-pt-reg inline-block w-[328px] h-[26px] shrink-0">
                {position}
              </div>
            </div>
            <div className="relative w-[328px] h-[58px] hidden text-sm font-body-text-body-text-pt-reg">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] inline-block w-[328px] h-[26px]">
                We develop exciting touristic products with a significant price
                difference from what the market offers, and couple it with other
                services to provide our travelers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[376px] h-[601px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[376px] h-[472px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_188px)] w-[375px] h-[472px] object-cover mix-blend-luminosity"
            alt=""
            src="/div@2x.png"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.67))] hidden" />
          <img
            className="absolute top-[0px] left-[0px] w-[379px] h-[569px] object-cover"
            alt=""
            src="/pexelsrdnestockproject7580640-1@2x.png"
          />
        </div>
        <div className="absolute top-[471px] left-[0px] bg-white flex flex-col py-9 px-6 items-start justify-center">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[328px] h-[58px] flex flex-col items-start justify-start gap-[8px]">
              <b className="relative tracking-[0.12em] leading-[120%] uppercase flex items-center w-[328px] h-6 shrink-0">
                John doe
              </b>
              <div className="relative text-lg tracking-[0.01em] leading-[130%] font-body-text-body-text-pt-reg inline-block w-[328px] h-[26px] shrink-0">
                {position1}
              </div>
            </div>
            <div className="relative w-[328px] h-[58px] hidden text-sm font-body-text-body-text-pt-reg">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] inline-block w-[328px] h-[26px]">
                We develop exciting touristic products with a significant price
                difference from what the market offers, and couple it with other
                services to provide our travelers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[376px] h-[601px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[376px] h-[472px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_188px)] w-[375px] h-[472px] object-cover mix-blend-luminosity"
            alt=""
            src="/div@2x.png"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.67))] hidden" />
          <img
            className="absolute top-[0px] left-[0px] w-[379px] h-[569px] object-cover"
            alt=""
            src="/pexelsrdnestockproject7580640-1@2x.png"
          />
        </div>
        <div className="absolute top-[471px] left-[0px] bg-white flex flex-col py-9 px-6 items-start justify-center">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[328px] h-[58px] flex flex-col items-start justify-start gap-[8px]">
              <b className="relative tracking-[0.12em] leading-[120%] uppercase flex items-center w-[328px] h-6 shrink-0">
                John doe
              </b>
              <div className="relative text-lg tracking-[0.01em] leading-[130%] font-body-text-body-text-pt-reg inline-block w-[328px] h-[26px] shrink-0">
                {position2}
              </div>
            </div>
            <div className="relative w-[328px] h-[58px] hidden text-sm font-body-text-body-text-pt-reg">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] inline-block w-[328px] h-[26px]">
                We develop exciting touristic products with a significant price
                difference from what the market offers, and couple it with other
                services to provide our travelers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
