const MobileAppHeading = () => {
  return (
    <div className="absolute top-[1804px] left-[18px] w-[354px] flex flex-col items-start justify-start gap-[12.95px] text-left text-xs text-dimgray-100 font-headline-h4-medium">
      <b className="relative text-xl tracking-[0.12em] leading-[130%] capitalize flex items-center w-[354px]">
        Heading/Tagline for mobile App
      </b>
      <div className="relative tracking-[0.1em] leading-[16.83px] font-semibold font-proxima-nova inline-block w-[349.57px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi.
      </div>
      <div className="relative tracking-[0.1em] leading-[16.83px] font-semibold font-proxima-nova inline-block w-[349.57px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, `}</div>
      <div className="rounded-[1.29px] bg-cadetblue-100 shadow-[0px_0.6473429799079895px_0.65px_rgba(0,_0,_0,_0.35),_0.6473429799079895px_0.6473429799079895px_0.65px_rgba(255,_255,_255,_0.25)_inset,_-0.6473429799079895px_-0.6473429799079895px_0.65px_rgba(0,_0,_0,_0.25)_inset] h-[31.07px] flex flex-row py-[11.65217399597168px] px-[28.483091354370117px] box-border items-center justify-center text-white">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          get started
        </b>
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px] text-base">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize">
          Download now
        </b>
        <div className="relative w-[295px] h-[41.26px]">
          <img
            className="absolute top-[0px] left-[0px] w-[141.35px] h-[41.26px] object-cover"
            alt=""
            src="/ftrgplayicn-12@2x.png"
          />
          <img
            className="absolute top-[0px] left-[152.77px] w-[142.23px] h-[41.26px] object-cover"
            alt=""
            src="/ftrappleicn-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppHeading;
