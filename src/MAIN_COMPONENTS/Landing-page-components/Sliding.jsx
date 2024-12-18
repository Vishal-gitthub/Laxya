import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
      const imgContainerRef = useRef(null);

      useEffect(() => {
            // Animate the top property
            gsap.to(imgContainerRef.current, {
                  scrollTrigger: {
                        trigger: imgContainerRef.current,
                        start: "top 90%", // Starts animation when the element's top is at 80% of the viewport
                        end: "bottom 10%", // Ends animation when the element's bottom is at 20% of the viewport
                        scrub: 2, // Smoothens animation with a delayed scrub
                  },
                  top: "-120px", // Final position
            });
      }, []);

      return (
            <section className="bg-[#f9f9f9] pb-48 w-full">
                  <div className="relative mx-[75px] max-sm:mx-[20px] max-md:mx-[40px]">
                        {/* Heading Section */}
                        <div className="relative top-4 z-10 pt-28">
                              <span className="font-black text-[25px] text-yellow">laxya</span>
                              <h1 className="mb-10 font-yeseva text-[152px] text-yellow max-sm:text-[52px] max-md:text-[100px] leading-none">
                                    <span className="text-stroke text-transparent">about</span> us
                              </h1>
                        </div>

                        {/* Sliding Image */}
                        <div className="relative bg-[#f9f9f9]">
                              <div
                                    ref={imgContainerRef}
                                    className="top-[20px] -left-80 max-md:static absolute w-[700px] max-md:w-full h-[680px] max-md:h-auto"
                              >
                                    <img
                                          src="https://www.laxya.net/images/free3.jpg"
                                          alt="Parallax"
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-end items-end bg-[#f9f9f9] pt-10 w-full font-medium font-roboto text-[#C0C0C7] text-left text-lg">
                              <div className="w-[50%] max-md:w-full">

                                    <p className="pb-6">
                                          Over the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC, Voltas, Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision to reality. At Laxya Productions, our team is a mix of dedicated professionals, each focused on achieving excellence.
                                    </p>
                                    <p>
                                          Fueled by creativity and a drive for perfection, we turn ideas into reality with a touch of magic. Over the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC, Voltas, Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision to reality. We've partnered with top agencies like Ogilvy, and respected brands like Honda, Samsung, Yamaha etc. in achieving many successes and satisfied clients. From corporate videos to film productions, we've mastered various visual, digital, and print media formats, solidifying our reputation as one of Delhi's best production houses. Come explore our world and join us on a journey of creativity and quality.
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}
