import {useState} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portfolioHeader from '../../Images/portfolio_image/Portfolio.jpg';

import stillShootImages from './StillShootImageImports';

// -----------------------------------------------------------------
// these are the images that are imported from the StillShootImageImports file
// ----------------------------------------------------------------

const {
  // adidas,
  // Asuka,
  // pepsi,
  // appoloTyres,
  // bacardi,
  // bbc,
  // Eicher,
  // Dew,
  // Gravity,
  // Honda,
  // intruder,
  // MonsterJob,
  // Mahou,
  // msNexa,
  // NGC,
  // gixxer,
  // Nokia,
  // Oriflame,
  // TvsRaider,
  // RedTape,
  // RoyalStagOccasion,
  // RoyalStagT20,
  // RoyalStagMOP,
  // Samsung,
  // Somany,
  // StellerDream,
  // SundayDesign,
  // Teachers,
  // WhiteHat,
  // MS_Colors_Of_Youth,

  //------------------ adidas exporting
  adidas10,
  adidas11,
  adidas12,
  adidas13,
  adidas14,
  adidas15,
  adidas16,
  adidas17,
  adidas18,
  adidas19,
  adidas20,
  adidas21,
  adidas22,
  adidas23,
  //------------------ asuka exporting

  asuka1,
  asuka2,
  asuka3,
  asuka4,
  asuka5,
  asuka6,
  asuka7,
  asuka8,

  // -------------------appolo exporting
  appolo1,
  appolo2,
  appolo3,
  appolo4,
  appolo5,
  // -------------
  // bacardi -----------
  bacardi1,
  bacardi2,
  bacardi3,
  bacardi4,
  bacardi5,
  bacardi6,
  // -------------bbc exporting
  BBC1,
  BBC2,
  BBC3,
  BBC4,
  BBC5,
  BBC6,
  BBC7,
  // -------------eicher exporting
  eicher1,
  eicher2,
  eicher3,
  eicher4,
  eicher5,
  eicher6,
  eicher7,
  eicher8,
  eicher9,
  eicher10,
  eicher11,
  // --------------------

  // -------------------gixer
  suzuki1,
  suzuki2,
  suzuki3,
  suzuki4,
  suzuki5,
  suzuki6,
  suzuki7,
  suzuki8,
  suzuki9,
  suzuki10,
  suzuki11,
  suzuki12,
  suzuki13,
  suzuki14,
  suzuki15,
  // ---------------gravity
  gravity1,
  gravity2,
  gravity3,
  gravity4,
  // -------------honda
  honda1,
  honda2,
  honda3,
  honda4,
  honda5,
  honda6,
  honda7,
  // -----------------intruder
  intruder1,
  intruder2,
  intruder3,
  intruder4,
  intruder5,
  intruder6,
  intruder7,
  intruder8,
  intruder9,
  // -------------mahou
  mahou1,
  mahou2,
  mahou3,
  mahou4,
  mahou5,
  mahou6,
  mahou7,
  mahou8,
  // ------------------msNexa
  msNexa1,
  msNexa2,
  msNexa3,
  msNexa4,
  msNexa5,
  msNexa6,
  msNexa7,
  // -----------------MonsterJob
  monster2,
  monster3,
  monster4,
  // ----------dew
  dew1,
  dew2,
  dew3,
  dew4,
  // ------------ngc
  ngc1,
  ngc2,
  ngc3,
  ngc4,
  ngc5,
  ngc6,
  ngc7,
  // -------------nokia
  nokia2,
  nokia1,
  nokia3,
  nokia4,
  // -------------oriflame
  oriflame1,
  oriflame2,
  oriflame3,
  oriflame4,
  oriflame5,
  oriflame6,
  oriflame7,
  oriflame8,
  oriflame9,
  oriflame10,
  oriflame11,
  oriflame12,
  oriflame13,
  oriflame14,
  // ----------------redtape
  RedTape2,
  RedTape3,
  RedTape4,
  RedTape5,
  RedTape6,
  RedTape7,
  RedTape8,

  // ---------------RoyalStagT20
  rs2,
  rs3,
  rs4,
  rs5,
  rs6,
  // -----------------rsMop
  rsMop1,
  rsMop2,
  rsMop3,
  rsMop4,
  rsMop5,
  rsMop6,
  rsMop7,
  // -----------rsOccaions
  RoyalStagOccasion1,
  RoyalStagOccasion2,
  RoyalStagOccasion3,
  RoyalStagOccasion4,
  // ------------samsung
  Samsung1,
  Samsung2,
  Samsung3,
  Samsung4,
  Samsung5,
  Samsung6,
  Samsung7,
  Samsung8,
  Samsung9,
  Samsung10,
  Samsung11,
  Samsung12,
  Samsung13,
  // -------------StellerDream
  stellers1,
  stellers2,
  stellers3,
  stellers4,
  stellers5,
  stellers6,
  stellers7,
  stellers8,
  stellers9,
  stellers10,
  stellers11,
  stellers12,
  stellers13,
  stellers14,
  stellers15,
  stellers16,
  stellers17,
  stellers18,
  // --------------somany
  Somany2,
  Somany3,
  Somany4,
  Somany5,
  Somany7,
  Somany8,
  Somany9,
  Somany10,
  Somany11,
  // ----------------SundayDesign
  sunday1,
  sunday2,
  sunday3,
  sunday4,
  sunday5,
  // ---------------tvs raider
  TvsRaider1,
  TvsRaider2,
  TvsRaider3,
  TvsRaider4,
  TvsRaider5,
  TvsRaider6,
  // --------------teachers
  teachers1,
  teachers2,
  teachers3,
  teachers4,
  teachers5,

  // ------------------------
  whiteHat1,
  whiteHat2,
  whiteHat3,
  whiteHat4,
  whiteHat5,
  whiteHat6,
  whiteHat7,
  whiteHat8,
  whiteHat9,
  whiteHat10,
  whiteHat11,
  whiteHat12,
  whiteHat13,
  whiteHat14,
  whiteHat15,
  whiteHat16,
  // ------------------------
  // pepsi
  pepsi1,
  pepsi2,
  pepsi3,
  pepsi4,
  pepsi5,
  pepsi6,
  // ------------------------
  suzukiSE1,
  suzukiSE2,
  suzukiSE3,
  suzukiSE4,
  suzukiSE5,
  //   MS_Colors_Of_Youth1,------------------------
  MS_COY1,
  MS_COY2,
  MS_COY3,
  MS_COY4,
  MS_COY5,
  MS_COY6,
  MS_COY7,
  //   Crimsoun Club,------------------------
  Cc1,
  Cc2,
  Cc3,
  Cc4,
  Cc5,
  Cc6,
  Cc7,
  Cc8,
  Cc9,
  Cc10,
  Cc11,
  Cc12,
  Cc13,
  //   phillips,------------------------
  phillips1,
  phillips2,
  phillips3,
  phillips4,
  phillips5,
  phillips6,
  phillips7,
  phillips8,
  phillips9,
  phillips10,
  phillips11,
  phillips12,
  phillips13,
  phillips14,
  phillips15,
  phillips16,
  phillips17,
  phillips18,
  phillips19,
  phillips20,
  phillips21,
  phillips22,
  phillips23,
  phillips24,
  phillips25,
  phillips26,
  phillips27,
  phillips28,
  phillips29,
  phillips30,
  phillips31,
  phillips32,
  phillips33,
  phillips34,
  phillips35,
  phillips36,
} = stillShootImages;

const stillShoot = [
  {
    carouselImages: [
      adidas10,
      adidas11,
      adidas12,
      adidas13,
      adidas14,
      adidas15,
      adidas16,
      adidas17,
      adidas18,
      adidas19,
      adidas20,
      adidas21,
      adidas22,
      adidas23,
    ],
    image: adidas10,
    text: 'Adidas',
  },
  {
    carouselImages: [
      phillips1,
      phillips7,
      phillips11,
      phillips22,
      phillips12,
      phillips26,
      phillips2,
      phillips3,
      phillips4,
      phillips5,
      phillips6,
      phillips8,
      phillips9,
      phillips10,
      phillips13,
      phillips14,
      phillips15,
      phillips16,
      phillips17,
      phillips18,
      phillips19,
      phillips20,
      phillips21,
      phillips24,
      phillips25,
      phillips27,
      phillips28,
      phillips29,
      phillips30,
      phillips31,
      phillips32,
      phillips33,
      phillips23,
      phillips34,
      phillips35,
      phillips36,
    ],
    image: phillips1,
    text: 'Phillips',
  },

  {
    carouselImages: [
      suzuki1,
      suzuki12,
      suzuki13,
      suzuki3,
      suzuki4,
      suzuki5,
      suzuki6,
      suzuki7,
      suzuki8,
      suzuki9,
      suzuki10,
      suzuki11,
      suzuki14,
      suzuki15,
      suzuki2,
    ],
    image: suzuki1,
    text: 'Suzuki Gixxer',
  },
  {
    carouselImages: [
      suzukiSE5,
      suzukiSE1,
      suzukiSE2,
      suzukiSE3,
      suzukiSE4,
      suzukiSE5,
    ],
    image: suzukiSE5,
    text: 'Suzuki SE 125',
  },

  {
    carouselImages: [
      intruder1,
      intruder2,
      intruder3,
      intruder4,
      intruder5,
      intruder6,
      intruder7,
      intruder8,
      intruder9,
    ],
    image: intruder1,
    text: 'Suzuki Intruder',
  },
  {
    carouselImages: [
      TvsRaider2,
      TvsRaider1,
      TvsRaider3,
      TvsRaider4,
      TvsRaider5,
      TvsRaider6,
    ],
    image: TvsRaider2,
    text: 'TVS Raider',
  },
  {
    carouselImages: [honda1, honda2, honda3, honda4, honda5, honda6, honda7],
    image: honda1,
    text: 'Honda City',
  },
  {
    carouselImages: [
      msNexa1,
      msNexa2,
      msNexa3,
      msNexa4,
      msNexa5,
      msNexa6,
      msNexa7,
    ],
    image: msNexa1,
    text: 'Maruti Suzuki Nexa',
  },
  {
    carouselImages: [
      MS_COY1,
      MS_COY2,
      MS_COY3,
      MS_COY4,
      MS_COY5,
      MS_COY6,
      MS_COY7,
    ],
    image: MS_COY1,
    text: 'MS Colors Of Youth',
  },
  {
    carouselImages: [
      eicher1,
      eicher2,
      eicher3,
      eicher4,
      eicher5,
      eicher6,
      eicher7,
      eicher8,
      eicher9,
      eicher10,
      eicher11,
    ],
    image: eicher1,
    text: 'Eicher',
  },
  {
    carouselImages: [appolo1, appolo2, appolo3, appolo4, appolo5],
    image: appolo1,
    text: 'Appolo Tyres',
  },
  {
    carouselImages: [BBC1, BBC2, BBC4, BBC5, BBC6, BBC3, BBC7],
    image: BBC1,
    text: 'BBC',
  },

  {
    carouselImages: [monster2, monster3, monster4],
    image: monster2,
    text: 'Monster Job',
  },
  {
    carouselImages: [ngc1, ngc2, ngc3, ngc4, ngc5, ngc6, ngc7],
    image: ngc1,
    text: 'NGC',
  },
  {
    carouselImages: [
      Samsung1,
      Samsung2,
      Samsung3,
      Samsung4,
      Samsung5,
      Samsung6,
      Samsung7,
      Samsung8,
      Samsung9,
      Samsung10,
      Samsung11,
      Samsung12,
      Samsung13,
    ],
    image: Samsung1,
    text: 'Samsung',
  },
  {
    carouselImages: [nokia1, nokia2, nokia3, nokia4],
    image: nokia1,
    text: 'Nokia',
  },

  {
    carouselImages: [
      RedTape2,
      RedTape7,
      RedTape8,
      RedTape3,
      RedTape4,
      RedTape5,
      RedTape6,
    ],
    image: RedTape2,
    text: 'Red Tape',
  },
  {
    carouselImages: [
      Cc1,
      Cc2,
      Cc3,
      Cc4,
      Cc5,
      Cc6,
      Cc7,
      Cc8,
      Cc9,
      Cc10,
      Cc11,
      Cc12,
      Cc13,
    ],
    image: Cc1,
    text: 'Crimsoune Club',
  },

  {
    carouselImages: [dew1, dew2, dew3, dew4],
    image: dew1,
    text: 'Mountain Dew',
  },
  {
    carouselImages: [pepsi1, pepsi2, pepsi3, pepsi4, pepsi5, pepsi6],
    image: pepsi1,
    text: 'Pepsi',
  },

  {
    carouselImages: [
      mahou1,
      mahou2,
      mahou3,
      mahou4,
      mahou5,
      mahou6,
      mahou7,
      mahou8,
    ],
    image: mahou1,
    text: 'Mahou',
  },
  {
    carouselImages: [
      RoyalStagOccasion1,
      RoyalStagOccasion2,
      RoyalStagOccasion3,
      RoyalStagOccasion4,
    ],
    image: RoyalStagOccasion1,
    text: 'Royal Stag - Occasion',
  },
  {
    carouselImages: [rs2, rs3, rs4, rs5, rs6],
    image: rs2,
    text: 'Royal Stag - T20',
  },
  {
    carouselImages: [rsMop1, rsMop2, rsMop3, rsMop4, rsMop5, rsMop6, rsMop7],
    image: rsMop1,
    text: 'Royal Stag - Mark Of Purity',
  },
  {
    carouselImages: [
      bacardi1,
      bacardi2,
      bacardi3,
      bacardi4,
      bacardi5,
      bacardi6,
    ],
    image: bacardi1,
    text: 'Bacardi',
  },
  {
    carouselImages: [teachers3, teachers1, teachers2, teachers4, teachers5],
    image: teachers3,
    text: 'Teachers',
  },
  {
    carouselImages: [
      Somany2,
      Somany3,
      Somany4,
      Somany5,
      Somany7,
      Somany8,
      Somany9,
      Somany10,
      Somany11,
    ],
    image: Somany2,
    text: 'Somany',
  },
  {
    carouselImages: [gravity1, gravity2, gravity3, gravity4],
    image: gravity1,
    text: 'Gravity',
  },
  {
    carouselImages: [
      stellers2,
      stellers4,
      stellers5,
      stellers9,
      stellers18,
      stellers16,
      stellers15,
      stellers14,
      stellers7,
      stellers1,
      stellers3,
      stellers6,
      stellers8,
      stellers10,
      stellers11,
      stellers12,
      stellers13,
      stellers17,
    ],
    image: stellers2,
    text: 'Stellars Dream',
  },
  {
    carouselImages: [sunday1, sunday2, sunday3, sunday4, sunday5],
    image: sunday1,
    text: 'Sunday Design',
  },
  {
    carouselImages: [
      asuka1,
      asuka2,
      asuka3,
      asuka4,
      asuka5,
      asuka6,
      asuka7,
      asuka8,
    ],
    image: asuka1,
    text: 'Asuka',
  },
  {
    carouselImages: [
      oriflame1,
      oriflame2,
      oriflame3,
      oriflame4,
      oriflame5,
      oriflame6,
      oriflame7,
      oriflame8,
      oriflame9,
      oriflame10,
      oriflame11,
      oriflame12,
      oriflame13,
      oriflame14,
    ],
    image: oriflame1,
    text: 'Oriflame',
  },
  {
    carouselImages: [
      whiteHat1,
      whiteHat2,
      whiteHat3,
      whiteHat4,
      whiteHat5,
      whiteHat6,
      whiteHat7,
      whiteHat8,
      whiteHat9,
      whiteHat10,
      whiteHat11,
      whiteHat12,
      whiteHat13,
      whiteHat14,
      whiteHat15,
      whiteHat16,
    ],
    image: whiteHat1,
    text: 'White Hat',
  },
];
export default function StillShoot () {
  const [isModalOpen, setIsModalOpen] = useState (false);
  const [modalImages, setModalImages] = useState ([]);

  const handleCardClick = index => {
    // Set images based on the clicked card
    setModalImages (stillShoot[index].carouselImages);
    setIsModalOpen (true);
  };

  const closeModal = () => {
    setIsModalOpen (false);
    setModalImages ([]);
  };

  // const handleBackdropClick = (e) => {
  //   if (e.target.classList.contains("backdrop")) {
  //     closeModal();
  //   }
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };
  return (
    <section className="bg-white">
      <div className="mb-[40px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div>
      <div className="gap-0 columns-4 max-sm:columns-1 max-md:columns-2 max-lg:columns-3 max-xl:columns-4">
        {stillShoot.map ((data, index) => (
          <div
            key={index}
            className="group bg-[#ececec] max-sm:w-full max-md:w-[75%] max-lg:w-2/3 max-xl:w-2/4 min-w-72 h-auto overflow-hidden loadingChild"
            onClick={() => handleCardClick (index)}
          >
            <div className="h-full transition-all duration-500">
              <div className="group relative w-full">
                <img src={data.image} alt="" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 w-full h-full transition-all duration-300">
                  <h1 className="top-2/4 left-2/4 absolute font-semibold text-white text-2xl text-center scale-90 group-hover:scale-125 transition-all -translate-x-2/4 -translate-y-2/4 duration-300">
                    {data.text}
                  </h1>
                </div>
              </div>

              {/* <div className="bg-yellow p-4 font-roboto font-semibold text-[#222222] text-[22px] text-left">
                <h1></h1>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen &&
        <div className="top-[55%] left-2/4 z-50 fixed inset-0 flex justify-center items-center bg-[#ffffff8d] bg-opacity-50 w-screen h-screen overflow-y-scroll -translate-x-2/4 -translate-y-2/4 backdrop">
          {/* // onClick={handleBackdropClick} */}
          <div
            className="bg-white p-8 w-full md:w-full h-auto"
            onClick={e => e.stopPropagation ()} // Prevent click from closing the modal when clicking inside
          >
            <button
              className="top-2 right-2 absolute font-black text-black hover:text-yellow text-5xl"
              onClick={closeModal}
            >
              X
            </button>
            <div className="w-full h-full">
              <Slider {...settings}>
                {modalImages.map ((image, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center outline-none w-96 max-sm:w-screen h-[45rem] max-sm:h-full"
                  >
                    <img
                      src={image}
                      alt={`slide-${index}`}
                      className="outline-none w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>}
    </section>
  );
}
