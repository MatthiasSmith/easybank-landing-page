import Head from 'next/head';

import Header from '../components/header/header';
import Hero from '../components/hero';
import LatestArticles from '../components/latest-articles';
import WhyChoose from '../components/why-choose';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Easybank landing page</title>
        <meta
          name='description'
          content='Easybank landing page challenge by Frontend Mentor'
        />
        <link rel='icon' href='/images/favicon-32x32.png' />
      </Head>
      <Header />
      <main className='relative bg-very-light-gray max-w-full overflow-x-hidden'>
        <Hero />
        <WhyChoose />
        <LatestArticles />
        <Footer />
      </main>
    </div>
  );
}
