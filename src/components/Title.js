import { twMerge } from 'tailwind-merge';

const Title = ({ text, className, type }) => {
  if (type === 'herosection')
    return (
      <p
        className={twMerge(
          'text-2xl font-bold capitalize text-themeGrey md:text-3xl lg:text-5xl',
          className
        )}
        style={{
          lineHeight: '1.2',
        }}
      >
        {text}
      </p>
    );

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
