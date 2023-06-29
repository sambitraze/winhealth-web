import React from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full justify-between border border-[#DBDBDB] px-3 py-2 text-left font-brandon text-sm font-medium tracking-wide outline-0 md:p-4 md:text-base"
      >
        <span>{question}</span>{' '}
        <span className="text-themeBlue">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className={`mt-2 bg-[#F6F6F6] px-3 py-2 font-ptSans text-sm md:px-4 md:text-base ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
