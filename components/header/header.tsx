import Image from 'next/image';

const Header = () => {
  return (
    <header className='pt-5 pb-4 px-6 flex items-center justify-between relative z-10 bg-white'>
      <a href='#'>
        <Image
          layout='fixed'
          height='20'
          width='139'
          src='/images/logo.svg'
          alt='Navigate home'
        />
      </a>
      <button type='button'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='11'>
          <g fill='#2D314D' fillRule='evenodd'>
            <path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' />
          </g>
        </svg>
      </button>
    </header>
  );
};

export default Header;
