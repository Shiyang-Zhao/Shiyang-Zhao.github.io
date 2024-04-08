import './Life.css';
import React, { useState, useMemo, useEffect } from 'react';

const Life = () => {
  // Preparing the image contexts
  const imageContexts = useMemo(() => ({
    volunteer: require.context('../../files/Volunteer', true, /\.(webp)$/),
    hobby: require.context('../../files/Hobby', true, /\.(webp)$/),
    pet: require.context('../../files/Pet', true, /\.(webp)$/),
    trip: require.context('../../files/Trip', true, /\.(webp)$/),
  }), []);

  // State to manage the currently active section and animation
  const [selectedSection, setSelectedSection] = useState('volunteer');
  const [animate, setAnimate] = useState(false);

  // New state to manage preloaded images
  const [preloadedImages, setPreloadedImages] = useState({});

  // Preloading images on initial load
  useEffect(() => {
    const preloadImages = {};
    Object.keys(imageContexts).forEach(section => {
      preloadImages[section] = imageContexts[section].keys().map(key => {
        const url = imageContexts[section](key);
        const image = new Image();
        image.src = url;
        return { src: url };
      });
    });
    setPreloadedImages(preloadImages);
  }, [imageContexts]);

  // Switching sections with animation reset
  const switchSection = (sectionName) => {
    setAnimate(false); // Reset animation before switching
    setTimeout(() => {
      setSelectedSection(sectionName);
      setAnimate(true); // Trigger animation after switching
    }, 100); // Slight delay to ensure smooth transition
  };

  // Getting active images from preloaded state
  const activeImages = preloadedImages[selectedSection] || [];

  return (
    <section id="life" className="section life">
      <h2 className="section__title">Life</h2>
      <div className="nav__bar">
        {Object.keys(imageContexts).map(section => (
          <button
            key={section}
            className={selectedSection === section ? 'selected nav__bar__btn' : 'nav__bar__btn'}
            onClick={() => switchSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="life__grid">
        {activeImages.length > 0 ? activeImages.map((image, index) => (
          <div key={index} className="life__images">
            <img src={image.src} alt="" loading="lazy" className={`life__image ${animate ? 'animate' : ''}`} />
          </div>
        )) : <div>Loading...</div>} {/* Show a loading message if images are not yet loaded */}
      </div>
    </section>
  );
};

export default Life;
