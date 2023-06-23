import { useMemo } from "react";

const ContainerWrapper = ({ propLeft }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[527px] h-[680px] text-left text-21xl text-dimgray-100 font-headline-h4-medium"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[527px] h-[358px]" />
      <b className="absolute top-[376px] left-[calc(50%_-_263.5px)] tracking-[0.12em] leading-[130%] capitalize flex items-center w-[527px]">{`Lorem ipsum dolor sit amet, consectetur `}</b>
      <div className="absolute top-[498px] left-[0px] text-xl tracking-[0.1em] leading-[26px] font-semibold font-proxima-nova text-gray-200 inline-block w-[527px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc
        neque, venenatis fringilla nunc.
      </div>
    </div>
  );
};

export default ContainerWrapper;
