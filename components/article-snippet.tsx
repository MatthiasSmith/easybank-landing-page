import Image from 'next/image';

const ArticleSnippet = ({
  imageSrc,
  author,
  title,
  text,
}: {
  imageSrc: string;
  author: string;
  title: string;
  text: string;
}) => {
  return (
    <article className='bg-white rounded-md overflow-hidden'>
      <Image
        src={imageSrc}
        layout='responsive'
        width='600'
        height='400'
        alt=''
      />
      <div className='px-8 py-6'>
        <span className='text-very-xs text-grayish-blue'>By {author}</span>
        <h3 className='text-article-heading text-dark-blue font-light mt-2'>
          {title}
        </h3>
        <p className='text-article-text text-grayish-blue mt-2'>{text}</p>
      </div>
    </article>
  );
};

export default ArticleSnippet;
