import filmShoot from '../Images/LandingPage-Images/filmShoot.jpg';
import stillShoot from '../Images/LandingPage-Images/stillShoot.jpg';
import tD_ANIMATION from '../Images/LandingPage-Images/3D_animation.jpg';
import events from '../Images/LandingPage-Images/EVENTS.jpg';
import bts from '../Images/LandingPage-Images/BTS.jpg';
import {Link} from 'react-router-dom';
import Project from './Landing-page-components/Project';
export default function Portfolio () {
  const portfolioImages = [
    {image: stillShoot, name: 'STILL SHOOTS', to: '/still-shoot'},
    {image: filmShoot, name: 'FILM SHOOTS', to: '/film-shoot'},
    {image: tD_ANIMATION, name: '3D ANIMATION', to: '/film-shoot'},
    {image: bts, name: 'BTS', to: '/film-shoot'},
    {image: events, name: 'EVENTS', to: '/film-shoot'},
  ];

  return (
    <div className="bg-white">
      {/* <div className="mb-[30px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div> */}
      <section className="mx-[90px] max-sm:mx-[10px] max-md:mx-[45px] py-5">
        <div>
          <div className="text-center">
            <h1 className="font-yeseva text-[7.6vw] max-sm:text-[52px] max-md:text-[100px] leading-none">
              <span className="text-stroke text-transparent">OUR</span>PROJECTS
            </h1>
          </div>
        </div>
        <div className="pt-14">
          <div className="flex flex-wrap justify-center items-center gap-5">
            {portfolioImages.map ((data, index) => (
              <Link to={data.to} key={index} className="group bg-[#ececec]">
                <div className="group relative w-96 h-full group-hover:scale-95 transition-all duration-500">
                  <img src={data.image} className="w-full h-full" alt="" />
                  <h1 className="group-hover:bg-black/30 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 w-full h-full font-semibold text-white text-3xl transition-all duration-300">
                    {data.name}
                  </h1>
                  {/* // style={{
                  //   backgroundImage: `url(${data.image})`,
                  //   backgroundSize: 'cover',
                  //   backgroundRepeat: 'no-repeat',
                  //   backgroundPosition: 'center',
                  // }} */}
                  {/* <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                    <h1>{data.name}</h1>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <Project /> */}
    </div>
  );
}
