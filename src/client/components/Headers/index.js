import React from 'react';
import styles from './styles.scss';
import {headerIphone, qrCode} from  '../../images/index';

class Headers extends React.Component {
    componentDidMount(){
        if($ && window) {
            $("#js-rotating").Morphext({
                animation: "fadeIn",
                separator: ",",
                speed: 2000,
                complete: function () {
                }
            });
        }
    }

    render(){
        return  <header id='header' className={`${styles.header}`}>
        <div className={`${styles.headerContent}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className={`${styles.textContainer }`}>
                  <h2 className={`${styles.h1}`}>
                    CREATE YOUR OWN CARTOON VIDEOS<br />
                    {' '}
                    <span className={styles.jsRotating} id="js-rotating">NO ANIMATION SKILL REQUIRED, TOUCH AND MOVE BODY, MAKE YOUR VOICE CARTOONY,
                    CREATE YOUR VIDEOS IN MINUTES</span>
                  </h2>
                  <p className={`p-large ${styles.pLarge}`}>
                  A cartoon video maker editor. Give wings to your creativity.
                  </p>
                  {/* <a className={`btn-solid-lg page-scroll ${styles.btnSolidLg}`} href='#your-link'>
                    <i className='fab fa-apple'></i>APP STORE
                  </a> */}
                  <a className={`btn-solid-lg page-scroll ${styles.btnSolidLg}`}  href='https://play.google.com/store/apps/details?id=com.kk.chimpoon'>
                    <i className='fab fa-google-play' style={{marginRight:'7px'}}></i>DOWNLOAD NOW
                  </a>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className={styles.imageContainer}>
                  <img
                    className='img-fluid'
                    src={headerIphone}
                    alt='alternative'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    }
}
export default Headers;
