import React from 'react';
import styles from './styles.scss';
import characters from '../../images/characters';
class Characters extends React.Component {
  componentDidMount() {
    if ($) {
      let cardSlider = new Swiper('.character-slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev ',
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          // when window is <= 992px
          992: {
            slidesPerView: 2,
          },
          // when window is <= 768px
          768: {
            slidesPerView: 1,
          },
        },
      });
    }
  }

  render() {
    return (
      <div className={styles.characters} id='characters'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className={styles.h2}>{'CHOOSE CHARACTERS'}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className={styles.sliderContainer}>
                <div
                  className={`swiper-container ${styles.swiperContainer} character-slider`}
                >
                  <div className='swiper-wrapper'>
                    {(characters || []).map((item, i) => {
                      return (
                        <div className='swiper-slide' key={i}>
                          <div className={styles.card}>
                            <div className='form-control-radio-group'>
                              <input
                                id={`option${i}`}
                                name={`option${i}`}
                                type='checkbox'
                              />
                              <label
                                htmlFor={`option${i}`}
                                className={styles.labelText}
                              >
                                <img
                                  className={styles.cardImage}
                                  src={`${item.image}`}
                                  alt={item.name}
                                />
                                <div className={styles.cardBody}>
                                  <p className={`testimonial-author ${styles.nameText}`}>
                                    {item.name}
                                  </p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className={`swiper-button-prev ${styles.swiperButtonPrev}`}
                  ></div>
                  <div
                    className={`swiper-button-next ${styles.swiperButtonNext}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 offset-lg-4'>
                <div className='form-group'>
                  <button type='submit' className='form-control-submit-button'>
                    NEXT
                  </button>
                </div>
              </div>
        </div>
      </div>
    );
  }
}
export default Characters;
