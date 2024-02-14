import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

const benifits = [
    {
        id: 1,
        name: 'Zero-Cost Adoption',
        image: '/assets/benifits/benifits1.svg',
        description: "Seamless integration with no upfront costs."
    },
    {
        id: 2,
        name: 'Maximize ROI',
        image: '/assets/benifits/benifits2.svg',
        description: " Increase patient conversion for higher returns "
    },
    {
        id: 3,
        name: ' Data-Driven Care',
        image: '/assets/benifits/benifits3.svg',
        description: "Monitor patients beyond treatment"
    },
    {
        id: 4,
        name: 'Validated Protocols',
        image: '/assets/benifits/benifits4.svg',
        description: "Ensuring better treatment outcomes and regulatory compliance"
    },
];

const BenifitCard = ({ benifit }) => {
    return (
        <div className="flex flex-col items-center ">
            <Image
                src={benifit.image}
                alt={benifit.image}
                width={200}
                height={172}
                className="max-h-[172px] max-w-[100px] md:max-w-[200px]"
            />
            <p className="mt-1 font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                {benifit.name}
            </p>
            <div className="mt-4 text-center font-proxima text-sm font-medium md:text-base">
                <p className="text-themeGrey">
                    {benifit.description}
                </p>
            </div>
        </div>
    );
};

const BenifitsOfPartnering = () => {
    return (
        <div className='bg-White'>
            <div className="container py-4 md:py-10">
                <Title text="Benefits of partnering with us" />
                <div className="hidden gap-4 py-4 md:grid md:grid-cols-2 md:py-10">
                    {benifits.map((benifit) => {
                        return <BenifitCard key={benifit.id} benifit={benifit} />;
                    })}
                </div>
                <div className="mb-4 py-4 md:hidden md:py-10">
                    <Carousel
                        slideSize="60%"
                        slideGap="xs"
                        withIndicators
                        align="center"
                        slidesToScroll={1}
                        withControls={false}
                        loop
                    >
                        {benifits.map((benifit) => {
                            return (
                                <Carousel.Slide key={benifit.id}>
                                    <BenifitCard benifit={benifit} />
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                </div>
            </div></div>
    );
};

export default BenifitsOfPartnering;
