import {useParams} from 'react-router-dom';
import stillShootImages from './StillShootImageImports';
import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageSets = {
  1: [
    stillShootImages.adidas10,
    stillShootImages.adidas11,
    stillShootImages.adidas12,
    stillShootImages.adidas13,
    stillShootImages.adidas14,
    stillShootImages.adidas15,
    stillShootImages.adidas16,
    stillShootImages.adidas17,
    stillShootImages.adidas18,
    stillShootImages.adidas19,
    stillShootImages.adidas20,
    stillShootImages.adidas21,
    stillShootImages.adidas22,
    stillShootImages.adidas23,
  ],
  2: [
    stillShootImages.phillips1,
    stillShootImages.phillips7,
    stillShootImages.phillips11,
    stillShootImages.phillips22,
    stillShootImages.phillips12,
    stillShootImages.phillips26,
    stillShootImages.phillips2,
    stillShootImages.phillips3,
    stillShootImages.phillips4,
    stillShootImages.phillips5,
    stillShootImages.phillips6,
    stillShootImages.phillips8,
    stillShootImages.phillips9,
    stillShootImages.phillips10,
    stillShootImages.phillips13,
    stillShootImages.phillips14,
    stillShootImages.phillips15,
    stillShootImages.phillips16,
    stillShootImages.phillips17,
    stillShootImages.phillips18,
    stillShootImages.phillips19,
    stillShootImages.phillips20,
    stillShootImages.phillips21,
    stillShootImages.phillips24,
    stillShootImages.phillips25,
    stillShootImages.phillips27,
    stillShootImages.phillips28,
    stillShootImages.phillips29,
    stillShootImages.phillips30,
    stillShootImages.phillips31,
    stillShootImages.phillips32,
    stillShootImages.phillips33,
    stillShootImages.phillips23,
    stillShootImages.phillips34,
    stillShootImages.phillips35,
    stillShootImages.phillips36,
  ],
  3: [
    stillShootImages.suzuki1,
    stillShootImages.suzuki12,
    stillShootImages.suzuki13,
    stillShootImages.suzuki3,
    stillShootImages.suzuki4,
    stillShootImages.suzuki5,
    stillShootImages.suzuki6,
    stillShootImages.suzuki7,
    stillShootImages.suzuki8,
    stillShootImages.suzuki9,
    stillShootImages.suzuki10,
    stillShootImages.suzuki11,
    stillShootImages.suzuki14,
    stillShootImages.suzuki15,
    stillShootImages.suzuki2,
  ],
  4: [
    stillShootImages.suzukiSE5,
    stillShootImages.suzukiSE1,
    stillShootImages.suzukiSE2,
    stillShootImages.suzukiSE3,
    stillShootImages.suzukiSE4,
    stillShootImages.suzukiSE5,
  ],
  5: [
    stillShootImages.intruder1,
    stillShootImages.intruder2,
    stillShootImages.intruder3,
    stillShootImages.intruder4,
    stillShootImages.intruder5,
    stillShootImages.intruder6,
    stillShootImages.intruder7,
    stillShootImages.intruder8,
    stillShootImages.intruder9,
  ],
  6: [
    stillShootImages.TvsRaider2,
    stillShootImages.TvsRaider1,
    stillShootImages.TvsRaider3,
    stillShootImages.TvsRaider4,
    stillShootImages.TvsRaider5,
    stillShootImages.TvsRaider6,
  ],
  7: [
    stillShootImages.honda1,
    stillShootImages.honda2,
    stillShootImages.honda3,
    stillShootImages.honda4,
    stillShootImages.honda5,
    stillShootImages.honda6,
    stillShootImages.honda7,
  ],
  8: [
    stillShootImages.msNexa1,
    stillShootImages.msNexa2,
    stillShootImages.msNexa3,
    stillShootImages.msNexa4,
    stillShootImages.msNexa5,
    stillShootImages.msNexa6,
    stillShootImages.msNexa7,
  ],
  9: [
    stillShootImages.MS_COY1,
    stillShootImages.MS_COY2,
    stillShootImages.MS_COY3,
    stillShootImages.MS_COY4,
    stillShootImages.MS_COY5,
    stillShootImages.MS_COY6,
    stillShootImages.MS_COY7,
  ],
  10: [
    stillShootImages.eicher1,
    stillShootImages.eicher2,
    stillShootImages.eicher3,
    stillShootImages.eicher4,
    stillShootImages.eicher5,
    stillShootImages.eicher6,
    stillShootImages.eicher7,
    stillShootImages.eicher8,
    stillShootImages.eicher9,
    stillShootImages.eicher10,
    stillShootImages.eicher11,
  ],
  11: [
    stillShootImages.appolo1,
    stillShootImages.appolo2,
    stillShootImages.appolo3,
    stillShootImages.appolo4,
    stillShootImages.appolo5,
  ],
  12: [
    stillShootImages.BBC1,
    stillShootImages.BBC2,
    stillShootImages.BBC4,
    stillShootImages.BBC5,
    stillShootImages.BBC6,
    stillShootImages.BBC3,
    stillShootImages.BBC7,
  ],
  13: [
    stillShootImages.monster2,
    stillShootImages.monster3,
    stillShootImages.monster4,
  ],
  14: [
    stillShootImages.ngc1,
    stillShootImages.ngc2,
    stillShootImages.ngc3,
    stillShootImages.ngc4,
    stillShootImages.ngc5,
    stillShootImages.ngc6,
    stillShootImages.ngc7,
  ],
  15: [
    stillShootImages.Samsung1,
    stillShootImages.Samsung2,
    stillShootImages.Samsung3,
    stillShootImages.Samsung4,
    stillShootImages.Samsung5,
    stillShootImages.Samsung6,
    stillShootImages.Samsung7,
    stillShootImages.Samsung8,
    stillShootImages.Samsung9,
    stillShootImages.Samsung10,
    stillShootImages.Samsung11,
    stillShootImages.Samsung12,
    stillShootImages.Samsung13,
  ],
  16: [
    stillShootImages.nokia1,
    stillShootImages.nokia2,
    stillShootImages.nokia3,
    stillShootImages.nokia4,
  ],
  17: [
    stillShootImages.RedTape2,
    stillShootImages.RedTape7,
    stillShootImages.RedTape8,
    stillShootImages.RedTape3,
    stillShootImages.RedTape4,
    stillShootImages.RedTape5,
    stillShootImages.RedTape6,
  ],
  18: [
    stillShootImages.Cc1,
    stillShootImages.Cc2,
    stillShootImages.Cc3,
    stillShootImages.Cc4,
    stillShootImages.Cc5,
    stillShootImages.Cc6,
    stillShootImages.Cc7,
    stillShootImages.Cc8,
    stillShootImages.Cc9,
    stillShootImages.Cc10,
    stillShootImages.Cc11,
    stillShootImages.Cc12,
    stillShootImages.Cc13,
  ],
  19: [
    stillShootImages.dew1,
    stillShootImages.dew2,
    stillShootImages.dew3,
    stillShootImages.dew4,
  ],
  20: [
    stillShootImages.pepsi2,
    stillShootImages.pepsi1,
    stillShootImages.pepsi3,
    stillShootImages.pepsi4,
    stillShootImages.pepsi5,
    stillShootImages.pepsi6,
  ],
  21: [
    stillShootImages.asuka1,
    stillShootImages.asuka2,
    stillShootImages.asuka3,
    stillShootImages.asuka4,
    stillShootImages.asuka5,
    stillShootImages.asuka6,
    stillShootImages.asuka7,
    stillShootImages.asuka8,
  ],
  22: [
    stillShootImages.bacardi1,
    stillShootImages.bacardi2,
    stillShootImages.bacardi3,
    stillShootImages.bacardi4,
    stillShootImages.bacardi5,
    stillShootImages.bacardi6,
  ],
  23: [
    stillShootImages.gravity1,
    stillShootImages.gravity2,
    stillShootImages.gravity3,
    stillShootImages.gravity4,
  ],
  24: [
    stillShootImages.mahou1,
    stillShootImages.mahou2,
    stillShootImages.mahou3,
    stillShootImages.mahou4,
    stillShootImages.mahou5,
    stillShootImages.mahou6,
    stillShootImages.mahou7,
    stillShootImages.mahou8,
  ],
  25: [
    stillShootImages.oriflame1,
    stillShootImages.oriflame2,
    stillShootImages.oriflame3,
    stillShootImages.oriflame4,
    stillShootImages.oriflame5,
    stillShootImages.oriflame6,
    stillShootImages.oriflame7,
    stillShootImages.oriflame8,
    stillShootImages.oriflame9,
    stillShootImages.oriflame10,
    stillShootImages.oriflame11,
    stillShootImages.oriflame12,
    stillShootImages.oriflame13,
    stillShootImages.oriflame14,
  ],
  26: [
    stillShootImages.reebok1,
    stillShootImages.reebok2,
    stillShootImages.reebok3,
    stillShootImages.reebok4,
  ],
  27: [
    stillShootImages.rs1,
    stillShootImages.rs2,
    stillShootImages.rs3,
    stillShootImages.rs4,
    stillShootImages.rs5,
    stillShootImages.rs6,
  ],
  28: [
    stillShootImages.rsMop1,
    stillShootImages.rsMop2,
    stillShootImages.rsMop3,
    stillShootImages.rsMop4,
    stillShootImages.rsMop5,
    stillShootImages.rsMop6,
    stillShootImages.rsMop7,
  ],
  29: [
    stillShootImages.RoyalStagOccasion1,
    stillShootImages.RoyalStagOccasion2,
    stillShootImages.RoyalStagOccasion3,
    stillShootImages.RoyalStagOccasion4,
  ],
  30: [
    stillShootImages.stellers1,
    stillShootImages.stellers2,
    stillShootImages.stellers3,
    stillShootImages.stellers4,
    stillShootImages.stellers5,
    stillShootImages.stellers6,
    stillShootImages.stellers7,
    stillShootImages.stellers8,
    stillShootImages.stellers9,
    stillShootImages.stellers10,
    stillShootImages.stellers11,
    stillShootImages.stellers12,
    stillShootImages.stellers13,
    stillShootImages.stellers14,
    stillShootImages.stellers15,
    stillShootImages.stellers16,
    stillShootImages.stellers17,
    stillShootImages.stellers18,
  ],
  31: [
    stillShootImages.Somany1,
    stillShootImages.Somany2,
    stillShootImages.Somany3,
    stillShootImages.Somany4,
    stillShootImages.Somany5,
    stillShootImages.Somany7,
    stillShootImages.Somany8,
    stillShootImages.Somany9,
    stillShootImages.Somany10,
    stillShootImages.Somany11,
  ],
  32: [
    stillShootImages.sunday1,
    stillShootImages.sunday2,
    stillShootImages.sunday3,
    stillShootImages.sunday4,
    stillShootImages.sunday5,
  ],
  33: [
    stillShootImages.teachers1,
    stillShootImages.teachers2,
    stillShootImages.teachers3,
    stillShootImages.teachers4,
    stillShootImages.teachers5,
  ],
  34: [
    stillShootImages.whiteHat1,
    stillShootImages.whiteHat2,
    stillShootImages.whiteHat3,
    stillShootImages.whiteHat4,
    stillShootImages.whiteHat5,
    stillShootImages.whiteHat6,
    stillShootImages.whiteHat7,
    stillShootImages.whiteHat8,
    stillShootImages.whiteHat9,
    stillShootImages.whiteHat10,
    stillShootImages.whiteHat11,
    stillShootImages.whiteHat12,
    stillShootImages.whiteHat13,
    stillShootImages.whiteHat14,
    stillShootImages.whiteHat15,
    stillShootImages.whiteHat16,
  ],
};
function ImagePage () {
  const {id} = useParams ();
  const images = imageSets[Number (id)] || [];
  const [selectedIndex, setSelectedIndex] = useState (null);

  return (
    <div className="gap-0 columns-1 sm:columns-2 md:columns-3 lg:columns-3 bg-white bg-repeat-round">
      {images.length > 0
        ? <div>
            {images.map ((image, index) => (
              <img
                key={index}
                src={image}
                className="z-10 sticky cursor-pointer"
                alt={`Image ${index}`}
                onClick={() => setSelectedIndex (index)}
              />
            ))}
          </div>
        : <p>Image not found</p>}

      {selectedIndex !== null &&
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-90"
          onClick={() => setSelectedIndex (null)}
        >
          <div
            className="flex justify-center items-center w-full h-screen"
            onClick={e => e.stopPropagation ()}
          >
            <Swiper
              navigation
              pagination={{type: 'fraction'}}
              modules={[Navigation, Pagination]}
              initialSlide={selectedIndex}
              className="w-full h-full"
              style={{maxWidth: '100%', height: 'auto'}}
            >
              {images.map ((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="top-4 right-4 z-50 absolute text-white text-3xl"
              onClick={() => setSelectedIndex (null)}
            >
              x
            </button>
          </div>
        </div>}
    </div>
  );
}

export default ImagePage;
