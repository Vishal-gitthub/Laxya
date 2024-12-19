import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import laxya5 from "../../Images/LandingPage-Images/LaxyaA/laxya5.webp"
import laxya3 from "../../Images/LandingPage-Images/LaxyaA/laxya3.webp"
import laxya1 from "../../Images/LandingPage-Images/LaxyaA/laxya1.webp"
import laxya4 from "../../Images/LandingPage-Images/LaxyaA/laxya4.webp"
import laxya2 from "../../Images/LandingPage-Images/LaxyaA/laxya2.webp"
const laxyaImage = [laxya1, laxya2, laxya3, laxya4, laxya5]

const LaxyaB = () => {
      return (
            <div className="bg-[#ececec] p-[10px] group loadingChild">
                  <section className='pb-16'>
                        <div className="group-hover:scale-[0.98] max-md:w-full max-w-[500px] h-[360px] transition-all duration-500">
                              <Swiper navigation={true} autoplay={{ delay: 2400, disableOnInteraction: false }} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" >
                                    {laxyaImage.map((data, index) => (
                                          <SwiperSlide key={index}>
                                                <img src={data} alt="" />
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                              <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                                    <h1>Laxya Studio-B</h1>
                              </div>
                        </div>
                  </section>
            </div>
      )
}

export default LaxyaB
