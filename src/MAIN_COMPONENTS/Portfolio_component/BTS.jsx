const stillShoot = [
  {image: 'https://www.youtube.com/embed/CA36qfQy4TU'},
  {image: 'https://www.youtube.com/embed/xuhUO0w9TQk'},
  {image: 'https://www.youtube.com/embed/mxFYLDjBF4I'},
  {image: 'https://www.youtube.com/embed/eyEnG7j86DU'},
  {image: 'https://www.youtube.com/embed/SQuMfcQig30'},
  {image: 'https://www.youtube.com/embed/2FOwkG8gJZQ'},
];
export default function BTS () {
  return (
    <section className="bg-white pt-14">
      {/* <div className="mb-[30px] w-full">
        <img src={portfolioHeader} alt="" className="w-full object-cover" />
      </div> */}
      <div className="pt-28 pb-2 text-center">
        <h1 className="px-20 max-md:px-3 py-5 font-yeseva text-[7.6vw] max-sm:text-[32px] max-md:text-[60px] leading-none tracking-wide">
          <span className="pr-1 text-stroke text-transparent">
            BT
          </span>
          <span className="text-yellow">S</span>
        </h1>
        <p className="text-[#c0c0c7] text-2xl">
          Go behind the scenes with Laxya Production, where expert craftsmanship and stunning visuals bring every story to life.
          {' '}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-1 px-[75px] max-sm:px-3 py-5">
        {stillShoot.map ((data, index) => (
          <div
            key={index}
            className="group bg-[#ececec] mx- p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hiden loadingChild"
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
