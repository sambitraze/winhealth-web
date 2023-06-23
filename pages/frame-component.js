const FrameComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start gap-[12px] text-left text-base text-white font-headline-h4-medium">
      <b className="relative tracking-[0.12em] leading-[120%] capitalize">
        Download now
      </b>
      <div className="relative w-[295px] h-[41.26px]">
        <img
          className="absolute top-[0px] left-[0px] w-[141.35px] h-[41.27px] object-cover"
          alt=""
          src="/ftrgplayicn-11@2x.png"
        />
        <img
          className="absolute top-[0px] left-[152.77px] w-[142.23px] h-[41.27px] object-cover"
          alt=""
          src="/ftrappleicn-11@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
