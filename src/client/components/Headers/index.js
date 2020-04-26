import React from 'react';
import styles from './styles.scss';
import {headerIphone} from  '../../images/index';

class Headers extends React.Component {
    componentDidMount(){
        if($) {
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
              <div className='col-lg-6'>
                <div className={`${styles.textContainer }`}>
                  <h1 className={`${styles.h1}`}>
                    MOBILE APP <br />
                    FOR{' '}
                    <span className={styles.jsRotating} id="js-rotating">DESIGNERS, MARKETERS, DEVELOPERS</span>
                  </h1>
                  <p className={`p-large ${styles.pLarge}`}>
                  Chimpoon is one of the easiest and feature packed marketing
                    automation apps in the market. Download it today!
                  </p>
                  <a className={`btn-solid-lg page-scroll ${styles.btnSolidLg}`} href='#your-link'>
                    <i className='fab fa-apple'></i>APP STORE
                  </a>
                  <a className={`btn-solid-lg page-scroll ${styles.btnSolidLg}`}  href='#your-link'>
                    <i className='fab fa-google-play'></i>PLAY STORE
                  </a>
                </div>
              </div>
              <div className='col-lg-6'>
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
