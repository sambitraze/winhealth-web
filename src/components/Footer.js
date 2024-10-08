import React from 'react';
import LogoTransparant from './LogoTransparant';
import { FOOTER_ITEMS, SOCIAL_ITEMS } from '../contants/footerItems';
import Link from 'next/link';
import Image from 'next/image';
import SubscribeToNewsletterForm from './SubscribeToNewsletterForm';

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-themeDarkGrey">
      <div className="container flex flex-col gap-10 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:col-span-4">
            {/* <p className="font-semibold uppercase tracking-wide text-white md:text-lg">
              Get tips regarding digestive health and more delivered
              straight to your inbox
            </p> */}
            <SubscribeToNewsletterForm />
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="font-light text-white">
                Get tips regarding digestive health and more delivered
                straight to your inbox
              </p>
            </div>
            <div className=" flex-col gap-2 py-4 md:flex md:gap-4">
              <p className="font-semibold tracking-wide text-white md:text-lg md:uppercase">
                Address & Contact
              </p>
              <p className="tracking-wide text-white">
                {/* <a href='mailto:harshank@microheal.in' key='email1' >harshank@microheal.in,
                </a>&nbsp;&nbsp;
                <a href='mailto:karan@microheal.in' key='email2'>karan@microheal.in,
                </a>&nbsp;&nbsp; */}
                <a href="mailto:info@microheal.in" key="email2">
                  info@microheal.in,
                </a>
                &nbsp;&nbsp;
                <a href="tel:+919773916168" key="phone1">
                  +919773916168
                </a>
              </p>
              <p className="tracking-wide text-white">
                MicroHeal Wellness Pvt. Ltd. 21, Silver Spring Bungalows, Divine
                Road, Science City, Ahmedabad, Gujarat - 380060
              </p>
              <p className="font-semibold tracking-wide text-white md:text-lg md:uppercase">
                Follow us
              </p>
              <div className="flex items-center gap-2 md:gap-4">
                {SOCIAL_ITEMS.map((item) => {
                  return (
                    <a href={item.href} key={item.id}>
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={30}
                        height={30}
                        className="max-h-[25px] max-w-[25px] object-contain md:max-h-[30px] md:max-w-[30px]"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 lg:col-span-4">
            <p className="font-semibold tracking-wide text-white md:text-lg md:uppercase">
              Download App
            </p>
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                target="_blank"
                href="https://apps.apple.com/app/healogut/id6468660817"
              >
                <Image
                  src={'/assets/app-store.png'}
                  alt={'App Store'}
                  width={120}
                  height={60}
                  className="h-auto max-w-[120px]"
                />
              </Link>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.winhealth.healogut"
              >
                <Image
                  src={'/assets/play-store.png'}
                  alt={'App Store'}
                  width={120}
                  height={60}
                  className="h-auto max-w-[120px]"
                />
              </Link>
            </div>
          </div>

          {FOOTER_ITEMS.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 md:gap-4 lg:col-span-2"
              >
                <p className="font-semibold tracking-wide text-white md:text-lg md:uppercase">
                  {item.section}
                </p>
                <div className="flex flex-col gap-2 md:gap-4">
                  {item.links.map((link) => {
                    return (
                      <Link
                        target="_blank"
                        key={link.id}
                        href={link.href}
                        className="font-proxima text-white underline-offset-2 hover:underline md:uppercase"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col gap-2 md:hidden md:gap-4">
            <p className="font-semibold tracking-wide text-white md:text-lg md:uppercase">
              Follow us
            </p>
            <div className="flex items-center gap-2 md:gap-4">
              {SOCIAL_ITEMS.map((item) => {
                return (
                  <Link target="_blank" href={item.href} key={item.id}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={30}
                      height={30}
                      className="max-h-[25px] max-w-[25px] object-contain md:max-h-[30px] md:max-w-[30px]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <LogoTransparant />
          <p className="font-proxima text-sm text-white md:text-base md:uppercase">
            © All rights reserved {date.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
