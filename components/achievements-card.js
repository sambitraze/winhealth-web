import { useMemo } from "react";

const AchievementsCard = ({
  imageDimensions,
  propTop,
  propLeft,
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const mAY2023Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const textStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className="absolute top-[1591px] left-[99px] w-[561px] h-[534.76px] text-left text-sm text-white font-headline-h4-medium"
      style={groupDiv3Style}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-xl bg-cadetblue-200 w-[561px] h-[534.76px]"
        style={rectangleDiv1Style}
      />
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[561px] h-[296.41px] object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="absolute top-[326.05px] left-[36.19px] w-[488.61px] h-[175.37px] flex flex-col items-start justify-start gap-[18px]">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[378px] flex flex-col items-start justify-start gap-[10px]">
            <div className="w-[378px] flex flex-col py-0 pr-[34px] pl-0 box-border items-start justify-start gap-[4px]">
              <b
                className="relative tracking-[0.12em] leading-[130%] uppercase"
                style={mAY2023Style}
              >
                5 MAY 2023
              </b>
              <div
                className="relative text-base tracking-[0.1em] leading-[26px] font-proxima-nova inline-block w-[468px]"
                style={loremIpsumDolorStyle}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Sed at dapibus metus, et viverra nunc. Phasellus bibendum ligula `}</div>
            </div>
            <div className="relative tracking-[-0.01em] font-body-text-body-text-pt-reg text-primary-black-1 hidden w-[378px]">
              Explore Helsinki and Rovenimi with this amazing package
            </div>
          </div>
        </div>
        <div className="rounded-sm w-[92px] h-6 flex flex-row py-2.5 px-4 box-border items-center justify-center font-body-text-body-text-pt-reg">
          <div
            className="relative [text-decoration:underline] tracking-[-0.01em] inline-block w-[92px] shrink-0"
            style={textStyle}
          >{`Read the Post `}</div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCard;
