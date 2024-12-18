import React, {useState} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portfolioHeader from '../../Images/portfolio_image/Portfolio.jpg';

import stillShootImages from './StillShootImageImports';

const {
  adidas,
  appoloTyres,
  bacardi,
  bbc,
  Franklin,
  Eicher,
  Dew,
  Gravity,
  Honda,
  intruder,
  ImperialBlue,
  MonsterJob,
  Mahou,
  msNexa,
  NGC,
  gixxer,
  Nokia,
  Oriflame,
  TvsRaider,
  RedTape,
  Reebok,
  RoyalStagOccasion,
  RoyalStagT20,
  RoyalStagMOP,
  Samsung,
  Somany,
  StellerDream,
  SundayDesign,
  Teachers,
  Viber,
  Voltas,
  Yamaha,
  WhiteHat,

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
  BBC8,
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
  // franklin ------------------
  franklin1,
  franklin2,
  franklin3,
  franklin4,
  franklin5,
  franklin6,
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
  monster1,
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
  // ----------------Reebok
  reebok1,
  reebok2,
  reebok3,
  reebok4,
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
  Somany1,
  Somany2,
  Somany3,
  Somany4,
  Somany5,
  Somany6,
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
  // --------------teachers
  teachers1,
  teachers2,
  teachers3,
  teachers4,
  teachers5,
  // -----------------Viber
  viber1,
  viber2,
  viber3,
  viber4,
  viber5,
  viber6,
  viber7,
  viber8,
  viber9,
  viber10,
  viber11,
  viber12,
  // --------------
  voltas1,
  voltas2,
  voltas3,
  voltas4,
  voltas5,
  voltas6,
  voltas7,
  voltas8,
  voltas9,
  // -------------------
  yamaha,
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
    image: adidas,
    text: 'Adidas',
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
    image: bacardi,
    text: 'Bacardi',
  },
  {
    carouselImages: [BBC1, BBC2, BBC3, BBC4, BBC5, BBC6, BBC7, BBC8],
    image: bbc,
    text: 'BBC',
  },
  {
    carouselImages: [appolo1, appolo2, appolo3, appolo4, appolo5],
    image: appoloTyres,
    text: 'Appolo Tyres',
  },
  {
    carouselImages: [
      franklin1,
      franklin2,
      franklin3,
      franklin4,
      franklin5,
      franklin6,
    ],
    image: Franklin,
    text: 'Franklin Templton',
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
    image: Eicher,
    text: 'Eicher',
  },
  {
    carouselImages: [dew1, dew2, dew3, dew4],
    image: Dew,
    text: 'Mountain Dew',
  },
  {
    carouselImages: [
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
    ],
    image: gixxer,
    text: 'Suzuki Gixxer',
  },
  {
    carouselImages: [gravity1, gravity2, gravity3, gravity4],
    image: Gravity,
    text: 'Gravity',
  },
  {
    carouselImages: [honda1, honda2, honda3, honda4, honda5, honda6, honda7],
    image: Honda,
    text: 'Honda City',
  },
  {carouselImages: [ImperialBlue], image: ImperialBlue, text: 'Imperial Blue'},
  {
    carouselImages: [monster1, monster2, monster3, monster4],
    image: MonsterJob,
    text: 'Monster Job',
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
    image: intruder,
    text: 'Suzuki Intruder',
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
    image: Mahou,
    text: 'Mahou',
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
    image: msNexa,
    text: 'Maruti Suzuki Nexa',
  },
  {
    carouselImages: [ngc1, ngc2, ngc3, ngc4, ngc5, ngc6, ngc7],
    image: NGC,
    text: 'NGC',
  },
  {
    carouselImages: [nokia1, nokia2],
    image: Nokia,
    text: 'Nokia',
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
    image: Oriflame,
    text: 'Oriflame',
  },
  {
    carouselImages: [TvsRaider1, TvsRaider2],
    image: TvsRaider,
    text: 'TVS Raider',
  },
  {
    carouselImages: [
      RedTape2,
      RedTape3,
      RedTape4,
      RedTape5,
      RedTape6,
      RedTape7,
      RedTape8,
    ],
    image: RedTape,
    text: 'Red Tape',
  },
  {
    carouselImages: [reebok1, reebok2, reebok3, reebok4],
    image: Reebok,
    text: 'Reebok',
  },
  {
    carouselImages: [
      RoyalStagOccasion1,
      RoyalStagOccasion2,
      RoyalStagOccasion3,
      RoyalStagOccasion4,
    ],
    image: RoyalStagOccasion,
    text: 'Royal Stag - Occasion',
  },
  {
    carouselImages: [rs2, rs3, rs4, rs5, rs6],
    image: RoyalStagT20,
    text: 'Royal Stag - T20',
  },
  {
    carouselImages: [rsMop1, rsMop2, rsMop3, rsMop4, rsMop5, rsMop6, rsMop7],
    image: RoyalStagMOP,
    text: 'Royal Stag - Mark Of Purity',
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
    image: Samsung,
    text: 'Samsung',
  },
  {
    carouselImages: [
      Somany1,
      Somany2,
      Somany3,
      Somany4,
      Somany5,
      Somany6,
      Somany7,
      Somany8,
      Somany9,
      Somany10,
      Somany11,
    ],
    image: Somany,
    text: 'Somany',
  },
  {
    carouselImages: [
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
    ],
    image: StellerDream,
    text: 'Stellars Dream',
  },
  {
    carouselImages: [sunday1, sunday2, sunday3, sunday4, sunday5],
    image: SundayDesign,
    text: 'Sunday Design',
  },
  {
    carouselImages: [teachers1, teachers2, teachers3, teachers4, teachers5],
    image: Teachers,
    text: 'Teachers',
  },
  {
    carouselImages: [
      viber1,
      viber2,
      viber3,
      viber4,
      viber5,
      viber6,
      viber7,
      viber8,
      viber9,
      viber10,
      viber11,
      viber12,
    ],
    image: Viber,
    text: 'Viber',
  },
  {
    carouselImages: [
      voltas1,
      voltas2,
      voltas3,
      voltas4,
      voltas5,
      voltas6,
      voltas7,
      voltas8,
      voltas9,
    ],
    image: Voltas,
    text: 'Voltas',
  },
  {carouselImages: [yamaha], image: Yamaha, text: 'Yamaha'},
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
    image: WhiteHat,
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

  const handleBackdropClick = e => {
    if (e.target.classList.contains ('backdrop')) {
      closeModal ();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white">
      <div className="mb-[100px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 px-[75px] max-sm:px-3 py-5">
        {stillShoot.map ((data, index) => (
          <div
            key={index}
            className="bg-[#ececec] mx-4 p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hidden group loadingChild"
            onClick={() => handleCardClick (index)}
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
                <h1>{data.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen &&
        <div
          className="top-[55%] left-2/4 z-50 fixed inset-0 flex justify-center items-center bg-[#ffffff8d] bg-opacity-50 w-screen h-screen -translate-x-2/4 -translate-y-2/4 overflow-y-scroll backdrop"
          onClick={handleBackdropClick}
        >
          <div
            className="bg-white p-8 w-4/5 md:w-2/3 h-auto"
            onClick={e => e.stopPropagation ()} // Prevent click from closing the modal when clicking inside
          >
            <button
              className="top-2 right-2 absolute text-black"
              onClick={closeModal}
            >
              X
            </button>
            <div className="h-full">
              <Slider {...settings}>
                {modalImages.map ((image, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center w-96 h-96 outline-none"
                  >
                    <img
                      src={image}
                      alt={`slide-${index}`}
                      className="w-full h-full object-contain outline-none"
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
