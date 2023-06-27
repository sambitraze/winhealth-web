import { twMerge } from 'tailwind-merge';

const Title = ({ text, className }) => {
  return (
    <p
      className={twMerge(
        `mb-4 text-center text-2xl font-medium capitalize text-themeGrey md:text-3xl`,
        className
      )}
    >
      {text}
    </p>
  );
};

export default Title;
