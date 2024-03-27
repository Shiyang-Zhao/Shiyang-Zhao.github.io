import './Life.css';
import React, { useState, useMemo, useCallback } from 'react';

const Life = () => {
  // Using useMemo to load all image contexts only once
  const imageContexts = useMemo(() => ({
    volunteer: require.context('../../files/Volunteer', true),
    hobby: require.context('../../files/Hobby', true),
    pet: require.context('../../files/Pet', true),
    travel: require.context('../../files/Travel', true),
  }), []);

  // Helper function to create image array from a context
  const createImageArray = (context) => {
    return context.keys().map(key => ({ src: context(key) }));
  };

  // State to manage the currently active section
  const [selectedSection, setSelectedSection] = useState('volunteer');

  // Get active images based on the selected section
  const activeImages = useMemo(() => createImageArray(imageContexts[selectedSection]), [imageContexts, selectedSection]);

  const switchSection = useCallback((sectionName) => {
    setSelectedSection(sectionName);
  });

  return (
    <section id='life' className='section life'>
      <h2 className='section__title'>Life</h2>
      <div className='nav__bar'>
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
      <div className='life__grid'>
        {activeImages.map((image, index) => (
          <div key={index} className="life__images">
            <img src={image.src} alt="" loading="lazy" className="life__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Life;
