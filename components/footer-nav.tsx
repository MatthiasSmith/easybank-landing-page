const FooterNav = () => {
  return (
    <nav className='mt-6 md:flex md:mt-0 md:flex-1'>
      <ul className='flex flex-col items-center font-light text-white whitespace-nowrap text-sm md:ml-14 md:items-start lg:ml-28'>
        <li>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            About Us
          </a>
        </li>
        <li className='mt-2'>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            Contact
          </a>
        </li>
        <li className='mt-2'>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            Blog
          </a>
        </li>
      </ul>
      <ul className='flex flex-col items-center font-light text-white whitespace-nowrap text-sm md:ml-14 md:items-start lg:ml-28'>
        <li className='mt-2 md:mt-0'>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            Careers
          </a>
        </li>
        <li className='mt-2'>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            Support
          </a>
        </li>
        <li className='mt-2'>
          <a
            href='#'
            className='hover:text-highlight-green transition-colors duration-200 ease-out'
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
