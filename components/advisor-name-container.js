import { useMemo } from "react";

const AdvisorNameContainer = ({ imageDimensions, propLeft, propWidth }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[355px] h-[449px] text-center text-21xl text-dimgray-100 font-headline-h4-medium"
      style={groupDiv2Style}
    >
      <img
        className="absolute top-[0px] left-[29px] w-[288.02px] h-[319.64px] object-cover"
        alt=""
        src={imageDimensions}
        style={groupIconStyle}
      />
      <b className="absolute top-[320px] left-[39px] tracking-[0.12em] leading-[130%] capitalize">
        Advisor Name
      </b>
      <div className="absolute top-[371px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci `}</div>
    </div>
  );
};

export default AdvisorNameContainer;
