// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
//slider images
import fillme_Studio1
  from '../../Images/LandingPage-Images/FillMe/fillme1.webp';
import fillme_Studio2
  from '../../Images/LandingPage-Images/FillMe/fillme2.webp';
import fillme_Studio3
  from '../../Images/LandingPage-Images/FillMe/fillme3.webp';
import fillme_Studio4
  from '../../Images/LandingPage-Images/FillMe/fillme4.webp';
import fillme_Studio5
  from '../../Images/LandingPage-Images/FillMe/fillme5.webp';
import fillme_Studio6
  from '../../Images/LandingPage-Images/FillMe/fillme6.webp';
import fillme_Studio7
  from '../../Images/LandingPage-Images/FillMe/fillme7.webp';
import fillme_Studio8
  from '../../Images/LandingPage-Images/FillMe/fillme8.webp';
import fillme_Studio9
  from '../../Images/LandingPage-Images/FillMe/fillme9.webp';
import fillme_Studio10
  from '../../Images/LandingPage-Images/FillMe/fillme10.webp';
import fillme_Studio11
  from '../../Images/LandingPage-Images/FillMe/fillme11.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// array of slider images
const fillme_studio = [
  fillme_Studio1,
  fillme_Studio2,
  fillme_Studio3,
  fillme_Studio4,
  fillme_Studio5,
  fillme_Studio6,
  fillme_Studio7,
  fillme_Studio8,
  fillme_Studio9,
  fillme_Studio10,
  fillme_Studio11,
];

// import required modules
import {Navigation, Autoplay} from 'swiper/modules';
import {useState} from 'react';

export default function FillMeStudioSlider () {
  const [isModalOpen, setIsModalOpen] = useState (false);
  return (
    <div>
      <section className="pb-12">
        <div
          onClick={() => setIsModalOpen (true)}
          className="max-md:w-full max-w-full h-[60vh] group-hover:scale-[0.98] transition-all duration-500"
        >
          <Swiper
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {fillme_studio.map ((data, index) => (
              <SwiperSlide key={index}>
                <img src={data} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-2 font-semibold text-[#222222] text-left">
            <h1>Fillme Studio</h1>
          </div>
        </div>
      </section>
      {isModalOpen &&
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-white py-10 w-full"
          onClick={() => setIsModalOpen (false)}
        >
          <div
            className="relative bg-white py-10 rounded-lg w-full max-w-3xl"
            onClick={e => e.stopPropagation ()}
          >
            <button
              className="-top-4 -right-4 z-[51] absolute p-2 font-roboto font-bold text-black hover:text-yellow text-5xl"
              onClick={() => setIsModalOpen (false)}
            >
              X
            </button>

            {/* Swiper Container */}
            <div className="relative w-full">
              <Swiper
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className="w-full h-[500px]"
              >
                {fillme_studio.map ((data, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <div className="flex justify-center items-center w-full h-[500px]">
                      <img
                        src={data}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Fixed Navigation Buttons Outside Box */}
              <button className="top-1/2 left-80 z-50 fixed p-20 text-black text-4xl -translate-y-1/2 custom-prev">
                ❮
              </button>
              <button className="top-1/2 right-80 z-50 fixed p-20 text-black text-4xl -translate-y-1/2 custom-next">
                ❯
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
}
