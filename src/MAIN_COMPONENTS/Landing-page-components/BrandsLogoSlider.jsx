import React from 'react';
import Fanta from '../../Images/LandingPage-Images/brandsLogos/fanta.webp';
import adidas from '../../Images/LandingPage-Images/brandsLogos/adidas.webp';
import airtel from '../../Images/LandingPage-Images/brandsLogos/airtel.webp';
import dominos from '../../Images/LandingPage-Images/brandsLogos/dominos.webp';
import honda from '../../Images/LandingPage-Images/brandsLogos/honda.webp';
import hp from '../../Images/LandingPage-Images/brandsLogos/hp.webp';
import kfc from '../../Images/LandingPage-Images/brandsLogos/kfc.webp';
import lg from '../../Images/LandingPage-Images/brandsLogos/lg.webp';
import microsoft
  from '../../Images/LandingPage-Images/brandsLogos/microsoft.webp';
import motherDairy
  from '../../Images/LandingPage-Images/brandsLogos/motherDairy.webp';
import myntra from '../../Images/LandingPage-Images/brandsLogos/myntra.webp';
import nokia from '../../Images/LandingPage-Images/brandsLogos/Nokia.webp';
import seaGrams
  from '../../Images/LandingPage-Images/brandsLogos/seaGrams.webp';
import sprite from '../../Images/LandingPage-Images/brandsLogos/sprite.webp';
import yamaha from '../../Images/LandingPage-Images/brandsLogos/yamaha.webp';
const ImageSlider = () => {
  const images = [
    Fanta,
    adidas,
    airtel,
    dominos,
    honda,
    hp,
    kfc,
    lg,
    microsoft,
    motherDairy,
    nokia,
    myntra,
    seaGrams,
    sprite,
    yamaha,
  ];

  // Duplicate images for seamless scrolling
  const infiniteImages = [...images, ...images];

  return (
    <section className="relative py-28 w-full overflow-hidden slider-container">
      <div className="py-20">
        <h1 className="max-sm:text-2xl text-4xl max-md:text-5xl text-center">
          Over
          <span className="font-serif font-semibold text-yellow text-7xl">
            35+
          </span>
          Years of Excellence and Trust with the Brands.
        </h1>
      </div>
      <div className="flex animate-scroll slider-content">
        {infiniteImages.map ((image, index) => (
          <div
            key={index}
            className="group flex-shrink-0 bg-white p-[20px] border-[#d4d4d4] rounded-md w-[200px] h-[200px] slider-item"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="grayscale group-hover:grayscale-0 w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
