import Image from 'next/image';
import { useState } from 'react';
import RequestInviteButton from '../request-invite-btn';

import MobileNav from './mobile-nav';
import Nav from './nav';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNavMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className='pt-5 pb-4 px-6 relative z-10 bg-white'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-between'>
        <a href='#'>
          <Image
            layout='fixed'
            height='20'
            width='139'
            src='/images/logo.svg'
            alt='Navigate home'
          />
        </a>
        <Nav />
        <RequestInviteButton className='hidden md:block' />
        <button
          type='button'
          onClick={toggleMobileNavMenu}
          className='md:hidden'
          title='Toggle mobile navigation menu'
        >
          {!isMobileNavOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='11'>
              <g fill='#2D314D' fillRule='evenodd'>
                <path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' />
              </g>
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19'>
              <g fill='#2D314D' fillRule='evenodd'>
                <path d='M.868.661l16.97 16.97-.706.708L.162 1.369z' />
                <path d='M.161 17.632L17.131.662l.708.706-16.97 16.97z' />
              </g>
            </svg>
          )}
        </button>
      </div>
      <MobileNav isOpen={isMobileNavOpen} />
    </header>
  );
};

export default Header;
