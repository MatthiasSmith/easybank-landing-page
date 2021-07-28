import Image from 'next/image';

const Hero = () => {
  return (
    <article>
      <div className='hero__image-container'>
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
      <div className='flex flex-col items-center px-6 pt-10 pb-20'>
        <h1 className='text-h1 text-center font-light text-dark-blue'>
          Next generation digital banking
        </h1>
        <p className='text-center text-sm mt-4 text-grayish-blue'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a
          href='#'
          className='bg-gradient-to-r from-lime-green to-bright-cyan rounded-full py-3 px-8 text-white text-xs mt-10'
        >
          Request Invite
        </a>
      </div>
      <style jsx>{`
        .hero__image-container {
          background-image: url('/images/bg-intro-mobile.svg');
          background-position: center 34%;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 19.25rem;
        }

        .hero__phones-image {
          top: -8.25rem;
        }
      `}</style>
    </article>
  );
};

export default Hero;
