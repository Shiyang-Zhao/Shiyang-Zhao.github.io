import uniqid from 'uniqid';
import Modal from 'react-modal';
import { Fade } from 'react-slideshow-image';
import { life } from '../../portfolio';
import './Life.css';
import './Slider.css';
import { useState } from 'react';

const Life = () => {
  const [photo, setPhotos] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const volunteer = require.context('../../files/Volunteer', true);
  const Volunteer = volunteer.keys().map(image => volunteer(image));

  const hobby = require.context('../../files/Hobby', true);
  const Hobby = hobby.keys().map(image => hobby(image));

  const pet = require.context('../../files/Pet', true);
  const Pet = pet.keys().map(image => pet(image));

  const travel = require.context('../../files/Travel', true);
  const Travel = travel.keys().map(image => travel(image));

  const life = [
    {
      name: 'Volunteer',
      photos: Volunteer
    },
    {
      name: 'Hobby',
      photos: Hobby
    },
    {
      name: 'Pet',
      photos: Pet
    },
    {
      name: 'Travel',
      photos: Travel
    }
  ];
  return (
    <section id='life' className='section life'>
      <h2 className='section__title'>Life</h2>

      <div className='life__grid'>
        {life.map((l) => (
          <div key={uniqid()} className='life__item'>
            <h3>{l.name}</h3>
            <Fade>
              {l.photos.map((photo) => (
                <div key={uniqid()} className='each-slide' onClick={() => { openModal(); setPhotos(photo) }}>
                  <img className='life__img' loading='lazy' src={photo} />
                </div>
              ))}
            </Fade>
          </div>
        ))}
      </div>

      <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={photo} />
      </Modal>
    </section>
  )
}

export default Life
