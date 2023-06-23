import { useMemo } from "react";

const Footer = ({
  iconInstagram,
  iconFacebook,
  iconTwitter,
  iconLinkedin,
  ftrAppleIcn1,
  propTop,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[1345px] left-[0px] w-[1920px] h-[800px] text-left text-9xl text-white font-headline-h4-medium"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[1920px] h-[800px]" />
      <div className="absolute top-[89px] left-[1551px] flex flex-col items-start justify-start gap-[30px]">
        <b className="relative tracking-[0.1em] leading-[18px] uppercase">
          Information
        </b>
        <div className="flex flex-col items-start justify-start gap-[30px] text-5xl font-proxima-nova">
          <div className="relative leading-[18px] uppercase">How it works</div>
          <div className="relative leading-[18px] uppercase">about us</div>
          <div className="relative leading-[18px] uppercase">faq</div>
          <div className="relative leading-[18px] uppercase">blog</div>
          <div className="relative leading-[18px] uppercase">contact us</div>
        </div>
      </div>
      <div className="absolute top-[648px] left-[1513px] text-5xl leading-[18px] uppercase font-proxima-nova">
        All right reserve 2023 ©
      </div>
      <div className="absolute top-[89px] left-[1260px] flex flex-col items-start justify-start gap-[30px]">
        <b className="relative tracking-[0.1em] leading-[18px] uppercase">
          useful links
        </b>
        <div className="flex flex-col items-start justify-start gap-[30px] text-5xl font-proxima-nova">
          <div className="relative leading-[18px] uppercase">price</div>
          <div className="relative leading-[18px] uppercase">for patients</div>
          <div className="relative leading-[18px] uppercase">for doctors</div>
          <div className="relative leading-[18px] uppercase">our team</div>
          <div className="relative leading-[18px] uppercase">blog</div>
        </div>
      </div>
      <div className="absolute top-[325px] left-[102px] flex flex-col items-start justify-start gap-[30px]">
        <b className="relative tracking-[0.1em] leading-[18px] uppercase">
          Follow us
        </b>
        <div className="flex flex-row items-start justify-start gap-[40px]">
          <img
            className="relative w-[53.14px] h-[53.14px]"
            alt=""
            src={iconInstagram}
          />
          <img
            className="relative w-[29.53px] h-[52.05px]"
            alt=""
            src={iconFacebook}
          />
          <img
            className="relative w-[63.43px] h-[52.1px]"
            alt=""
            src={iconTwitter}
          />
          <img
            className="relative w-[53.14px] h-[53.14px]"
            alt=""
            src={iconLinkedin}
          />
        </div>
      </div>
      <div className="absolute top-[89px] left-[684px] flex flex-col items-start justify-start gap-[30px]">
        <b className="relative tracking-[0.1em] leading-[18px] uppercase">
          Download app
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
            src={ftrAppleIcn1}
          />
        </div>
      </div>
      <img
        className="absolute top-[568.5px] left-[99px] w-[1722px] h-px"
        alt=""
        src="/vector-1.svg"
      />
      <b className="absolute top-[629px] left-[99px] text-61xl tracking-[0.1em] leading-[18px] uppercase text-gray-300">
        logo
      </b>
      <div className="absolute top-[89px] left-[99px] flex flex-col items-center justify-start gap-[30px] font-body-text-body-text-pt-reg">
        <b className="relative tracking-[0.1em] leading-[18px] uppercase flex font-headline-h4-medium items-center w-[489px]">
          subscribe to latest updates
        </b>
        <div className="relative text-base tracking-[-0.01em] leading-[26px] inline-block w-[495px]">
          Sign up and receive exclusive curated only for our expert bulletin as
          well as blogs and articles
        </div>
        <div className="relative w-[495px] h-[46px] text-sm text-secondary-grey-1">
          <div className="absolute top-[0px] left-[0px] w-80 h-[46px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border overflow-hidden border-[1px] border-solid border-secondary-grey-5-inputs">
              <div className="absolute top-[calc(50%_-_9px)] left-[19px] tracking-[-0.01em]">
                Email Address
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[319px] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] w-44 h-[46px] flex flex-row py-2 px-[30px] box-border items-center justify-center text-center text-white font-headline-h4-medium">
            <b className="relative tracking-[0.1em] uppercase inline-block w-[99px] shrink-0">
              Subscribe
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
