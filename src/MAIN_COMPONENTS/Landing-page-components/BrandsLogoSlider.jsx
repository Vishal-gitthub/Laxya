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
    <section className="relative w-full h-[120px] overflow-hidden slider-container">
      <div className="flex w-[calc(200%)] animate-scroll slider-content">
        {infiniteImages.map ((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 border-[#d4d4d4] bg-white p-[20px] border rounded-md w-[150px] h-[100px] slider-item"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;