import React from 'react';
import styles from './styles.scss';
import {
  screenShot1,
  screenShot2,
  screenShot3,
  screenShot4,
  screenShot5,
  screenShot6,
  screenShot7,
  screenShot8,
  screenShot9,
  screenShot10,
} from '../../images/index';

class ScreenShots extends React.Component {
  componentDidMount() {
    if ($) {
      let imageSlider = new Swiper('.image-slider', {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 3,
        breakpoints: {
          // when window is <= 380px
          380: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window is <= 516px
          516: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window is <= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window is <= 992px
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window is <= 1200px
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      });

      $('.popup-link').magnificPopup({
        removalDelay: 300,
        type: 'image',
        callbacks: {
          beforeOpen: function() {
            this.st.image.markup = this.st.image.markup.replace(
              'mfp-figure',
              'mfp-figure ' + this.st.el.attr('data-effect')
            );
          },
          beforeClose: function() {
            $('.mfp-figure').addClass('fadeOut');
          },
        },
        gallery: {
          enabled: true, //enable gallery mode
        },
      });
    }
  }

  render() {
    return (
      <div className={styles.slider2} id='screens'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
              <h2 className={styles.h2}>ScreenShots</h2>

            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className={styles.sliderContainer}>
                <div
                  className={`swiper-container image-slider ${styles.swiperContainer}`}
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <a
                        href={screenShot1}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot1}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot2}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot2}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot3}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot3}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot4}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot4}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot5}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot5}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot6}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot6}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot7}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot7}
                          alt='alternative'
                        />
                      </a>
                    </div>

                    <div className='swiper-slide'>
                      <a
                        href={screenShot8}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot8}
                          alt='alternative'
                        />
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a
                        href={screenShot9}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot9}
                          alt='alternative'
                        />
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a
                        href={screenShot10}
                        className='popup-link'
                        data-effect='fadeIn'
                      >
                        <img
                          className='img-fluid'
                          src={screenShot10}
                          alt='alternative'
                        />
                      </a>
                    </div>
                  </div>

                  <div
                    className={`swiper-button-next ${styles.swiperButtonNext}`}
                  ></div>
                  <div
                    className={`swiper-button-prev ${styles.swiperButtonPrev}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ScreenShots;
