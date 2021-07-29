const Nav = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex items-center text-grayish-blue text-sm'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li className='ml-5'>
          <a href='#'>About</a>
        </li>
        <li className='ml-5'>
          <a href='#'>Contact</a>
        </li>
        <li className='ml-5'>
          <a href='#'>Blog</a>
        </li>
        <li className='ml-5'>
          <a href='#'>Careers</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
