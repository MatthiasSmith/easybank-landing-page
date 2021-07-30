import Head from 'next/head';
import { Controller } from 'react-scrollmagic';

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
      <Controller>
        <main className='relative bg-very-light-gray max-w-full overflow-x-hidden'>
          <Hero />
          <WhyChoose />
          <LatestArticles />
        </main>
        <Footer />
      </Controller>
      <style jsx global>{`
        a:focus,
        button:focus,
        a:focus img,
        a:focus svg {
          outline-offset: 0.25rem;
          outline: 2px dashed hsl(155, 59%, 49%);
        }

        @keyframes slide {
          to {
            opacity: 1;
            transform: translateY(0rem);
          }
        }

        @media screen and (prefers-reduced-motion: no-preference) {
          .animate.animate-slide-up {
            opacity: 0;
            transform: translateY(3rem);
          }

          .animate.animate-slide-down {
            opacity: 0;
            transform: translateY(-3rem);
          }

          .animate.slide {
            animation: slide 700ms ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}
