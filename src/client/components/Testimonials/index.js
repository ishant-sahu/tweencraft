import React from 'react';
import styles from './styles.scss';
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6
} from '../../images/index';

class Testimonials extends React.Component {
  componentDidMount() {
    if ($) {
      let cardSlider = new Swiper('.card-slider', {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        loop: true,
        navigation: {
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          // when window is <= 992px
          992: {
            slidesPerView: 2
          },
          // when window is <= 768px
          768: {
            slidesPerView: 1
          }
        }
      });
    }
  }

  render() {
    return (
      <div className={styles.slider1}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className={styles.sliderContainer}>
                <div className={`swiper-container ${styles.swiperContainer} card-slider`}>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial1}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial2}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial1}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial1}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial1}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className={styles.card}>
                        <img
                          className={styles.cardImage}
                          src={testimonial1}
                          alt='alternative'
                        />
                        <div className={styles.cardBody}>
                          <p className='testimonial-text'>
                            I just finished my trial period and was so amazed
                            with the support and results that I purchased Chimpoon.
                          </p>
                          <p className='testimonial-author'>
                            Jude Thorn - Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
                  <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials;
