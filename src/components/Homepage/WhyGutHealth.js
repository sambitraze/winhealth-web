import React from 'react';
import Image from 'next/image';
import Title from '../Title';

const WhyGutHealth = () => {
    return (
        <div className="container py-10">
            <Title
                text={'Why Gut Health is Important ?'}
                type={'herosection'}
                className={'text-center py-10'}
            />
            <Image
                src={'/assets/core-mission.svg'}
                alt={'Homepage Background'}
                width={1920}
                height={1080}
                className={'h-full w-full object-cover lg:block'}
            />
        </div>
    );
};

export default WhyGutHealth;
