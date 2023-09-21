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
  const Volunteer = volunteer.keys().map(image => ({ 'src': volunteer(image), 'width': '', 'height': '' }));

  const hobby = require.context('../../files/Hobby', true);
  const Hobby = hobby.keys().map(image => ({ 'src': hobby(image), 'width': '', 'height': '' }));

  const pet = require.context('../../files/Pet', true);
  const Pet = pet.keys().map(image => ({ 'src': pet(image), 'width': '', 'height': '' }));

  const travel = require.context('../../files/Travel', true);
  const Travel = travel.keys().map(image => ({ 'src': travel(image), 'width': '', 'height': '' }));

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

      <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={photo} loading='lazy' />
      </Modal>
    </section>
  )
}

export default Life
