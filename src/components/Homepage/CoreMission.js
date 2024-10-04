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
                className={'capitalize'}
            />
            <Description
                text={
                    'Through strategic partnerships with international pharmaceutical companies, payers, and healthcare providers, we prioritize personalized care, empowering individuals to take an active role in managing their health and well-being. Our goal is to revolutionize the healthcare experience by leveraging technology to deliver effective, accessible, and personalized DTx solutions. '
                }
                type={'herosection'}
            />
        </div>
    );
};

export default CoreMission;
