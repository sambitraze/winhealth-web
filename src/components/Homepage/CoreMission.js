import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';

const CoreMission = () => {
    return (
        <div className="container py-10">
            <Title
                text={'Our core mission is to enhance lives and improve health outcomes.'}
                type={'herosection'}
            />
            <Description
                text={
                    'Through strategic partnerships with international pharmaceutical companies, payers, and healthcare providers, we prioritize personalized care, empowering individuals to take an active role in managing their health and well-being. Our goal is to revolutionize the healthcare experience by leveraging technology to deliver effective, accessible, and personalized DTx solutions. '
                }
                type={'herosection'}
            />
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

export default CoreMission;
