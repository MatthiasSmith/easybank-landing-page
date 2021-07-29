import ArticleSnippet from './article-snippet';

const LatestArticles = () => {
  return (
    <article className='py-20 px-6'>
      <div className='max-w-screen-lg mx-auto'>
        <h2 className='text-h2 text-dark-blue text-center font-light lg:text-left'>
          Latest Articles
        </h2>
        <ul className='mt-8 sm:grid sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6'>
          <li>
            <ArticleSnippet
              imageSrc='/images/image-currency.jpg'
              author='Claire Robinson'
              title='Receive money in any currency with no fees'
              text='The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …'
            />
          </li>
          <li className='mt-6 sm:mt-0'>
            <ArticleSnippet
              imageSrc='/images/image-restaurant.jpg'
              author='Wilson Hutton'
              title='Treat yourself without worrying about money'
              text='Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …'
            />
          </li>
          <li className='mt-6 lg:mt-0'>
            <ArticleSnippet
              imageSrc='/images/image-plane.jpg'
              author='Wilson Hutton'
              title='Take your Easybank card wherever you go'
              text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …'
            />
          </li>
          <li className='mt-6 lg:mt-0'>
            <ArticleSnippet
              imageSrc='/images/image-confetti.jpg'
              author='Claire Robinson'
              title='Our invite-only Beta accounts are now live!'
              text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site …'
            />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default LatestArticles;
