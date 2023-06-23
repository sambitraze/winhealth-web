import Head from "next/head";
import HealOGutContainer from "../components/heal-o-gut-container";
import Header from "../components/header";
import LifetimeTrustSection from "../components/lifetime-trust-section";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[8113px] overflow-hidden text-center text-11xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[930px]" />
      <div className="absolute top-[2077px] right-[0px] bg-gray-6 w-[1920px] h-[1017px]" />
      <div className="absolute top-[4226px] left-[calc(50%_-_960px)] bg-whitesmoke w-[1920px] h-[1742px]" />
      <img
        className="absolute top-[182px] right-[1717.81px] w-[202.19px] h-[75.86px]"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[1077px] left-[calc(50%_-_960px)] [background:radial-gradient(50%_50%_at_50%_50%,_#70cfdf,_#30abc0)] w-[1920px] h-[1000px]" />
      <div className="absolute top-[434px] left-[100px] flex flex-col items-start justify-start gap-[20px] text-left text-41xl">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize flex items-center w-[728px]">{`WinHealth- unleash gut health & heal yOur gut (hOg)    `}</b>
        <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold font-proxima-nova text-gray-200 inline-block w-[540px]">
          Try a different approach to Gastro (GI) care with comprehensive and
          personalized support via DTx ( Digital Therapeutic, an Integrative
          psychological therapies), Nutrition and lifestyle. Manage gut chronic
          issues and your life.
        </div>
        <div className="rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-lg text-white">
          <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
            get started
          </b>
        </div>
      </div>
      <b className="absolute top-[1135px] left-[calc(50%_-_270px)] text-21xl tracking-[0.12em] leading-[130%] capitalize text-white">{`Condition we treat -FGID `}</b>
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1198px] left-[468px] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova text-white inline-block w-[985px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis gravida est, in porttitor orci vulputate quis. Integer eu
        tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet
        aliquam mi.
      </div>
      <div className="absolute top-[1916px] left-[1330px] w-[355px] h-[99px] text-left text-15xl text-white">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
          Gas/gastritis
        </b>
        <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Excessive gas, inflammation of the stomach lining.
        </div>
      </div>
      <div className="absolute top-[1913px] left-[158px] w-[431px] h-[143px] text-right text-15xl text-white">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-end justify-start gap-[3px]">
          <b className="relative tracking-[0.12em] leading-[130%] capitalize">
            <p className="m-0">Functional constipation/</p>
            <p className="m-0">diarrhea</p>
          </b>
          <div className="relative text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
            Bowel movement issues without physical cause.
          </div>
        </div>
      </div>
      <div className="absolute top-[1728px] left-[1408px] w-[355px] h-[99px] text-left text-15xl text-white">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
          Acid reflux/acidity
        </b>
        <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Stomach acid flowing back, causing heartburn.
        </div>
      </div>
      <div className="absolute top-[1728px] left-[156px] w-[355px] h-[99px] text-right text-15xl text-white">
        <b className="absolute top-[0px] left-[250px] tracking-[0.12em] leading-[130%] capitalize">
          GERD
        </b>
        <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Chronic acid reflux causing heartburn, chest pain.
        </div>
      </div>
      <div className="absolute top-[1540px] left-[1453px] w-[355px] h-[73px] text-left text-15xl text-white">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
          Bloating
        </b>
        <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Abdominal fullness and swelling.
        </div>
      </div>
      <div className="absolute top-[1540px] left-[99px] w-[367px] h-[99px] text-right text-15xl text-white">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
          Functional Dyspepsia
        </b>
        <div className="absolute top-[47px] left-[12px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Recurring upper abdominal pain, indigestion.
        </div>
      </div>
      <div className="absolute top-[1352px] left-[234px] w-[1451px] h-[99px] text-left text-15xl text-white">
        <div className="absolute top-[0px] left-[1096px] w-[355px] h-[99px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
            SIBO
          </b>
          <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
            Excessive bacterial growth in small intestine causing bloating,
            diarrhea.
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[355px] h-[99px] text-right">
          <b className="absolute top-[0px] left-[296px] tracking-[0.12em] leading-[130%] capitalize">
            IBS
          </b>
          <div className="absolute top-[47px] left-[0px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
            Chronic gut disorder with abdominal pain, bloating,
            constipation/diarrhea.
          </div>
        </div>
      </div>
      <img
        className="absolute top-[323px] right-[1361px] w-[98px] h-9"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[204px] right-[1045.26px] w-[135.74px] h-[50.9px]"
        alt=""
        src="/vector2.svg"
      />
      <img
        className="absolute top-[1003px] right-[1611px] w-[309px] h-[77px]"
        alt=""
        src="/vector3.svg"
      />
      <img
        className="absolute top-[937px] right-[1553px] w-[367px] h-[143px]"
        alt=""
        src="/vector4.svg"
      />
      <img
        className="absolute top-[850.45px] right-[1408.25px] w-[159.5px] h-[153.93px]"
        alt=""
        src="/group-3.svg"
      />
      <img
        className="absolute top-[323px] right-[1771.38px] w-[47.62px] h-[64.23px]"
        alt=""
        src="/group-4.svg"
      />
      <img
        className="absolute top-[899.94px] right-[1784.67px] w-[29.87px] h-[40.11px]"
        alt=""
        src="/group-6.svg"
      />
      <img
        className="absolute top-[837.4px] right-[1275.15px] w-[68.07px] h-[67.44px]"
        alt=""
        src="/group-5.svg"
      />
      <img
        className="absolute top-[210px] right-[1533px] w-[22px] h-[27px]"
        alt=""
        src="/vector5.svg"
      />
      <img
        className="absolute h-[0.65%] w-[1.15%] top-[7.41%] right-[2.5%] bottom-[91.95%] left-[96.35%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector6.svg"
      />
      <img
        className="absolute top-[955px] right-[1596px] w-[22px] h-[27px]"
        alt=""
        src="/vector5.svg"
      />
      <img
        className="absolute top-[289px] right-[-0.26px] w-[1185.26px] h-[789px]"
        alt=""
        src="/objects.svg"
      />
      <img
        className="absolute top-[1417px] right-[634.89px] w-[651.11px] h-[624px]"
        alt=""
        src="/group.svg"
      />
      <div className="absolute top-[2266px] left-[997px] w-[666px] h-[640px]">
        <HealOGutContainer />
      </div>
      <Header />
      <b className="absolute top-[3178px] left-[calc(50%_-_501px)] text-21xl tracking-[0.12em] leading-[130%] capitalize">{`A comprehensive and integrative care approach `}</b>
      <b className="absolute top-[4292px] left-[calc(50%_-_122px)] text-21xl tracking-[0.12em] leading-[130%] capitalize">
        Our Science
      </b>
      <div className="absolute top-[3240px] left-[calc(50%_-_506px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1011px]">
        Because digestive health is interconnected via gut brain axis.
      </div>
      <div className="absolute top-[4354px] left-[calc(50%_-_550px)] text-xl tracking-[-0.01em] leading-[26px] font-semibold font-proxima-nova inline-block w-[1101px]">
        {" "}
        We believe your gut’s health is connected to the brain, behaviour and a
        lot more. To restore balance and improve the chronic symptoms. We have
        developed a framework to address each part of the whole.
      </div>
      <img
        className="absolute top-[3346px] left-[527px] w-[887.08px] h-[710.09px] object-cover"
        alt=""
        src="/group-36369@2x.png"
      />
      <b className="absolute top-[3563px] left-[1435px] text-9xl tracking-[0.12em] leading-[130%] capitalize text-left">
        Dr. Deepak
      </b>
      <b className="absolute top-[3946px] left-[1348px] text-9xl tracking-[0.12em] leading-[130%] capitalize text-left">
        Sindhu
      </b>
      <b className="absolute top-[3597px] left-[397px] text-9xl tracking-[0.12em] leading-[130%] capitalize text-right">
        Shashank
      </b>
      <b className="absolute top-[3370px] left-[733px] text-9xl tracking-[0.12em] leading-[130%] capitalize text-right">
        Dr. Bhavesh
      </b>
      <div className="absolute top-[3606px] left-[1435px] text-xl leading-[26px] font-proxima-nova text-left">{`Ph.D, Psychologist. GI behavioural Expert. `}</div>
      <div className="absolute top-[3989px] left-[1348px] text-xl leading-[26px] font-proxima-nova text-left">
        MS, RDN. GI Registered Nutritionist.
      </div>
      <div className="absolute top-[3946px] left-[410px] w-[179px] h-[69px] text-right text-9xl">
        <b className="absolute top-[0px] left-[92px] tracking-[0.12em] leading-[130%] capitalize">
          Nupur
        </b>
        <div className="absolute top-[43px] left-[0px] text-xl leading-[26px] font-proxima-nova">
          GI Care Coordinator.
        </div>
      </div>
      <div className="absolute top-[3640px] left-[387px] text-xl leading-[26px] font-proxima-nova text-right">
        GI Health coach
      </div>
      <div className="absolute top-[3414px] left-[620px] text-xl leading-[26px] font-proxima-nova text-right">
        DNB, MBBS. Gastroenterologist.
      </div>
      <div className="absolute top-[2133px] left-[263px] w-[432px] h-[904.62px] text-left text-[14.77px] text-gray-1 font-open-sans">
        <div className="absolute top-[0px] left-[144px] bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.75)] w-72 h-[904.62px] overflow-hidden">
          <div className="absolute top-[225.23px] left-[11.81px] rounded-[11.82px] bg-white box-border w-[264.37px] h-[59.82px] border-[1.5px] border-solid border-gray-5" />
          <div className="absolute top-[0px] left-[0px] w-72 h-[34.71px] overflow-hidden text-center text-[12.55px] text-label-color-light-primary font-sf-pro-text">
            <img
              className="absolute top-[0px] left-[calc(50%_-_57.6px)] w-[115.2px] h-[24.37px]"
              alt=""
              src="/notch.svg"
            />
            <div className="absolute top-[10.34px] left-[calc(50%_-_124.06px)] w-[39.88px] h-[15.51px]">
              <div className="absolute top-[0px] left-[calc(50%_-_19.94px)] rounded-[17.72px] w-[39.88px] h-[15.51px]">
                <div className="absolute top-[0.73px] left-[0px] tracking-[-0.3px] leading-[16.25px] font-semibold inline-block w-[39.19px] h-[14.51px]">
                  9:41
                </div>
              </div>
            </div>
            <img
              className="absolute top-[14.03px] left-[calc(50%_+_67.2px)] w-[57.16px] h-[9.6px]"
              alt=""
              src="/right-side.svg"
            />
          </div>
          <div className="absolute top-[58.34px] left-[11.81px] text-[17.72px] tracking-[-0.3px] leading-[19.2px] font-semibold">
            <p className="m-0">Hi Rahul,</p>
            <p className="m-0">how are you feeling today?</p>
          </div>
          <div className="absolute top-[302.77px] left-[11.81px] tracking-[-0.3px] leading-[19.2px] font-semibold">
            Today’s tasks
          </div>
          <div className="absolute top-[691.94px] left-[11.81px] tracking-[-0.3px] leading-[19.2px] font-semibold">
            Recommendations
          </div>
          <div className="absolute top-[465.97px] left-[11.81px] rounded-[11.82px] w-[264.37px] h-[95.26px] overflow-hidden text-[8.86px] text-white">
            <div className="absolute top-[0px] left-[0px] w-[264.37px] h-[95.26px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[11.82px] w-[264.37px] h-[95.26px] object-cover"
                alt=""
                src="/rectangle-143@2x.png"
              />
              <div className="absolute top-[64.25px] left-[74.59px] tracking-[-0.3px] leading-[19.2px] font-semibold">
                11:00 AM - 11:30 AM
              </div>
              <div className="absolute top-[11.82px] left-[87.14px] tracking-[-0.3px] leading-[19.2px] font-semibold">
                CONSULTANCY
              </div>
              <img
                className="absolute top-[16.98px] left-[72.37px] w-[8.86px] h-[8.86px] overflow-hidden"
                alt=""
                src="/usercheck.svg"
              />
            </div>
            <div className="absolute top-[39.14px] left-[72.37px] text-[14.77px] leading-[19.2px] font-semibold">
              CBT Session with expert
            </div>
            <img
              className="absolute top-[25.85px] left-[11.82px] w-[44.31px] h-[44.31px]"
              alt=""
              src="/group-36282.svg"
            />
          </div>
          <div className="absolute top-[573.05px] left-[11.81px] rounded-[11.82px] w-[264.37px] h-[95.26px] overflow-hidden text-[8.86px] text-white">
            <div className="absolute top-[0px] left-[0px] rounded-[11.82px] box-border w-[264.37px] h-[95.26px] border-[3px] border-solid border-lightsteelblue" />
            <img
              className="absolute top-[0px] left-[0px] w-[264.37px] h-[95.26px] object-cover"
              alt=""
              src="/magicpatternsvgchart1672408503979-1@2x.png"
            />
            <img
              className="absolute top-[16.98px] left-[72.37px] w-[8.86px] h-[8.86px] overflow-hidden"
              alt=""
              src="/disc.svg"
            />
            <div className="absolute top-[11.82px] left-[87.14px] tracking-[-0.3px] leading-[19.2px] font-semibold">
              NUTRITION
            </div>
            <div className="absolute top-[64.25px] left-[74.59px] tracking-[-0.3px] leading-[19.2px] font-semibold">
              follow LOW FODMAP Diet
            </div>
            <div className="absolute top-[39.14px] left-[72.37px] text-[14.77px] leading-[19.2px] font-semibold">
              Eat Healthy
            </div>
            <img
              className="absolute top-[25.85px] left-[11.82px] w-[44.31px] h-[44.31px]"
              alt=""
              src="/group-36228.svg"
            />
          </div>
          <div className="absolute top-[120.37px] left-[11.81px] w-[264.37px] h-[93.05px]">
            <div className="absolute top-[0px] left-[0px] rounded-[11.82px] bg-lightblue w-[264.37px] h-[93.05px]" />
            <img
              className="absolute top-[41.35px] left-[240px] w-[6.65px] h-[10.34px] overflow-hidden"
              alt=""
              src="/chevronright.svg"
            />
            <div className="absolute top-[11.82px] left-[12.48px] w-[206.11px] h-[70.22px]">
              <div className="absolute top-[0px] left-[0.08px] tracking-[-0.3px] leading-[19.2px] inline-block w-[206.03px]">
                Begin your journey towards better health right now
              </div>
              <div className="absolute top-[50.22px] left-[0px] text-[11.82px] tracking-[-0.3px] leading-[19.2px] font-semibold inline-block w-[131.79px]">
                get 14 days free trial
              </div>
            </div>
          </div>
          <div className="absolute top-[268.06px] left-[23.63px] w-[240.74px] h-[5.17px]">
            <div className="absolute top-[0px] left-[5.91px] rounded-[73.85px] bg-gray-6 w-[234.83px] h-[5.17px]" />
            <div className="absolute top-[0px] left-[0px] rounded-[73.85px] bg-dodgerblue w-[9.18px] h-[5.17px]" />
          </div>
          <div className="absolute top-[237.05px] left-[23.63px] text-[13.29px] tracking-[-0.3px] leading-[19.2px] font-semibold text-darkslategray-100">
            week 1: day 1
          </div>
          <img
            className="absolute top-[241.48px] left-[252.55px] w-[5.91px] h-[10.34px] overflow-hidden"
            alt=""
            src="/chevronright1.svg"
          />
          <div className="absolute top-[339.69px] left-[11.81px] rounded-[11.82px] w-[264.37px] h-[114.46px] overflow-hidden text-[8.86px] text-white">
            <img
              className="absolute top-[0px] left-[0px] w-[1476.92px] h-[886.15px] object-cover"
              alt=""
              src="/magicpatternsvgchart1672408236035-1@2x.png"
            />
            <div className="absolute top-[-88.61px] left-[-67.2px] w-[409.17px] h-[317.63px]">
              <img
                className="absolute top-[88.62px] left-[67.2px] rounded-[11.82px] w-[264.37px] h-[114.46px] object-cover"
                alt=""
                src="/rectangle-1431@2x.png"
              />
              <img
                className="absolute top-[88.62px] left-[67.2px] w-[264.37px] h-[114.46px] object-cover"
                alt=""
                src="/magicpatternsvgchart1672408503979-11@2x.png"
              />
              <div className="absolute top-[172.06px] left-[141.78px] tracking-[-0.3px] leading-[19.2px] font-semibold">
                4 min
              </div>
              <div className="absolute top-[100.43px] left-[139.57px] w-[52.77px] h-5">
                <img
                  className="absolute top-[5.17px] left-[0px] w-[8.86px] h-[8.86px] overflow-hidden"
                  alt=""
                  src="/bookopen.svg"
                />
                <div className="absolute top-[0px] left-[14.77px] tracking-[-0.3px] leading-[19.2px] font-semibold">
                  READING
                </div>
              </div>
            </div>
            <img
              className="absolute top-[35.45px] left-[11.82px] w-[44.31px] h-[44.31px]"
              alt=""
              src="/group-362821.svg"
            />
            <div className="absolute top-[39.14px] left-[72.37px] text-[14.77px] leading-[19.2px] font-semibold inline-block w-[163.2px]">
              Getting started, tips and suggestions
            </div>
          </div>
          <img
            className="absolute top-[58.34px] right-[17.72px] w-[17.72px] h-[17.72px]"
            alt=""
            src="/-icon-user-circle.svg"
          />
          <div className="absolute top-[734.77px] left-[11.81px] w-[264.37px] h-[74.58px] text-white">
            <img
              className="absolute top-[0px] left-[0px] rounded-[11.82px] w-[264.37px] h-[74.58px] object-cover"
              alt=""
              src="/rectangle-209@2x.png"
            />
            <div className="absolute top-[28.06px] left-[47.26px] tracking-[-0.3px] leading-[19.2px] font-semibold">
              Recommend diet for you
            </div>
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_144px)] bg-gray-100 w-72 h-[53.17px]" />
          <div className="absolute bottom-[10.54px] left-[calc(50%_-_139.55px)] bg-gray-100 shadow-[0px_0.7384614944458008px_0.74px_rgba(0,_0,_0,_0.12)_inset] w-72 flex flex-row py-[11.815383911132812px] px-0 box-border items-center justify-center gap-[57.6px]">
            <img
              className="relative w-[17.72px] h-[17.72px] overflow-hidden shrink-0"
              alt=""
              src="/home.svg"
            />
            <img
              className="relative w-[17.72px] h-[17.72px] overflow-hidden shrink-0"
              alt=""
              src="/usercheck1.svg"
            />
            <img
              className="relative w-[17.72px] h-[17.72px] overflow-hidden shrink-0"
              alt=""
              src="/grid.svg"
            />
            <img
              className="relative w-[17.72px] h-[17.72px] overflow-hidden shrink-0"
              alt=""
              src="/chartsvgrepocom-1-1.svg"
            />
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_144px)] w-72 h-[25.11px]">
            <div className="absolute bottom-[6.02px] left-[calc(50%_-_49.48px)] rounded-[73.85px] bg-label-color-light-primary w-[98.95px] h-[3.69px]" />
          </div>
        </div>
        <div className="absolute top-[134px] left-[0px] shadow-[0px_0px_2.95px_rgba(0,_0,_0,_0.75)] w-[287.42px] h-[622px] overflow-hidden text-center text-[12.53px] text-label-color-light-primary font-sf-pro-text">
          <img
            className="absolute top-[0px] left-[0px] w-[574.83px] h-[1244px] object-cover"
            alt=""
            src="/magicpatternsvgchart1672386031994-1@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] w-[287.42px] h-[34.64px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[calc(50%_-_57.19px)] w-[114.97px] h-[24.32px]"
              alt=""
              src="/notch1.svg"
            />
            <div className="absolute top-[10.32px] left-[calc(50%_-_123.71px)] w-[39.8px] h-[15.48px]">
              <div className="absolute top-[0px] left-[calc(50%_-_19.9px)] rounded-[17.69px] w-[39.8px] h-[15.48px]">
                <div className="absolute top-[0.88px] left-[0px] tracking-[-0.3px] leading-[16.21px] font-semibold inline-block w-[47.47px] h-[17.58px]">
                  9:41
                </div>
              </div>
            </div>
            <img
              className="absolute top-[14px] left-[calc(50%_+_67.55px)] w-[57.04px] h-[9.58px]"
              alt=""
              src="/right-side1.svg"
            />
          </div>
          <div className="absolute top-[302.89px] left-[60.43px] w-[167.33px] h-[17px] text-[36.85px] text-white font-righteous">
            <div className="absolute top-[0px] left-[0px] tracking-[-0.3px] leading-[16.21px]">
              heal
            </div>
            <div className="absolute top-[0px] left-[75.17px] tracking-[-0.3px] leading-[16.21px]">
              O
            </div>
            <div className="absolute top-[0px] left-[108.33px] tracking-[-0.3px] leading-[16.21px]">
              gut
            </div>
          </div>
          <div className="absolute top-[551.25px] left-[11.79px] rounded-[73.7px] bg-gray-100 shadow-[0px_2.9478671550750732px_2.95px_rgba(24,_184,_146,_0.12)] w-[263.83px] flex flex-row py-[11.791468620300293px] px-[117.91468811035156px] box-border items-center justify-center text-[11.79px] text-darkslategray-200 font-open-sans">
            <div className="relative tracking-[-0.3px] leading-[16.21px] font-semibold">
              Get Started
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[4407px] left-[329px] w-[1262.34px] h-[1434.73px]"
        alt=""
        src="/group-36377.svg"
      />
      <img
        className="absolute top-[5167.77px] left-[730px] w-[224.23px] h-[224.23px]"
        alt=""
        src="/group-36371.svg"
      />
      <img
        className="absolute top-[5167.46px] left-[961px] w-[228.55px] h-[224.23px]"
        alt=""
        src="/group-36372.svg"
      />
      <img
        className="absolute top-[4953.85px] left-[848px] w-[224.23px] h-[224.23px]"
        alt=""
        src="/group-36374.svg"
      />
      <img
        className="absolute h-[2.3%] w-[7.35%] top-[61.38%] right-[46.55%] bottom-[36.32%] left-[46.09%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/alzheimerrafiki.svg"
      />
      <b className="absolute top-[4844px] left-[calc(50%_-_38px)] tracking-[0.12em] leading-[130%] capitalize">
        Mind
      </b>
      <b className="absolute top-[4722px] left-[calc(50%_-_73px)] tracking-[0.12em] leading-[130%] capitalize">
        Environment
      </b>
      <b className="absolute top-[4851px] left-[calc(50%_-_737px)] tracking-[0.12em] leading-[130%] capitalize">
        Relationship
      </b>
      <b className="absolute top-[5519px] left-[calc(50%_-_615px)] tracking-[0.12em] leading-[130%] capitalize">
        Sleep
      </b>
      <b className="absolute top-[5847px] left-[calc(50%_-_327px)] tracking-[0.12em] leading-[130%] capitalize">
        Movement
      </b>
      <b className="absolute top-[5847px] left-[calc(50%_+_154px)] tracking-[0.12em] leading-[130%] capitalize">
        Microbiom
      </b>
      <b className="absolute top-[5519px] left-[calc(50%_+_572px)] tracking-[0.12em] leading-[130%] capitalize">
        Food
      </b>
      <b className="absolute top-[4851px] left-[calc(50%_+_621px)] tracking-[0.12em] leading-[130%] capitalize">
        Stress
      </b>
      <b className="absolute top-[5394px] left-[calc(50%_-_145px)] tracking-[0.12em] leading-[130%] capitalize">
        Gut
      </b>
      <b className="absolute top-[5394px] left-[calc(50%_+_80px)] tracking-[0.12em] leading-[130%] capitalize">
        Body
      </b>
      <LifetimeTrustSection />
      <div className="absolute top-[4877px] left-[calc(50%_-_212px)] text-base tracking-[-0.01em] leading-[26px] font-proxima-nova inline-block w-[424px]">{`the complex interconnection between the brain and gut  (enteric nervous system), which influences digestion, mood, and even the way we think. `}</div>
      <div className="absolute top-[5441px] left-[calc(50%_+_5px)] text-base tracking-[-0.01em] leading-[26px] font-proxima-nova inline-block w-[220px]">
        the rest of your body from your genes to your hormones. Two factor like
        sleep, movement, stress or toxin in your environment.
      </div>
      <div className="absolute top-[5441px] left-[calc(50%_-_222px)] text-base tracking-[-0.01em] leading-[26px] font-proxima-nova inline-block w-52">
        using food as medicine to support the growth of healthy and diverse
        microbiomes within our gut.
      </div>
    </div>
  );
};

export default Home;
