import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function ImagePage() {
  const { id } = useParams();
  const location = useLocation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (location.state?.images) {
      setImages(location.state.images);
      setLoading(false);
      return;
    }

    fetch(`https://gallery.laxya.net/wp-json/custom/v1/galleries/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch gallery images');
        return response.json();
      })
      .then(data => {
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, location.state]);

  if (loading) return <div className="py-28 text-center">Loading...</div>;
  if (error) return <div className="py-28 text-center">Error: {error}</div>;
  if (!images.length) return <div className="py-28 text-center">No images found</div>;

  return (
    <div className="gap-0 columns-1 sm:columns-2 md:columns-3 lg:columns-3 bg-white bg-repeat-round pt-28">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="z-10 sticky cursor-pointer"
          alt={`Gallery item ${index}`}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
{selectedIndex !== null && (
  <div
    className="z-50 fixed inset-0 flex justify-center items-center bg-white"
    onClick={() => setSelectedIndex(null)}
  >
    <div 
      onClick={(e) => e.stopPropagation()} 
      className="relative flex justify-center items-center w-full h-full"
    >
      <Swiper
        modules={[Navigation]}
        navigation
        initialSlide={selectedIndex}
        className="w-full max-w-[90vw] h-full max-h-[90vh]" 
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={image} 
              alt={`Gallery item ${index}`} 
              className="max-w-full max-h-full object-contain galleryImage" // Ensure image is fully visible
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="top-4 right-4 absolute text-black hover:text-yellow text-8xl transition-all duration-300"
        onClick={() => setSelectedIndex(null)}
      >
        &times;
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default ImagePage;
