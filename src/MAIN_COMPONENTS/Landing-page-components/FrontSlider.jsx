import React from 'react';
import {EffectFade, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../Landing-page-components/Slider.css';

import suzuki from '../../Images/LandingPage-Images/suzukii.webp';
import redtape from '../../Images/LandingPage-Images/redtape.webp';
import raider from '../../Images/LandingPage-Images/Raider.webp';
import itruder from '../../Images/LandingPage-Images/Intruder.webp';
import car from '../../Images/LandingPage-Images/car.webp';
import eicher from '../../Images/LandingPage-Images/eicher.webp';
import gym from '../../Images/LandingPage-Images/gym.webp';

const images = [
  {src: suzuki, alt: 'Suzuki Motorbike'},
  {src: redtape, alt: 'RedTape Shoes'},
  {src: raider, alt: 'Raider Motorbike'},
  {src: itruder, alt: 'Intruder Motorbike'},
  {src: eicher, alt: 'Eicher Truck'},
  {src: car, alt: 'Luxury Car'},
  {src: gym, alt: 'Gym Equipment'},
];

const ExperienceCarousel = () => {
  return (
    <section>

      <Swiper
        modules={[EffectFade, Pagination]}
        effect="fade"
        pagination={{
          clickable: true,
          vertical: true,
          renderBullet: (index, className) =>
            `<span class="${className} rotate-[270deg] text-[12px] font-roboto font-normal rounded-sm">0${index + 1}</span>`,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChangeTransitionStart={swiper => {
          const currentSlide = swiper.slides[swiper.activeIndex];
          currentSlide.classList.add ('slide-animate');
        }}
        onSlideChangeTransitionEnd={swiper => {
          const allSlides = swiper.slides;
          allSlides.forEach (slide => {
            slide.classList.remove ('slide-animate');
          });
        }}
        className="my-swiper"
      >
        {images.map ((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
            className="bg-contain w-full h-full transition-transform duration-500 ease-in-out"
          />
        ))}
      </Swiper>

    </section>
  );
};

export default ExperienceCarousel;
