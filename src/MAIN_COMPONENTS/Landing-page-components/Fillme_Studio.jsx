
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//slider images 
import fillme_Studio1 from "../../Images/LandingPage-Images/FillMe/fillme1.webp";
import fillme_Studio2 from "../../Images/LandingPage-Images/FillMe/fillme2.webp";
import fillme_Studio3 from "../../Images/LandingPage-Images/FillMe/fillme3.webp";
import fillme_Studio4 from "../../Images/LandingPage-Images/FillMe/fillme4.webp";
import fillme_Studio5 from "../../Images/LandingPage-Images/FillMe/fillme5.webp";
import fillme_Studio6 from "../../Images/LandingPage-Images/FillMe/fillme6.webp";
import fillme_Studio7 from "../../Images/LandingPage-Images/FillMe/fillme7.webp";
import fillme_Studio8 from "../../Images/LandingPage-Images/FillMe/fillme8.webp";
import fillme_Studio9 from "../../Images/LandingPage-Images/FillMe/fillme9.webp";
import fillme_Studio10 from "../../Images/LandingPage-Images/FillMe/fillme10.webp";
import fillme_Studio11 from "../../Images/LandingPage-Images/FillMe/fillme11.webp";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// array of slider images 
const fillme_studio = [fillme_Studio1, fillme_Studio2, fillme_Studio3, fillme_Studio4, fillme_Studio5, fillme_Studio6, fillme_Studio7, fillme_Studio8, fillme_Studio9, fillme_Studio10, fillme_Studio11];

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function FillMeStudioSlider() {
      return (
            <div className="bg-[#ececec] p-[10px] group loadingChild">
                  <section className='pb-16'>
                        <div className='group-hover:scale-[0.98] max-w-[500px] max-sm:max-w-[270px] h-[360px] transition-all duration-500'>

                              <Swiper
                                    navigation={true}
                                    autoplay={{
                                          delay: 2200,
                                          disableOnInteraction: false,

                                    }}
                                    loop={true}
                                    modules={[Navigation, Autoplay]}

                                    className="mySwiper"
                              >
                                    {fillme_studio.map((data, index) => (
                                          <SwiperSlide key={index}>

                                                <img src={data} alt="" />

                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                              <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                                    <h1>Fillme Studio</h1>
                              </div>
                        </div>
                  </section>
            </div>
      );
}

