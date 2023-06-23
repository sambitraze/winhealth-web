const MainHeader = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[150px] text-left text-11xl text-white font-headline-h4-medium">
      <div className="absolute top-[50px] left-[0px] bg-skyblue-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.4)] w-[1920px] h-[100px]" />
      <b className="absolute top-[91px] left-[100px] leading-[18px] uppercase">
        LOGO
      </b>
      <div className="absolute top-[91px] left-[940px] flex flex-row items-center justify-start gap-[50px] text-xl">
        <b className="relative leading-[18px] uppercase">home</b>
        <b className="relative leading-[18px] uppercase">price</b>
        <b className="relative leading-[18px] uppercase">for patients</b>
        <b className="relative leading-[18px] uppercase">for doctors</b>
        <b className="relative leading-[18px] uppercase">faq</b>
        <b className="relative leading-[18px] uppercase">blog</b>
        <div className="relative [text-decoration:underline] leading-[18px] uppercase font-black">
          About us
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white overflow-hidden flex flex-row py-3 px-[100px] items-start justify-start gap-[600px] text-5xl text-label-color-light-primary">
        <div className="relative [text-decoration:underline] tracking-[-0.01em] leading-[26px] font-medium">
          Prompt message for marketing or offer text with clickable link
        </div>
        <div className="flex flex-row items-start justify-start gap-[100px] text-lg">
          <div className="relative leading-[26px] font-medium">
            +91-
            <span className="uppercase">xxxxxxxx</span>
          </div>
          <div className="relative leading-[26px] font-medium">
            dummy id@mail.com
          </div>
          <b className="relative [text-decoration:underline] leading-[18px] capitalize flex items-center w-[81px] h-[26px] shrink-0">
            Contact us
          </b>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
