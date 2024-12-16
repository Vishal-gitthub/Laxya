import React from 'react';

import adidas from '../../Images/portfolio_image/stillShoots/adidas.webp';
import appoloTyres
  from '../../Images/portfolio_image/stillShoots/appoloTyres.webp';
import bacardi from '../../Images/portfolio_image/stillShoots/bacardi.webp';
import bbc from '../../Images/portfolio_image/stillShoots/gixxer.webp';
import Franklin from '../../Images/portfolio_image/stillShoots/franklin.webp';
import Eicher from '../../Images/portfolio_image/stillShoots/eicher.webp';
import Dew from '../../Images/portfolio_image/stillShoots/dew.webp';
import Gravity from '../../Images/portfolio_image/stillShoots/gravity.webp';
import Honda from '../../Images/portfolio_image/stillShoots/honda-city.webp';
import ImperialBlue
  from '../../Images/portfolio_image/stillShoots/imperial-blue.webp';
import MonsterJob
  from '../../Images/portfolio_image/stillShoots/monsterJob.webp';
import Mahou from '../../Images/portfolio_image/stillShoots/mahou.webp';
import msNexa from '../../Images/portfolio_image/stillShoots/ms-nexa.webp';
import NGC from '../../Images/portfolio_image/stillShoots/ngc.webp';
import Nokia from '../../Images/portfolio_image/stillShoots/nokia.webp';
import Oriflame from '../../Images/portfolio_image/stillShoots/oriflame.webp';
import TvsRaider from '../../Images/portfolio_image/stillShoots/raider.webp';
import RedTape from '../../Images/portfolio_image/stillShoots/red-tape.webp';
import Reebok from '../../Images/portfolio_image/stillShoots/reebok.webp';
import RoyalStagOccasion
  from '../../Images/portfolio_image/stillShoots/royal-stag-occasion.webp';
import RoyalStagT20
  from '../../Images/portfolio_image/stillShoots/royal-stag-t20.webp';
import RoyalStagMOP
  from '../../Images/portfolio_image/stillShoots/royal-stag.webp';
import Samsung from '../../Images/portfolio_image/stillShoots/samsung.webp';
import Somany from '../../Images/portfolio_image/stillShoots/somany.webp';
import StellerDream
  from '../../Images/portfolio_image/stillShoots/steller-dream.webp';
import SundayDesign
  from '../../Images/portfolio_image/stillShoots/sunday design.webp';
import Teachers from '../../Images/portfolio_image/stillShoots/teachers.webp';
import Viber from '../../Images/portfolio_image/stillShoots/viber.webp';
import Voltas from '../../Images/portfolio_image/stillShoots/voltas.webp';
import Yamaha from '../../Images/portfolio_image/stillShoots/yamaha.webp';
import WhiteHat from '../../Images/portfolio_image/stillShoots/whiteHat.webp';
import portfolioHeader from '../../Images/portfolio_image/Portfolio.jpg';

const stillShoot = [
  {image: 'https://www.youtube.com/embed/CA36qfQy4TU'},
  {image: 'https://www.youtube.com/embed/xuhUO0w9TQk'},
  {image: 'https://www.youtube.com/embed/mxFYLDjBF4I'},
  {image: 'https://www.youtube.com/embed/eyEnG7j86DU'},
  {image: 'https://www.youtube.com/embed/SQuMfcQig30'},
  {image: 'https://www.youtube.com/embed/2FOwkG8gJZQ'},
];
export default function FilmShoot () {
  return (
    <section className="bg-white">
      <div className="mb-[100px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 px-[75px] max-sm:px-3 py-5">
        {stillShoot.map ((data, index) => (
          <div
            key={index}
            className="bg-[#ececec] mx-4 p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hiden group loadingChild"
          >
            <div className="group-hover:scale-95 w-full h-full transition-all duration-500">
              <iframe
                className="w-full h-full"
                src={data.image}
                title="KFC | IDCA, Men&#39;s Video, Yeh sunte nahi, sunaate hain!, KFC Kshamata, Motion Static"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
