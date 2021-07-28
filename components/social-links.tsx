import Image from 'next/image';

const SocialLinks = () => {
  return (
    <ul className='mt-8 flex'>
      <li>
        <a href='#'>
          <Image
            src='/images/icon-facebook.svg'
            layout='fixed'
            width='24'
            height='24'
            alt='Link to our Facebook page'
          />
        </a>
      </li>
      <li className='ml-4'>
        <a href='#'>
          <Image
            src='/images/icon-youtube.svg'
            layout='fixed'
            width='24'
            height='24'
            alt='Link to our YouTube channel'
          />
        </a>
      </li>
      <li className='ml-4'>
        <a href='#'>
          <Image
            src='/images/icon-twitter.svg'
            layout='fixed'
            width='24'
            height='24'
            alt='Link to our Twitter feed'
          />
        </a>
      </li>
      <li className='ml-4'>
        <a href='#'>
          <Image
            src='/images/icon-pinterest.svg'
            layout='fixed'
            width='24'
            height='24'
            alt='Link to our Pinterest page'
          />
        </a>
      </li>
      <li className='ml-4'>
        <a href='#'>
          <Image
            src='/images/icon-instagram.svg'
            layout='fixed'
            width='24'
            height='24'
            alt='Link to our Instagram profile'
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
