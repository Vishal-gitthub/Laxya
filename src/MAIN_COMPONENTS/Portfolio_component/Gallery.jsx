import stillShootImages from './StillShootImageImports';
import {useNavigate} from 'react-router-dom';

const images = [
  {id: 1, image: stillShootImages.adidas10, text: 'Adidas'},
  {id: 2, image: stillShootImages.phillips1, text: 'Phillips'},
  {id: 3, image: stillShootImages.suzuki1, text: 'Suzuki Gixxer'},
  {id: 4, image: stillShootImages.suzukiSE5, text: 'Suzuki SE 125'},
  {id: 5, image: stillShootImages.intruder1, text: 'Suzuki Intruder'},
  {id: 6, image: stillShootImages.TvsRaider2, text: 'TVS Raider'},
  {id: 7, image: stillShootImages.honda1, text: 'Honda City'},
  {id: 8, image: stillShootImages.msNexa1, text: 'Maruti Suzuki Nexa'},
  {id: 9, image: stillShootImages.MS_COY1, text: 'MS Colors Of Youth'},
  {id: 10, image: stillShootImages.eicher1, text: 'Eicher'},
  {id: 11, image: stillShootImages.appolo1, text: 'Appolo Tyres'},
  {id: 12, image: stillShootImages.BBC1, text: 'BBC'},
  {id: 13, image: stillShootImages.monster2, text: 'Monster Job'},
  {id: 14, image: stillShootImages.ngc1, text: 'NGC'},
  {id: 15, image: stillShootImages.Samsung1, text: 'Samsung'},
  {id: 16, image: stillShootImages.nokia1, text: 'Nokia'},
  {id: 17, image: stillShootImages.RedTape2, text: 'Red Tape'},
  {id: 18, image: stillShootImages.Cc1, text: 'Crimsoune Club'},
  {id: 19, image: stillShootImages.dew1, text: 'Mountain Dew'},
  {id: 20, image: stillShootImages.pepsi1, text: 'Pepsi'},
  {id: 21, image: stillShootImages.asuka1, text: 'Asuka'},
  {
    id: 22,
    image: stillShootImages.bacardi1,
    text: 'Bacardi',
  },
  {id: 23, image: stillShootImages.gravity1, text: 'Gravity'},
  {id: 24, image: stillShootImages.mahou1, text: 'Mahou'},
  {id: 25, image: stillShootImages.Oriflame, text: 'Oriflame'},
  {id: 26, image: stillShootImages.reebok1, text: 'Reebok'},
  {id: 27, image: stillShootImages.rs2, text: 'Royal Stag'},
  {id: 28, image: stillShootImages.oriflame1, text: 'Oriflame'},
  {
    id: 29,
    image: stillShootImages.rsMop1,
    text: 'Royal Stag - Mark Of Purity',
  },
  {id: 30, image: stillShootImages.stellers1, text: 'Stellers'},
  {id: 31, image: stillShootImages.Somany1, text: 'Somany'},
  {id: 32, image: stillShootImages.sunday1, text: 'Sunday Designs'},
  {id: 33, image: stillShootImages.teachers1, text: 'Teachers'},
  {id: 34, image: stillShootImages.whiteHat1, text: 'White Hat Jr'},
  {
    id: 29,
    image: stillShootImages.RoyalStagOccasion,
    text: 'royal Stag Occasion',
  },
];

const Gallery = () => {
  const navigate = useNavigate ();
  return (
    <div className="bg-white">
      <div className="gap-0 columns-1 sm:columns-1 md:columns-3 lg:columns-3 xl:columns-3">
        {images.map (img => (
          <div
            key={img.id}
            className="group relative w-full h-full"
            onClick={() => navigate (`/gallery/image/${img.id}`)}
          >
            <div>
              <img
                src={img.image} // Fix: Change img.src to img.image
                alt={img.text} // Fix: Change img.alt to img.text
                style={{cursor: 'pointer'}}
              />
            </div>
            <div className="group-hover:bg-black/40 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 rounded-sm w-full h-full font-bold text-gray-200 text-3xl scale-50 group-hover:scale-100 transition-all duration-300">
              {img.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
