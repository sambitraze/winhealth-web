import React from 'react';
import FAQItem from './FAQItem';

const sections = [
  {
    id: 1,
    label: 'Membership and Legal',
    value: 'membership-and-legal',
    questions: [
      {
        id: 1,
        question: 'What does the sign-up process look like?',
        answer:
          'It all starts with an in-depth assessment of your symptoms, health and goals. Based on this, we create a personalized care plan. You choose the package that’s right for you, and instantly get access to your gut health plan, your multidisciplinary care team, and other resources that will support your gut health journey.',
      },
      {
        id: 2,
        question: 'What will I get when I sign up for Bold?',
        answer:
          'When you sign up for Bold you get access to a multidisciplinary care team, including a gastroenterologist, care guide, dietitian, and GI specialized psychologist. You will also have access to our digital therapeutics to help co-manage your digestive condition. For convenience, you can access Bold and communicate with your care team through our web platform or mobile app.',
      },
      {
        id: 3,
        question: 'How do you decide what is the right care path for me?',
        answer:
          'We ask you to take an initial onboarding assessment where we learn about you as a whole using the bio-psychosocial model of care. We evaluate your symptoms, medical history, prior treatments, procedures, and dietary modifications, stress levels, mood, work productivity, and overall wellness in order to determine the best way to manage your gut health',
      },
      {
        id: 4,
        question: 'Is Bold the right solution for me?',
        answer:
          'If you are serious about taking better control of your gut health, and are able to engage with your care team via app or the web, Bold can help! If you sign up for Bold and after initial evaluation we find that your condition would be best managed with traditional GI care, we can assist you in finding a high-quality clinician in your area to take the next steps.',
      },
    ],
  },
  {
    id: 2,
    label: 'Billing',
    value: 'billing',
    questions: [
      {
        id: 1,
        question: 'How much does Bold cost?',
        answer:
          'Bold offers a variety of packages to meet your needs. We offer monthly and annual plans, as well as a one-time consultation. Please visit our pricing page for more information.',
      },
    ],
  },
  {
    id: 3,
    label: 'Doctors and Health Coaches',
    value: 'doctors-and-health-coaches',
  },
  {
    id: 4,
    label: 'Virtual Care',
    value: 'virtual-care',
  },
  {
    id: 5,
    label: 'Conditions and Treatments',
    value: 'conditions-and-treatments',
  },
];

const QnASection = () => {
  const [currentSection, setCurrentSection] = React.useState(sections[0].value);

  return (
    <div className="container py-4">
      <div className="no-scrollbar flex flex-wrap justify-center gap-2 md:gap-4">
        {sections.map((section, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentSection(section.value)}
            >
              <span
                className={`font-ptSans font-bold uppercase ${
                  section.value === currentSection
                    ? 'text-themeBlue underline'
                    : 'text-lightBrown'
                } text-sm underline-offset-4 md:text-base`}
              >
                {section.label}
              </span>
              <span
                className={`${
                  index === sections.length - 1 ? 'hidden' : 'inline'
                } ml-2 text-lightBrown no-underline md:ml-4`}
              >
                |
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 py-4 md:py-10">
        {sections
          .filter((section) => section.value === currentSection)[0]
          .questions?.map((question, index) => {
            return (
              <FAQItem
                key={index}
                question={question.question}
                answer={question.answer}
              />
            );
          })}
      </div>
    </div>
  );
};

export default QnASection;
