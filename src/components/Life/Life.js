import './Life.css';
import { useState } from 'react';
import { arrayMoveMutable } from "array-move";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from './Photo';

const Life = () => {

  const volunteer = require.context('../../files/Volunteer', true);
  const Volunteer = volunteer.keys().map(image => {
    const img = new Image();
    img.src = volunteer(image);
    return {
      src: volunteer(image),
      width: img.width,
      height: img.height
    };
  });

  const hobby = require.context('../../files/Hobby', true);
  const Hobby = hobby.keys().map(image => {
    const img = new Image();
    img.src = hobby(image);
    return {
      src: hobby(image),
      width: img.width,
      height: img.height
    };
  });

  const pet = require.context('../../files/Pet', true);
  const Pet = pet.keys().map(image => {
    const img = new Image();
    img.src = pet(image);
    return {
      src: pet(image),
      width: img.width,
      height: img.height
    };
  });

  const travel = require.context('../../files/Travel', true);
  const Travel = travel.keys().map(image => {
    const img = new Image();
    img.src = travel(image);
    return {
      src: travel(image),
      width: img.width,
      height: img.height
    };
  });

  const [activeSection, setActiveSection] = useState(Volunteer);

  const SortablePhoto = SortableElement(photo => <Photo {...photo} />);
  const SortableGallery = SortableContainer(({ activeSection }) => (
    <Gallery photos={activeSection} renderImage={props => <SortablePhoto {...props} />} />
  ));

  const switchSection = (selectedSection) => {
    setActiveSection(selectedSection);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    arrayMoveMutable(activeSection, oldIndex, newIndex);
  };

  return (
    <section id='life' className='section life'>
      <h2 className='section__title'>Life</h2>
      <div className='nav__bar'>
        <button onClick={() => switchSection(Volunteer)}>Volunteer</button>
        <button onClick={() => switchSection(Hobby)}>Hobby</button>
        <button onClick={() => switchSection(Pet)}>Pet</button>
        <button onClick={() => switchSection(Travel)}>Travel</button>
      </div>

      <div className='life__grid'>
        {/* <div className='life__images'>
          {activeSection.map((photo) => (
            <div key={uniqid()} onClick={() => { setPhoto(photo); openModal() }}>
              <img src={photo} loading='lazy' />
            </div>
          ))}
        </div> */}
        <div className='life__images'>
          <SortableGallery activeSection={activeSection} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
      </div>
    </section>
  )
}

export default Life
