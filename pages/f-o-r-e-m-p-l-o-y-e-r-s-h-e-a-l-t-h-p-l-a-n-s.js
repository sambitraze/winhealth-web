import Header from "../components/header";
import DigestiveCareContainer from "../components/digestive-care-container";
import ContactContainer from "../components/contact-container";
import QualityOfLifeContainer from "../components/quality-of-life-container";
import ContainerWrapper from "../components/container-wrapper";
import Footer from "../components/footer";

const FOREMPLOYERSHEALTHPLANS = () => {
  return (
    <div className="relative bg-white w-full h-[10605px] overflow-hidden text-center text-21xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <Header />
      <div className="absolute top-[765px] left-[192px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[24px] left-[26px] w-32 h-32 object-cover"
          alt=""
          src="/biopsy@2x.png"
        />
      </div>
      <div className="absolute top-[765px] left-[465px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/drugs@2x.png"
        />
      </div>
      <div className="absolute top-[765px] left-[738px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[28px] left-[28px] w-[116px] h-[116px] object-cover"
          alt=""
          src="/nutrition@2x.png"
        />
      </div>
      <div className="absolute top-[765px] left-[1011px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/peace-of-mind@2x.png"
        />
      </div>
      <div className="absolute top-[765px] left-[1284px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/love@2x.png"
        />
      </div>
      <div className="absolute top-[765px] left-[1557px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/medical-app@2x.png"
        />
      </div>
      <div className="absolute top-[964px] left-[calc(50%_-_769px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Diagnostics
      </div>
      <div className="absolute top-[964px] left-[calc(50%_-_207px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Nutrition
      </div>
      <div className="absolute top-[964px] left-[calc(50%_+_345px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Lifestyle
      </div>
      <div className="absolute top-[964px] left-[calc(50%_-_499px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Medications
      </div>
      <div className="absolute top-[964px] left-[calc(50%_+_64px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Mind-Gut
      </div>
      <div className="absolute top-[964px] left-[calc(50%_+_600px)] text-11xl tracking-[0.12em] leading-[120%] capitalize font-medium">
        Monitoring
      </div>
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[540px]" />
      <div className="absolute top-[1075px] left-[calc(50%_-_960px)] bg-gray-6 w-[1920px] h-[1034px]" />
      <div className="absolute top-[4823px] left-[calc(50%_-_960px)] bg-gray-6 w-[1920px] h-[1254px]" />
      <DigestiveCareContainer
        sectionTitle={`FOR EMPLOYERS & HEALTH PLANS`}
        digestiveCareText="Life-changing digestive care"
        convenientCareText="Your populations are suffering and need digestive health care that’s convenient, coordinated and collaborative."
        contactUsText="Contact us"
      />
      <img
        className="absolute top-[219px] left-[1355px] w-[352px] h-[425.31px]"
        alt=""
        src="/group-36392.svg"
      />
      <div className="absolute top-[1230px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        You might not know it – people with digestive health issues don’t like
        to bring it up – but millions of people are struggling with their GI
        health right now.
      </div>
      <div className="absolute top-[4978px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        You might not know it – people with digestive health issues don’t like
        to bring it up – but millions of people are struggling with their GI
        health right now.
      </div>
      <div className="absolute top-[2310px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        The burdens of digestive health are significant: People bounce from
        gastroenterologist to nutritionist to primary care. They struggle to
        find diet and psychology specialists who understand their condition.
        They may not be able to afford behavioral health support if it’s not a
        covered benefit. Many give up on finding a solution.
      </div>
      <div className="absolute top-[1755px] left-[calc(50%_-_825px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[449px]">
        1 in 4 working-age people suffer from a chronic digestive health
        condition
      </div>
      <div className="absolute top-[1755px] left-[calc(50%_-_214px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[429px]">
        Debilitating GI symptoms are the 2nd leading cause of absenteeism and
        presenteeism, after the common cold
      </div>
      <div className="absolute top-[1755px] left-[calc(50%_+_330px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[449px]">
        Most GI patients are not satisfied with their current care, causing many
        to give up on preventive care
      </div>
      <b className="absolute top-[1129px] left-[calc(50%_-_502px)] text-41xl tracking-[0.12em] leading-[120%] capitalize text-left">
        A silent and significant problem
      </b>
      <b className="absolute top-[4877px] left-[calc(50%_-_583px)] text-41xl tracking-[0.12em] leading-[120%] capitalize text-left">
        Relationship care, delivered virtually
      </b>
      <b className="absolute top-[6554px] left-[calc(50%_-_523px)] text-41xl tracking-[0.12em] leading-[120%] capitalize text-left">
        Better digestive health outcomes
      </b>
      <b className="absolute top-[7149px] left-[calc(50%_-_616px)] text-41xl tracking-[0.12em] leading-[120%] capitalize flex items-center justify-center w-[1232px]">
        Integrated with your existing health benefit ecosystem
      </b>
      <b className="absolute top-[8921px] left-[calc(50%_-_617px)] text-41xl tracking-[0.12em] leading-[120%] capitalize flex items-center justify-center w-[1232px]">
        Latest news
      </b>
      <b className="absolute top-[2209px] left-[calc(50%_-_403px)] text-41xl tracking-[0.12em] leading-[120%] capitalize text-left">
        Redesigned digestive care
      </b>
      <img
        className="absolute top-[1399.64px] left-[147.95px] w-[429.81px] h-[313.83px]"
        alt=""
        src="/vector-18.svg"
      />
      <img
        className="absolute top-[1386.88px] left-[calc(50%_-_218px)] w-[436.54px] h-[326.88px]"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="absolute top-[1405.24px] left-[1328.41px] w-[359.42px] h-[302.58px]"
        alt=""
        src="/vector-20.svg"
      />
      <div className="absolute top-[1436px] left-[calc(50%_-_794px)] w-[387px] h-[197px] text-white">
        <b className="absolute top-[149px] left-[calc(50%_-_193.5px)] tracking-[0.12em] leading-[120%] capitalize">
          of your population
        </b>
        <b className="absolute top-[0px] left-[calc(50%_-_97.5px)] text-81xl tracking-[0.12em] leading-[120%] capitalize">
          25%
        </b>
      </div>
      <div className="absolute top-[1447px] left-[calc(50%_-_168px)] w-[337px] h-[197px] text-white">
        <b className="absolute top-[149px] left-[calc(50%_-_105.5px)] tracking-[0.12em] leading-[120%] capitalize">
          per month
        </b>
        <b className="absolute top-[0px] left-[calc(50%_-_168.5px)] text-81xl tracking-[0.12em] leading-[120%] capitalize">
          8 days
        </b>
      </div>
      <div className="absolute top-[1447px] left-[calc(50%_+_409px)] w-[261px] h-[197px] text-white">
        <b className="absolute top-[149px] left-[calc(50%_-_130.5px)] tracking-[0.12em] leading-[120%] capitalize">
          not satisfied
        </b>
        <b className="absolute top-[0px] left-[calc(50%_-_87.5px)] text-81xl tracking-[0.12em] leading-[120%] capitalize">
          71%
        </b>
      </div>
      <div className="absolute top-[1968px] left-[calc(50%_-_199px)] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-left text-lg text-white">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          understanding prevalence
        </b>
      </div>
      <div className="absolute top-[2966px] left-[calc(50%_-_124px)] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-left text-lg text-white">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          Our Approach
        </b>
      </div>
      <img
        className="absolute top-[2482px] left-[168.5px] w-[1583.5px] h-[455.37px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="absolute top-[3269px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        We’ve redesigned GI care around what patients really want and need –
        supportive, whole-person care that is also dramatically less expensive.
      </div>
      <b className="absolute top-[3168px] left-[calc(50%_-_707px)] text-41xl tracking-[0.12em] leading-[120%] capitalize text-left">
        Diagnosis and treatment for digestive health
      </b>
      <img
        className="absolute top-[3438.64px] left-[147.95px] w-[429.81px] h-[313.83px]"
        alt=""
        src="/vector-18.svg"
      />
      <img
        className="absolute top-[3425.88px] left-[calc(50%_-_218px)] w-[436.54px] h-[326.88px]"
        alt=""
        src="/vector-22.svg"
      />
      <img
        className="absolute top-[3444.24px] left-[1328.41px] w-[359.42px] h-[302.58px]"
        alt=""
        src="/vector-23.svg"
      />
      <b className="absolute top-[3487px] left-[calc(50%_-_737px)] tracking-[0.12em] leading-[120%] capitalize text-white">
        Whole-person
      </b>
      <b className="absolute top-[3487px] left-[calc(50%_-_169px)] tracking-[0.12em] leading-[120%] capitalize text-white">
        Clinically proven
      </b>
      <b className="absolute top-[3487px] left-[calc(50%_+_420px)] tracking-[0.12em] leading-[120%] capitalize text-white">
        Value-based
      </b>
      <div className="absolute top-[3833px] left-[calc(50%_-_103px)] rounded-sm bg-cadetblue-100 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.35),_1px_1px_1px_rgba(255,_255,_255,_0.25)_inset,_-1px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] h-12 flex flex-row py-[18px] px-11 box-border items-center justify-center text-left text-lg text-white">
        <b className="relative tracking-[0.1em] leading-[127.5%] uppercase">
          Contact us
        </b>
      </div>
      <div className="absolute top-[3557px] left-[calc(50%_-_815px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-white inline-block w-[415px]">
        Dietary triggers, GI psychology, medications, lifestyle
      </div>
      <div className="absolute top-[3557px] left-[calc(50%_-_172px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-white inline-block w-[351px]">
        Evidence-based, physician-led care
      </div>
      <div className="absolute top-[3557px] left-[calc(50%_+_374px)] text-9xl tracking-[0.1em] leading-[43px] font-medium text-white inline-block w-[335px]">
        Proactive, preventive care and site of service navigation
      </div>
      <ContactContainer />
      <b className="absolute top-[5374px] left-[162px] tracking-[0.12em] leading-[130%] capitalize">
        GI-specialized care
      </b>
      <b className="absolute top-[5826px] left-[195px] tracking-[0.12em] leading-[130%] capitalize">
        Health Coaching
      </b>
      <b className="absolute top-[5826px] left-[734px] tracking-[0.12em] leading-[130%] capitalize">
        Labs and Diagnostics
      </b>
      <b className="absolute top-[5826px] left-[1317px] tracking-[0.12em] leading-[130%] capitalize flex items-center justify-center w-[436px]">
        Monitoring and Messaging
      </b>
      <div className="absolute top-[5438px] left-[184px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
        Gastroenterologists and GI nurse practitioners guide the treatment
        journey
      </div>
      <div className="absolute top-[5890px] left-[184px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
        Support to integrate recommended changes into daily life
      </div>
      <div className="absolute top-[5890px] left-[771px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
        Local labs or at-home tests and tracking tools
      </div>
      <div className="absolute top-[5942px] left-[1358px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
        Symptom tracking and 24/7 to access to a care team
      </div>
      <div className="absolute top-[5374px] left-[749px] w-[393px] h-[168px]">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize flex items-center justify-center w-[393px]">
          Nutrition and behavioral health
        </b>
        <div className="absolute top-[116px] left-[19px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Support to identify food triggers and work on the brain-gut connection
        </div>
      </div>
      <div className="absolute top-[5374px] left-[1338px] w-[393px] h-[168px]">
        <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize flex items-center justify-center w-[393px]">
          Personalized care plans
        </b>
        <div className="absolute top-[116px] left-[19px] text-xl leading-[26px] font-proxima-nova inline-block w-[355px]">
          Integrated care plans tailored to each individual
        </div>
      </div>
      <div className="absolute top-[5190px] left-[276px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/video-call@2x.png"
        />
      </div>
      <div className="absolute top-[5190px] left-[859px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[28px] left-[28px] w-[116px] h-[116px] object-cover"
          alt=""
          src="/nutrition@2x.png"
        />
      </div>
      <div className="absolute top-[5196px] left-[1449px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/task@2x.png"
        />
      </div>
      <div className="absolute top-[5642px] left-[276px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/love@2x.png"
        />
      </div>
      <div className="absolute top-[5642px] left-[859px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightpink w-[172px] h-[172px]" />
        <img
          className="absolute top-[24px] left-[26px] w-32 h-32 object-cover"
          alt=""
          src="/biopsy@2x.png"
        />
      </div>
      <div className="absolute top-[5642px] left-[1449px] w-[172px] h-[172px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cadetblue-100 w-[172px] h-[172px]" />
        <img
          className="absolute top-[22px] left-[22px] w-32 h-32 object-cover"
          alt=""
          src="/medical-app@2x.png"
        />
      </div>
      <div className="absolute top-[6077px] left-[calc(50%_-_961px)] bg-cadetblue-100 w-[1922px] h-[394px]" />
      <div className="absolute top-[6206px] left-[170px] w-[1070px] h-[136px] text-right text-xl text-white font-proxima-nova">
        <div className="absolute top-[84px] left-[0px] tracking-[0.1em] leading-[26px] font-semibold inline-block w-[1070px]">
          Winhealth takes a virtual-first approach to care. If members need
          in-person labs or diagnostics, we take a concierge approach to
          coordinate their care at a convenient, in-network location.
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_387px)] text-41xl tracking-[0.12em] leading-[120%] capitalize font-headline-h4-medium text-left">
          We coordinate in-person care
        </b>
      </div>
      <QualityOfLifeContainer />
      <div className="absolute top-[7323px] left-[calc(50%_-_727px)] text-[33.08px] tracking-[0.1em] leading-[43px] font-medium text-gray-200 inline-block w-[1455px]">
        Members may start with digestive health concerns, but Oshi Health will
        coordinate with other services in your benefit ecosystem to maximize
        health outcomes, amplifying benefits beyond GI care.
      </div>
      <div className="absolute top-[8080px] left-[330px] w-[1260px] h-[319.64px] text-left">
        <img
          className="absolute top-[0px] left-[0px] w-[288.02px] h-[319.64px] object-cover"
          alt=""
          src="/group-36362@2x.png"
        />
        <div className="absolute top-[74px] left-[365px] w-[895px] h-[171px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
            Felix, Florida
          </b>
          <div className="absolute top-[51px] left-[0px] text-11xl leading-[40px] font-proxima-nova inline-block w-[895px]">
            Winhealth has been a whole new level of care. I feel so much better
            equipped to handle my digestive issues and am back to living life
            uninterrupted by pain.”
          </div>
        </div>
      </div>
      <div className="absolute top-[8435px] left-[330px] flex flex-row items-center justify-start gap-[77px] text-left">
        <div className="relative w-[895px] h-[171px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.12em] leading-[130%] capitalize">
            Johanna, Texas
          </b>
          <div className="absolute top-[51px] left-[0px] text-11xl leading-[40px] font-proxima-nova inline-block w-[895px]">
            Winhealth has been a whole new level of care. I feel so much better
            equipped to handle my digestive issues and am back to living life
            uninterrupted by pain.”
          </div>
        </div>
        <img
          className="relative w-[305px] h-[320.06px] object-cover"
          alt=""
          src="/group-36387@2x.png"
        />
      </div>
      <div className="absolute top-[9040px] left-[139px] w-[1643px] h-[680px]">
        <ContainerWrapper />
        <ContainerWrapper propLeft="558px" />
        <ContainerWrapper propLeft="1116px" />
      </div>
      <Footer
        iconInstagram="/-icon-instagram1.svg"
        iconFacebook="/-icon-facebook1.svg"
        iconTwitter="/-icon-twitter.svg"
        iconLinkedin="/-icon-linkedin1.svg"
        ftrAppleIcn1="/ftrappleicn-1@2x.png"
        propTop="9805px"
      />
    </div>
  );
};

export default FOREMPLOYERSHEALTHPLANS;
