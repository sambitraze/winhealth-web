import { useMemo } from "react";

const DigestiveCareContainer = ({
  sectionTitle,
  digestiveCareText,
  convenientCareText,
  contactUsText,
  propTop,
  propWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const fOREMPLOYERSStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[242px] left-[100px] flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-cadetblue-100 font-proxima-nova"
      style={frameDiv1Style}
    >
      <b
        className="relative tracking-[0.1em] leading-[26px] inline-block w-[642px]"
        style={fOREMPLOYERSStyle}
      >
        {sectionTitle}
      </b>
      <b className="relative text-41xl tracking-[0.12em] leading-[120%] capitalize flex font-headline-h4-medium text-dimgray-100 items-center w-[583px]">
        {digestiveCareText}
      </b>
      <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold text-gray-200 inline-block w-[540px]">
        {convenientCareText}
      </div>
      <div className="rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-lg text-white font-headline-h4-medium">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          {contactUsText}
        </b>
      </div>
    </div>
  );
};

export default DigestiveCareContainer;
