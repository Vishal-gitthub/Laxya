import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images
import aqubeStudio1
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio.webp';
import aqubeStudio2
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio2.webp';
import aqubeStudio3
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio3.webp';
import aqubeStudio4
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio.4jpeg.webp';
import aqubeStudio5
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio5.webp';
import aqubeStudio6
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio6.webp';
import aqubeStudio7
  from '../../Images/LandingPage-Images/AqubeImage/aqube_studio7.webp';

const aqube_studio = [
  aqubeStudio1,
  aqubeStudio2,
  aqubeStudio3,
  aqubeStudio4,
  aqubeStudio5,
  aqubeStudio6,
  aqubeStudio7,
];

export default function AqubeStudioSlider () {
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
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {aqube_studio.map ((data, index) => (
              <SwiperSlide key={index}>
                <img src={data} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-2 font-semibold text-[#222222] text-left">
            <h1>Aqube Studio</h1>
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
                {aqube_studio.map ((data, index) => (
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
