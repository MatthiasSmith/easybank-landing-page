const Nav = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex items-center text-grayish-blue text-xs'>
        <li>
          <a
            href='#'
            className='hover:text-dark-blue transition-colors duration-200 ease-out'
          >
            Home
          </a>
        </li>
        <li className='ml-8'>
          <a
            href='#'
            className='hover:text-dark-blue transition-colors duration-200 ease-out'
          >
            About
          </a>
        </li>
        <li className='ml-8'>
          <a
            href='#'
            className='hover:text-dark-blue transition-colors duration-200 ease-out'
          >
            Contact
          </a>
        </li>
        <li className='ml-8'>
          <a
            href='#'
            className='hover:text-dark-blue transition-colors duration-200 ease-out'
          >
            Blog
          </a>
        </li>
        <li className='ml-8'>
          <a
            href='#'
            className='hover:text-dark-blue transition-colors duration-200 ease-out'
          >
            Careers
          </a>
        </li>
      </ul>
      <style jsx>{`
        a {
          position: relative;
        }

        a:hover::after,
        a:focus::after {
          transform: scaleX(1);
          transform-origin: 0 50%;
        }

        a::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.25rem;
          background: linear-gradient(
            to right,
            hsl(136, 65%, 51%),
            hsl(192, 70%, 51%)
          );
          bottom: -1.85rem;
          left: 0;
          transform: scaleX(0);
          transform-origin: 100% 50%;
          transition: transform 200ms ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
