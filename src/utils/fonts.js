import localFont from 'next/font/local';
import { PT_Sans } from 'next/font/google';

export const brandon = localFont({
  src: [
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/brandon/BrandonGrotesque-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-brandon',
});

export const proxima = localFont({
  src: [
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Alt_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima_ssv/ProximaNova_Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-proxima',
});

export const ptSans = PT_Sans({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});
