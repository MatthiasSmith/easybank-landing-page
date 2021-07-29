import Image from 'next/image';

const Feature = ({
  imageSrc,
  title,
  text,
}: {
  imageSrc: string;
  title: string;
  text: string;
}) => {
  return (
    <article className='flex flex-col items-center lg:items-start'>
      <Image layout='fixed' src={imageSrc} height='72' width='72' alt='' />
      <h3 className='text-xl text-center text-dark-blue font-light mt-5 lg:mt-7'>
        {title}
      </h3>
      <p className='text-sm text-center text-grayish-blue mt-4 lg:text-left lg:mt-5'>
        {text}
      </p>
    </article>
  );
};

export default Feature;
