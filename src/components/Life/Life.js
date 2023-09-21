import './Life.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { arrayMoveMutable } from "array-move";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from './Photo';

const Life = () => {
  const [photo, setPhoto] = useState();
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function openModal() {
    setModelIsOpen(true);
  }

  function closeModal() {
    setModelIsOpen(false);
  }

  const volunteer = require.context('../../files/Volunteer', true);
  const Volunteer = volunteer.keys().map(image => {
    const src = volunteer(image);
    const width = 4;
    const height = 3;
    console.log({ src, width, height })
    return { src, width, height };
  });

  const hobby = require.context('../../files/Hobby', true);
  const Hobby = hobby.keys().map(image => {
    const src = hobby(image);
    const width = 4;
    const height = 3;
    return { src, width, height };
  });

  const pet = require.context('../../files/Pet', true);
  const Pet = pet.keys().map(image => {
    const src = pet(image)
    const width = 4;
    const height = 3;
    return { src, width, height };
  });

  const travel = require.context('../../files/Travel', true);
  const Travel = travel.keys().map(image => {
    const src = travel(image);
    const width = 4;
    const height = 3;
    return { src, width, height };
  });

  const [activeSection, setActiveSection] = useState(Volunteer);

  const SortablePhoto = SortableElement(item => <Photo {...item} />);
  const SortableGallery = SortableContainer(() => (
    <Gallery photos={activeSection} renderImage={props => <SortablePhoto {...props} />} />
  ));

  const switchSection = (section) => {
    setActiveSection(section);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    arrayMoveMutable(activeSection, oldIndex, newIndex);
  };

  // const getSection = (section) => {
  //   let data, Data;
  //   if (section === 'Volunteer') {
  //     data = require.context('../../files/Volunteer', true);

  //   } else if (section === 'Hobby') {
  //     data = require.context('../../files/Hobby', true);

  //   } else if (section === 'Pet') {
  //     data = require.context('../../files/Pet', true);

  //   } else if (section === 'Travel') {
  //     data = require.context('../../files/Travel', true);
  //   }
  //   Data = data.keys().map(image => data(image));
  //   return Data;
  // }

  // const [activeSection, setActiveSection] = useState(getSection('Volunteer'));

  // const switchSection = (section) => {
  //   setActiveSection(getSection(section));
  // };

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
        {/* {life.map((l) => (
          <div key={uniqid()} className='life__item'>
            <h3>{l.name}</h3>
            <Fade>
              {l.photos.map((photo) => (
                <div key={uniqid()} className='each-slide' onClick={() => { setPhoto(photo); openModal() }}>
                  <img className='life__img' loading='lazy' src={photo} />
                </div>
              ))}
            </Fade>
          </div>
        ))} */}

        {/* <div className='life__images'>
          {activeSection.map((photo) => (
            <div key={uniqid()} onClick={() => { setPhoto(photo); openModal() }}>
              <img src={photo} loading='lazy' />
            </div>
          ))}
        </div> */}
        <SortableGallery activeSection={activeSection} onSortEnd={onSortEnd} axis={"xy"} />
      </div>

      <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={photo} loading='lazy' />
      </Modal>
    </section>
  )
}

export default Life
