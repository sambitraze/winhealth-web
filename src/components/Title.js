import { twMerge } from 'tailwind-merge';

const Title = ({ text, className, type }) => {
  if (type === 'herosection')
    return (
      <p
        className={twMerge(
          'text-xl font-bold tracking-wide text-themeGrey md:text-2xl lg:text-4xl',
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
        `mb-2 text-center text-2xl font-bold text-themeGrey md:mb-4 md:text-3xl`,
        className
      )}
    >
      {text}
    </p>
  );
};

export default Title;
