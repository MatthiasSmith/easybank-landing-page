import React, { useRef, useEffect, useState } from 'react';
import { Scene } from 'react-scrollmagic';
import Image from 'next/image';

import RequestInviteButton from './request-invite-btn';
import useCurrentWidth from '../hooks/use-current-width';
import { DESKTOP_BP } from '../constants/breakpoints';

const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const currentWidth = useCurrentWidth();
  const totalYAxisMovement = -4.5;

  useEffect(() => {
    setIsReducedMotion(matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const handleImageLoad = (event: any) => {
    setTimeout(() => {
      event.target.style.animationDuration = '900ms';
      event.target.classList.add('slide');
      if (headingRef.current) {
        headingRef.current.style.animationDuration = '900ms';
        headingRef?.current?.classList.add('slide');
      }
    }, 500);
  };

  return (
    <Scene duration={700} offset={-80} triggerHook='onLeave'>
      {(event: number) => {
        if (!isReducedMotion && imageContainerRef.current) {
          imageContainerRef.current.style.transform =
            currentWidth >= DESKTOP_BP * 16
              ? `translateY(${totalYAxisMovement * event}rem)`
              : `translate(-50%, ${totalYAxisMovement * event}rem)`;
        }

        return (
          <article className='hero lg:px-6'>
            <div className='lg:flex lg:max-w-screen-lg lg:mx-auto'>
              <div className='hero__image-container relative lg:absolute lg:w-3/5 lg:right-0'>
                <div
                  ref={imageContainerRef}
                  className='hero__phones-image absolute w-full'
                >
                  <Image
                    layout='responsive'
                    width='767'
                    height='939'
                    src='/images/image-mockups.png'
                    alt=''
                    onLoad={handleImageLoad}
                    className='animate animate-slide-down'
                  />
                </div>
              </div>
              <div
                ref={headingRef}
                className='flex flex-col items-center pt-10 pb-20 px-6 lg:px-0 lg:max-w-lg lg:items-start lg:py-40 lg:w-2/5 lg:mr-5 animate animate-slide-up'
              >
                <h1 className='text-h1 text-center font-light text-dark-blue lg:text-lg-h1 lg:text-left lg:max-w-sm'>
                  Next generation digital banking
                </h1>
                <p className='text-center text-sm mt-5 text-grayish-blue lg:text-left lg:text-lg'>
                  Take your financial life online. Your Easybank account will be
                  a one-stop-shop for spending, saving, budgeting, investing,
                  and much more.
                </p>
                <RequestInviteButton className='mt-10' />
              </div>
            </div>
            <style jsx>{`
              .hero__image-container {
                background-image: url('/images/bg-intro-mobile.svg');
                background-position: center 34%;
                background-repeat: no-repeat;
                background-size: cover;
                min-height: 17.95rem;
              }

              .hero__phones-image {
                bottom: -1.15rem;
                left: 50%;
                transform: translateX(-50%);
                max-width: 22rem;
              }

              @media screen and (min-width: 64em) {
                .hero {
                  background-image: url('/images/bg-intro-desktop.svg');
                  background-position: clamp(25rem, 38vw, 32rem) -16rem;
                  background-repeat: no-repeat;
                }

                .hero__image-container {
                  background-image: none;
                  top: 10rem;
                }

                .hero__phones-image {
                  max-width: 100%;
                  bottom: -18.5rem;
                  left: unset;
                  right: -6.5rem;
                  transform: unset;
                }
              }

              @media screen and (min-width: 80em) {
                .hero {
                  background-position: clamp(32rem, 42vw, 40rem) -16rem;
                }

                .hero__phones-image {
                  max-width: 46rem;
                  left: unset;
                  right: -7.75rem;
                }
              }
            `}</style>
          </article>
        );
      }}
    </Scene>
  );
};

export default Hero;
