import MainHeader from "../components/main-header";
import Footer from "../components/footer";
import PlanCompareContainer from "../components/plan-compare-container";
import PriceFreeContainer from "../components/price-free-container";
import PriceBox from "../components/price-box";
import PriceContainer from "../components/price-container";

const Price = () => {
  return (
    <div className="relative bg-white w-full h-[2845px] overflow-hidden text-left text-41xl text-gray-200 font-proxima-nova">
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <MainHeader />
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[540px]" />
      <div className="absolute top-[309px] left-[calc(50%_-_860px)] flex flex-col items-start justify-start gap-[20px]">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize font-headline-h4-medium text-dimgray-100 text-center">
          Caring is priceless
        </b>
        <b className="relative text-5xl tracking-[0.1em] leading-[26px] inline-block w-[586px]">
          We regularly upgrade our blogs.
        </b>
        <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold inline-block w-[866px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc
          nunc neque, venenatis fringilla nunc.
        </div>
      </div>
      <Footer
        iconInstagram="/-icon-instagram4.svg"
        iconFacebook="/-icon-facebook4.svg"
        iconTwitter="/-icon-twitter2.svg"
        iconLinkedin="/-icon-linkedin4.svg"
        ftrAppleIcn1="/ftrappleicn-13@2x.png"
        propTop="2045px"
      />
      <div className="absolute top-[882px] left-[240px] w-[1440px] h-[1063px]">
        <PlanCompareContainer />
        <PriceFreeContainer />
        <PriceBox />
        <PriceContainer />
      </div>
      <b className="absolute top-[760px] left-[calc(50%_-_100px)] text-21xl tracking-[0.12em] leading-[130%] capitalize font-headline-h4-medium text-dimgray-100 text-center">
        Our plans
      </b>
      <img
        className="absolute h-[14.89%] w-[33.34%] top-[7.56%] right-[5.2%] bottom-[77.55%] left-[61.46%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/pricingplanspana.svg"
      />
    </div>
  );
};

export default Price;
