const ContactContainer = () => {
  return (
    <div className="absolute top-[4000px] left-[calc(50%_-_765px)] w-[1538px] h-[723px] text-left text-lg text-white font-headline-h4-medium">
      <div className="absolute top-[675px] left-[calc(50%_-_551px)] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          Contact us
        </b>
      </div>
      <div className="absolute top-[675px] left-[calc(50%_+_338px)] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          Contact us
        </b>
      </div>
      <img
        className="absolute top-[0px] left-[1px] w-[648px] h-[485px]"
        alt=""
        src="/group-36402.svg"
      />
      <img
        className="absolute top-[0px] left-[calc(50%_+_121px)] w-[648px] h-[485px]"
        alt=""
        src="/group-36403.svg"
      />
      <div className="absolute top-[518px] left-[calc(50%_-_769px)] text-21xl tracking-[0.12em] leading-[130%] capitalize text-dimgray-100 text-center flex items-center w-[649px]">
        <span className="[line-break:anywhere] w-full">
          <b>Employers: Bring</b>
          <span className="font-black"> Winhealth</span>
          <b> to your employees</b>
        </span>
      </div>
      <div className="absolute top-[492px] left-[calc(50%_+_120px)] text-21xl tracking-[0.12em] leading-[130%] capitalize text-dimgray-100 text-center flex items-center w-[649px]">
        <span className="[line-break:anywhere] w-full">
          <b>{`Health Plans: Add `}</b>
          <span className="font-black">Winhealth</span>
          <b> to your value-based provider network</b>
        </span>
      </div>
    </div>
  );
};

export default ContactContainer;
