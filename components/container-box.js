const ContainerBox = () => {
  return (
    <div className="absolute top-[1591px] left-[680px] w-[1140px] h-[534.76px] text-left text-sm text-white font-headline-h4-medium">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightcoral w-[1140px] h-[534.76px]" />
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[1140px] h-[296.41px] object-cover"
        alt=""
        src="/pexelsmikhailnilov6740535-15@2x.png"
      />
      <div className="absolute top-[344px] left-[602px] w-[493px] h-[166px] text-base font-proxima-nova">
        <div className="absolute top-[0px] left-[0px] tracking-[0.1em] leading-[26px] inline-block w-[493px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ipsum odio. Aenean pretium accumsan diam, ut tempus urna tincidunt ac. Sed at dapibus metus, et viverra nunc. Phasellus bibendum ligula non dignissim rhoncus. Donec `}</div>
        <div className="absolute top-[148px] left-[0px] text-sm [text-decoration:underline] tracking-[-0.01em] font-body-text-body-text-pt-reg inline-block w-[92px]">{`Read the Post `}</div>
      </div>
      <b className="absolute top-[322px] left-[602px] tracking-[0.12em] leading-[130%] uppercase">
        5 MAY 2023
      </b>
      <div className="absolute top-[322px] left-[35px] w-[511px] h-48">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] uppercase">
          FEATURED
        </b>
        <div className="absolute top-[32px] left-[0px] text-11xl tracking-[0.1em] leading-[40px] font-medium inline-block w-[511px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ipsum odio. Aenean pretium accumsan diam, ut tempus `}</div>
      </div>
    </div>
  );
};

export default ContainerBox;
