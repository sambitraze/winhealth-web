const HealOGutContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px] text-left text-41xl text-dimgray-100 font-headline-h4-medium">
      <b className="relative tracking-[0.12em] leading-[120%] capitalize flex items-center w-[489px]">{`heal O gut : comprehensive care on the go `}</b>
      <div className="relative text-[inherit] tracking-[0.1em] leading-[26px] inline-block w-[666px] text-gray-200 font-proxima-nova">
        <p className="m-0 font-semibold">
          {" "}
          hOg was created to bring balance in your gut microbiome via
          Mind+Nutrition over Medicine.
        </p>
        <p className="m-0 font-semibold">&nbsp;</p>
        <ul className="m-0 pl-[27px]">
          <li className="mb-0">
            <b className="font-proxima-nova text-dimgray-100">Mind</b>
            <span className="font-semibold">-Mental well-being.</span>
          </li>
          <li className="mb-0">
            <b className="font-proxima-nova text-dimgray-100">Nutrition</b>
            <span className="font-semibold font-proxima-nova text-gray-200">{`-Body. `}</span>
          </li>
          <li>
            <b className="font-proxima-nova text-dimgray-100">Gut care</b>
            <span className="font-semibold font-proxima-nova text-gray-200">
              - Mind-Nutrition balance
            </span>
          </li>
        </ul>
      </div>
      <div className="rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-lg text-white">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          discover how it works
        </b>
      </div>
      <div className="relative w-[100px] h-5 overflow-hidden shrink-0" />
      <div className="flex flex-col items-start justify-start gap-[20px] text-11xl">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize">
          Download now
        </b>
        <div className="relative w-[457.53px] h-16">
          <img
            className="absolute top-[0px] left-[0px] w-[219.23px] h-16 object-cover"
            alt=""
            src="/ftrgplayicn-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[236.94px] w-[220.6px] h-16 object-cover"
            alt=""
            src="/ftrappleicn-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HealOGutContainer;
