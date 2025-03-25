import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Gallery = () => {
  const navigate = useNavigate ();
  const [galleries, setGalleries] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (() => {
    fetch ('https://gallery.laxya.net/wp-json/custom/v1/galleries')
      .then (response => {
        if (!response.ok) throw new Error ('Failed to fetch galleries');
        return response.json ();
      })
      .then (data => {
        setGalleries (data);
        console.log (data);
        setLoading (false);
      })
      .catch (err => {
        setError (err.message);
        setLoading (false);
      });
  }, []);

  if (loading) return <div className="py-28 text-center">Loading...</div>;
  if (error) return <div className="py-28 text-center">Error: {error}</div>;

  return (
    <div className="bg-white">
      <div className="pt-28 pb-2 text-center">
        <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
          Projects gallery
        </h1>
        <p className="text-[#c0c0c7] text-2xl">
          Here are some of the clients we&apos;ve worked with.
        </p>
      </div>
      <div className="gap-0 columns-1 sm:columns-1 md:columns-3 lg:columns-3 xl:columns-3">
        {galleries.map ((gallery, index) => (
          <ddiv
            key={index}
            className="group relative w-full h-full"
            onClick={() =>
              navigate (`/still-shoot/${gallery.title}`, {
                state: {images: gallery.images},
              })}
          >
            <div>
              <img
                src={gallery.images[0]}
                alt={gallery.title}
                style={{cursor: 'pointer'}}
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center group-hover:bg-black/40 opacity-0 group-hover:opacity-100 rounded-sm w-full h-full font-bold text-gray-200 text-3xl uppercase scale-50 group-hover:scale-100 transition-all duration-300">
              {gallery.title}
            </div>
          </ddiv>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
