import React from 'react';
import styles from './styles.scss';
import {
    download
} from '../../images/index';

class Download extends React.Component {
  render() {
    return (
        <div className={styles.basic4}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-5">
                    <div className={styles.textContainer}>
                        <h2>Download <span className="blue">Tweencraft</span></h2>
                        <p className={`p-large ${styles.pLarge}`}>Create beautiful animations and share with the world.</p>
                        {/* <a className={`btn-solid-lg ${styles.btnSolidLg}`} href="#your-link"><i className="fab fa-apple"></i>APP STORE</a> */}
                        <a className={`btn-solid-lg ${styles.btnSolidLg}`} href="https://play.google.com/store/apps/details?id=com.kk.chimpoon"><i className="fab fa-google-play" style={{marginRight: '7px'}}></i>PLAY STORE</a>
                    </div> 
                </div>
                <div className="col-lg-6 col-xl-7">
                    <div className={styles.imageContainer}>
                        <img className="img-fluid" src={download} alt="alternative" />
                    </div> 
                </div>
            </div>
        </div> 
    </div>
    
    );
  }
}
export default Download;
