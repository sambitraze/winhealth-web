import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WinHealth</title>
        <meta
          name="description"
          content="WinHealth- Unleash Gut Health & Heal your Gut (HOg)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="text-3xl">WinHealth</div>
      </div>
    </>
  );
}
