import {useState, useEffect} from 'react';

export default function BTS () {
  const [videos, setVideos] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (
    () => {
      const fetchFilmShootVideos = async () => {
        try {
          const response = await fetch (
            'https://gallery.laxya.net/wp-json/custom/v1/videos'
          );
          if (!response.ok) {
            throw new Error ('Failed to fetch videos');
          }
          const data = await response.json ();
          setVideos (data.bts || []);
          setLoading (false);
        } catch (err) {
          setError (err.message);
          setLoading (false);
        }
      };

      fetchFilmShootVideos ();
    },
    [videos]
  );

  if (loading) {
    return (
      <section className="bg-white pt-14">
        <div className="flex justify-center items-center h-[400px]">
          <p>Loading videos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white pt-14">
        <div className="flex justify-center items-center h-[400px]">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pt-6">
      <div className="pt-16 pb-2 text-center">
        <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
          BTS
        </h1>
        <p className="text-[#c0c0c7] text-2xl">
          Go behind the scenes with Laxya Production, where expert craftsmanship and stunning visuals bring every story to life.
        </p>
      </div>

      {videos.length > 0
        ? <div className="flex flex-wrap justify-center items-center gap-1 px-[75px] max-sm:px-3 py-5">
            {videos.map ((video, index) => (
              <div
                key={`${video.post_id}-${index}`}
                className="group bg-[#ececec] mx- p-[7px] w-full sm:w-[300px] lg:w-[45%] h-[400px] overflow-hidden loadingChild"
              >
                <div className="w-full h-full group-hover:scale-95 transition-all duration-500">
                  <iframe
                    className="w-full h-full"
                    src={video.embed_url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        : <div className="flex justify-center items-center h-[200px]">
            <p>No bts videos available yet.</p>
          </div>}
    </section>
  );
}
