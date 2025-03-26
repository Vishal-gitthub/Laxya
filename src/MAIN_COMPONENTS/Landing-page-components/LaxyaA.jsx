import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import {useState} from 'react';
import laxya1 from '../../Images/LandingPage-Images/LaxyaA/laxya1.webp';
import laxya2 from '../../Images/LandingPage-Images/LaxyaA/laxya2.webp';
import laxya3 from '../../Images/LandingPage-Images/LaxyaA/laxya3.webp';
import laxya4 from '../../Images/LandingPage-Images/LaxyaA/laxya4.webp';
import laxya5 from '../../Images/LandingPage-Images/LaxyaA/laxya5.webp';
const laxyaImage = [laxya4, laxya2, laxya5, laxya1, laxya3];

const LaxyaA = () => {
  const [isModalOpen, setIsModalOpen] = useState (false);

  return (
    <div>
      <section className="pb-1">
        <div
          onClick={() => setIsModalOpen (true)}
          className="max-md:w-full max-w-full h-[60vh] group-hover:scale-[0.98] transition-all duration-500"
        >
          <Swiper
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {laxyaImage.map ((data, index) => (
              <SwiperSlide key={index}>
                <img src={data} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-2 font-semibold text-[#222222] text-left">
            <h1>Laxya A Studio</h1>
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
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="w-full h-[500px]" // Set Swiper height
            >
              {laxyaImage.map ((data, index) => (
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

          </div>
        </div>}
    </div>
  );
};

export default LaxyaA;
