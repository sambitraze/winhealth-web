import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';

const FaqHerosection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-4 py-4 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-2">
          <Title type={'herosection'} text={'FAQ'} />
          <Description
            text={
              'We all know that Healthcare usually causes queries, concerns, and doubts to arise, so we’re here to put your mind at ease. It’s only natural to have some essential questions before you embark on a journey to blissfulness, and here are our answers. '
            }
            type={'herosection'}
          />
        </div>
        <Image
          src={'/assets/faq-thumbnail.svg'}
          alt={'FAQ Thumbnail'}
          width={500}
          height={500}
          className="ml-auto h-auto"
        />
      </div>
    </div>
  );
};

export default FaqHerosection;
