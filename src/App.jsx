import React, {Suspense} from 'react';
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

import ModalWithCarousel
  from './MAIN_COMPONENTS/Landing-page-components/Test.jsx';

const App = () => {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-screen h-screen">
            <div className="loader" />
          </div>
        }
      >
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

    </main>
  );
};

export default App;
