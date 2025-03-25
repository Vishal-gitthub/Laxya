import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Navigation, Pagination, Autoplay} from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Landing-page-components/Slider.css';

import suzuki from '../../Images/LandingPage-Images/suzukii.webp';
import redtape from '../../Images/LandingPage-Images/redtape.webp';
import raider from '../../Images/LandingPage-Images/Raider.webp';
import itruder from '../../Images/LandingPage-Images/Intruder.webp';
import car from '../../Images/LandingPage-Images/car.webp';
import eicher from '../../Images/LandingPage-Images/eicher.webp';
import gym from '../../Images/LandingPage-Images/gym.webp';
import Phillips
  from '../../Images/portfolio_image/stillShoots/modal_images/Phillips/Amit-Dey-Philips-03.jpg';

const slides = [
  {image: suzuki, alt: 'Suzuki Motorbike'},
  {image: redtape, alt: 'RedTape Shoes'},
  {image: raider, alt: 'Raider Motorbike'},
  {image: itruder, alt: 'Intruder Motorbike'},
  {image: Phillips, alt: 'Phillips One Blade'},
  {image: car, alt: 'Luxury Car'},
  {image: gym, alt: 'Gym Equipment'},
];

export default function ExperienceCarousel () {
  const [isSlideChanging, setIsSlideChanging] = useState (false);

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation
        effect="fade"
        pagination={{
          clickable: true,
          vertical: true,
          renderBullet: (index, className) =>
            `<span class="${className} rotate-[270deg] text-[12px]  font-normal rounded-sm">0${index + 1}</span>`,
        }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        onSlideChangeTransitionStart={() => setIsSlideChanging (true)}
        onSlideChangeTransitionEnd={() => setIsSlideChanging (false)}
        className="w-full h-full"
      >
        {slides.map ((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative pb-[56.25%] w-full max-h-min overflow-hidden">
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className={`absolute inset-0 w-full h-[80%] object-contain transition-all duration-500 ${isSlideChanging ? '-translate-x-[1%] -translate-y-[2%] opacity-50' : 'translate-x-0 translate-y-0 opacity-100'}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
