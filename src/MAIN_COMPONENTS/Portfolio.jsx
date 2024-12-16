import React from 'react';
import portfolioHeader from '../Images/portfolio_image/Portfolio.jpg';
import filmShoot from '../Images/LandingPage-Images/filmShoot.webp';
import stillShoot from '../Images/LandingPage-Images/stillShoot.webp';
import {Link} from 'react-router-dom';
export default function Portfolio () {
  const portfolioImages = [
    {image: stillShoot, name: 'Still Shoots', to: '/still-shoot'},
    {image: filmShoot, name: 'Film Shoots', to: '/film-shoot'},
  ];

  return (
    <div>
      <div className="mb-[100px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div>
      <section className="mx-[90px] max-sm:mx-[10px] max-md:mx-[45px] py-20">
        <div>
          <div>
            <h1 className="mb-10 font-yeseva text-[152px] max-sm:text-[52px] max-md:text-[100px] leading-none">
              <span className="text-stroke text-transparent">our</span> work
            </h1>
          </div>
        </div>
        <div className="pt-36">
          <div className="flex flex-wrap justify-center items-center">
            {portfolioImages.map ((data, index) => (
              <Link
                to={data.to}
                key={index}
                className="bg-[#ececec] mx-4 p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hiden group"
              >
                <div className="group-hover:scale-95 w-full h-full transition-all duration-500">
                  <div
                    className="w-full h-[83.2%]"
                    style={{
                      backgroundImage: `url(${data.image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                    <h1>{data.name}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
