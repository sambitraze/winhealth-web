import { useMemo } from "react";

const ValueCard = ({ propLeft }) => {
  const groupDiv4Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[560px] h-[294px] text-left text-base text-dimgray-100 font-proxima-nova"
      style={groupDiv4Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-skyblue-100 shadow-[0px_5px_14px_rgba(8,_15,_52,_0.04)] w-[560px] h-[294px]" />
      <div className="absolute top-[30px] left-[41px] flex flex-col items-start justify-start">
        <div className="relative leading-[26px] inline-block w-[478px]">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            venenatis gravida est, in porttitor orci vulputate quis. Integer eu
            tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
            amet aliquam mi.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Fusce consectetur vestibulum interdum. Sed ultricies, magna
            elementum euismod semper, enim leo tincidunt mauris, at dapibus erat
            magna sed justo. Maecenas egestas orci nec felis ullamcorper
            tincidunt. Nulla pretium varius enim et fringilla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
