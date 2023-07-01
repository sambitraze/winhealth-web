import React from 'react';
import Title from '../Title';
import Image from 'next/image';

const PricingSection = () => {
  return (
    <div className="container py-10">
      <Title type={'section'} text={'Our Plans'} />
      <div className="mx-auto max-w-screen-lg py-4 md:py-10">
        <div className="grid grid-cols-4">
          <div className="flex flex-col justify-center bg-themeDarkPink px-4 py-3 text-white">
            <div className="text-lg font-bold">Compare Plans</div>
            <div className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>
              <span className="font-brandon text-3xl font-bold">Free</span>
              <span className="text-[#858BA0]">/ Lifetime</span>
            </div>
            <div className="mt-2">
              <button className="w-full rounded-md bg-[#252430] py-3 font-medium text-white">
                Choose This Plan
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#8EE2EB] px-4 py-3 text-center text-sm leading-4">
            <div>
              <span className="font-brandon text-3xl font-bold">$25</span>
              <span className="text-[#858BA0]">/ Month</span>
            </div>
            <div className="mt-2">
              <button className="w-full rounded-md bg-[#252430] py-3 font-medium text-white">
                Choose This Plan
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>
              <span className="font-brandon text-3xl font-bold">$40</span>
              <span className="text-[#858BA0]">/ Month</span>
            </div>
            <div className="mt-2">
              <button className="w-full rounded-md bg-[#252430] py-3 font-medium text-white">
                Choose This Plan
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col justify-center bg-themeDarkPink px-4 py-3 text-white">
            <div>Duration</div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>2 weeks</div>
          </div>
          <div className="flex flex-col justify-center bg-[#8EE2EB] px-4 py-3 text-center text-sm leading-4">
            <div>20 weeks</div>
            <p className="text-[#858BA0]">Add-ons on Demand</p>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>Unlimited</div>
            <div className="text-[#858BA0]">Add-ons on Demand</div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col justify-center bg-themeDarkPink px-4 py-3 text-white">
            <div>Users per plan</div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>5 pages</div>
          </div>
          <div className="flex flex-col justify-center bg-[#8EE2EB] px-4 py-3 text-center text-sm leading-4">
            <div>50 pages</div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>Unlimited</div>
            <div className="text-[#858BA0]">Add-ons on Demand</div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col justify-center bg-themeDarkPink px-4 py-3 text-white">
            <div>Lorem Ipsum</div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>
              <Image
                src={'/assets/verified1.svg'}
                alt="Verified Icon"
                width={16}
                height={16}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#8EE2EB] px-4 py-3 text-center text-sm leading-4">
            <div>
              <Image
                src={'/assets/verified1.svg'}
                alt="Verified Icon"
                width={16}
                height={16}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#B6F4FF] px-4 py-3 text-center text-sm leading-4">
            <div>
              <Image
                src={'/assets/verified1.svg'}
                alt="Verified Icon"
                width={16}
                height={16}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
