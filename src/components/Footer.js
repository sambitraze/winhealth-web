import React from 'react';
import Logo from './Logo';
import { FOOTER_ITEMS, SOCIAL_ITEMS } from '../contants/footerItems';
import Link from 'next/link';
import Image from 'next/image';
import SubscribeToNewsletterForm from './SubscribeToNewsletterForm';

const Footer = () => {
  return (
    <div className="bg-themeDarkGrey">
      <div className="container flex flex-col gap-10 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:col-span-4">
            <p className="font-semibold uppercase tracking-wide text-white md:text-lg">
              Subscribe to latest updates
            </p>
            <SubscribeToNewsletterForm />
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="font-light text-white">
                Sign up and receive exclusive curated only for our expert
                bulletin as well as blogs and articles
              </p>
            </div>
            <div className="hidden flex-col gap-2 md:flex md:gap-4">
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
              <a href="#">
                <Image
                  src={'/assets/app-store.png'}
                  alt={'App Store'}
                  width={120}
                  height={60}
                  className="h-auto max-w-[120px]"
                />
              </a>
              <a href="#">
                <Image
                  src={'/assets/play-store.png'}
                  alt={'App Store'}
                  width={120}
                  height={60}
                  className="h-auto max-w-[120px]"
                />
              </a>
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
        <hr />
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <Logo />
          <p className="font-proxima text-sm text-white md:text-base md:uppercase">
            All right reserve 2023 ©
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
