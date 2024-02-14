import { twMerge } from 'tailwind-merge';

const Description = ({ text, className, type }) => {
  if (type === 'herosection') {
    return (
      <p className={twMerge(`text-themeMediumGrey`, className)}>
        {text}
      </p>
    );
  }

  return (
    <p
      className={twMerge(
        `mx-auto max-w-3xl text-center text-sm text-themeGrey md:text-lg`,
        className
      )}
    >
      {text}
    </p>
  );
};

export default Description;
