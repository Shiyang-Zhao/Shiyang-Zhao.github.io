import uniqid from 'uniqid';
import Modal from 'react-modal';
import { Fade, Slide } from 'react-slideshow-image';
import './Life.css';
import './Slider.css';
import { useState } from 'react';

import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

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
  const Volunteer = volunteer.keys().map(image => volunteer(image));

  const hobby = require.context('../../files/Hobby', true);
  const Hobby = hobby.keys().map(image => hobby(image));

  const pet = require.context('../../files/Pet', true);
  const Pet = pet.keys().map(image => pet(image));

  const travel = require.context('../../files/Travel', true);
  const Travel = travel.keys().map(image => travel(image));


  const [activeSection, setActiveSection] = useState(Volunteer);

  const switchSection = (section) => {
    setActiveSection(section);
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

        <div className='life__images'>
          {activeSection.map((photo) => (
            <div key={uniqid()} onClick={() => { setPhoto(photo); openModal() }}>
              <img src={photo} loading='lazy' />
            </div>
          ))}
        </div>



      </div>

      <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={photo} loading='lazy' />
      </Modal>
    </section>
  )
}

export default Life
