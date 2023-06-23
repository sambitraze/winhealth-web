import TestimonialCard from "./testimonial-card";
import Footer from "./footer";

const LifetimeTrustSection = () => {
  return (
    <div className="absolute top-[5968px] left-[1px] w-[1920px] h-[2145px] text-left text-21xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[559px] left-[0px] bg-gray-6 w-[1920px] h-[737px]" />
      <div className="absolute top-[0px] left-[0px] bg-lightpink w-[1920px] h-[559px]" />
      <b className="absolute top-[634px] left-[625px] tracking-[0.12em] leading-[130%] capitalize text-center">
        we earned lifetime full of trust
      </b>
      <div className="absolute top-[696px] left-[458px] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova text-center inline-block w-[1011px] h-[52px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi.
      </div>
      <div className="absolute top-[818px] left-[102px] rounded-xl bg-skyblue-100 shadow-[0px_5px_14px_rgba(8,_15,_52,_0.04)] w-[560px] h-[378px]" />
      <div className="absolute top-[818px] left-[684px] rounded-xl bg-skyblue-100 shadow-[0px_5px_14px_rgba(8,_15,_52,_0.04)] w-[560px] h-[378px]" />
      <div className="absolute top-[820px] left-[1262px] rounded-xl bg-skyblue-100 shadow-[0px_5px_14px_rgba(8,_15,_52,_0.04)] w-[560px] h-[378px]" />
      <TestimonialCard imageIds="/photo.svg" />
      <TestimonialCard imageIds="/photo1.svg" propLeft="725px" />
      <TestimonialCard imageIds="/photo2.svg" propLeft="1303px" />
      <div className="absolute top-[82px] left-[211px] w-[1470px] h-[376.71px] text-41xl text-white">
        <div className="absolute top-[28px] left-[804px] w-[666px] h-80">
          <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[120%] capitalize">
            <p className="m-0">our trusted experts</p>
            <p className="m-0">at your care</p>
          </b>
          <div className="absolute top-[164px] left-[0px] text-xl tracking-[0.1em] leading-[26px] font-semibold font-proxima-nova inline-block w-[666px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            venenatis gravida est, in porttitor orci vulputate quis. Integer eu
            tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
            amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc
            nunc neque, venenatis fringilla nunc.
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[623.71px] h-[376.71px]"
          alt=""
          src="/doctorspana.svg"
        />
      </div>
      <Footer
        iconInstagram="/-icon-instagram.svg"
        iconFacebook="/-icon-facebook.svg"
        iconTwitter="/-icon-twitter.svg"
        iconLinkedin="/-icon-linkedin.svg"
        ftrAppleIcn1="/ftrappleicn-1@2x.png"
      />
    </div>
  );
};

export default LifetimeTrustSection;
