import React, {Suspense, useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './MAIN_COMPONENTS/Navbar';
const Landing = React.lazy (() => import ('./MAIN_COMPONENTS/Landing.jsx'));
const About = React.lazy (() => import ('./MAIN_COMPONENTS/About.jsx'));
const Portfolio = React.lazy (() => import ('./MAIN_COMPONENTS/Portfolio.jsx'));
const Blog = React.lazy (() => import ('./MAIN_COMPONENTS/Blog.jsx'));
const Contact = React.lazy (() => import ('./MAIN_COMPONENTS/Contact.jsx'));
const StillShoot = React.lazy (() =>
  import ('./MAIN_COMPONENTS/Portfolio_component/StillShoot.jsx')
);
const FilmShoot = React.lazy (() =>
  import ('./MAIN_COMPONENTS/Portfolio_component/FilmShoot.jsx')
);

import Footer from './MAIN_COMPONENTS/Footer.jsx';

// import ModalWithCarousel
//   from './MAIN_COMPONENTS/Landing-page-components/Test.jsx';

import Loader from './MAIN_COMPONENTS/Loader.jsx';
import ScrollToTop from './MAIN_COMPONENTS/ScrollToTop.jsx';
const App = () => {
  const [isContentLoaded, setIsContentLoaded] = useState (false);
  useEffect (() => {
    const images = Array.from (document.images);
    const promises = images.map (img => {
      return new Promise (resolve => {
        if (img.complete) {
          resolve ();
        } else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    });
    Promise.all (promises).then (() => setIsContentLoaded (true));
  }, []);
  return (
    <main>

      <ScrollToTop />
      {isContentLoaded
        ? <Suspense fallback={<Loader />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path='/test' element={<ModalWithCarousel />} /> */}
              <Route path="/still-shoot" element={<StillShoot />} />
              <Route path="/film-shoot" element={<FilmShoot />} />
            </Routes>
            <Footer />
          </Suspense>
        : <Loader />};

    </main>
  );
};

export default App;
