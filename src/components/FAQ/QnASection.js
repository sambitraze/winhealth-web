import React from 'react';
import FAQItem from './FAQItem';

const sections = [
  {
    id: 1,
    label: 'About the App',
    value: 'about-the-app',
    questions: [
      {
        id: 1,
        question: 'What is MicroHeal?',
        answer:
          ' MicroHeal is a digital therapeutics (DTx) company specializing in innovative solutions for managing gut health, focusing on treatment of Functional Gastrointestinal Disorders (FGID) such as Irritable Bowel Syndrome (IBS), Functional Dyspepsia etc.',
      },
      {
        id: 2,
        question: `How does MicroHeal's DTx app - healOgut, work?`,
        answer:
          'Our app combines evidence-based protocols, including behavioral science, with personalized diet and exercise plans to manage gut health effectively.',
      },
      {
        id: 3,
        question: 'What is Behavioral Science?',
        answer:
          'Behavioral Science at MicroHeal encompasses a range of evidence-based practices, including cognitive behavioral therapy, mindfulness, and gut-directed hypnosis. Our experienced healthcare professionals utilize these approaches to provide quality care, focusing on achieving long-lasting effects of treatment for our users.',
      },
      {
        id: 4,
        question: 'Can I use healOgut alongside other treatments?',
        answer:
          'Our app is designed to complement existing treatments for gut health. However, we recommend consulting with a healthcare professional before starting any new treatment regimen.',
      },
    ],
  },
  {
    id: 2,
    label: 'Enrollment and Billing',
    value: 'enrollment-and-billing',
    questions: [
      {
        id: 1,
        question: 'How do I sign up for healOgut app?',
        answer:
          'You can sign up by downloading the healOgut app from the App Store or Google Play Store and following the on-screen instructions to create an account.',
      },
      {
        id: 2,
        question: 'What payment methods does MicroHeal accept for billing?',
        answer: 'We accept major credit cards and UPI for billing purposes.',
      },
      {
        id: 3,
        question: 'Is there a subscription fee for using the healOgut app?',
        answer:
          'Yes, there is a subscription fee to access the full range of features and services within the app. Details about subscription plans can be found within the app.',
      },
    ],
  },
  {
    id: 3,
    label: 'Healthcare Providers',
    value: 'healthcare-providers',
    questions: [
      {
        id: 1,
        question:
          'What qualifications do the care providers at MicroHeal have?',
        answer:
          'Our care providers are highly qualified professionals with expertise in fields such as gastroenterology, nutrition, psychology, and behavioral science. They undergo rigorous training to ensure they provide the best possible care to our users.',
      },
      {
        id: 2,
        question: 'How are care providers assigned to users at MicroHeal?',
        answer:
          'Care providers are assigned based on the specific needs and preferences of each user. We take into account factors such as the type and severity of the condition, as well as any personal preferences the user may have.',
      },
    ],
  },
  {
    id: 4,
    label: 'Virtual Care',
    value: 'virtual-care',
    questions: [
      {
        id: 1,
        question:
          'How does MicroHeal ensure the privacy and security of my data?',
        answer:
          'MicroHeal takes data privacy and security seriously. We use industry-standard encryption and security protocols to protect your data from unauthorized access. Our care providers also undergo training on patient confidentiality and data security to ensure they handle sensitive information responsibly and ethically.',
      },
      {
        id: 2,
        question:
          'What information does MicroHeal collect from users and how is it used?',
        answer:
          'MicroHeal collects information such as personal health data, demographic information, and usage data. This information is used to provide personalized care and improve our services.',
      },
      {
        id: 3,
        question: 'What types of virtual care services does MicroHeal offer?',
        answer:
          'MicroHeal offers a range of virtual care services, including video consultations with care providers, messaging for communication, and access to educational resources.',
      },
      {
        id: 4,
        question:
          'Can I receive prescriptions through virtual care at MicroHeal?',
        answer:
          'No, prescriptions cannot be issued through virtual care at MicroHeal. Please consult a healthcare professional should you require prescriptions for medications or diagnostic tests.',
      },
    ],
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
