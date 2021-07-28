import Feature from './header/feature';

const WhyChoose = () => {
  return (
    <article className='bg-light-grayish-blue pt-12 pb-16 px-6'>
      <h2 className='text-center text-h2 font-light text-dark-blue max-w-xs mx-auto'>
        Why choose Easybank?
      </h2>
      <p className='text-center text-sm mt-4 text-grayish-blue'>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <ul className='mt-14'>
        <li>
          <Feature
            imageSrc='/images/icon-online.svg'
            title='Online Banking'
            text='Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.'
          />
        </li>
        <li className='mt-9'>
          <Feature
            imageSrc='/images/icon-budgeting.svg'
            title='Simple Budgeting'
            text='See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.'
          />
        </li>
        <li className='mt-9'>
          <Feature
            imageSrc='/images/icon-onboarding.svg'
            title='Fast Onboarding'
            text='We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.'
          />
        </li>
        <li className='mt-9'>
          <Feature
            imageSrc='/images/icon-api.svg'
            title='Open API'
            text='Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.'
          />
        </li>
      </ul>
    </article>
  );
};

export default WhyChoose;
