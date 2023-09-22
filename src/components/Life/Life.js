import './Life.css';
import uniqid from 'uniqid'
import React, { useEffect, useState, useMemo } from 'react';
import { arrayMoveMutable } from "array-move";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from './Photo';

const Life = () => {
  const createImageArray = (context) => {
    return context.keys().map(image => {
      const img = new Image();
      const src = context(image);
      img.src = src;
      img.loading = 'lazy';
      return {
        src,
        width: img.width,
        height: img.height
      };
    });
  };


  const volunteerContext = require.context('../../files/Volunteer', true);
  const volunteer = useMemo(() => createImageArray(volunteerContext), []);

  const hobbyContext = require.context('../../files/Hobby', true);
  const hobby = useMemo(() => createImageArray(hobbyContext), []);

  const petContext = require.context('../../files/Pet', true);
  const pet = useMemo(() => createImageArray(petContext), []);

  const travelContext = require.context('../../files/Travel', true);
  const travel = useMemo(() => createImageArray(travelContext), []);

  useEffect(() => {
    Promise.all([volunteer, hobby, pet, travel])
  }, [volunteerContext, hobbyContext, petContext, travelContext]);

  const [activeSection, setActiveSection] = useState(volunteer);
  const [selectedSection, setSelectedSection] = useState('volunteer');

  const SortablePhoto = SortableElement(photo => <Photo {...photo} />);
  const SortableGallery = SortableContainer(({ activeSection }) => (
    <Gallery photos={activeSection} renderImage={props => <SortablePhoto {...props} />} />
  ));

  const switchSection = (activeSection, selectedSection) => {
    setActiveSection(activeSection);
    setSelectedSection(selectedSection);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    arrayMoveMutable(activeSection, oldIndex, newIndex);
  };

  return (
    <section id='life' className='section life'>
      <h2 className='section__title'>Life</h2>
      <div className='nav__bar'>
        {['volunteer', 'hobby', 'pet', 'travel'].map(section => (
          <button
            className={selectedSection === section ? 'selected nav__bar__btn' : 'nav__bar__btn'}
            key={uniqid()}
            onClick={() => switchSection(eval(section), section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      <div className='life__grid'>
        <div className='life__images'>
          <SortableGallery activeSection={activeSection} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
      </div>
    </section>
  )
}

export default Life;
