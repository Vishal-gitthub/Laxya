import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ModalWithCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
            <button
              onClick={closeModal}
              className="top-2 right-2 absolute text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="https://via.placeholder.com/800x400?text=Slide+1"
                  alt="Slide 1"
                  className="rounded w-full"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/800x400?text=Slide+2"
                  alt="Slide 2"
                  className="rounded w-full"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/800x400?text=Slide+3"
                  alt="Slide 3"
                  className="rounded w-full"
                />
              </div>
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWithCarousel;
