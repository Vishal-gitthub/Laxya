import React from "react";
import intruderBg from "../../Images/LandingPage-Images/Intruder.webp";
export default function Project() {
  return (
    <div>
      <section
        className="bg-cover bg-center py-[150px] w-full text-white"
        style={{
          backgroundImage: `url(${intruderBg})`,
        }}
      >
        <div className="flex justify-center">
          <div className="mb-10 max-w-[820px]">
            <span className="font-black font-roboto text-[25px] max-sm:text-[18px]">
              Do you have
            </span>
            <h1 className="mb-10 font-yeseva text-[152px] max-sm:text-[50px] max-lg:text-[100px] leading-none">
              project?
            </h1>
            <div className="flex max-sm:flex-col justify-center items-center max-sm:gap-1 w-full font-roboto">
              <input
                type="text"
                className="border-[#c0c0c7] bg-black/15 backdrop-blur-[1px] px-6 border border-r-0 max-md:border-r w-full h-[62px] text-[18px] text-white outline-none"
                placeholder="Phone No."
              />
              <button className="flex-shrink-0 bg-yellow px-2 w-[300px] max-sm:w-full h-[62px] font-bold text-[18px] outline-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
