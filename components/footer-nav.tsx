const FooterNav = () => {
  return (
    <nav className='mt-6 md:flex md:mt-0 md:flex-1'>
      <ul className='flex flex-col items-center font-light text-white whitespace-nowrap text-sm md:ml-14 md:items-start lg:ml-28'>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Contact</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Blog</a>
        </li>
      </ul>
      <ul className='flex flex-col items-center font-light text-white whitespace-nowrap text-sm md:ml-14 md:items-start lg:ml-28'>
        <li className='mt-2 md:mt-0'>
          <a href='#'>Careers</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Support</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Privacy Policy</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
