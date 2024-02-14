import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

const services = [
    {
        id: 1,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service1.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
    {
        id: 2,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service2.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
    {
        id: 3,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service3.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
    {
        id: 4,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service4.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
    {
        id: 5,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service5.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
    {
        id: 6,
        name: 'Holistic Mind-Gut Care',
        image: '/assets/services/service6.svg',
        description: 'Comprehensive care that addresses the interconnectedness of mental health and gut health for overall well-being.'
    },
];

const ServiceCard = ({ condition }) => {
    return (
        <div className="flex flex-col items-center p-4">
            <Image
                src={condition.image}
                alt={condition.image}
                width={200}
                height={200}
                className="h-[162px] max-w-[100px] md:max-w-[230px]"
            />
            <p className="mt-1 font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                {condition.name}
            </p>
            <div className="mt-4 text-center font-proxima text-sm font-medium md:text-base">
                <p  className="text-themeGrey">
                    {condition.description}
                </p>
            </div>
        </div>
    );
};

const ServicesOffered = () => {
    return (
        <div className='bg-themeWhite'>
            <div className="container py-4 md:py-10">
                <Title text="Services offered" />
                <div className="hidden gap-4 py-4 md:grid md:grid-cols-3 md:py-10">
                    {services.map((condition) => {
                        return <ServiceCard key={condition.id} condition={condition} />;
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
                        {services.map((condition) => {
                            return (
                                <Carousel.Slide key={condition.id}>
                                    <ServiceCard condition={condition} />
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                </div>
            </div></div>
    );
};

export default ServicesOffered;
