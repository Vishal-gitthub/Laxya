import {useRef} from 'react';

import Three_d from '../Images/LandingPage-Images/3d.webp';
import production from '../Images/LandingPage-Images/production-img.webp';
import showReel from '../Images/videoplayback.mp4';
import production_design
  from '../Images/LandingPage-Images/production-design.webp';
import talentAcquistion
  from '../Images/LandingPage-Images/talent-acqusition.jpg';
import studio from '../Images/LandingPage-Images/studio.webp';
import location from '../Images/LandingPage-Images/location.webp';
import post_production from '../Images/LandingPage-Images/post-production.webp';

import filmMaking from '../Images/LandingPage-Images/film makeing.webp';
import setDesign from '../Images/LandingPage-Images/Set Design.jpg';

// import filmShoot from '../Images/LandingPage-Images/filmShoot.jpg';
// import stillShoot from '../Images/LandingPage-Images/stillShoot.jpg';
// import tD_ANIMATION from '../Images/LandingPage-Images/3D_animation.jpg';
// import events from '../Images/LandingPage-Images/EVENTS.jpg';
// import bts from '../Images/LandingPage-Images/BTS.jpg';
import stillShootThumbnail from '../Images/portfolio_image/still_shoot.mp4';
import filmShootThumbnail from '../Images/portfolio_image/film_shoot.mp4';
import bts_Thumbnail from '../Images/portfolio_image/bts.mp4';
import d3_Thumbnail from '../Images/portfolio_image/3d_animation.mp4';
import events_Thumbnail from '../Images/portfolio_image/events.mp4';
import productShoot from '../Images/portfolio_image/productShoots.mp4';

import AqubeStudio from './Landing-page-components/AqubeStudio';
import FillMeStudio from './Landing-page-components/Fillme_Studio';
import LaxyaA from './Landing-page-components/LaxyaA';
import LaxyaB from './Landing-page-components/LaxyaB';
// import Sliding from './Landing-page-components/Sliding';
// import ExperienceCarousel from './Landing-page-components/FrontSlider';
import {Link} from 'react-router-dom';
// import Sliding_1st from './Landing-page-components/Sliding_1st';
// import Project from './Landing-page-components/Project';

// images of team
import kkbatra from '../Images/AboutUs-images/TeamMemberImage/kk_batra.webp';
import shilpa from '../Images/AboutUs-images/TeamMemberImage/Shilpa.webp';
import avnish from '../Images/AboutUs-images/TeamMemberImage/avnish.webp';
import kaustubh from '../Images/AboutUs-images/TeamMemberImage/kaustubh.webp';
const Landing = () => {
  const ServicesImage = [
    {Image: production, name: 'Production'},
    {Image: Three_d, name: '3D Animation'},
    {Image: production_design, name: 'Production Design'},
    {Image: talentAcquistion, name: 'Talent Acquisition'},
    // {Image: setDesign, name: 'Events'},
    {Image: studio, name: 'Studio'},
    {Image: location, name: 'Location'},
    {Image: filmMaking, name: 'Post-Production'},
    {Image: post_production, name: 'Film Making'},
  ];
  const portfolioImages = [
    {image: stillShootThumbnail, name: 'STILL SHOOTS', to: '/still-shoot'},
    {image: filmShootThumbnail, name: 'FILM SHOOTS', to: '/film-shoot'},
    {image: d3_Thumbnail, name: '3D ANIMATION', to: '/3d-animation'},
    // {image: bts_Thumbnail, name: 'BTS', to: '/bts'},
    // {image: events_Thumbnail, name: 'EVENTS', to: '/events'},
    // {image: productShoot, name: 'PRODUCT SHOOTS', to: '/product-shoot'},
  ];
  const teamMembers = [
    {name: ' AVENISH DABRAL', role: 'MANAGING DIRECTOR & FOUNDER', img: avnish},
    {name: 'SHILPA THAPLIYAL', role: 'CASTING DIRECTOR', img: shilpa},
    {
      name: 'KK BATRA',
      role: 'CFO',
      img: kkbatra,
    },
    {
      name: 'KAUSTUBH DABRAL',
      role: 'PRODUCTION HEAD',
      img: kaustubh,
    },
  ];
  const videoRef = useRef (null);
  return (
    <div className="bg-white w-full">
      {/* <div>
        <ExperienceCarousel />
      </div> */}
      <section>
        <div className="w-full h-screen">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={showReel} />
          </video>
        </div>
      </section>

      {/* </Link> */}
      {/* Portfolio Section  */}
      <div className="bg-white">
        {/* <div className="mb-[30px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div> */}
        <section className="mx-[90px] max-sm:mx-[0px] max-md:mx-[45px] px-5">
          <div>
            <div className="max-sm:pl-0 text-left">
              {/* <h1 className="font-yeseva text-[140px] text-black max-sm:text-[52px] max-md:text-[100px]">
                Pro
                <span className="text-stroke-yellow text-transparent">
                  jects
                </span>
              </h1> */}
              <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
                Projects
              </h1>
            </div>
          </div>

          <div className="">
            <div className="gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
              {portfolioImages.map ((data, index) => (
                <Link to={data.to} key={index} className="group bg-[#ececec]">
                  <div className="group relative w-full h-[60vh] group-hover:scale-95 transition-all duration-500">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={data.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <h1 className="absolute inset-0 flex justify-center items-center bg-black/30 opacity-70 group-hover:opacity-100 w-full h-full font-semibold text-white text-lg sm:text-2xl md:text-3xl transition-all duration-300">
                      {data.name}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </section>
        {/* <Project /> */}
      </div>

      {/* Services Section  */}
      <section className="mx-[90px] max-sm:mx-[0px] max-md:mx-[45px] px-5">
        <div className="">
          <div className="pl-5 max-sm:pl-0 text-left">
            {/* <h1 className="font-yeseva text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
              Serv
              <span className="text-stroke-yellow text-transparent">ices</span>
            </h1> */}
            <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px] text-left">
              Services
            </h1>
          </div>

          {/* Service Grid */}
          {/* place-items-center gap-1 max-sm:gap-3 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 p-4 w-full h-full origin-center */}

          <div className="gap-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-auto p-1 w-full">
            {ServicesImage.map ((service, index) => (
              <div
                key={index}
                className="group bg-[#ececec] hover:border w-full h-[32.5vh] overflow-hidden transition-all duration-500"
              >
                <div className="relative w-full h-full">
                  <img
                    src={service.Image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <h2 className="absolute inset-0 flex justify-center items-center bg-black/30 font-semibold text-white text-3xl text-center">
                    {service.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* <section className="mb-9 max-sm:mb-12 max-md:mb-28 w-full h-[60vh] max-sm:h-auto max-md:h-auto">
        <Sliding_1st />
      </section> */}

      {/* our clients Section  */}
      {/* <section className="bg-[#f9f9f9] px-[88.5px] max-sm:px-3 py-5">
        <div>
          <span className="font-roboto font-black text-[25px] text-yellow text-left">
            Our Trusted
          </span>
          <div>
            <h1 className="mb-10 font-yeseva text-[#222222] text-[140px] max-sm:text-[40px] max-md:text-[100px] leading-none">
              clie<span className="text-stroke text-transparent">nts</span>
            </h1>
          </div>
        </div>
      </section> */}

      {/* Our Studios */}
      <section className="bg-white">
        <div className="px-[120px] max-sm:px-3">
          <div className="text-black_custom max-sm:text-left">
            {/* <h1 className="font-yeseva text-[140px] text-black max-sm:text-[40px] max-md:text-[100px]">
              Our
              <span className="text-stroke-yellow text-transparent">
                studios
              </span>
            </h1> */}
            <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
              Studios
            </h1>
            {/* <p className="mx-20 max-sm:mx-3 max-md:mx-14 font-medium text-[#75757c] text-lg">
              Whether you&apos;re in search of a film production house in Delhi or
              corporate video makers in Delhi, our studios offer the perfect
              setting to bring your creative vision to life.
            </p> */}
          </div>
          <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-28">
            <AqubeStudio />
            <FillMeStudio />
            <LaxyaA />
            <LaxyaB />
          </div>
        </div>
      </section>
      {/* About Us  */}

      <section className="px-28 max-sm:px-1">

        <section
          className="bg-gray-50 px-[120px] max-sm:px-3 py-5 rounded-3xl"
          style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px ,#ebc52a50 0.9px,transparent 0)`,
            backgroundSize: '8px 8px',
          }}
        >
          {/* <h1 className="font-yeseva text-[140px] text-black max-sm:text-[40px] max-md:text-[100px]">
            Our
            <span className="text-stroke-yellow text-transparent">team</span>
          </h1> */}
          <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
            Our Team
          </h1>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto px-6 max-w-6xl">
            {teamMembers.map ((member, index) => (
              <div key={index} className="bg-white shadow-lg p-4 rounded-2xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto border-4 border-yellow rounded-full w-32 h-32 object-cover"
                />
                <h3 className="mt-4 font-semibold text-gray-700 text-lg">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/about"
              className={` py-2 px-6 bg-yellow font-bold text-[18px] text-white`}
            >
              READ MORE
            </Link>
          </div>
        </section>
      </section>

      {/* <Sliding /> */}

      {/* <Project /> */}

    </div>
  );
};

export default Landing;
