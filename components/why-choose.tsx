import { Scene } from 'react-scrollmagic';

import Feature from './header/feature';

const WhyChoose = () => {
  return (
    <article className='bg-light-grayish-blue pt-12 pb-16 px-6 lg:py-24'>
      <div className='max-w-screen-lg mx-auto'>
        <h2 className='text-center text-h2 font-light text-dark-blue max-w-xs mx-auto lg:max-w-none lg:text-left lg:mx-0'>
          Why choose Easybank?
        </h2>
        <p className='text-center text-sm mt-4 text-grayish-blue md:max-w-md md:mx-auto lg:max-w-2xl lg:text-left lg:text-lg lg:mx-0 lg:mt-5'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <ul className='mt-14 sm:grid sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:mt-16'>
          <Scene classToggle='slide' reverse={false} offset={-50}>
            <li className='animate animate-slide-up'>
              <Feature
                imageSrc='/images/icon-online.svg'
                title='Online Banking'
                text='Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.'
              />
            </li>
          </Scene>
          <Scene classToggle='slide' reverse={false} offset={-50}>
            <li className='mt-9 sm:mt-0 animate animate-slide-up'>
              <Feature
                imageSrc='/images/icon-budgeting.svg'
                title='Simple Budgeting'
                text='See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.'
              />
            </li>
          </Scene>
          <Scene classToggle='slide' reverse={false} offset={-50}>
            <li className='mt-9 lg:mt-0 animate animate-slide-up'>
              <Feature
                imageSrc='/images/icon-onboarding.svg'
                title='Fast Onboarding'
                text='We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.'
              />
            </li>
          </Scene>
          <Scene classToggle='slide' reverse={false} offset={-50}>
            <li className='mt-9 lg:mt-0 animate animate-slide-up'>
              <Feature
                imageSrc='/images/icon-api.svg'
                title='Open API'
                text='Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.'
              />
            </li>
          </Scene>
        </ul>
      </div>
      <style jsx>{`
        @media screen and (min-width: 40em) {
          .animate:nth-of-type(2),
          .animate:nth-of-type(4) {
            animation-delay: 150ms;
          }
        }

        @media screen and (min-width: 64em) {
          .animate:nth-of-type(2) {
            animation-delay: 150ms;
          }

          .animate:nth-of-type(3) {
            animation-delay: 300ms;
          }

          .animate:nth-of-type(4) {
            animation-delay: 450ms;
          }
        }
      `}</style>
    </article>
  );
};

export default WhyChoose;
