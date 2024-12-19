// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const aqube_studio = [
  aqubeStudio1,
  aqubeStudio2,
  aqubeStudio3,
  aqubeStudio4,
  aqubeStudio5,
  aqubeStudio6,
  aqubeStudio7,
];

// import required modules
import {Navigation, Autoplay} from 'swiper/modules';

export default function AqubeStudioSlider () {
  return (
    <div className="bg-[#ececec] p-[10px] group loadingChild">
      <section className="pb-16">
        <div className="group-hover:scale-[0.98] max-md:w-full max-w-[500px] h-[360px] transition-all duration-500">

          <Swiper
            navigation={true}
            autoplay={{
              delay: 2100,
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
          <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
            <h1>Aqube Studio</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
