import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import free3 from '../../Images/AboutUs-images/free3.jpg';
import {Link} from 'react-router-dom';
gsap.registerPlugin (ScrollTrigger);

export default function AboutUsSection () {
  const imgContainerRef = useRef (null);
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        // Define breakpoints
        isDesktop: "(min-width: 1024px)", // Desktop and larger screens
        isMobile: "(max-width: 1023px)", // Mobile and smaller tablets
      },
      (context) => {
        let yValue = context.conditions.isDesktop ? -240 : -30; 
  
        gsap.to(imgContainerRef.current, {
          y: yValue, // Responsive shift value
          scrollTrigger: {
            trigger: imgContainerRef.current,
            start: "top 80%", // Start when top is at 80% of viewport
            end: "bottom 20%", // End when bottom is at 20% of viewport
            scrub: 0.5, // Smooth scrub
          },
          ease: "power1.out", // Smooth easing curve
        });
      }
    );
  
    // Clean up matchMedia on component unmount
    return () => mm.revert();
  }, []);
  

  return (
    <section className="bg-[#f9f9f9] pb-48 w-full">
      <div className="relative mx-auto px-4 md:px-8 lg:px-16 max-w-[1280px]">
        {/* Heading Section */}
        <div className="relative top-4 z-10 pt-28">
          <span className="font-bold text-[25px] text-yellow">laxya</span>
          <h1 className="mb-10 font-yeseva text-[152px] text-yellow max-sm:text-[52px] max-md:text-[100px] leading-none">
            <span className="text-stroke text-transparent">about</span> us
          </h1>
        </div>

        {/* Sliding Image */}
        <div className="relative bg-[#f9f9f9]">
          <div
            ref={imgContainerRef}
            className="top-[20px] -left-[20.5rem] max-md:static absolute w-[700px] max-md:w-full h-[680px] max-md:h-auto"
          >
            <img
              src={free3}
              alt="Parallax"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-end items-end bg-[#f9f9f9] pt-10 w-full font-normal font-roboto text-[#C0C0C7] text-left text-lg">
          <div className="w-[60%] max-md:w-full">
            <p className="pb-6">
              Over the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC,
              Voltas, Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision
              to reality. At Laxya Productions, our team is a mix of dedicated professionals, each focused on achieving
              excellence.
            </p>
            <p className="mb-[30px]">
              Fueled by creativity and a drive for perfection, we turn ideas into reality with a touch of magic. Over
              the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC, Voltas,
              Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision to
              reality. We've partnered with top agencies like Ogilvy, and respected brands like Honda, Samsung, Yamaha
              etc. in achieving many successes and satisfied clients. From corporate videos to film productions, we've
              mastered various visual, digital, and print media formats, solidifying our reputation as one of Delhi's
              best production houses. Come explore our world and join us on a journey of creativity and quality.
            </p>
            <Link to="/about">
              <button className="flex-shrink-0 bg-yellow px-[50px] h-[62px] font-bold text-[18px] text-black outline-none">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
