import { useMemo } from "react";

const BlogCard = ({ imageIds, propBackgroundColor }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="relative w-[415px] h-[433px] text-left text-sm text-white font-headline-h4-medium">
      <div
        className="absolute top-[0px] left-[0px] rounded-xl bg-cadetblue-200 w-[415px] h-[433px]"
        style={rectangleDivStyle}
      />
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[415px] h-60 object-cover"
        alt=""
        src={imageIds}
      />
      <div className="absolute top-[264px] left-[26.77px] w-[361.45px] flex flex-col items-start justify-start gap-[18px]">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[378px] flex flex-col items-start justify-start gap-[10px]">
            <div className="w-[378px] flex flex-col py-0 pr-[34px] pl-0 box-border items-start justify-start gap-[4px]">
              <b className="relative tracking-[0.12em] leading-[130%] uppercase">
                5 MAY 2023
              </b>
              <div className="relative text-base tracking-[0.1em] leading-[26px] font-proxima-nova inline-block w-[378px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis gravida est, in porttitor orci vulputate
                quis.
              </div>
            </div>
            <div className="relative tracking-[-0.01em] font-body-text-body-text-pt-reg text-primary-black-1 hidden w-[378px]">
              Explore Helsinki and Rovenimi with this amazing package
            </div>
          </div>
        </div>
        <div className="rounded-sm w-[92px] h-6 flex flex-row py-2.5 px-4 box-border items-center justify-center font-body-text-body-text-pt-reg">
          <div className="relative [text-decoration:underline] tracking-[-0.01em] inline-block w-[92px] shrink-0">{`Read the Post `}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
