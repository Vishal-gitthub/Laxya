import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import scrollimg from '../../Images/LandingPage-Images/Scrolling-Image.webp';
gsap.registerPlugin (ScrollTrigger);

export default function AboutUsSection () {
  const imgContainerRef = useRef (null);

  useEffect (() => {
    gsap.to (imgContainerRef.current, {
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1.5, // Slightly faster scrub for smoother effect
      },
      top: '-150px', // Fine-tuned for smaller devices
      ease: 'power1.inOut', // Adds a smooth easing effect
    });
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
        <div className="relative top-52 max-sm:top-3 max-md:top-24 z-10 mt-20 max-md:mt-0 text-left">
          <h1 className="font-yeseva text-[75px] max-md:text-5xl leading-snug">
            <span className="text-black">Creativity</span>

            <span className="text-yellow"> Takes <br /> Courage.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
