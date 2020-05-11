import React from 'react';
import styles from './styles.scss';
class SamplesComponent extends React.Component {
  componentDidMount() {
    if ($ && window) {
      let videoSlider = new Swiper(`.videoList`, {
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

      $('.popup-youtube, .popup-vimeo').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: function(url) {
                var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                if (!m || !m[1]) return null;
                return m[1];
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1',
            },
            vimeo: {
              index: 'vimeo.com/',
              id: function(url) {
                var m = url.match(
                  /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
                );
                if (!m || !m[5]) return null;
                return m[5];
              },
              src: 'https://player.vimeo.com/video/%id%?autoplay=1',
            },
          },
        },
      });
    }
  }

  renderSliderContainer() {
    const { stories, heading } = this.props;
    return (
      <div className={styles.slider2} id={'videoList'}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className={styles.h2}>{heading}</h2>
              <div className={`p-heading p-large ${styles.pHeading}`}>
                Target the right customers for your business with the help of
                Tweencraft's patented segmentation technology
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className={styles.sliderContainer}>
                <div
                  className={`swiper-container video-slider ${styles.swiperContainer} videoList`}
                >
                  <div className='swiper-wrapper'>
                    {(stories || []).map((item) => {
                      return (
                        <div className='swiper-slide'>
                          <a
                            href={item.youtube_url}
                            className='popup-youtube'
                            data-effect='fadeIn'
                          >
                            <img
                              className='img-fluid'
                              src={item.thumbnail_path}
                              alt='alternative'
                            />
                            <span className={styles.videoPlayButton}>
                              <span></span>
                            </span>
                          </a>
                        </div>
                      );
                    })}
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
          <div className='form-group' style={{textAlign:'center'}}>
            <button
              type='submit'
              className={`form-control-submit-button order-button`}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id='preview' className={styles.videoList}>
        {this.renderSliderContainer()}
      </div>
    );
  }
}
export default SamplesComponent;
