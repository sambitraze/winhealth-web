import MainHeader from "../components/main-header";
import TeamCard from "../components/team-card";
import ValueCard from "../components/value-card";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <div className="relative bg-white w-full h-[6130px] overflow-hidden text-center text-21xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[2416px] left-[calc(50%_-_960px)] bg-gray-6 w-[1920px] h-[318px]" />
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <MainHeader />
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[930px]" />
      <div className="absolute top-[370px] left-[calc(50%_-_861px)] flex flex-col items-start justify-start gap-[20px] text-left text-41xl text-gray-200 font-proxima-nova">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize flex font-headline-h4-medium text-dimgray-100 items-center w-[636px]">
          Unlock the power of the mind (DTx) in healthcare.
        </b>
        <b className="relative text-5xl tracking-[0.1em] leading-[26px] inline-block w-[586px]">
          We are experts in Gut Health. And caring is our second nature.
        </b>
        <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold inline-block w-[540px]">
          In our perspective, the key to achieve improved health, extends beyond
          physical means; it originates within the realm of the mind, DTx
          (Digital Therapeutic) are evidence based therapeutic interventions
          driven by software to prevent, manage, or treat a medical disorder or
          disease. We developed an evidenced based integrative (DTx)
          psychological module for gut chronic disease management.
        </div>
      </div>
      <img
        className="absolute top-[264px] left-[910px] w-[1008px] h-[701px] overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <div className="absolute top-[1080px] left-[calc(50%_-_962px)] bg-cadetblue-200 w-[1922px] h-[214px]" />
      <div className="absolute top-[1294px] left-[calc(50%_-_962px)] bg-lightcoral w-[1922px] h-[214px]" />
      <div className="absolute top-[1147px] left-[calc(50%_-_857px)] w-[1714px] flex flex-row items-start justify-start gap-[126px] text-left text-15xl text-white font-proxima-nova">
        <b className="relative tracking-[0.1em] leading-[26px]">Our Vision</b>
        <div className="relative text-11xl tracking-[0.1em] leading-[40px] font-semibold inline-block w-[1428px] shrink-0">
          Full Stack Digital Gastro (GI) Therapeutic Care - for all your need
          related to preventive care or gut chronic diseases management.
        </div>
      </div>
      <div className="absolute top-[1361px] left-[calc(50%_-_857px)] w-[1714px] flex flex-row items-start justify-start gap-[104px] text-left text-15xl text-white font-proxima-nova">
        <b className="relative tracking-[0.1em] leading-[26px]">Our Mission</b>
        <div className="relative text-11xl tracking-[0.1em] leading-[40px] font-semibold inline-block w-[1430px] shrink-0">
          Our Mission is to enable a billion people to take control of their
          health and amplify their well being through the transformative power
          of the mind+nutrition.
        </div>
      </div>
      <img
        className="absolute top-[1293.5px] left-[calc(50%_-_861px)] w-[1722px] h-px"
        alt=""
        src="/vector-1.svg"
      />
      <b className="absolute top-[1591px] left-[calc(50%_-_138px)] tracking-[0.12em] leading-[130%] capitalize">
        our founders
      </b>
      <b className="absolute top-[2817px] left-[calc(50%_-_231px)] tracking-[0.12em] leading-[130%] capitalize">
        our team of stalwarts
      </b>
      <div className="absolute top-[2456px] left-[calc(50%_-_130px)] text-11xl tracking-[0.12em] leading-[130%] capitalize font-medium">
        founders message
      </div>
      <div className="absolute top-[1653px] left-[calc(50%_-_506px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1011px] h-[52px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi.
      </div>
      <div className="absolute top-[2879px] left-[calc(50%_-_505px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1011px] h-[52px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi.
      </div>
      <TeamCard
        position="Co-founder"
        position1="Co-founder"
        position2="Co-founder"
        containerBlock2Block2Position="absolute"
        containerBlock2Block2Top="1764px"
        containerBlock2Block2Left="calc(50% - 588px)"
      />
      <div className="absolute top-[2981px] left-[370px] flex flex-col items-center justify-start gap-[50px]">
        <TeamCard
          position="Position"
          position1="Position"
          position2="Position"
        />
        <TeamCard
          position="Position"
          position1="Position"
          position2="Position"
          containerBlock2Block2Position="unset"
          containerBlock2Block2Top="unset"
          containerBlock2Block2Left="unset"
        />
      </div>
      <div className="absolute top-[2517px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc
        neque, venenatis fringilla nunc.
      </div>
      <div className="absolute top-[4258px] left-[calc(50%_-_960px)] bg-gray-6 w-[1920px] h-[432px]" />
      <div className="absolute top-[4342px] left-[calc(50%_-_505px)] w-[1011px] h-[114px]">
        <b className="absolute top-[0px] left-[calc(50%_-_137.5px)] tracking-[0.12em] leading-[130%] capitalize">
          Our investors
        </b>
        <div className="absolute top-[62px] left-[calc(50%_-_505.5px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1011px] h-[52px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi.
        </div>
      </div>
      <div className="absolute top-[4752px] left-[calc(50%_-_506px)] w-[1011px] h-[114px]">
        <b className="absolute top-[0px] left-[calc(50%_-_110.5px)] tracking-[0.12em] leading-[130%] capitalize">
          Our Values
        </b>
        <div className="absolute top-[62px] left-[calc(50%_-_505.5px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1011px] h-[52px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi.
        </div>
      </div>
      <div className="absolute top-[4518px] left-[calc(50%_-_707px)] flex flex-row items-center justify-start gap-[120px]">
        <img
          className="relative w-[402.04px] h-[75.96px]"
          alt=""
          src="/clip-path-group.svg"
        />
        <img
          className="relative w-[448.07px] h-[90px]"
          alt=""
          src="/group-18.svg"
        />
        <img
          className="relative w-[324.89px] h-[87.14px]"
          alt=""
          src="/group-17.svg"
        />
      </div>
      <div className="absolute top-[4936px] left-[96px] w-[1724px] h-[294px]">
        <ValueCard />
        <ValueCard propLeft="582px" />
        <ValueCard propLeft="1164px" />
      </div>
      <Footer
        iconInstagram="/-icon-instagram1.svg"
        iconFacebook="/-icon-facebook1.svg"
        iconTwitter="/-icon-twitter.svg"
        iconLinkedin="/-icon-linkedin1.svg"
        ftrAppleIcn1="/ftrappleicn-1@2x.png"
        propTop="5330px"
      />
    </div>
  );
};

export default AboutUs;
