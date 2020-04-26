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
                        <h2>Download <span className="blue">Chimpoon</span></h2>
                        <p className={`p-large ${styles.pLarge}`}>Target the right customers for your business with the help of Chimpoon's patented technology and increase conversion figures in less than 2 weeks</p>
                        <a className={`btn-solid-lg ${styles.btnSolidLg}`} href="#your-link"><i className="fab fa-apple"></i>APP STORE</a>
                        <a className={`btn-solid-lg ${styles.btnSolidLg}`} href="#your-link"><i className="fab fa-google-play"></i>PLAY STORE</a>
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
