import {useState} from 'react';
import show_Reel from '../Images/videoplayback.mp4';
import {Link} from 'react-router-dom';
const Test2 = () => {
  const [showReel, setShowReel] = useState (true);
  const visibilityToggler = () => {
    setShowReel (!showReel);
  };
  return (
    <div className="px-12 overflow-hidden select-none">
      <div className="relative w-full h-screen text-white">
        <video autoPlay muted loop className="w-full h-full object-contain">
          <source src={show_Reel} type="video/mp4" />
        </video>

        <div className="top-0 z-10 absolute flex flex-col w-full">
          <h1 className="flex justify-between items-center m-0 w-full max-h-40 font-black text-[15vw]">
            <span>L</span>
            <span>A</span>
            <span>X</span>
            <span>Y</span>
            <span>A</span>
          </h1>
          <h2 className="inline-block pt-28 pl-2 w-max max-sm:text-3xl max-md:text-6xl text-8xl max-md:text-center text-start tracking-[8px]">
            <Link
              to="/portfolio"
              className="hover:text-yellow transition-all duration-300"
            >
              PRODUCTION
            </Link>
            <div className="flex max-sm:flex-col justify-end gap-5 pr-4 text-xs max-sm:text-sm tracking-[0.1em]">
              <Link
                className="hover:text-yellow transition-all duration-300"
                to="/still-shoot"
              >
                STILL SHOOT |
              </Link>
              <Link
                className="hover:text-yellow transition-all duration-300"
                to="/film-shoot"
              >
                FILM SHOOT |
              </Link>
              <Link
                className="hover:text-yellow transition-all duration-300"
                to="/still-shoot"
              >
                3D ANIMATIONS |
              </Link>
              <Link
                className="hover:text-yellow transition-all duration-300"
                to="/still-shoot"
              >
                EVENTS |
              </Link>
              <Link
                className="hover:text-yellow transition-all duration-300"
                to="/still-shoot"
              >
                BTS
              </Link>
            </div>
          </h2>
          <div className="w-full text-right">
            <h2 className="inline-block pr-0 w-max max-sm:text-3xl max-md:text-6xl text-8xl text-end">
              <span className="hover:text-yellow transition-all duration-300">
                HOUSE
              </span>
              <div className="flex justify-start items-start gap-5 pl-2 text-xs tracking-[0em]">
                <Link
                  className="hover:text-yellow transition-all duration-300"
                  to="/about"
                >
                  ABOUT US |
                </Link>
                <Link
                  className="hover:text-yellow transition-all duration-300"
                  to="/talent"
                >
                  TALENT |
                </Link>
                <Link
                  className="hover:text-yellow transition-all duration-300"
                  to="/blog"
                >
                  BLOGS |
                </Link>
                <Link
                  className="hover:text-yellow transition-all duration-300"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </div>
            </h2>
          </div>
        </div>
        {/* <div className="right-3 bottom-5 absolute flex gap-10 text-white/40">
          <Link className="text-4xl" to="/contact">CONTACT</Link>
        </div> */}
        <div
          className={`${showReel ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} z-20 absolute duration-500 inset-0 flex justify-center  items-center bg-black/35 p-20`}
        >
          <video
            autoPlay
            muted
            loop
            className="border-4 border-r-yellow border-l-yellow w-full h-full object-cover"
          >
            <source src={show_Reel} type="video/mp4" />
          </video>
        </div>
        {/* <button
          onClick={visibilityToggler}
          className="group bottom-5 left-3 z-50 absolute flex gap-10 px-5 py-2 border border-white/15 hover:border-white text-white/40 transition-all duration-300"
        >
          <span className="group-hover:text-white group-hover:scale-105 transition-all duration-500">
            {showReel ? 'SHOW REEL' : 'CLOSE REEL'}
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Test2;
