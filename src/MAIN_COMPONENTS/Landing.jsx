import Three_d from "../Images/LandingPage-Images/3d.webp";
import production from "../Images/LandingPage-Images/production-img.webp";
import production_design from "../Images/LandingPage-Images/production-design.webp";
import talentAcquistion from "../Images/LandingPage-Images/talent-acqusition.jpg";
import studio from "../Images/LandingPage-Images/studio.webp";
import location from "../Images/LandingPage-Images/location.webp";
import post_production from "../Images/LandingPage-Images/post-production.webp";
import filmMaking from "../Images/LandingPage-Images/film makeing.webp";
import filmShoot from "../Images/LandingPage-Images/filmShoot.webp";
import stillShoot from "../Images/LandingPage-Images/stillShoot.webp";
import ImageSlider from "./Landing-page-components/BrandsLogoSlider";
import AqubeStudio from "./Landing-page-components/AqubeStudio";
import FillMeStudio from "../MAIN_COMPONENTS/Landing-page-components/Fillme_Studio";
import LaxyaA from "./Landing-page-components/LaxyaA";
import LaxyaB from "./Landing-page-components/LaxyaB";
import Sliding from "./Landing-page-components/Sliding";
import ExperienceCarousel from "../MAIN_COMPONENTS/Landing-page-components/FrontSlider";
import { Link } from "react-router-dom";
import Sliding_1st from "./Landing-page-components/Sliding_1st";
import Project from "./Landing-page-components/Project";
const Landing = () => {
  const ServicesImage = [
    { Image1: production, name: "Production" },
    { Image1: Three_d, name: "3D" },
    { Image1: production_design, name: "Production Design" },
    { Image1: talentAcquistion, name: "Talent Acquisition" },
    { Image1: studio, name: "Studio" },
    { Image1: location, name: "Location" },
    { Image1: filmMaking, name: "Post-Production" },
    { Image1: post_production, name: "Film Making" },
  ];
  const portfolioImages = [
    { image: stillShoot, name: "Still Shoots", redirection: "/portfolio" },
    { image: filmShoot, name: "Film Shoots", redirection: "/portfolio" },
  ];
  return (
    <div className="bg-white">
      <div>
        <ExperienceCarousel />
      </div>

      <section className="mb-9 max-sm:mb-12 max-md:mb-28 w-full h-[60vh] max-sm:h-auto max-md:h-auto">
        <Sliding_1st />
      </section>

      {/* Services Section  */}
      <section className="bg-[#f9f9f9] mx-auto px-[120.5px] max-sm:px-3 py-10">
        <div>
          <h1 className="font-yeseva text-[#222222] text-[152px] max-sm:text-[52px] max-md:text-[100px]">
            serv<span className="text-stroke text-transparent">ices</span>
          </h1>
        </div>
        {/* <Link to="/contact"> */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-28">
          {ServicesImage.map((service, index) => (
            <div
              key={index}
              className="bg-[#ececec] p-[7px] w-full h-[400px] overflow-hidden group loadingChild"
            >
              <div className="group-hover:scale-95 w-full h-full transition-all duration-500">
                {/* Image Section */}
                <div
                  className="w-full h-[83.2%]"
                  style={{
                    backgroundImage: `url(${service.Image1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                {/* Name Section */}
                <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                  <h1>{service.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* </Link> */}
      </section>

      {/* Portfolio Section  */}
      <section className="bg-white px-[120px] max-sm:px-3 py-5">
        <div>
          <h1 className="mb-10 font-yeseva text-[#222222] text-[152px] max-sm:text-[52px] max-md:text-[100px]">
            port<span className="text-stroke text-transparent">folio</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          {portfolioImages.map((data, index) => (
            <Link
              to={data.redirection}
              key={index}
              className="bg-[#ececec] mx-4 p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hiden group"
            >
              <div className="group-hover:scale-95 w-full h-full transition-all duration-500">
                <div
                  className="w-full h-[83.2%]"
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                  <h1>{data.name}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* our clients Section  */}
      <section className="bg-[#f9f9f9] px-[88.5px] max-sm:px-3 py-5">
        <div>
          <span className="font-black font-roboto text-[25px] text-left text-yellow">
            Our Trusted
          </span>
          <div>
            <h1 className="mb-10 font-yeseva text-[#222222] text-[152px] max-sm:text-[52px] max-md:text-[100px] leading-none">
              clie<span className="text-stroke text-transparent">nts</span>
            </h1>
          </div>
        </div>
        <ImageSlider />
      </section>

      {/* Our Studios */}
      <section className="bg-white">
        <div className="mx-[75px] max-sm:mx-[20px] max-md:mx-[40px]">
          <div className="mb-[90px] text-black_custom text-center max-sm:text-left">
            <h1 className="font-yeseva text-[54px] max-sm:text-[34px]">
              Our Studios
            </h1>
            <p className="mx-28 max-sm:mx-3 max-md:mx-14 font-medium font-roboto text-[#c0c5d7] text-lg">
              Whether you're in search of a film production house in Delhi or
              corporate video makers in Delhi, our studios offer the perfect
              setting to bring your creative vision to life.
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-28">
            <AqubeStudio />
            <FillMeStudio />
            <LaxyaA />
            <LaxyaB />
          </div>
        </div>
      </section>
      {/* About Us  */}

      <Sliding />

      <Project />
    </div>
  );
};

export default Landing;
