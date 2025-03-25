import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { X } from 'lucide-react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImagePage() {
  const { id } = useParams();
  const location = useLocation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

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

  const openModal = (index) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  if (loading)
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error)
    return <div className="flex justify-center items-center min-h-screen text-red-600">Error: {error}</div>;
  if (!images.length)
    return <div className="flex justify-center items-center min-h-screen">No images found</div>;

  // React Slick settings
  const settings = {
    initialSlide: initialSlide,
    arrows: true,
    dots: true,
    infinite: false,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 font-bold text-gray-900 text-3xl">Gallery {id}</h1>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative hover:opacity-90 rounded-lg aspect-square overflow-hidden transition-opacity cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div 
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-90"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative flex justify-center items-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="top-4 right-4 z-50 absolute text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <div className="flex justify-center items-center w-full h-full">
              <Slider {...settings} className="w-full h-full">
                {images.map((image, index) => (
                  <div key={index} className="flex justify-center items-center p-4">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-auto max-w-[90vw] h-auto max-h-[90vh] object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePage;
