import MainHeader from "../components/main-header";
import FaqCard from "../components/faq-card";
import Footer from "../components/footer";

const FAQ = () => {
  return (
    <div className="relative bg-white w-full h-[3382px] overflow-hidden text-center text-41xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <MainHeader />
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[540px]" />
      <div className="absolute top-[309px] left-[calc(50%_-_860px)] flex flex-col items-start justify-start gap-[20px]">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize">
          FAQ
        </b>
        <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold font-proxima-nova text-gray-200 text-left inline-block w-[866px]">{`We all know that Healthcare usually causes queries, concerns, and doubts to arise, so we’re here to put your mind at ease. It’s only natural to have some essential questions before you embark on a journey to blissfulness, and here are our answers. `}</div>
      </div>
      <div className="absolute h-[2.04%] w-full top-[27.76%] right-[0%] bottom-[70.2%] left-[0%] bg-secondary-grey-6-bg" />
      <div className="absolute top-[708px] left-[calc(50%_-_523px)] flex flex-row items-start justify-center gap-[24px] text-base text-secondary-grey-7-no-active font-body-text-body-text-pt-reg">
        <div className="h-10 flex flex-col items-center justify-start gap-[12px] text-skyblue-200">
          <a
            className="relative tracking-[0.07em] leading-[26px] uppercase font-bold text-[inherit] [text-decoration:none]"
            href="https://www.bold.health/faqs#w-tabs-0-data-w-pane-0"
            target="_blank"
          >
            Membership and Legal
          </a>
          <div className="relative rounded-sm bg-skyblue-200 w-[86px] h-0.5" />
        </div>
        <div className="relative box-border w-px h-[31px] border-r-[1px] border-solid border-secondary-grey-1" />
        <div className="h-10 flex flex-col items-center justify-start gap-[12px]">
          <a
            className="relative tracking-[0.07em] leading-[26px] uppercase font-bold text-[inherit] [text-decoration:none]"
            href="https://www.bold.health/faqs#w-tabs-0-data-w-pane-1"
            target="_blank"
          >
            Billing
          </a>
          <div className="relative rounded-sm bg-accent-primary-500 w-[90px] h-0.5 hidden" />
        </div>
        <div className="relative box-border w-px h-[31px] border-r-[1px] border-solid border-secondary-grey-1" />
        <div className="h-10 flex flex-col items-center justify-start gap-[12px]">
          <a
            className="relative tracking-[0.07em] leading-[26px] uppercase font-bold text-[inherit] [text-decoration:none]"
            href="https://www.bold.health/faqs#w-tabs-0-data-w-pane-2"
            target="_blank"
          >{`Doctors & Health Coaches`}</a>
          <div className="relative rounded-sm bg-accent-primary-500 w-[120px] h-0.5 hidden" />
        </div>
        <div className="relative box-border w-px h-[31px] border-r-[1px] border-solid border-secondary-grey-1" />
        <div className="h-10 flex flex-col items-center justify-start gap-[12px]">
          <a
            className="relative tracking-[0.07em] leading-[26px] uppercase font-bold text-[inherit] [text-decoration:none]"
            href="https://www.bold.health/faqs#w-tabs-0-data-w-pane-3"
            target="_blank"
          >
            Virtual Care
          </a>
          <div className="relative rounded-sm bg-accent-primary-500 w-[120px] h-0.5 hidden" />
        </div>
        <div className="relative box-border w-px h-[31px] border-r-[1px] border-solid border-secondary-grey-1" />
        <div className="h-10 flex flex-col items-center justify-start gap-[12px]">
          <a
            className="relative tracking-[0.07em] leading-[26px] uppercase font-bold text-[inherit] [text-decoration:none]"
            href="https://www.bold.health/faqs#w-tabs-0-data-w-pane-4"
            target="_blank"
          >
            Conditions and Treatments
          </a>
          <div className="relative rounded-sm bg-accent-primary-500 w-[180px] h-0.5 hidden" />
        </div>
      </div>
      <div className="absolute top-[798px] left-[111px] flex flex-col items-start justify-start gap-[20px]">
        <FaqCard
          signUpProcessText="What does the sign-up process look like?"
          carePlanText="It all starts with an in-depth assessment of your symptoms, health and goals. Based on this, we create a personalized care plan. You choose the package that’s right for you, and instantly get access to your gut health plan, your multidisciplinary care team, and other resources that will support your gut health journey."
        />
        <FaqCard
          signUpProcessText="What will I get when I sign up for Bold?"
          carePlanText="When you sign up for Bold you get access to a multidisciplinary care team, including a gastroenterologist, care guide, dietitian, and GI specialized psychologist. You will also have access to our digital therapeutics to help co-manage your digestive condition. For convenience, you can access Bold and communicate with your care team through our web platform or mobile app."
        />
        <FaqCard
          signUpProcessText="How do you decide what is the right care path for me?"
          carePlanText="We ask you to take an initial onboarding assessment where we learn about you as a whole using the bio-psychosocial model of care. We evaluate your symptoms, medical history, prior treatments, procedures, and dietary modifications, stress levels, mood, work productivity, and overall wellness in order to determine the best way to manage your gut health"
        />
        <FaqCard
          signUpProcessText="Is Bold the right solution for me?"
          carePlanText="If you are serious about taking better control of your gut health, and are able to engage with your care team via app or the web, Bold can help! If you sign up for Bold and after initial evaluation we find that your condition would be best managed with traditional GI care, we can assist you in finding a high-quality clinician in your area to take the next steps."
        />
        <FaqCard
          signUpProcessText="Can I share my Bold membership with someone else?"
          carePlanText="Our platform is individualized to provide the best care for each individual. We also obtain your personal health information. As such, it is not possible nor recommended to share your membership with someone else."
        />
        <FaqCard
          signUpProcessText="Is Bold helpful if I already have a GI or primary care doctor?"
          carePlanText="Yes! Multiple research studies show that an integrated, multidisciplinary approach to gastrointestinal care improves outcomes in a variety of digestive disorders. We can work with your PCP or gastroenterologist to help you address diet, nutrition, stress, mood, and take control of your gut health."
        />
        <FaqCard
          signUpProcessText="How long should I expect my care plan to run for?"
          carePlanText="Our care plans vary for each individual depending on their symptoms, severity, response to treatment, and other medical conditions. However, you can expect somewhere between 6-12 months on the Bold platform to gain control of your gut health. Some members respond quicker, within 2-3 months, and may be able to check-in less frequently or as needed afterward."
        />
        <FaqCard
          signUpProcessText="Is Bold HIPAA-compliant?"
          carePlanText="Your privacy and control of your personal health information are our priority at Bold. Our platform is HIPAA-compliant so you can be assured that your personal health information is safe."
        />
        <FaqCard
          signUpProcessText="Is Bold FDA approved?"
          carePlanText="Bold is not FDA approved as that is a designation generally reserved for pharmaceutical drugs. Our digital therapeutic tool Zemedy has, however, been tested and shown to be effective for the management of IBS in multiple peer-reviewed studies in medical journals, including a randomized control trial, the gold standard of scientific rigor."
        />
      </div>
      <img
        className="absolute top-[216px] left-[1135px] w-[683.85px] h-[411.29px]"
        alt=""
        src="/faqspana.svg"
      />
      <Footer
        iconInstagram="/-icon-instagram3.svg"
        iconFacebook="/-icon-facebook3.svg"
        iconTwitter="/-icon-twitter.svg"
        iconLinkedin="/-icon-linkedin3.svg"
        ftrAppleIcn1="/ftrappleicn-13@2x.png"
        propTop="2582px"
      />
    </div>
  );
};

export default FAQ;
