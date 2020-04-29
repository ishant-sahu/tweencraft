import React from 'react';
import styles from './styles.scss';
import { videoFrame } from '../../images/index';

class Preview extends React.Component {
  componentDidMount() {
      if($){
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 700,
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
                            if ( !m || !m[1] ) return null;
                            return m[1];
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/', 
                        id: function(url) {        
                            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                            if ( !m || !m[5] ) return null;
                            return m[5];
                        },
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    }
                }
            }
        })
      }
  }

  render() {
    return (
      <div id='preview' className={styles.basic1}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className={styles.h2}>PREVIEW</h2>
              <div className={`p-heading p-large ${styles.pHeading}`}>
                Create your own stories with ease
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
    );
  }
}
export default Preview;
