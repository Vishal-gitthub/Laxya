import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./MAIN_COMPONENTS/Navbar";
const Landing = React.lazy(() => import("./MAIN_COMPONENTS/Landing.jsx"));
const About = React.lazy(() => import("./MAIN_COMPONENTS/About.jsx"));
const Portfolio = React.lazy(() => import("./MAIN_COMPONENTS/Portfolio.jsx"));
const Blog = React.lazy(() => import("./MAIN_COMPONENTS/Blog.jsx"));
const Contact = React.lazy(() => import("./MAIN_COMPONENTS/Contact.jsx"));
const StillShoot = React.lazy(() =>
  import("./MAIN_COMPONENTS/Portfolio_component/StillShoot.jsx")
);
const FilmShoot = React.lazy(() =>
  import("./MAIN_COMPONENTS/Portfolio_component/FilmShoot.jsx")
);

import Footer from "./MAIN_COMPONENTS/Footer.jsx";
import Loader from "./MAIN_COMPONENTS/Loader.jsx";
import ScrollToTop from "./MAIN_COMPONENTS/ScrollToTop.jsx";
import CardModalWithCarousel from "./MAIN_COMPONENTS/Test.jsx";
import TalentRegistration from "./MAIN_COMPONENTS/TalentRegistration.jsx";

const App = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const location = useLocation(); // To detect route changes

  useEffect(() => {
    const images = Array.from(document.images);
    const promises = images.map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve(); // If image is already loaded
        } else {
          img.onload = resolve; // Resolve when image is loaded
          img.onerror = resolve; // Resolve if there's an error
        }
      });
    });

    // Wait until all image promises are resolved
    Promise.all(promises).then(() => {
      setIsContentLoaded(true); // All images have loaded, hide loader
    });
  }, [location]); // Depend on location to trigger on route change

  return (
    <main className="bg-black">
      <ScrollToTop />
      {isContentLoaded ? (
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/talent" element={<TalentRegistration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/still-shoot" element={<StillShoot />} />
            <Route path="/film-shoot" element={<FilmShoot />} />
            <Route path="/card" element={<CardModalWithCarousel />} />
            {/* <Route path="/test" element={<CardModalWithCarousel />} /> */}
          </Routes>
          <Footer />
        </Suspense>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default App;
