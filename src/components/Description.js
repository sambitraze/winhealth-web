import { twMerge } from 'tailwind-merge';

const Description = ({ text, className }) => {
  return (
    <p
      className={twMerge(
        `mx-auto max-w-3xl text-center font-proxima text-themeGrey`,
        className
      )}
    >
      {text}
    </p>
  );
};

export default Description;
