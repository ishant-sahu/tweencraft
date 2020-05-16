import React from 'react';
import styles from './styles.scss';
import { processPc, processMobile } from '../../images/';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
class HowItWorksComponent extends React.Component {
  render() {
    return (
      <div id="how-it-works" className={`${styles.howitworks}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>HOW IT WORKS</h2>
              <div className={styles.imageContainer}>
                <BrowserView>
                  <img src={processPc} />
                </BrowserView>
                <MobileView>
                  <img src={processMobile} />
                </MobileView>
              </div>
            </div>
          </div>
          {/* <div className='form-group'>
          <Link to='/order-now' style={{ textDecoration: 'none' }}>
            <button
              type='submit'
              className={`form-control-submit-button order-button`}
            >
              ORDER NOW
            </button>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default HowItWorksComponent;
