import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardModalWithCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState (false);
  const [modalImages, setModalImages] = useState ([]);

  const card1Images = [
    'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vTVfP.img?w=749&h=421&m=6&x=359&y=56&s=109&d=109',
    'https://www.bing.com/th?id=OADD2.7765345794768_1S70LE3ENHQWUO317O&pid=21.2&c=16&roil=0&roit=0.0255&roir=1&roib=0.9761&w=612&h=304&dynsize=1&qlt=90',
    '/path/to/image3.jpg',
  ];

  const card2Images = [
    'https://th.bing.com/th?id=ORMS.60e46e243c836fa4e5982dfdd927e1eb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.8999999761581421&p=0',
    'https://th.bing.com/th?id=ORMS.60e46e243c836fa4e5982dfdd927e1eb&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.8999999761581421&p=0',
    '/path/to/image6.jpg',
  ];

  const handleCardClick = card => {
    if (card === 1) {
      setModalImages (card1Images);
    } else if (card === 2) {
      setModalImages (card2Images);
    }
    setIsModalOpen (true);
  };

  const closeModal = () => {
    setIsModalOpen (false);
    setModalImages ([]);
  };

  const handleBackdropClick = e => {
    if (e.target.classList.contains ('backdrop')) {
      closeModal ();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div className="flex">
        <div
          className="bg-gray-200 m-4 p-4 card"
          onClick={() => handleCardClick (1)}
        >
          <h2>Card 1</h2>
        </div>
        <div
          className="bg-gray-200 m-4 p-4 card"
          onClick={() => handleCardClick (2)}
        >
          <h2>Card 2</h2>
        </div>
      </div>

      {isModalOpen &&
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop"
          onClick={handleBackdropClick}
        >
          <div
            className="bg-white p-8 w-3/4 md:w-1/2"
            onClick={e => e.stopPropagation ()} // Prevent click from closing the modal when clicking inside
          >
            <button
              className="top-2 right-2 absolute text-black"
              onClick={closeModal}
            >
              X
            </button>
            <Slider {...settings}>
              {modalImages.map ((image, index) => (
                <div key={index}>
                  <img src={image} alt={`slide-${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>}
    </div>
  );
};

export default CardModalWithCarousel;
