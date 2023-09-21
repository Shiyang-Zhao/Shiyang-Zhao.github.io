import uniqid from 'uniqid';
import Modal from 'react-modal';
import { Fade } from 'react-slideshow-image';
import './Life.css';
import './Slider.css';
import { useState } from 'react';

const Life = () => {
  const [photo, setPhoto] = useState();
  const [photos, setPhotos] = useState([]);
  const [modal1IsOpen, setModel1IsOpen] = useState(false);
  const [modal2IsOpen, setModel2IsOpen] = useState(false);

  function openModal1() {
    setModel1IsOpen(true);
  }

  function closeModal1() {
    setModel1IsOpen(false);
  }

  function openModal2() {
    setModel2IsOpen(true);
  }

  function closeModal2() {
    setModel2IsOpen(false);
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
            <h3 onClick={() => { setPhotos(l.photos); openModal2(); }}>{l.name}</h3>
            <Fade>
              {l.photos.map((photo) => (
                <div key={uniqid()} className='each-slide' onClick={() => { setPhoto(photo); openModal1() }}>
                  <img className='life__img' loading='lazy' src={photo} />
                </div>
              ))}
            </Fade>
          </div>
        ))}
      </div>

      <Modal className='modal1' isOpen={modal1IsOpen} onRequestClose={closeModal1}>
        <img src={photo} />
      </Modal>

      <Modal className='modal2' isOpen={modal2IsOpen} onRequestClose={closeModal2}>
        {photos.map((photo) => (
          <img className='modal2-image' loading='lazy' src={photo} />
        ))}
      </Modal>
    </section>
  )
}

export default Life
