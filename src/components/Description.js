import { twMerge } from 'tailwind-merge';

const Description = ({ text, className, type }) => {
  if (type === 'herosection') {
    return (
      <p className={twMerge(`font-proxima text-themeMediumGrey`, className)}>
        {text}
      </p>
    );
  }

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
