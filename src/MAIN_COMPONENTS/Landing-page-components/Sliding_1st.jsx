import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import scrollimg from '../../Images/LandingPage-Images/Scrolling-Image.webp';

gsap.registerPlugin (ScrollTrigger);

export default function AboutUsSection () {
  const imgContainerRef = useRef (null);

  useEffect (() => {
    const mm = gsap.matchMedia ();

    mm.add (
      {
        isMobile: '(max-width: 768px)', // Target mobile devices
        isDesktop: '(min-width: 769px)', // Target desktop and larger devices
      },
      context => {
        let {isMobile} = context.conditions;

        gsap.to (imgContainerRef.current, {
          y: isMobile ? -100 : -230, // Apply different 'y' values based on device
          scrollTrigger: {
            trigger: imgContainerRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 0.5, // Smooth scroll-linked animation
          },
          ease: 'power1.inOut', // Adds smooth easing to the animation
        });
      }
    );

    // Optimize images by setting loading="lazy"
    document.querySelectorAll ('img').forEach (image => {
      image.setAttribute ('loading', 'lazy');
    });

    return () => mm.revert (); // Cleanup matchMedia listeners
  }, []);

  return (
    <section className="w-full h-auto">
      <div className="relative z-40 mx-auto mt-16 px-[100px] max-md:px-6 max-w-7xl">
        {/* Sliding Image */}
        <div className="relative">
          <div
            ref={imgContainerRef}
            className="top-[10px] right-0 max-md:static absolute w-full max-w-xl md:max-w-2xl h-auto"
          >
            <img
              src={scrollimg}
              alt="Creative parallax effect"
              className="shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="relative top-52 max-md:-top-5 z-10 mt-20 max-md:mt-0 mb-28 pl-4 text-left">
          <h1 className="font-yeseva text-[75px] max-md:text-5xl leading-snug">
            <span className="text-black">Creativity</span>
            <span className="text-yellow"> Takes <br /> Courage.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
