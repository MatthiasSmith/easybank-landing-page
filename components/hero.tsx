import Image from 'next/image';
import RequestInviteButton from './request-invite-btn';

const Hero = () => {
  return (
    <article className='hero lg:px-6'>
      <div className='lg:flex lg:max-w-screen-lg lg:mx-auto'>
        <div className='hero__image-container relative lg:absolute lg:w-3/5 lg:right-0'>
          <div className='hero__phones-image absolute w-full'>
            <Image
              layout='responsive'
              width='767'
              height='939'
              src='/images/image-mockups.png'
              alt=''
            />
          </div>
        </div>
        <div className='flex flex-col items-center pt-10 pb-20 px-6 lg:px-0 lg:max-w-lg lg:items-start lg:py-40 lg:w-2/5 lg:mr-5'>
          <h1 className='text-h1 text-center font-light text-dark-blue lg:text-lg-h1 lg:text-left lg:max-w-sm'>
            Next generation digital banking
          </h1>
          <p className='text-center text-sm mt-5 text-grayish-blue lg:text-left lg:text-lg'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestInviteButton className='mt-10' />
        </div>
      </div>
      <style jsx>{`
        .hero__image-container {
          background-image: url('/images/bg-intro-mobile.svg');
          background-position: center 34%;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 17.95rem;
        }

        .hero__phones-image {
          bottom: -1.15rem;
          left: 50%;
          transform: translateX(-50%);
          max-width: 22rem;
        }

        @media screen and (min-width: 64em) {
          .hero {
            background-image: url('/images/bg-intro-desktop.svg');
            background-position: min(25rem, 28rem) -16rem;
            background-repeat: no-repeat;
          }

          .hero__image-container {
            background-image: none;
            top: 10rem;
          }

          .hero__phones-image {
            max-width: 100%;
            bottom: -18.5rem;
            left: 25.75rem;
          }
        }

        @media screen and (min-width: 80em) {
          .hero {
            background-position: clamp(35rem, 335%, 40rem) -16rem;
          }

          .hero__phones-image {
            max-width: 46rem;
            left: 38.65rem;
          }
        }
      `}</style>
    </article>
  );
};

export default Hero;
