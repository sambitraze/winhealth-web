import React from 'react';
import Image from 'next/image';

const BlogCard = ({ title, link, imageURL, date, isEven }) => {
  return (
    <div
      className={`rounded-xl ${
        isEven ? 'bg-themeLightBlue' : 'bg-themePink'
      } h-full`}
    >
      <Image
        src={imageURL}
        alt={'Blog Image'}
        width={300}
        height={200}
        className="relative h-[120px] w-full rounded-xl object-cover md:h-[200px]"
      />
      <div
        className={`${
          isEven ? 'text-themeGrey' : 'text-white'
        } h-full p-4 md:p-5`}
      >
        <p className="font-brandon text-sm font-semibold md:text-sm">{date}</p>
        <p className="line-clamp-3 font-proxima text-sm md:text-base">
          {title}
        </p>
        <a
          href={link}
          target='_blank'
          className={`
            ${
              isEven ? 'hover:text-themeMediumGrey' : 'hover:text-themeWhite'
            } mt-2 inline-block font-ptSans text-sm underline underline-offset-2 md:mt-4
          `}
        >
          Read the Post
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
