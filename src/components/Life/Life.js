import uniqid from 'uniqid'
import { Fade } from 'react-slideshow-image';
import { life } from '../../portfolio'
import './Life.css'
import './Slider.css'

const Life = () => {
  return (
    <section id='life' className='section life'>
      <h2 className='section__title'>Life</h2>

      <div className='life__grid'>
        {life.map((l) => (
          <div key={uniqid()} className='life__item'>
            <h3>{l.name}</h3>
            <Fade>
              {l.photos.map((photo) => (
                <div key={uniqid()} className='each-slide'>
                  <img className='life__img' src={photo} />
                </div>
              ))}
            </Fade>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Life
