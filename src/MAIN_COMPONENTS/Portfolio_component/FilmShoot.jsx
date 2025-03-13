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
      {/* <div className="mb-[30px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div> */}
      <div className="flex flex-wrap justify-center items-center gap-5 px-[75px] max-sm:px-3 py-5">
        {stillShoot.map ((data, index) => (
          <div
            key={index}
            className="group bg-[#ececec] mx-4 p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hiden loadingChild"
          >
            <div className="w-full h-full group-hover:scale-95 transition-all duration-500">
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
