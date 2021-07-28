const FooterNav = () => {
  return (
    <nav className='mt-6'>
      <ul className='flex flex-col items-center font-light text-white text-sm'>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Contact</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Blog</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Careers</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Support</a>
        </li>
        <li className='mt-2'>
          <a href='#'>Privacy Policy</a>
        </li>
        <li className='mt-10'>
          <a
            href='#'
            className='bg-gradient-to-r from-lime-green to-bright-cyan text-white rounded-full py-3 px-8 font-normal'
          >
            Request Invite
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
