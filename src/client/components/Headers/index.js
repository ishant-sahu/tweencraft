import React from 'react';
import styles from './styles.scss';
import { videoFrame } from '../../images/index';
import { Link } from 'react-router-dom';
class Headers extends React.Component {
  componentDidMount() {
    if ($ && window) {
      $('#js-rotating').Morphext({
        animation: 'fadeIn',
        separator: ',',
        speed: 2000,
        complete: function() {},
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

  render() {
    return (
      <header id='header' className={`${styles.header}`}>
        <div className={`${styles.headerContent}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className={`${styles.textContainer}`}>
                  <h2 className={`${styles.h1}`}>
                    ORDER YOUR VIDEOS NOW
                    <br />{' '}
                    {/* <span className={styles.jsRotating} id='js-rotating'>
                      NO ANIMATION SKILL REQUIRED, TOUCH AND MOVE BODY, MAKE
                      YOUR VOICE CARTOONY, CREATE YOUR VIDEOS IN MINUTES
                    </span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className={styles.imageContainer}>
                  <div className={styles.videoWrapper}>
                    <a
                      className='popup-youtube'
                      href='https://www.youtube.com/watch?v=uzC3bKg_zxo'
                      data-effect='fadeIn'
                    >
                      <img
                        className='img-fluid'
                        src={videoFrame}
                        alt='alternative'
                      />
                      <span className={styles.videoPlayButton}>
                        <span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Headers;
