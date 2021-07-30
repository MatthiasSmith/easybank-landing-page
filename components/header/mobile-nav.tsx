const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen && (
        <>
          <nav
            id='mobile-nav'
            className='bg-white absolute z-20 rounded-md py-8 flex flex-col items-center'
          >
            <ul className='flex flex-col items-center text-dark-blue text-lg'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li className='mt-4'>
                <a href='#'>About</a>
              </li>
              <li className='mt-4'>
                <a href='#'>Contact</a>
              </li>
              <li className='mt-4'>
                <a href='#'>Blog</a>
              </li>
              <li className='mt-4'>
                <a href='#'>Careers</a>
              </li>
            </ul>
          </nav>
          <div
            id='mobile-menu-overlay'
            className='absolute min-h-screen w-full z-10 left-0 bg-gradient-to-b from-gray-800 to-transparent'
          ></div>
          <style jsx>{`
            @keyframes fade-in {
              0%: {
                opacity: 0;
              }
              99%: {
                opacity: 1;
              }
              100% {
                opacity: 1;
                display: block;
              }
            }

            #mobile-nav {
              animation: fade-in 300ms ease-out forwards;
              opacity: 0;
              width: calc(100% - 3rem);
              top: 5.5rem;
            }

            #mobile-menu-overlay {
              animation: fade-in 300ms ease-out forwards;
              opacity: 0;
              top: 3.9375rem;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default MobileNav;
