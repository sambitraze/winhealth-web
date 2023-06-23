import { useMemo } from "react";

const TestimonialCard = ({ imageIds, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[848px] left-[143px] flex flex-col items-start justify-start gap-[20px] text-left text-base text-primary-black-2 font-headline-h4-medium"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-16 h-16" alt="" src={imageIds} />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative tracking-[0.07em] leading-[130%] uppercase font-medium">
            Andrew Jones
          </div>
          <div className="relative tracking-[-0.01em] leading-[26px] font-body-text-body-text-pt-reg text-primary-black-1">
            Product Developer at Webflow
          </div>
        </div>
      </div>
      <div className="relative leading-[26px] font-proxima-nova text-dimgray-100 inline-block w-[478px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Fusce consectetur vestibulum interdum. Sed ultricies, magna elementum
          euismod semper, enim leo tincidunt mauris, at dapibus erat magna sed
          justo. Maecenas egestas orci nec felis ullamcorper tincidunt. Nulla
          pretium varius enim et fringilla.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
